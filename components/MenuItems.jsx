import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
const MenuItems = () => {
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <DropDown />
        <Link href={"/"} className="btn btn-ghost text-xl">
          VampZone
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          {dropMenu.map((item, id) => {
            return (
              <li key={id}>
                <details>
                  <summary>{item.title}</summary>

                  <ul className="p-2">
                    <li>
                      <a>{item.address}</a>
                    </li>
                  </ul>
                </details>
              </li>
            );
          })}
          <li>
            <a>BOLLYWOOD</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <button className="absolute right-2 top-4 ">
            {" "}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
