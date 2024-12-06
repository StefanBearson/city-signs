import { useState } from "react";

import ListCities from "./components/ListCities";
import CitySign from "./components/CitySign";

function App() {
    const [displayCity, setDisplayCity] = useState("Vinslöv");
    
    const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const handleSelectItem = (city: string) => setDisplayCity(city);   
    
    return(
    <div className="center-items">
        <CitySign city={displayCity}/>
        <ListCities cities={items} heading="City Sign Gernerator" onSelectItem={handleSelectItem} />
    </div> 
    )
};

export default App;