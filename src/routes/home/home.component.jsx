import { useState, useEffect } from "react"

import axios from "axios";
import { API_URL } from "../../constants";

const HomeFunctional = () => {

    const [searchField, setSearchField] = useState("");
    const [sensors, setSensors] = useState([]);
    console.log(searchField)

    useEffect(() => {
        console.log("Fetch Tensors")
        axios.get(`${API_URL}/sensors`)
            .then(res => { setSensors(res.data) })
    }, []);


    const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    const filtered_sensors = sensors.filter(sensor => {
        return sensor.name.toLowerCase().includes(searchField)
    });

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

            {filtered_sensors.map(sensor => (
                <p key={sensor.id}> {sensor.name}</p>
            ))
            }
        </div >
    )
}

export default HomeFunctional