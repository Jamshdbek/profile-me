"use client";
import { AboutPage, ProjectsPage } from "./pages";
import Welcomer from "./components/welcomer/welcomer";
import { FloatingNav } from "./components/ui/floating-navbar";
import Experience from "./components/experience/Experience";
export default function MainPage() {
  return (
    <main className=" relative  bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/#home" },
            { name: "About", link: "/#about" },
            { name: "Experience", link: "/#experience" },
            { name: "Projects", link: "/#projects" },
          ]}
        />
        <Welcomer />
        <AboutPage />
        <ProjectsPage />
        <Experience />
      </div>
    </main>
  );
}
