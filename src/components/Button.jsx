export default function Button(e) {
    return (
        <div id="button-container">
            <button id="button" href={e.href} target="_blank" rel="noreferrer">
                {e.content}
            </button>
        </div>
    );
}
