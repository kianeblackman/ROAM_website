
// Import Dependencies
import { Link } from 'react-router-dom';

// Import Assets
import roamLogo from '../assets/img/roam-logo-small.png';

export default function NavBar() {

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-wrapper").style.top = "0";
        } else {
            document.getElementById("navbar-wrapper").style.top = "-8rem";
        }
        prevScrollpos = currentScrollPos;
    }
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
