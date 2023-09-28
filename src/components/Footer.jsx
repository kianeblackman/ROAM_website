
// Import Dependencies

// Import Images
import email from "/img/icon-email.png"
import instagram from "/img/icon-instagram.png"

export default function Footer() {
    return (
        <div id='footer-wrapper'>
            <div id="footer-content">
                <h3>FOR THOSE WHO EXPLORE WHAT CAME BEFORE</h3>
                <ul>
                    <li>
                        <a href="mailto:" target="_blank" rel="noopener noreferrer">
                            <img src={email} alt="Mail Icon" />
                            <p>roamanthology@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram Icon" />
                            <p>@_roam_roam_roam_</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
