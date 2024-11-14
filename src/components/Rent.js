// // // import React, { useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import './Rent.css';
// // // import carImage2 from './images/car2.png'; 
// // // import carImage3 from './images/car3.png'; 
// // // import carImage4 from './images/car4.png';
// // // import carImage5 from './images/car5.png';
// // // import carImage6 from './images/car6.jpg';
// // // import carImage7 from './images/car7.png';
// // // import carImage8 from './images/car8.png';
// // // import carImage9 from './images/car9.png';

// // // function Rent() {
// // //     const [showDetails, setShowDetails] = useState([false, false, false, false]);

// // //     const toggleDetails = (index) => {
// // //         const newDetailsState = [...showDetails];
// // //         newDetailsState[index] = !newDetailsState[index];
// // //         setShowDetails(newDetailsState);
// // //     };

// // //     const cars = [
// // //         { id: 1, name: "Maruti Wagon R", image: carImage2, type: "Super Economy", prices: [6819, 8772, 12033], details: ["Manual", "Petrol", "2 Baggage", "4 Seater"] },
// // //         { id: 2, name: "Maruti Celerio", image: carImage3, type: "Super Economy", prices: [7155, 9108, 13005], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
// // //         { id: 3, name: "Maruti Baleno", image: carImage4, type: "Super Economy", prices: [7800, 10080, 13986], details: ["Automatic", "Petrol", "3 Baggage", "5 Seater"] },
// // //         { id: 4, name: "Maruti Swift Dzire", image: carImage5, type: "Compact", prices: [8136, 10725, 14958], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
// // //         { id: 5, name: "Ertiga", image:carImage6,type:"compact",prices:[7898,5462,78898],details:["Manual","Petrol","2 Baggage","7 Seater"]},
// // //         { id: 6, name: "Toyota Innova Crysta", image:carImage7,type:"MUV",prices:[13305,17511,24633],details:["Manual","Diesel","2 Baggage","7 Seater"]},
// // //         { id: 7, name: "Kia Carens", image:carImage8,type:"MUV",prices:[12225,15786,22633],details:["Manual","Diesel","2 Baggage","7 Seater"]},
// // //         { id: 8, name: "Mahindra XUV 300", image:carImage9,type:"Standard",prices:[12633,15511,23633],details:["Manual","Diesel","2 Baggage","7 Seater"]},
// // //     ];

// // //     return (
// // //         <div className="car-container">
// // //             {cars.map((car, index) => (
// // //                 <div key={car.id} className="car-card">
// // //                     <img src={car.image} alt={car.name} className="car-image" />
// // //                     <h2>{car.name}</h2>
// // //                     <p className="car-type">{car.type}</p>
// // //                     <div className="price-options">
// // //                         <div>120kms/day<br /><b>₹ {car.prices[0]}</b><br />405 Free kms</div>
// // //                         <div className="selected">300kms/day<br /><b>₹ {car.prices[1]}</b><br />1013 Free kms</div>
// // //                         <div>Unlimited<br /><b>₹ {car.prices[2]}</b><br />Unlimited kms</div>
// // //                     </div>
// // //                     {showDetails[index] && (
// // //                         <div className="details">
// // //                             <ul>
// // //                                 {car.details.map((detail, i) => (
// // //                                     <li key={i}>{detail}</li>
// // //                                 ))}
// // //                             </ul>
// // //                         </div>
// // //                     )}
                
// // //                     <div className="actions">
// // //                     <a 
// // //                         href="#" 
// // //                         className="view-details" 
// // //                         onClick={(event) => {
// // //                         event.preventDefault();
// // //                         toggleDetails(index);
// // //                     }}
// // //                     >
// // //                         {showDetails[index] ? "Hide Details" : "View Details"}
// // //                     </a>
// // //                     <Link to={`/car/${car.id}`} className="book-now">Book Now</Link>
// // //                     </div>

// // //                 </div>
// // //             ))}
// // //         </div>
        
        
// // //     );
// // // }

// // // export default Rent;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Rent.css';
// import carImage2 from './images/car2.png'; 
// import carImage3 from './images/car3.png'; 
// import carImage4 from './images/car4.png';
// import carImage5 from './images/car5.png';
// import carImage6 from './images/car6.jpg';
// import carImage7 from './images/car7.png';
// import carImage8 from './images/car8.png';
// import carImage9 from './images/car9.png';

// function Rent() {
//     const [showDetails, setShowDetails] = useState([false, false, false, false]);
//     const [selectedPriceOption, setSelectedPriceOption] = useState({});

//     const toggleDetails = (index) => {
//         const newDetailsState = [...showDetails];
//         newDetailsState[index] = !newDetailsState[index];
//         setShowDetails(newDetailsState);
//     };

//     const selectPriceOption = (carId, optionIndex) => {
//         setSelectedPriceOption(prev => ({ ...prev, [carId]: optionIndex }));
//     };

//     const cars = [
//         { id: 1, name: "Maruti Wagon R", image: carImage2, type: "Super Economy", prices: [6819, 8772, 12033], details: ["Manual", "Petrol", "2 Baggage", "4 Seater"] },
//         { id: 2, name: "Maruti Celerio", image: carImage3, type: "Super Economy", prices: [7155, 9108, 13005], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
//         { id: 3, name: "Maruti Baleno", image: carImage4, type: "Super Economy", prices: [7800, 10080, 13986], details: ["Automatic", "Petrol", "3 Baggage", "5 Seater"] },
//         { id: 4, name: "Maruti Swift Dzire", image: carImage5, type: "Compact", prices: [8136, 10725, 14958], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
//         { id: 5, name: "Ertiga", image: carImage6, type: "Compact", prices: [7898, 5462, 78898], details: ["Manual", "Petrol", "2 Baggage", "7 Seater"] },
//         { id: 6, name: "Toyota Innova Crysta", image: carImage7, type: "MUV", prices: [13305, 17511, 24633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
//         { id: 7, name: "Kia Carens", image: carImage8, type: "MUV", prices: [12225, 15786, 22633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
//         { id: 8, name: "Mahindra XUV 300", image: carImage9, type: "Standard", prices: [12633, 15511, 23633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
//     ];

//     return (
//         <div className="car-container">
//             {cars.map((car, index) => (
//                 <div key={car.id} className="car-card">
//                     <img src={car.image} alt={car.name} className="car-image" />
//                     <h2>{car.name}</h2>
//                     <p className="car-type">{car.type}</p>
//                     <div className="price-options">
//                         {car.prices.map((price, i) => (
//                             <div
//                                 key={i}
//                                 className={`price-option ${selectedPriceOption[car.id] === i ? 'selected' : ''}`}
//                                 onClick={() => selectPriceOption(car.id, i)}
//                             >
//                                 {i === 0 && "120kms/day"} {i === 1 && "300kms/day"} {i === 2 && "Unlimited"}
//                                 <br />
//                                 <b>₹ {price}</b>
//                                 <br />
//                                 {i === 0 ? "405 Free kms" : i === 1 ? "1013 Free kms" : "Unlimited kms"}
//                             </div>
//                         ))}
//                     </div>
//                     {showDetails[index] && (
//                         <div className="details">
//                             <ul>
//                                 {car.details.map((detail, i) => (
//                                     <li key={i}>{detail}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
                
//                     <div className="actions">
//                         <a 
//                             href="#" 
//                             className="view-details" 
//                             onClick={(event) => {
//                                 event.preventDefault();
//                                 toggleDetails(index);
//                             }}
//                         >
//                             {showDetails[index] ? "Hide Details" : "View Details"}
//                         </a>
//                         <Link to={`/car/${car.id}`} className="book-now">Book Now</Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Rent;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Rent.css';
// import carImage2 from './images/car2.png'; 
// import carImage3 from './images/car3.png'; 
// import carImage4 from './images/car4.png';
// import carImage5 from './images/car5.png';
// import carImage6 from './images/car6.jpg';
// import carImage7 from './images/car7.png';
// import carImage8 from './images/car8.png';
// import carImage9 from './images/car9.png';

// function Rent() {
//     const [showDetails, setShowDetails] = useState([false, false, false, false]);
//     const [selectedPriceOption, setSelectedPriceOption] = useState({});

//     const toggleDetails = (index) => {
//         const newDetailsState = [...showDetails];
//         newDetailsState[index] = !newDetailsState[index];
//         setShowDetails(newDetailsState);
//     };

//     const selectPriceOption = (carId, optionIndex) => {
//         setSelectedPriceOption(prev => ({ ...prev, [carId]: optionIndex }));
//     };

//     const cars = [
//         { id: 1, name: "Maruti Wagon R", image: carImage2, type: "Super Economy", prices: [6819, 8772, 12033], details: ["Manual", "Petrol", "2 Baggage", "4 Seater"] },
//         { id: 2, name: "Maruti Celerio", image: carImage3, type: "Super Economy", prices: [7155, 9108, 13005], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
//         { id: 3, name: "Maruti Baleno", image: carImage4, type: "Super Economy", prices: [7800, 10080, 13986], details: ["Automatic", "Petrol", "3 Baggage", "5 Seater"] },
//         { id: 4, name: "Maruti Swift Dzire", image: carImage5, type: "Compact", prices: [8136, 10725, 14958], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
//         { id: 5, name: "Ertiga", image: carImage6, type: "Compact", prices: [7898, 5462, 78898], details: ["Manual", "Petrol", "2 Baggage", "7 Seater"] },
//         { id: 6, name: "Toyota Innova Crysta", image: carImage7, type: "MUV", prices: [13305, 17511, 24633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
//         { id: 7, name: "Kia Carens", image: carImage8, type: "MUV", prices: [12225, 15786, 22633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
//         { id: 8, name: "Mahindra XUV 300", image: carImage9, type: "Standard", prices: [12633, 15511, 23633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
//     ];

//     return (
//         <div className="car-container">
//             {cars.map((car, index) => (
//                 <div key={car.id} className="car-card">
//                     <img src={car.image} alt={car.name} className="car-image" />
//                     <h2>{car.name}</h2>
//                     <p className="car-type">{car.type}</p>
//                     <div className="price-options">
//                         {car.prices.map((price, i) => (
//                             <div
//                                 key={i}
//                                 className={`price-option ${selectedPriceOption[car.id] === i ? 'selected' : ''}`}
//                                 onClick={() => selectPriceOption(car.id, i)}
//                             >
//                                 {i === 0 && "120kms/day"} {i === 1 && "300kms/day"} {i === 2 && "Unlimited"}
//                                 <br />
//                                 <b>₹ {price}</b>
//                                 <br />
//                                 {i === 0 ? "405 Free kms" : i === 1 ? "1013 Free kms" : "Unlimited kms"}
//                             </div>
//                         ))}
//                     </div>
//                     {showDetails[index] && (
//                         <div className="details">
//                             <ul>
//                                 {car.details.map((detail, i) => (
//                                     <li key={i}>{detail}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
                
//                     <div className="actions">
//                         <a 
//                             href="#" 
//                             className="view-details" 
//                             onClick={(event) => {
//                                 event.preventDefault();
//                                 toggleDetails(index);
//                             }}
//                         >
//                             {showDetails[index] ? "Hide Details" : "View Details"}
//                         </a>
//                         <Link 
//                             to={`/car/${car.id}`} 
//                             className={`book-now ${selectedPriceOption[car.id] !== undefined ? 'active' : ''}`}
//                         >
//                             Book Now
//                         </Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Rent;
// Rent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Rent.css';
import carImage2 from './images/car2.png';
import carImage3 from './images/car3.png';
import carImage4 from './images/car4.png';
import carImage5 from './images/car5.png';
import carImage6 from './images/car6.jpg';
import carImage7 from './images/car7.png';
import carImage8 from './images/car8.png';
import carImage9 from './images/car9.png';

function Rent() {
    const [showDetails, setShowDetails] = useState([false, false, false, false]);
    const [selectedPriceOption, setSelectedPriceOption] = useState({});

    const toggleDetails = (index) => {
        const newDetailsState = [...showDetails];
        newDetailsState[index] = !newDetailsState[index];
        setShowDetails(newDetailsState);
    };

    const selectPriceOption = (carId, optionIndex) => {
        setSelectedPriceOption(prev => ({ ...prev, [carId]: optionIndex }));
    };

    const cars = [
        { id: 1, name: "Maruti Wagon R", image: carImage2, type: "Super Economy", prices: [6819, 8772, 12033], details: ["Manual", "Petrol", "2 Baggage", "4 Seater"] },
        { id: 2, name: "Maruti Celerio", image: carImage3, type: "Super Economy", prices: [7155, 9108, 13005], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
        { id: 3, name: "Maruti Baleno", image: carImage4, type: "Super Economy", prices: [7800, 10080, 13986], details: ["Automatic", "Petrol", "3 Baggage", "5 Seater"] },
        { id: 4, name: "Maruti Swift Dzire", image: carImage5, type: "Compact", prices: [8136, 10725, 14958], details: ["Manual", "Diesel", "2 Baggage", "5 Seater"] },
        { id: 5, name: "Ertiga", image: carImage6, type: "Compact", prices: [7898, 5462, 78898], details: ["Manual", "Petrol", "2 Baggage", "7 Seater"] },
        { id: 6, name: "Toyota Innova Crysta", image: carImage7, type: "MUV", prices: [13305, 17511, 24633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
        { id: 7, name: "Kia Carens", image: carImage8, type: "MUV", prices: [12225, 15786, 22633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
        { id: 8, name: "Mahindra XUV 300", image: carImage9, type: "Standard", prices: [12633, 15511, 23633], details: ["Manual", "Diesel", "2 Baggage", "7 Seater"] },
    ];

    return (
        <div className="car-container">
            {cars.map((car, index) => (
                <div key={car.id} className="car-card">
                    <img src={car.image} alt={car.name} className="car-image" />
                    <h2>{car.name}</h2>
                    <p className="car-type">{car.type}</p>
                    <div className="price-options">
                        {car.prices.map((price, i) => (
                            <div
                                key={i}
                                className={`price-option ${selectedPriceOption[car.id] === i ? 'selected' : ''}`}
                                onClick={() => selectPriceOption(car.id, i)}
                            >
                                {i === 0 && "120kms/day"} {i === 1 && "300kms/day"} {i === 2 && "Unlimited"}
                                <br />
                                <b>₹ {price}</b>
                                <br />
                                {i === 0 ? "405 Free kms" : i === 1 ? "1013 Free kms" : "Unlimited kms"}
                            </div>
                        ))}
                    </div>
                    {showDetails[index] && (
                        <div className="details">
                            <ul>
                                {car.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="actions">
                        <a 
                            href="#" 
                            className="view-details" 
                            onClick={(event) => {
                                event.preventDefault();
                                toggleDetails(index);
                            }}
                        >
                            {showDetails[index] ? "Hide Details" : "View Details"}
                        </a>
                        <Link 
                            to={`/car/${car.id}?priceOption=${selectedPriceOption[car.id]}`}
                            className={`book-now ${selectedPriceOption[car.id] !== undefined ? 'active' : ''}`}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Rent;

