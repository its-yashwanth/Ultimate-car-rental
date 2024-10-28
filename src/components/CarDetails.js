import React from 'react';
import { useParams } from 'react-router-dom';
import carImage2 from './images/car2.png'; 
import carImage3 from './images/car3.png'; 
import carImage4 from './images/car4.png';
import carImage5 from './images/car5.png';

function CarDetails() {
    const { id } = useParams();
    
    const cars = [
        { id: "1", name: "Maruti Wagon R", image: carImage2, type: "Super Economy", prices: [6819, 8772, 12033], details: ["Manual", "Petrol", "2 Baggage", "4 Seater"] },
        { id: "2", name: "Maruti Celerio", image: carImage3, type: "Super Economy", prices: [7155, 9108, 13005], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
        { id: "3", name: "Maruti Baleno", image: carImage4, type: "Super Economy", prices: [7800, 10080, 13986], details: ["Automatic", "Petrol", "3 Baggage", "5 Seater"] },
        { id: "4", name: "Maruti Swift Dzire", image: carImage5, type: "Compact", prices: [8136, 10725, 14958], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
    ];
    
    const car = cars.find(car => car.id === id);

    if (!car) {
        return <h2>Car not found!</h2>;
    }

    return (
        <div className="car-details">
            <img src={car.image} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
            <p>{car.type}</p>
            <div className="price-options">
                <div>120kms/day<br /><b>₹ {car.prices[0]}</b><br />405 Free kms</div>
                <div>300kms/day<br /><b>₹ {car.prices[1]}</b><br />1013 Free kms</div>
                <div>Unlimited<br /><b>₹ {car.prices[2]}</b><br />Unlimited kms</div>
            </div>
            <ul>
                {car.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
}
export default CarDetails;
