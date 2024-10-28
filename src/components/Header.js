import {Link} from 'react-router-dom'
import './Header.css';
function Header()
    {
        return(
            <>
            <div><nav>
      <ul className="logo">
        <li className="mainlogo"><img id="mylogo" src={require('./images/image.png')} width="140" height="80" alt="logo" /></li>
      </ul>
      <ul className="menu">
        <li><Link to='/'><i className="fa fa-fw fa-home"></i> Home</Link></li>
        <li><Link to="Rent"><i className="fa fa-fw fa-dollar-sign"></i> Rent</Link></li>
        <li><Link to=""><i className="fa fa-fw fa-concierge-bell"></i> Services</Link></li>
        <li><Link to="Contact"><i className="fa fa-fw fa-envelope"></i> Contact</Link></li>
      </ul>
      <ul className="signin">
        <button id="signin">Sign In</button>
        <Link to="Signup"><button id="signup"><i className="fa fa-fw fa-user"></i> Sign Up</button></Link>
      </ul>
    </nav></div>
            </>
        )
    }
    export default Header