import React from "react";

function Header() {
  return (
    <header className=" w-full flex m-auto justify-center gap-3 p-3 fixed  ">
      <div className=" flex gap-3  text-white  border  z-50  bg-black p-4 rounded-[50px]">
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Experience</h5>
        <h5>Projects</h5>
      </div>
    </header>
  );
}

export default Header;
