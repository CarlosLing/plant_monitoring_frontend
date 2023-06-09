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
            this.setState(this.props.sensor);
        }
    }

    onChange = (e) => {
        console.log(e);
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

    // TODO: map the form groups
    render() {
        return (
            <Form onSubmit={this.createSensor}>
                <FormGroup>
                    <Label for="name">Sensor name: </Label>
                    <Input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="variable">Variable: </Label>
                    <Input type="text" name="variable" value={this.state.variable} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="location">Location: </Label>
                    <Input type="text" name="location" value={this.state.location} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="arduino_board">Arduino Board: </Label>
                    <Input type="text" name="arduino_board" value={this.state.arduino_board} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="plant">Plant: </Label>
                    <Input type="text" name="plant" value={this.state.plant} onChange={this.onChange} />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        )
    };
}
export default NewSensorForm;