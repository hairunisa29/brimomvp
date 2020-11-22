import { Link } from "react-router-dom";
import logo from '../illustration/logoBRI.png';


export default function Header(){

return (
<nav class="navbar navbar-expand-md navbar-dark" id="Navbar">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li>
              <Link to ="/complaintpage" class="navbar-brand">
                <img src={logo} id="logoBRI" alt="Login"></img>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

            </li>
            <li class="nav-item active">
              <Link to ="/listcomplaint" class="nav-item nav-link">List Complaint</Link>
            </li>
        </ul>
    </div>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link to ="/" class="nav-item nav-link">Logout</Link>
        </li>
      </ul>
    </div>
</nav>
)
}