export default function ResourcesCard(e) {
    return (
        <li id="resources-card">
            <a href={e.link} target="_blank" rel="nooperner noreferrer">
                <div className="resources-content">
                    <p className="title">{e.title}</p>
                    <p className="description">{e.description}</p>
                    <p className="location">{e.location}</p>
                </div>
            </a>
        </li>
    )
}
