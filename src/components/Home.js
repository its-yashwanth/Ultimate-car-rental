import car1 from './images/car1.png'
import './Home.css';
function Home()
{
    return(
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
    </section>
        </>
    )
}
export default Home