import { useState, useEffect } from "react";
import Badge from "@/components/common/Badge.tsx";
import BrandGithub from "@/components/icons/sections/brand-github.tsx";

export default function ProjectCard({
  title,
  body,
  href,
  image,
  hrefSource,
  badges,
  aos,
}: {
  title: string;
  body: string;
  href: string;
  image: string;
  hrefSource?: string;
  badges?: string[];
  aos?: string;
}) {
  return (
    <>
      <div
        className="flex flex-col md:items-center gap-x-8 rounded-md p-3 md:flex-row"
        data-aos={aos}
        data-aos-once="true"
        data-aos-offset="-200"
        style={{ overflow: "hidden" }}
      >
        <div className="shrink-0">
          {href ? (
            <a href={href} target="_blank">
              <img
                className="md:w-64 md:h-32 w-full h-full object-cover rounded-md hover:animate-pop"
                src={image}
                alt={title}
                loading="lazy"
              />
            </a>
          ) : (
            <img
              className="md:w-64 md:h-32 w-full h-full object-cover rounded-md"
              src={image}
              alt={title}
              loading="lazy"
            />
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-y-2 md:flex-row mt-3 md:mt-0">
            {" "}
            {hrefSource && (
              <a
                className="hover:text-blue-400 mr-2 transition-transform duration-300 ease-in-out transform hover:scale-125"
                href={hrefSource}
                target="_blank"
              >
                <BrandGithub className="size-6" />
              </a>
            )}
            {href ? (
              <a
                className="hover:text-blue-400 ml-0"
                href={href}
                target="_blank"
              >
                <div className="text-xl font-semibold text-gray-900 dark:text-white">{title}</div>
              </a>
            ) : (
              <div className="text-xl font-semibold text-gray-900 dark:text-white">{title}</div>
            )}
          </div>
          <div className="flex flex-wrap">
            {badges?.map((name) => {
              return <Badge name={name} />;
            })}
          </div>

          <p className="mt-3">{body}</p>
        </div>
      </div>
    </>
  );
}
