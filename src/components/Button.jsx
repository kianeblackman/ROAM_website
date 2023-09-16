export default function Button(e) {
    return (
        <div id="button-container">
            <button id="button" href="https://www.etsy.com/uk/shop/ROAMmagazine" target="_blank" rel="noreferrer">
                {e.content}
            </button>
        </div>
    );
}
