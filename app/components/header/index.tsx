import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

function HeaderNavbar() {
  return (
    <FloatingNav
      navItems={[
        { name: "Home", link: "/#home" },
        { name: "About", link: "/#about" },
        { name: "Projects", link: "/#projects" },
        { name: "Experience", link: "/#experience" },
      ]}
    />
  );
}

export default HeaderNavbar;
