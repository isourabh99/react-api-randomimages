import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="w-[100vw] py-10 px-20 flex justify-between items-center text-xl">
      <div>
        <NavLink to={"/"}>HOME</NavLink>
      </div>
      <div className="flex gap-10">
        <NavLink to={"/gallery"}>GALLERY</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
