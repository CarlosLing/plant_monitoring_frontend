import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";
import { API_URL } from "../constants";

class NewSensorForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        variable: "",
        location: "",
        arduino_board: "",
        plant: "",
    }

    componentDidMount() {
        if (this.props.sensor) {
            const { pk, name, variable, location, arduino_board, plant } = this.props.sensor;
            this.setState({ pk: pk, name: name, variable });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createSensor = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/sensors`, this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            });
    };

    editSensor = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}/sensors/${this.state.pk}`, this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            });
    };

    defaultIfEmpty = (value) => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.createSensor}>
                <FormGroup>
                    <Label for="name">Sensor name: </Label>
                    <Input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        )
    };
}