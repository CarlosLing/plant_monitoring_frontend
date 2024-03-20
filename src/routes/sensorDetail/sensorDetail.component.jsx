
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import { useState, useEffect, Fragment } from 'react';
// import { Line } from 'react-chartjs-2';

import axios from 'axios';


const SensorDetail = () => {
    /* The sensor detail will display: 
        - Basic info from the sensor: 
            - Location
            - Variable 
            - Arduino Board
        - Graph containing sensor data
        - A reload button to fetch data again from the server
            */

    const { sensorId } = useParams();

    const [sensorData, setSensorData] = useState({ datapoints: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/sensors/${sensorId}`);
                console.log(response);
                console.log(response.data);
                console.log(sensorData.datapoints.map(point => new Date(point.timestamp).toLocaleString()))
                setSensorData(response.data);
                console.log(sensorData);
            } catch (error) {
                console.error('Error fetching sensor data:', error);
            }
        };

        fetchData();
    }, [sensorId]); // Dependency array with URI ensures fetch is called when URI changes




    const chartData = {
        labels: sensorData.datapoints.map(point => new Date(point.timestamp).toLocaleString()),
        datasets: [
            {
                label: sensorData.variable,
                data: sensorData.datapoints.map(point => point.value),
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };


    return (
        <Fragment>
            <h2>Sensor Information</h2>
            <p>Name: {sensorData.name}</p>
            <p>Variable: {sensorData.variable}</p>
            <p>Location: {sensorData.location}</p>
            <p>Arduino Board: {sensorData.arduino_board}</p>
            <p>Plant: {sensorData.plant}</p>
            {/* <Line data={chartData} /> */}
        </Fragment>
    );

};

export default SensorDetail; 