import { Link } from "react-router-dom";
import logo from '../illustration/logoBRI.png';


export default function Header(){

return (
<nav className="navbar navbar-expand-md navbar-dark" id="Navbar">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <li>
              <Link to ="/complaintpage" class="navbar-brand">
                <img src={logo} id="logoBRI" alt="Login"></img>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            </li>
            <li className="nav-item active">
              <Link to ="/listcomplaint" className="nav-item nav-link">List Complaint</Link>
            </li>
        </ul>
    </div>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to ="/" className="nav-item nav-link">Logout</Link>
        </li>
      </ul>
    </div>
</nav>
)
}