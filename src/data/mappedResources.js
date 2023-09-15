import ResourcesData from "./ResourcesData.json"

class Resources {
    constructor(title, description, location, link) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.link = link;
    }
}

// Create instances for the "LGBTQIA+" array
const lgbtqResources = ResourcesData["LGBTQIA+"].map(({ title, description, location, link }) => new Resources(title, description, location, link));

// Create instances for the "Accessibility" array
const accessibilityResources = ResourcesData["Accessibility"].map(({ title, description, location, link }) => new Resources(title, description, location, link));

// Create instances for the "Communities Experiencing Racial Inequality" array
const racialInequalityResources = ResourcesData["Communities Experiencing Racial Inequality"].map(({ title, description, location, link }) => new Resources(title, description, location, link));

export { lgbtqResources, accessibilityResources, racialInequalityResources };