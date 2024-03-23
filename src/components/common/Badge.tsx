import React from "react";

interface Props {
  name: string;
}
const badges = {
  astro: "https://astro.build",
  react: "https://reactjs.org",
  mantine: "https://mantine.dev",
  tailwindcss: "https://tailwindcss.com",
  netlify: "https://www.netlify.com",
  java: "https://www.java.com",
  android_studio: "https://developer.android.com/studio",
  firebase: "https://firebase.google.com",
  python: "https://www.python.org",
  c: "https://en.wikipedia.org/wiki/C_(programming_language)",
  "c++": "https://en.wikipedia.org/wiki/C%2B%2B",
  csharp: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  eclipse: "https://www.eclipse.org",
  netbeans: "https://netbeans.apache.org",
  visual_studio: "https://visualstudio.microsoft.com",
  vscode: "https://code.visualstudio.com",
  junit: "https://junit.org",
  mockito: "https://site.mockito.org",
  selenium: "https://www.selenium.dev",
  espresso: "https://developer.android.com/training/testing/espresso",
  cucumber: "https://cucumber.io",
  behave: "https://behave.readthedocs.io",
  playwright: "https://playwright.dev",
  allure: "https://docs.qameta.io/allure",
  "express.js": "https://expressjs.com",
  bootstrap: "https://getbootstrap.com",
  ejs: "https://ejs.co",
  django: "https://www.djangoproject.com",
  jsf: "https://www.oracle.com/java/technologies/javaserverfaces.html",
  html: "https://html.spec.whatwg.org",
  css: "https://www.w3.org/Style/CSS",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  postman: "https://www.postman.com",
  github_pages: "https://pages.github.com",
  render: "https://render.com",
  railway: "https://railway.app",
  deta: "https://www.deta.sh",
  "fly.io": "https://fly.io",
  "cyclic.sh": "https://cyclic.sh",
  mongodb_atlas: "https://www.mongodb.com/cloud/atlas",
  mongodb: "https://www.mongodb.com",
  trello: "https://trello.com",
  git: "https://git-scm.com",
  github: "https://github.com",
  bitbucket: "https://bitbucket.org",
  gitlab: "https://gitlab.com",
  sql: "https://en.wikipedia.org/wiki/SQL",
  "no-sql": "https://en.wikipedia.org/wiki/NoSQL",
  mysql: "https://www.mysql.com",
  cloud_firestore: "https://firebase.google.com/products/firestore",
  appian: "https://www.appian.com",
  uipath: "https://www.uipath.com",
  bizagi: "https://www.bizagi.com",
  uml: "https://www.uml.org",
  magicdraw: "https://www.nomagic.com/products/magicdraw",
  "draw.io": "https://app.diagrams.net",
  jira: "https://www.atlassian.com/software/jira",
  microsoft_teams:
    "https://www.microsoft.com/en-in/microsoft-365/microsoft-teams/group-chat-software",
  outlook:
    "https://www.microsoft.com/en-in/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook",
  microsoft_planner:
    "https://www.microsoft.com/en-in/microsoft-365/business/task-management-software",
  arduino: "https://www.arduino.cc",
  raspberry_pi: "https://www.raspberrypi.org",
  linux: "https://www.linux.org",
  raspberry_pi_os: "https://www.raspberrypi.org/software/operating-systems",
  microsoft_power_platform: "https://powerplatform.microsoft.com",
  power_automate: "https://flow.microsoft.com",
  power_bi: "https://powerbi.microsoft.com",
  vite: "https://vitejs.dev",
  openweathermap: "https://openweathermap.org",
  "node.js": "https://nodejs.org",
  "next.js": "https://nextjs.org",
  github_actions: "https://docs.github.com/en/actions",
  express: "https://expressjs.com",
  docker: "https://www.docker.com",
};

const Badge: React.FC<Props> = ({ name }) => {
  const badgeId = name
    .toLocaleLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("#", "sharp");
  const url = badges[badgeId as keyof typeof badges];

  return (
    <a href={url} target="_blank">
      <span className="mx-1 px-2 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-full dark:bg-slate-500/20 dark:text-white">
        {url && (
          <img
            className="flex-shrink-0 size-3"
            src={`/icons/badges/${badgeId}.svg`}
            alt=""
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = 'none';
            }}
          />
        )}

        {name}
      </span>
    </a>
  );
};

export default Badge;
