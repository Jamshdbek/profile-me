import React from "react";
import { Button } from "../ui/moving-border";

function Experience() {
  const workExpericence = [
    {
      id: 1,
      image: "",
      text: "work",
    },
  ];
  return (
    <div className=" py-20" id="testimonials">
      <h2 className=" z-10 uppercase tracking-widest heading">My Experience</h2>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExpericence.map((item) => (
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 1000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className=" flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src={item.image} className="w-full" alt="" />
              <p>{item.text}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience;
