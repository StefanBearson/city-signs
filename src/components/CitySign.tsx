import "./CitySign.css";

interface CitySignProps {
    city: string;
    }

function CitySign({city}: CitySignProps) {
  
  return <div className="city-sign">{city}</div>;
}

export default CitySign;