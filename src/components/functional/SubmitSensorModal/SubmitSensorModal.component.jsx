import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import NewSensorForm from "../NewSensorForm/NewSensorForm.component";

const SubmitSensorModal = ({ callback, setCallback }) => {


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
                        callback={callback} setCallback={setCallback}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    );

};
export default SubmitSensorModal;
