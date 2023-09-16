
// Import Dependencies
import { Link } from 'react-router-dom';

// Import Assets
import roamLogo from '../assets/img/roam-logo-small.png';

export default function NavBar() {
    return (
        <div id='navbar-wrapper'>
            <nav>
                <span>
                    <Link to='/'>
                        <img src={roamLogo} alt="logo" />
                    </Link>
                </span>
                <ul>
                    <li>
                        <Link to="/resources">
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
