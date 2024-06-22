import Image, { StaticImageData } from "next/image";
import paybek from "@/assets/image/hunarda.png";
import crm from "@/assets/image/Server-Monitoring.png";

import myUHL from "@/assets/image/my_uhl.jpg";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { StickyScrollRevealDemo } from "./details";
interface ItemType {
  name: string;
  link: string;
  description: string;
  img: StaticImageData;
}
function index() {
  const projects: ItemType[] = [
    {
      name: "Hunarda uz ",
      description: "Hunarda learning web platform ",
      link: "",
      img: paybek,
    },
    {
      name: "My Uhl",
      description: "Meal Ordering System for UHL",
      link: "https://www.my-uhl.com/",
      img: myUHL,
    },
    {
      name: "Smart Factory",
      description: "SRM System Panel for web",
      link: "",
      img: crm,
    },
  ];
  return (
    <section id="projects" className="w-full justify-between mt-[10vh]">
      {" "}
      <h1 className="header_title">Projects</h1>
      <br />
      {/* <BentoGrid className="w-full mx-auto">
        {projects.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.name}
            description={item.description}
            header={item.description}
            icon={item.img}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid> */}
      <StickyScrollRevealDemo />
    </section>
  );
}

export default index;
