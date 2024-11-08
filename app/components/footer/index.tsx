import React from "react";
import MagicButton from "../ui/borderMagic";
import { BackgroundBeams } from "../ui/background-beams";
export const Footer = () => {
  const handleNav  = () =>{
    // alert("clicked")
    console.log('clickd')
  }
  return (
    <div className=" relative w-full pt-20 pb-10 max-h-[10vh] " id="content">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 z-10">
        <BackgroundBeams className=" z-20" />
        {/* <Image
          src={footerImage}
          alt="404"
          className=" w-full h-full opacity-50"
        /> */}
      </div>
      <div className="  text-center flex-col items-center  mt-16 md:flex-row  justify-center">
        <h2 className=" text-[20px] m-ato text-center justify-center lg:max-w-[45vw]">
          {/* Ready <span className=" text-purple">to get started?</span> */}
        </h2>
        <p className=" text-center text-white-200 md:mt-10 my-5 ">
          Reach out to me today and let's discuss how I can help you. (jamshid.ibro@gmail.com)
        </p>
        {/* <MagicButton handleClick={()=>handleNav()} text="Let's get in touch" /> */}
      </div>
      <div className=" w-full flex items-center z-10 justify-center  mt-20 absolute">
        <p className="  md:text-[12px] "> Copyright © {new Date().getFullYear()} Jamshid</p>
      </div>
    </div>
  );
};
