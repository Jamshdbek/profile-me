function index() {
  return (
    <div className="md:flex justify-between mt-[30vh]">
      <h1 className="teg_text">Experience</h1>
      <div className="border-collapse border-white max-w-[75vh]">
        <div className="w-full justify-between flex  min-w-[50vh]">
          <p className="w-full text-xs text-gray-300">2023 - PRESENT</p>
          <h2 className="w-full text-lg"> Frontend developer / UzVIP</h2>
        </div>
        <p className="mt-2 text-sm">
          Development of web sites CRM web apps, ensuring the ease of supporting
          the program and facilitating the company's external and personal
          projects.
        </p>
        {/* 2 */}
        <div className="w-full mt-10 justify-between flex  min-w-[50vh]">
          <p className="w-full text-xs text-gray-300">2022 - 2023</p>
          <h2 className="w-full text-lg"> Developer / ProTuch</h2>
        </div>
        <p className="mt-2 text-sm">
          web shopping project, correcting the shortcomings and <br /> creating a new
          website
        </p>
      </div>
    </div>
  );
}

export default index;
