


import React, { useState } from 'react';
import './CarDetails.css';
import { useParams, useLocation } from 'react-router-dom';
import carImage2 from './images/car2.png';
import carImage3 from './images/car3.png';
import carImage4 from './images/car4.png';
import carImage5 from './images/car5.png';
import carImage6 from './images/car6.png';
import carImage7 from './images/car7.png';
import carImage8 from './images/car8.png';
import carImage9 from './images/car9.png';

function CarDetails() {
    const { id } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedPriceOption = parseInt(queryParams.get('priceOption'), 10);

    const cars = [
        { id: "1", name: "Maruti Wagon R", image: carImage2, type: "Super Economy", prices: [6819, 8772, 12033], details: ["Manual", "Petrol", "2 Baggage", "4 Seater"] },
        { id: "2", name: "Maruti Celerio", image: carImage3, type: "Super Economy", prices: [7155, 9108, 13005], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
        { id: "3", name: "Maruti Baleno", image: carImage4, type: "Super Economy", prices: [7800, 10080, 13986], details: ["Automatic", "Petrol", "3 Baggage", "5 Seater"] },
        { id: "4", name: "Maruti Swift Dzire", image: carImage5, type: "Compact", prices: [8136, 10725, 14958], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
        { id: "5", name: "Ertiga", image: carImage6, type: "Compact", prices: [7898, 5462, 78898], details: ["Manual", "Petrol", "2 Baggage", "7 Seater"] },
        { id: "6", name: "Toyota Innova Crysta", image: carImage7, type: "MUV", prices: [13305, 17511, 24633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
        { id: "7", name: "Kia Carens", image: carImage8, type: "MUV", prices: [12225, 15786, 22633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
        { id: "8", name: "Mahindra XUV 300", image: carImage9, type: "Standard", prices: [12633, 15511, 23633], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
    ];

    const car = cars.find(car => car.id === id);
    const [selectedPrice, setSelectedPrice] = useState(car ? car.prices[selectedPriceOption] : 0);

    if (!car) {
        return <h2>Car not found</h2>;
    }

    // GST calculation (assuming 18% GST for the example)
    const gst = (selectedPrice * 0.18).toFixed(2);
    const refundableDeposit = 3000;
    const totalAmount = (selectedPrice + parseFloat(gst) + refundableDeposit).toFixed(2);

    const handleProceed = () => {
        alert('Proceeding to payment with total amount: ₹' + totalAmount);

        setTimeout(() => {
            alert('Booking Successful! Thank you for choosing our service.');
        }, 500);
    };

    return (
        <div className="car-details-container">
            <div className="car-details">
                <img src={car.image} alt={car.name} className="car-details-image" />
                <h2>{car.name}</h2>
                <p className="car-type">{car.type}</p>
                <div className="details">
                    
                </div>
                <p className="extra-km-info">Extra kms will be charged at ₹7/km</p>
                <ul>
                        {car.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                </ul>
            </div>

            <div className="booking-summary">
                <h3>Booking Summary</h3>
                <div className="summary-item">
                    <span>Rental Charges</span>
                    <span>₹{selectedPrice}</span>
                </div>
                <div className="summary-item">
                    <span>GST</span>
                    <span>₹{gst}</span>
                </div>
                <div className="summary-item">
                    <span>Refundable Deposit</span>
                    <span>₹{refundableDeposit}</span>
                </div>

                <div className="add-ons">
                    <label>
                        <input type="checkbox" />
                        Luggage carrier (Subject to availability)
                    </label>
                    <label>
                        <input type="checkbox" />
                        Trip Protection Plan 
                    </label>
                </div>
                <div className="total-amount">
                    <span>Total Amount: </span>
                    <span>₹{totalAmount}</span>
                </div>
                <div>
                    <button className="proceed-button" onClick={handleProceed}>Book now</button>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;
