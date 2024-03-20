import React from "react";
import { useState } from "react";
import NewSensorForm from "../NewSensorForm/NewSensorForm.component";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

function NewSensorModal({ reloadSensors, createSensor, sensorToEdit }) {
    const [modalOpen, setModalOpen] = useState(false);

    var heading = "Modify Sensor";
    var buttonName = "Modify";
    if (createSensor) {
        heading = "Create New Sensor";
        buttonName = "Create New";
    };

    const setModalOpenTrue = () => {
        setModalOpen(true);
    };

    const setModalOpenFalse = () => {
        setModalOpen(false);
    };

    return (
        <div className="new-sensor-modal">
            <Button onClick={setModalOpenTrue} color="primary"> {buttonName} </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={setModalOpenFalse}>{heading}</ModalHeader>
                <ModalBody>
                    <NewSensorForm reloadSensors={reloadSensors} createSensor={createSensor} closeModal={setModalOpenFalse} sensorToEdit={sensorToEdit}></NewSensorForm>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default NewSensorModal;