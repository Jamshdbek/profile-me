import React from "react";
import { Button } from "@/app/components/ui/moving-border";
import { CanvasRevealEffectDemo } from "./grid";

function Experience() {
  return (
    <section id="experience" className=" mt-[12vh]" >
      <h1 className=" header_title">My Experience</h1>
      <div className="w-full mt-[10vh] ">
        <CanvasRevealEffectDemo />
      </div>
    </section>
  );
}

export default Experience;
