
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants';
import { useState, useEffect, Fragment } from 'react';
import { Button } from 'reactstrap';

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

    const [sensor, setSensor] = useState([]);
    const [reloadSensors, setReloadSensors] = useState(true);


    useEffect(() => {
        axios.get(`${API_URL}/sensors/${sensorId}`)
            .then(res => { setSensor(res.data) })
    }, [reloadSensors, sensorId]);

    const callbackReloadSensors = () => {
        setReloadSensors(!reloadSensors);
    }


    console.log(sensor);

    return (
        <Fragment>
            <h1>This is the page for sensor {sensor} </h1>
            <Button onClick={callbackReloadSensors}>Reload</Button>
        </Fragment>
    )

};

export default SensorDetail; 