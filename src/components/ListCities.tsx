import { useState } from 'react';
import './ListCities.css';

interface ListCitiesProps {
    heading: string;
    cities: string[];
    onSelectItem: (city: string) => void;
}

function ListCities({cities, heading, onSelectItem}: ListCitiesProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    
    
    return <>
        <h1>{heading}</h1>
        {cities.length === 0 && <div className="alert alert-danger test">No cities found</div>}
        <ul className="list-group test">
            {cities.map((city, index) => 
            <li 
                className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                key={city} 
                onClick={() => {onSelectItem(city); setSelectedIndex(index)}} >
                {city}
            </li>)}
        </ul>
    </>
}

export default ListCities;