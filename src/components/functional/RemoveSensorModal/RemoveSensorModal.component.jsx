import React from "react";
import axios from "axios";
import { Fragment, useState } from "react";
import { API_URL } from "../../../constants";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";

function RemoveSensorModal({ reloadSensors, sensorToEdit }) {
    const [modalOpen, setModalOpen] = useState(false);

    const setModalOpenTrue = () => {
        setModalOpen(true);
    };

    const setModalOpenFalse = () => {
        setModalOpen(false);
    };

    const deleteSensor = () => {
        axios.delete(API_URL + "/sensors/" + sensorToEdit.id).then(() => {
            reloadSensors();
            setModalOpenFalse();
        });
    };

    return (
        <Fragment>
            <Button color="danger" onClick={setModalOpenTrue}>
                Remove
            </Button>
            <Modal isOpen={modalOpen} toggle={setModalOpenFalse}>
                <ModalHeader toggle={setModalOpenFalse}>
                    Do you really wanna delete the sensor?
                </ModalHeader>

                <ModalFooter>
                    <Button type="button" onClick={setModalOpenFalse}>
                        Cancel
                    </Button>
                    <Button
                        type="button"
                        color="primary"
                        onClick={deleteSensor}
                    >
                        Yes
                    </Button>
                </ModalFooter>
            </Modal>
        </Fragment>

    );
}

export default RemoveSensorModal