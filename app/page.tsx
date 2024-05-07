"use client";
import { Ref, useCallback } from "react";
import { ViewPage, AboutPage, ExperiencePage, ProjectsPage } from "./pages";
import { HomePageModel } from "./models";
export default function MainPage() {
  const redirectToSection = useCallback((ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <main className="mx-[14vw] justify-center ">
      <ViewPage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
    </main>
  );
}
