function index() {
  return (
    <div className="flex justify-between mt-[30vh]">
      {" "}
      <h1 className="teg_text">Projects</h1>
      <div className=" flex gap-1 border-collapse border-white max-w-[75vh]">
        <div className=" min-w-[20vh] w-full text-start ">
          <h2 className=" text-lg">Paybek</h2>
          <p className=" text-sm">SRM System Panel for web</p>
        </div>
        <div className=" min-w-[20vh] w-full text-start ">
          <h2 className=" text-lg">Lamiun</h2>
          <p className=" text-sm">Learning app</p>
        </div>
      </div>
    </div>
  );
}

export default index;
