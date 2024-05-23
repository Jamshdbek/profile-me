"use client";
import { AboutPage, ExperiencePage, ProjectsPage } from "./pages";
import Welcomer from "./components/welcomer/welcomer";
import HeaderNavbar from "@/app/components/header";
import { useRouter } from "next/navigation";
export default function MainPage() {

  return (
    <main className=" relative  bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  px-5">
      <div className=" max-w-7xl w-full">
        <HeaderNavbar />
        <Welcomer />
        <AboutPage />
        <ProjectsPage />
        <ExperiencePage />
      </div>
    </main>
  );
}
