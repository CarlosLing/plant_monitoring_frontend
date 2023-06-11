import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SensorList from "./SensorList";
import NewSensorModal from "./NewSensorModal";

import axios from "axios";
import { API_URL } from "../constants";

class Home extends Component {
    state = {
        sensors: [],
    }

    componentDidMount() {
        this.resetState();
    }

    getSensors() {
        axios.get(`${API_URL}/sensors`)
            .then(res => {
                this.setState({
                    sensors: res.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    resetState() {
        this.getSensors();
    };
    render() {
        return (
            <div>
                <Container style={{ marginTop: "20px" }}>
                    <Row>
                        <Col>
                            <SensorList
                                sensors={this.state.sensors}
                                resetState={this.resetState} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NewSensorModal create={true} resetState={this.resetState} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );

    };
}

export default Home;