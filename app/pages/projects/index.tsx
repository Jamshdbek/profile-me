import Image, { StaticImageData } from "next/image";
import paybek from "@/assets/image/panel.png";
import myUHL from "@/assets/image/my_uhl.jpg";
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
    <div className="flex justify-between mt-[30vh]">
      {" "}
      <h1 className="teg_text">Projects</h1>
      <div className="  gap-1 border-collapse border-white max-w-[75vh] block">
        {" "}
        {projects.map((item: ItemType) => (
          <div
            key={item.name}
            className=" mt-2 max-h-[20vh] max-w-[70vh] min-w-[80vh] flex border rounded-[10px] gap-4 pl-3 pr-3 pt-3 pb-3  border-collapse border-white"
          >
            <Image
              src={item.img}
              className=" rounded-[10px] max-w-[30vh]"
              alt="404"
            />
            <div>
              <h2 className=" text-xl">{item.name}</h2>
              <p className=" text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
