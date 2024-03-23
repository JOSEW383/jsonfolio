import { useState, useEffect } from "react";
import ProjectCard from "../common/ProjectCard.tsx";
import Pagination from "../common/Pagination.tsx";

const PROYECTS_PER_PAGE = 3;

export default function ProjectSection({ projects }: { projects: any }) {
  const [professionalProjects, setProfessionalProjects] = useState(
    projects.filter((project: any) => project.type === "professional")
  );
  const [personalProjects, setPersonalProjects] = useState(
    projects.filter((project: any) => project.type === "personal")
  );

  const [activeButton, setActiveButton] = useState("professionalProjects");
  const [prevButton, setPrevButton] = useState("");
  const [currentProjects, setCurrentProjects] = useState(professionalProjects);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPages, setNumberPages] = useState(1);
  const [prevPage, setPrevPage] = useState(0);

  const buttonStyle = {
    default:
      "py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
    active:
      "bg-gray-200 text-gray-800 hover:text-blue-400 dark:bg-gray-700 dark:text-white py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium text-center rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
  };

  useEffect(() => {
    if (prevPage !== 0) {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }
    const start = (currentPage - 1) * PROYECTS_PER_PAGE;
    const end = start + PROYECTS_PER_PAGE;
    setCurrentProjects(
      activeButton === "professionalProjects"
        ? professionalProjects.slice(start, end).map((project: any) => ({
            ...project,
            aos: determineFadeDirection(
              activeButton,
              prevButton,
              currentPage,
              prevPage
            ),
          }))
        : personalProjects.slice(start, end).map((project: any) => ({
            ...project,
            aos: determineFadeDirection(
              activeButton,
              prevButton,
              currentPage,
              prevPage
            ),
          }))
    );
    setNumberPages(
      activeButton === "professionalProjects"
        ? Math.ceil(professionalProjects.length / PROYECTS_PER_PAGE)
        : Math.ceil(personalProjects.length / PROYECTS_PER_PAGE)
    );
    setPrevPage(currentPage);
    setPrevButton(activeButton);
  }, [currentPage, activeButton]);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setCurrentPage(1);
  };

  function determineFadeDirection(
    activeButton: string,
    prevButton: string,
    currentPage: number,
    prevPage: number
  ): string {
    if (prevPage == 0) {
      return "";
    } else if (activeButton !== prevButton) {
      return activeButton === "professionalProjects"
        ? "fade-right"
        : "fade-left";
    } else {
      return currentPage > prevPage ? "fade-left" : "fade-right";
    }
  }

  return (
    <>
      <div className="flex space-x-2 justify-center items-center">
        <button
          type="button"
          className={
            activeButton === "professionalProjects"
              ? buttonStyle.active
              : buttonStyle.default
          }
          onClick={() => handleClick("professionalProjects")}
        >
          💼 Work projects
        </button>
        <button
          type="button"
          className={
            activeButton === "personalProjects"
              ? buttonStyle.active
              : buttonStyle.default
          }
          onClick={() => handleClick("personalProjects")}
        >
          💡 Personal Projects
        </button>
      </div>

      <div className="flex flex-col gap-6 mt-3">
        {currentProjects.map((project: any) => (
          <ProjectCard
            key={project.title}
            href={project.href}
            title={project.title}
            body={project.body}
            image={project.image}
            hrefSource={project.hrefSource}
            badges={project.badges}
            aos={project.aos}
          />
        ))}
      </div>
      <Pagination
        current={currentPage}
        pages={numberPages}
        setCurrent={setCurrentPage}
      />
    </>
  );
}
