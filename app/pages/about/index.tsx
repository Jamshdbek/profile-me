import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { Button, MovingBorder } from "@/app/components/ui/moving-border";
import Spline from "@splinetool/react-spline";
import img from "@/assets/image/c8f7f4fa968020aa5670c7d1c00fc320.jpg";
import { MyStack } from "./stack";
function index() {
  return (
    <section id="about" className=" z-10 md:mt-[20vh]">
      <h1 className=" header_title">About me.</h1>
      <div className=" md:flex gap-10">
        <div className="sm:w-full md:max-w-[40vw] max-h-[40vh] w-full border-r-emerald-50">
          <Button
            borderRadius="10px"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
            }}
            containerClassName="w-full min-w-[04vh] min-h-[50vh] "
            duration={Math.floor(Math.random() * 1000) + 10000}
          >
            <Spline
              scene="https://prod.spline.design/AnF6-gFEiyf49cZM/scene.splinecode"
              className=" rounded-[50px]"
            />
          </Button>
        </div>
        <div className=" border-collapse border-white float-right max-w-[75vh]">
          <p className="text-[rgb(148, 163, 184)]   opacity-90  center text-blue-100 ">
            Hi, I'm web frontend developer who is passionate about open source.
            and I'm interested in new small start-up projects.
            <br />
            besides coding, I'm also interested in learning languages, drawing,
            and watching fantasy movies and anime.
            <br />I enjoy reading design and interesting modern technical books
            and documentaries
          </p>
          <MyStack />
        </div>
      </div>
      <BentoGrid className=" mx-auto relatives  mt-[20vh] gap-10 justify-between flex">
        {/* <BentoGridItem title={"hello"} className="w-full min-w-[60%]"  description={"sfdf"} /> */}
        {/* <BentoGridItem title={"hello"} className="w-full max-w-[40%]" description={"sfdf"} /> */}
      </BentoGrid>
    </section>
  );
}

export default index;
