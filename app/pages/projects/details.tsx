"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import myuhl from "@/assets/image/my_uhl.jpg";
import hunarda from "@/assets/image/hunarda.png";
import src from "@/assets/image/Server-Monitoring.png";
import paybek from "@/assets/image/paybek_cover.png"
const content = [
  {
    title: "My UHL",
    description:
      "I worked as a mail system for the international mail system of Korea and Uzbekistan and the mail system for the Kazakh radio and my task was to work with the CRM system of that platform and 2 frontmen and 3 backers worked in that project https://www.my-uhl.com/ ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={myuhl}
          width={500}
          height={500}
          className="w-full h-full object-cover m-0"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Hunarda UZ",
    description:
      "Video tutorials and online learning course website with click up, payme and other payment systems.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={hunarda}
          width={500}
          height={500}
          className="w-full object-cover m-0"
          alt="linear board demo"
        />
      </div>
    ),
  },
//   {
//     title: "Paybek",
//     description:
//       "Video tutorials and online learning course website with click up, payme and other payment systems.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src={paybek}
//           width={500}
//           height={500}
//           className="w-full object-cover m-0"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
  {
    title: "Smart Factory",
    description:
      "One of the largest project that I have worked, I am in full control of the customer department of the construction goods manufacturing company. The project was built for 2 years and passed a lot of tests, and I served as the main front-end developer in the front web part.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={src}
          width={500}
          height={500}
          className="w-full object-cover m-0"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 overflow-hidden">
      <StickyScroll content={content} />
    </div>
  );
}
