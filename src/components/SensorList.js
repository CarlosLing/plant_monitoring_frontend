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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sensors.map(sensor => (
                                <tr key={sensor.id}>
                                    <td>{sensor.name}</td>
                                    <td>{sensor.variable}</td>
                                    <td>{sensor.location}</td>
                                    <td align="center">
                                        <NewSensorModal
                                            create={false}
                                            sensor={sensor}
                                            resetState={this.props.resetState}
                                        /> &nbsp;&nbsp;
                                        <ConfirmRemovalModal
                                            pk={sensor.pk}
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
