//* Description: renders the Resources page of the app

// Import Statments
import { lgbtqResources, accessibilityResources, racialInequalityResources } from "../data/mappedResources.js"

// Import Components
import ResourcesCard from "../components/ResourcesCard.jsx"

function Resources() {
    return (
        <div id='resources-wrapper'>
            <div id='resources-content'>
                <div className="resource-section">
                    <h2>LGBTQIA+</h2>
                    <hr />
                    <ul>
                        {lgbtqResources.map((e, index) => (
                            <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                        ))}
                    </ul>
                </div>
                <div className="resource-section">
                    <h2>Accessibility</h2>
                    <hr />
                    <ul>
                        {accessibilityResources.map((e, index) => (
                            <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                        ))}
                    </ul>
                </div>
                <div className="resource-section">
                    <h2>Communities Experiencing Racial Inequality</h2>
                    <hr />
                    <ul>
                        {racialInequalityResources.map((e, index) => (
                            <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resources