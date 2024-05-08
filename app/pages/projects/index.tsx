import Image, { StaticImageData } from "next/image";
import paybek from "@/assets/image/panel.png";
import myUHL from "@/assets/image/my_uhl.jpg";
import { Link } from "lucide-react";
interface ItemType {
  name: string;
  link: string;
  description: string;
  img: StaticImageData;
}
function index() {
  const projects: ItemType[] = [
    {
      name: "Paybek",
      description: "SRM System Panel for web ",
      link: "",
      img: paybek,
    },
    {
      name: "My Uhl",
      description: "SRM System Panel for web",
      link: "https://www.my-uhl.com/",
      img: myUHL,
    },
    {
      name: "Smart Factory",
      description: "SRM System Panel for web",
      link: "https://www.my-uhl.com/",
      img: paybek,
    },
  ];
  return (
    <div className="md:flex justify-between mt-[30vh]">
      {" "}
      <h1 className="teg_text">Projects</h1>
      <div className="  gap-1 border-collapse border-white md:max-w-[75vh] block">
        {" "}
        {projects.map((item: ItemType) => (
          <div
            key={item.name}
            className=" mt-2 md:max-h-[20vh]  max-w-[70vh] md:min-w-[80vh] md:flex border rounded-[10px] gap-4 pl-3 pr-3 pt-3 pb-3  border-collapse border-white"
          >
            <Image
              src={item.img}
              className=" rounded-[10px] max-w-[30vh]"
              alt="404"
            />
            <div className=" relative w-full">
              <h2 className=" text-xl">{item.name}</h2>
              <p className=" text-sm">{item.description}</p>
              <a  target="_blank" href={item.link} className=" text-white absolute right-0 top-0  font-mono hover:text-blue-500">
                visit {" > "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
