import { BackgroundBeams } from "@/app/components/ui/background-beams";

function index() {
  return (
    <div className=" md:flex justify-between mt-[30vh]">
      {/* <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"> */}
      <h1 className=" text-[10px] heading lg:max-w-[20vw]   m-ato text-center justify-center">
        About me
      </h1>
      <div className="border-collapse border-white max-w-[75vh]">
        <p className="text-[rgb(148, 163, 184)]   opacity-90  center text-blue-100 ">
          Hi, I'm web frontend developer who is passionate about open source.
          and I'm interested in new small start-up projects.
          <br />
          besides coding, I'm also interested in learning languages, drawing,
          and watching fantasy movies and anime.
          <br />I enjoy reading design and interesting modern technical books
          and documentaries
        </p>
      </div>
      {/* about */}

      {/* <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div> */}
      {/* <BackgroundBeams /> */}
    </div>
    // </div>
  );
}

export default index;
