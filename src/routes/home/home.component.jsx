import { useState, useEffect } from "react"

import axios from "axios";
import { API_URL } from "../../constants";

const HomeFunctional = () => {

    const [searchField, setSearchField] = useState("");
    const [sensors, setSensors] = useState([]);
    const [sensorsFiltered, setSensorsFiltered] = useState([]);


    useEffect(() => {
        console.log("Fetch Sensors");
        axios.get(`${API_URL}/sensors`)
            .then(res => { setSensors(res.data) })
    }, []);

    useEffect(() => {
        console.log("Filtering Sensors")
        const newFilteredSensors = sensors.filter(sensor => {
            return sensor.name.toLowerCase().includes(searchField)
        });
        setSensorsFiltered(newFilteredSensors);

    }, [sensors, searchField]);



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
        </div >
    )
}

export default HomeFunctional