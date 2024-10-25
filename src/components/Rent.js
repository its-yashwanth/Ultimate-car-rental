import React, { useState } from 'react';
import './Rent.css';
import carImage2 from './images/car2.png'; 
import carImage3 from './images/car3.png'; 
import carImage4 from './images/car4.png';
import carImage5 from './images/car5.png';



function Rent() {
    // State to handle toggle of details for each car
    const [showDetails, setShowDetails] = useState([false, false, false, false]);

    const toggleDetails = (index) => {
        // Toggle the specific car's details
        const newDetailsState = [...showDetails];
        newDetailsState[index] = !newDetailsState[index];
        setShowDetails(newDetailsState);
    };

    return (
        <div className="car-container">
            {/* Car 1 - Maruti Wagon R */}
            <div className="car-card">
                <img src={carImage2} alt="Maruti Wagon R" className="car-image" />
                <h2>Maruti Wagon R</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 6,819</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 8,772</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 12,033</b><br />Unlimited kms</div>
                </div>
                {showDetails[0] && (
                    <div className="details">
                                 <p><ul><li>Gear : Manual</li>
                        <li>Fuel type : Petrol</li>
                        <li>Storage : 2 Baggage</li>
                        <li>Capacity : 4 Seater</li>

                        </ul>
                        </p>
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(0)}>
                        {showDetails[0] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>

            {/* Car 2 - Maruti Celerio */}
            <div className="car-card">
                <img src={carImage3} alt="Maruti Celerio" className="car-image" />
                <h2>Maruti Celerio</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 7,155</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 9,108</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 13,005</b><br />Unlimited kms</div>
                </div>
                {showDetails[1] && (
                    <div className="details">
                                 <p><ul><li>Gear : Manual</li>
                        <li>Fuel type : Diesel</li>
                        <li>Storage : 2 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(1)}>
                        {showDetails[1] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>

            {/* Car 3 - Maruti Celerio (Automatic) */}
            <div className="car-card">
                <img src={carImage4} alt="Maruti Baleno" className="car-image" />
                <h2>Maruti Baleno</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 7,800</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,080</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 13,986</b><br />Unlimited kms</div>
                </div>
                {showDetails[2] && (
                    <div className="details">
                                 <p><ul><li>Gear : Automatic</li>
                        <li>Fuel type : Petrol</li>
                        <li>Storage : 3 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(2)}>
                        {showDetails[2] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>

            {/* Car 4 - Maruti Swift Dzire */}
            <div className="car-card">
                <img src={carImage5} alt="Maruti Swift Dzire" className="car-image" />
                <h2>Maruti Swift Dzire</h2>
                <p className="car-type">Compact</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 8,136</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,725</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 14,958</b><br />Unlimited kms</div>
                </div>
                {showDetails[3] && (
                    <div className="details">
                        <p><ul><li>Gear : Manual</li>
                        <li>Fuel type : Diesel</li>
                        <li>Storage : 2 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                        {/* <p><span>Manual  </span><span>Diesel  </span><span>2 Baggage</span><span>5 Seater</span></p> */}
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(3)}>
                        {showDetails[3] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage4} alt="Maruti Baleno" className="car-image" />
                <h2>Maruti Baleno</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 7,800</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,080</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 13,986</b><br />Unlimited kms</div>
                </div>
                {showDetails[2] && (
                    <div className="details">
                                 <p><ul><li>Gear : Automatic</li>
                        <li>Fuel type : Petrol</li>
                        <li>Storage : 3 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(2)}>
                        {showDetails[2] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage5} alt="Maruti Swift Dzire" className="car-image" />
                <h2>Maruti Swift Dzire</h2>
                <p className="car-type">Compact</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 8,136</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,725</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 14,958</b><br />Unlimited kms</div>
                </div>
                {showDetails[3] && (
                    <div className="details">
                        <p><ul><li>Gear : Manual</li>
                        <li>Fuel type : Diesel</li>
                        <li>Storage : 2 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                        {/* <p><span>Manual  </span><span>Diesel  </span><span>2 Baggage</span><span>5 Seater</span></p> */}
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(3)}>
                        {showDetails[3] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage4} alt="Maruti Baleno" className="car-image" />
                <h2>Maruti Baleno</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 7,800</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,080</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 13,986</b><br />Unlimited kms</div>
                </div>
                {showDetails[2] && (
                    <div className="details">
                                 <p><ul><li>Gear : Automatic</li>
                        <li>Fuel type : Petrol</li>
                        <li>Storage : 3 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(2)}>
                        {showDetails[2] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage5} alt="Maruti Swift Dzire" className="car-image" />
                <h2>Maruti Swift Dzire</h2>
                <p className="car-type">Compact</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 8,136</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,725</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 14,958</b><br />Unlimited kms</div>
                </div>
                {showDetails[3] && (
                    <div className="details">
                        <p><ul><li>Gear : Manual</li>
                        <li>Fuel type : Diesel</li>
                        <li>Storage : 2 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                        {/* <p><span>Manual  </span><span>Diesel  </span><span>2 Baggage</span><span>5 Seater</span></p> */}
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(3)}>
                        {showDetails[3] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage4} alt="Maruti Baleno" className="car-image" />
                <h2>Maruti Baleno</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 7,800</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,080</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 13,986</b><br />Unlimited kms</div>
                </div>
                {showDetails[2] && (
                    <div className="details">
                                 <p><ul><li>Gear : Automatic</li>
                        <li>Fuel type : Petrol</li>
                        <li>Storage : 3 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(2)}>
                        {showDetails[2] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage5} alt="Maruti Swift Dzire" className="car-image" />
                <h2>Maruti Swift Dzire</h2>
                <p className="car-type">Compact</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 8,136</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,725</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 14,958</b><br />Unlimited kms</div>
                </div>
                {showDetails[3] && (
                    <div className="details">
                        <p><ul><li>Gear : Manual</li>
                        <li>Fuel type : Diesel</li>
                        <li>Storage : 2 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                        {/* <p><span>Manual  </span><span>Diesel  </span><span>2 Baggage</span><span>5 Seater</span></p> */}
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(3)}>
                        {showDetails[3] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
            <div className="car-card">
                <img src={carImage4} alt="Maruti Baleno" className="car-image" />
                <h2>Maruti Baleno</h2>
                <p className="car-type">Super Economy</p>
                <div className="price-options">
                    <div>120kms/day<br /><b>₹ 7,800</b><br />405 Free kms</div>
                    <div className="selected">300kms/day<br /><b>₹ 10,080</b><br />1013 Free kms</div>
                    <div>Unlimited<br /><b>₹ 13,986</b><br />Unlimited kms</div>
                </div>
                {showDetails[2] && (
                    <div className="details">
                                 <p><ul><li>Gear : Automatic</li>
                        <li>Fuel type : Petrol</li>
                        <li>Storage : 3 Baggage</li>
                        <li>Capacity : 5 Seater</li>

                        </ul>
                        </p>
                        
                    </div>
                )}
                <div className="actions">
                    <a href="#" className="view-details" onClick={() => toggleDetails(2)}>
                        {showDetails[2] ? "Hide Details" : "View Details"}
                    </a>
                    <a href="#" className="book-now">Book Now</a>
                </div>
            </div>
        </div>
        
    );
}

export default Rent;
