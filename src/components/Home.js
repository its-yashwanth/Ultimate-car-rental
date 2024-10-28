import car1 from './images/car1.png';
import whitecar from './images/whitecar.png';
import Frame2 from './images/Frame2.png'
import './Home.css';
import BookingForm from './Homeform';

function Home() {
  return (
    <>
      <section id="Home">
        <div className="intro">
          <span className="heading">
            Find, book, and rent a car <span className="easily">Easily</span>
          </span>
          <span className="subheading">
            Experience ultimate convenience and choice with our
            <br />
            diverse fleet, competitive rates, and hassle-free rental
            <br />
            process tailored to fit your unique needs.
          </span>
        </div>
        <div id="introimage">
          <img id="intimg" src={car1} width="800" height="650" alt="Car rental" />
        </div>
      </section >
      <div className="booking-form-container">
        <BookingForm />
      </div>
      <section id="sectwo">
        <div className="pagetwo">
          <div className="whitecar"> <img id="intimg" src={whitecar} width="800" height="650" alt="Car rental" /></div>
          <div className="Whychooseus">
            <div className="choose">Why Choose Us</div>
            <div className="choose2">We offer the best experience with our rental deals</div>
            <div className="pt1"><div className="icons"><i className="fas fa-tags"></i></div><div className="descp"><span className="line1">Best price guaranteed</span><br></br>
              <span className="line2">Find a lower price?We'll refund you 100% of the difference</span></div></div>
            <div className="pt1"><div className="icons"><i className="fas fa-user-tie"></i></div><div className="descp"><span className="line1">Experience driver</span><br></br>
              <span className="line2">Don't have driver?Dont't worry,we have many experienced<br></br> driver for you</span></div></div>
            <div className="pt1"><div className="icons"><i className="fas fa-car"></i></div><div className="descp"><span className="line1">24 hour car delivery</span><br></br>
              <span className="line2">Book your car anytime and we will deliver it directly to you</span></div></div>
            <div className="pt1"><div className="icons"><i className="fas fa-headset"></i></div><div className="descp"><span className="line1">24/7 technical support</span><br></br>
              <span className="line2">Have a question ? Contact Rentcars support any time when<br></br>you have problem</span></div></div>
          </div>
        </div>
      </section>
      <section className="three">
        <div className="howit">HOW IT WORK</div>
        <div className="steps">Rent with following  steps</div>
        <div className="threesteps">
          <div className="locn">
            <div className="loclogo"><i class="fas fa-map-marker-alt loc1"></i>
            </div>
            <div className="chlocn">Choose Location</div>
            <div className="chlocn2">Choose your and find your best car</div>
          </div>
          <div className="locn">
            <div className="loclogo"><i class="fas fa-calendar-alt loc1"></i>
            </div>
            <div className="chlocn">Pick-up date</div>
            <div className="chlocn2">Select your pic up date and time to book your car</div>
          </div>
          <div className="locn">
            <div className="loclogo"><i class="fas fa-car loc1"></i>
            </div>
            <div className="chlocn">Book your car</div>
            <div className="chlocn2">Book your and we will deliver it directly to you</div>
          </div>
        </div>
        <div className='frame2'><img width="100%" height="100px" src={Frame2}></img></div>
      </section>
    </>
  );
}

export default Home;
