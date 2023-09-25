// Import Dependencies
import { Link } from 'react-router-dom';

export default function Button(e) {
    return (
        <Link to={e.path} href={e.href} id="button-container">
            <button id="button" target="_blank" rel="noreferrer">
                {e.content}
            </button>
        </Link>
    );
}
