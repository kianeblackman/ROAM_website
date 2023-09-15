export default function ResourcesCard(e) {
    return (
        <li>
            <a href={e.link} target="_blank" rel="nooperner noreferrer">
                <div>
                    <p>{e.title}</p>
                    <p>{e.description}</p>
                    <p>{e.location}</p>
                </div>
            </a>
        </li>
    )
}
