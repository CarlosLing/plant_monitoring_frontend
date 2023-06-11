import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import NewSensorForm from "./NewSensorForm";

class NewSensorModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };
    render() {
        const create = this.props.create;
        var title = "Editing Sensor";
        var button = <Button color="primary" onClick={this.toggle}>Edit</Button>;
        if (create) {
            title = "Creating Sensor";
            button = <Button color="primary" onClick={this.toggle}>Create</Button>;
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewSensorForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            sensor={this.props.sensor}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewSensorModal;
