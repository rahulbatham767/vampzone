import Link from "next/link";
import React from "react";

const DropDown = () => {
  const dropMenu = [
    {
      title: "MOVIES",
    },
    {
      title: "GENRE",
    },
    {
      title: "YEAR",
    },
    {
      title: "QUALITY",
    },
    {
      title: "TV SHOWS",
    },
    {
      title: "WEB SERIES",
    },
  ];
  return (
    <div className="dropdown font-semibold">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1]   flex-col flex-nowrap bg-base-100  w-72 h-full rounded-md"
      >
        <li className="text-4xl p-4 font-semibold">
          <Link href={"/"}>HOME</Link>
        </li>

        {dropMenu.map((item, id) => {
          return (
            <li className="text-4xl p-4 font-semibold" key={id}>
              <a>{item.title}</a>
            </li>
          );
        })}

        <li className="text-4xl p-4 font-semibold">
          <a>BOLLYWOOD</a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
