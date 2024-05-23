import React from "react";
import { Spotlight } from "../ui/Spotlight";
import MagicButton from "../ui/borderMagic";
import { useRouter } from "next/navigation";

function Welcomer() {
  const router = useRouter();
  return (
    <div className=" w-full pb-20 pt-36  md:min-h-[80vh]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className=" top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center ">
        <div className=" max-w-[89vw] md:max-w-2xl lg:max0w0[60vw] flex flex-col items-center justify-center">
          <h2 className=" z-10 uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my Portolio page
            <br />
          </h2>
          <h1 className="z-10 w-full text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Jamshidbek Ibrokhimov
          </h1>
          <br />
          <p className="z-10 text-center text-lg ">web frontend developer</p>
          <MagicButton
            text="Show more"
            handleClick={() => router.push("#about")}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcomer;
