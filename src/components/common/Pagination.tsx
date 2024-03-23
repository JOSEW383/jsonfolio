import { useState, useEffect } from "react";

export default function Pagination({
  current,
  pages,
  setCurrent,
}: {
  current: number;
  pages: number;
  setCurrent: (current: number) => void;
}) {
  const pageList = Array.from({ length: pages }, (_, i) => i + 1);
  const buttonStyle = {
    default:
      "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    active:
      "flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-gray-100 border border-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:text-white",
    disabled:
      "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400",
  };

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <div className="inline-flex -space-x-px text-sm">
          <button
            disabled={current === 1}
            className={
              current === 1
                ? buttonStyle.disabled + " rounded-s-lg"
                : buttonStyle.default + " rounded-s-lg"
            }
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </button>

          {pageList.map((i: any) => {
            return (
              <button
                key={i}
                disabled={current === i}
                onClick={() => setCurrent(i)}
                className={
                  current === i ? buttonStyle.active : buttonStyle.default
                }
              >
                {i}
              </button>
            );
          })}

          <button
            disabled={current === pages}
            className={
              current === pages
                ? buttonStyle.disabled + " rounded-e-lg"
                : buttonStyle.default + " rounded-e-lg"
            }
            onClick={() => setCurrent(current + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
