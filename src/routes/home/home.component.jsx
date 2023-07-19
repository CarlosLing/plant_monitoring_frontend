import { useState, useEffect } from "react"
import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants";
import SensorTable from "../../components/functional/SensorTable/SensorTable.component"

const HomeFunctional = () => {

    const [searchField, setSearchField] = useState("");
    const [sensors, setSensors] = useState([]);
    const [sensorsFiltered, setSensorsFiltered] = useState([]);
    const [reloadSensors, setReloadSensors] = useState(true);


    useEffect(() => {
        axios.get(`${API_URL}/sensors`)
            .then(res => { setSensors(res.data) })
    }, [reloadSensors]);

    useEffect(() => {
        const newFilteredSensors = sensors.filter(sensor => {
            return sensor.name.toLowerCase().includes(searchField)
        });
        setSensorsFiltered(newFilteredSensors);

    }, [sensors, searchField]);

    const callbackReloadSensors = () => {
        setReloadSensors(!reloadSensors);
    }



    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    // todo: modularize the search field
    return (
        <Container style={{ marginTop: "20px" }}>
            <Row>
                <Col>
                    <h1>Sensor List</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <input
                        className={'SeachBox'}
                        type='search'
                        placeholder="Seach Sensors..."
                        onChange={onSearchChange}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <SensorTable sensors={sensorsFiltered} callbackReloadSensors={callbackReloadSensors} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <newSensorModal reloadSensors={callbackReloadSensors} createSensor={true} />
                </Col>
            </Row>
        </Container>

    )
}

export default HomeFunctional