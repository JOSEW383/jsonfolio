import cvData from '@public/cv.json';

export function getSection(sectionName: string): any  {
  return cvData[sectionName as keyof typeof cvData];
}

export function getSocialmedia(): any  {
  return [
    {
      name: "Linkedin",
      logo: "linkedin",
      url: cvData["contact"]["linkedin"],
    },
    {
      name: "Github",
      logo: "github",
      url: cvData["contact"]["github"],
    },
    {
      name: "Contact",
      logo: "contact",
      url: "mailto:" + cvData["contact"]["email"],
    },
  ];
}
