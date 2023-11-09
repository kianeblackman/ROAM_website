export default function EmailButton(e) {
    return (
        <div id="button-container">
            <a id="button" target="_blank" rel="noreferrer" href={e.href}>
                <a >{e.content}</a>
            </a>
        </div>
    );
}
