
// Import Dependencies
import { Link } from 'react-router-dom';

// Import Assets
import roamLogo from '/img/roam-logo-small.png';

export default function NavBar() {
    var prevScrollpos = window.scrollY;
    var scrollThreshold = 8 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Set scrollThreshold to 12rem

    window.onscroll = function () {
        var currentScrollPos = window.scrollY;
        if (currentScrollPos > scrollThreshold) {
            document.getElementById("navbar-wrapper").style.top = "-8rem"; // Hide the navbar when scrolled past 12rem
        }
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-wrapper").style.top = "0"; // Show the navbar when scrolling up
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
