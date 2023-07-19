import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API_URL } from "../../../constants";

/**
 * New Sensor Form Component. This component 
 * @param {Function} reloadSensors 
 * @returns 
 */
const NewSensorForm = ({ reloadSensors, sensorToEdit, createSensor, closeModal }) => {

    var placeholderSensor = {
        pk: 0,
        name: "",
        variable: "",
        location: "",
        arduino_board: "",
        plant: "",
    }
    if (!createSensor) {
        placeholderSensor = sensorToEdit
    };

    console.log(placeholderSensor)
    const [sensor, setSensor] = useState(placeholderSensor);

    const onSubmit = (e) => {
        e.preventDefault();
        if (createSensor) {
            axios.post(`${API_URL}/sensors`, sensor)
                .then(() => {
                    reloadSensors();
                    closeModal();
                });
        }
        else {
            axios.put(`${API_URL}/sensors/${sensor.id}`, sensor)
                .then(() => {
                    reloadSensors();
                    closeModal();
                });
        };
    };

    const onChange = (e) => {
        setSensor(sensor => ({ ...sensor, [e.target.name]: e.target.value }));
    };


    return (
        <div className="new-sensor-form">
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="name">Sensor name: </Label>
                    <Input type="text" name="name" value={sensor.name} onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="variable">Variable: </Label>
                    <Input type="text" name="variable" value={sensor.variable} onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="location">Location: </Label>
                    <Input type="text" name="location" value={sensor.location} onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="arduino_board">Arduino Board: </Label>
                    <Input type="text" name="arduino_board" value={sensor.arduino_board} onChange={onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="plant">Plant: </Label>
                    <Input type="text" name="plant" value={sensor.plant} onChange={onChange} />
                </FormGroup>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default NewSensorForm