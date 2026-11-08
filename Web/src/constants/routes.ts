export const SECTION_IDS = {
  overview: "overview",
  about: "about",
  services: "services",
  designProjects: "design-projects",
  travel: "travel",
  contact: "contact",
} as const;

export const ROUTES = {
  home: "/",
  sections: {
    about: `/#${SECTION_IDS.about}`,
    services: `/#${SECTION_IDS.services}`,
    designProjects: `/#${SECTION_IDS.designProjects}`,
    travel: `/#${SECTION_IDS.travel}`,
    contact: `/#${SECTION_IDS.contact}`,
  },
} as const;
