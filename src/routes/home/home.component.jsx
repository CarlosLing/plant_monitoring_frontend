import { useState, useEffect } from "react"

import axios from "axios";
import { API_URL } from "../../constants";
import SensorTable from "../../components/functional/SensorTable/SensorTable.component"
import NewSensorForm from "../../components/functional/NewSensorForm/NewSensorForm.component";

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

    const callbackResloadSensors = () => {
        setReloadSensors(!reloadSensors);
    }



    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    // todo: modularize the search field
    return (
        <div>
            <h1>Home</h1>

            <input
                className={'SeachBox'}
                type='search'
                placeholder="Seach Sensors..."
                onChange={onSearchChange}
            />

            {sensorsFiltered.map(sensor => (
                <p key={sensor.id}> {sensor.name}</p>
            ))
            }
            <SensorTable sensors={sensorsFiltered} />

            Sample Form
            {/* Understand if this is the propper way to do this */}
            {/* <NewSensorModal callback={callback} setCallback={setCallback} /> */}
            <NewSensorForm reloadSensors={callbackResloadSensors} />
        </div >
    )
}

export default HomeFunctional