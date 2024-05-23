"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/app/components/ui/lowing-stars";
import Image from "next/image";
import github from "@/assets/image/gitpub.svg";
export function MyStack() {
  return (
    <div className="flex py-20 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard className="  relative">
        {/* <p className=" z-10  top-1">My tech stack</p> */}
        <GlowingStarsTitle className=" top-[20%] z-10">
          React, Node.js, Next, Tailwind, Expo, Electron
        </GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            I constantly try to improve
          </GlowingStarsDescription>
          <div className=" cursor-pointer  h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            {/* <Icon /> */}
            <a target="_blank" href="https://github.com/jamshdbek">
              <Image src={github} alt="404" />
            </a>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

// const Icon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke-width="1.5"
//       stroke="currentColor"
//       className="h-4 w-4 text-white stroke-2"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//       />
//     </svg>
//   );
// };
