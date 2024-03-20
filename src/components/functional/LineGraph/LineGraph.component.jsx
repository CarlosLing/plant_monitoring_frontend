import React, { useState } from 'react';
import axios from 'axios';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const LineGraph = () => {
  const [data_sensor, setData] = useState(null);

  const fetchData = async () => {
    var response;
    try {
      response = await axios.get('http://192.168.31.226:8000/sensors/api/sensors/7');
    } catch (error) {
      console.error('Error fetching data', error);
    }

    var dps = [];
    for (var i = 0; i < response.data.datapoints.length; i++) {
      dps.push({ x: new Date(response.data.datapoints[i].timestamp), y: response.data.datapoints[i].value });
    }
    console.log(dps)
    setData(dps)
  }

  const options = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Try Zooming and Panning"
    },
    axisX: {
      title: "Time",
      valueFormatString: "MM-DD HH" // Format time display on the x-axis
    },
    axisY: {
      title: "Relative Humidity [%]"
    },
    data: [{
      type: "area",
      xValueFormatString: "YYYY-MM-DD HH:mm:ss",
      dataPoints: data_sensor
    }]
  }

  return (
    <div>
      <button onClick={() => fetchData(500)}>Refresh Data</button>
      <CanvasJSChart options={options}
      />
    </div>
  );
}

export default LineGraph;
