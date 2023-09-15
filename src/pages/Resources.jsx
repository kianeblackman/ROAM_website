//* Description: renders the Resources page of the app

// Import Statments
import { lgbtqResources, accessibilityResources, racialInequalityResources } from "../data/mappedResources.js"

// Import Components
import ResourcesCard from "../components/ResourcesCard.jsx"

function Resources() {
    return (
        <div id='resources-wrapper'>
            <div>
                <ul>
                    {lgbtqResources.map((e, index) => (
                        <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {accessibilityResources.map((e, index) => (
                        <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {racialInequalityResources.map((e, index) => (
                        <ResourcesCard key={index} title={e.title} description={e.description} location={e.location} link={e.link} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Resources