import {Link} from "react-router-dom";
import "./Header.css";

function Header(props) {
    return (
        <header className="w-100 d-flex justify-content-center header align-items-center">
            <div className="w-100 content d-flex justify-content-end">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link fs-16" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-16" to="/Nfts">Nfts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-16" to="/About">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;