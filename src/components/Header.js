import {Link} from 'react-router-dom'
import './Header.css';
function Header()
    {
        return(
            <>
            <div><nav>
      <ul className="logo">
        {/* You can import the image properly if it's local */}
        {/* <li><img src="https://www.mychoize.com/_next/static/media/MyChoize-logo.ef72a172.svg" width="150" height="300" alt="logo" /></li> */}
        <li><img id="mylogo" src={require('./images/image.png')} width="140" height="80" alt="logo" /></li>
      </ul>
      <ul className="menu">
        <li><Link to='/'><i className="fa fa-fw fa-home"></i> Home</Link></li>
        <li><Link to="Rent"><i className="fa fa-fw fa-dollar-sign"></i> Rent</Link></li>
        <li><Link to=""><i className="fa fa-fw fa-concierge-bell"></i> Services</Link></li>
        <li><Link to="Contact"><i className="fa fa-fw fa-envelope"></i> Contact</Link></li>
      </ul>
      <ul className="signin">
        <button id="signin">Sign In</button>
        <button id="signup"><i className="fa fa-fw fa-user"></i> Sign Up</button>
      </ul></nav>
    </div>
            </>
        )
    }
    export default Header