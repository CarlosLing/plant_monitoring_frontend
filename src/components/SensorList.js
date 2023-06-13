import React, { Component } from "react";
import { Table } from "reactstrap";

import ConfirmRemovalModal from "./ConfirmRemovalModal";
import NewSensorModal from "./NewSensorModal";

class SensorList extends Component {
    render() {
        const sensors = this.props.sensors;
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Variable</th>
                            <th>Location</th>
                            <th>Arduino Board</th>
                            <th>Plant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sensors.map(sensor => (
                                <tr key={sensor.id}>
                                    <td>{sensor.name}</td>
                                    <td>{sensor.variable}</td>
                                    <td>{sensor.location}</td>
                                    <td>{sensor.arduino_board}</td>
                                    <td>{sensor.plant}</td>
                                    <td align="center">
                                        <NewSensorModal
                                            create={false}
                                            sensor={sensor}
                                            resetState={this.props.resetState}
                                        /> &nbsp;&nbsp;
                                        <ConfirmRemovalModal
                                            pk={sensor.id}
                                            resetState={this.props.resetState}
                                        />
                                    </td>
                                </tr>))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default SensorList;
