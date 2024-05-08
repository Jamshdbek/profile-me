import React from "react";

function Header() {
  return (
    <header className=" w-full flex m-auto justify-center gap-3 p-3 fixed bottom-0  ">
      <div className=" flex gap-3  text-white  border  z-50  bg-black p-4 rounded-[50px] text-sm">
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Experience</h5>
        <h5>Projects</h5>
      </div>
    </header>
  );
}

export default Header;
