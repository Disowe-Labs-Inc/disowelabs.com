const StartProjectBtn = () => {
  return (
    <button
      className="
        transtion group flex h-10 w-40 items-center justify-center rounded-full bg-gradient-to-r from-blue-950 to-blue-600 p-[1.45px] text-[#223DDA] font-medium duration-300 hover:bg-transparent hover:shadow-2xl hover:shadow-purple-600/30
        "
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-white transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-blue-950 group-hover:to-blue-600 group-hover:transition group-hover:duration-300 group-hover:ease-in-out group-hover:text-white">
        Start a project
      </div>
    </button>
  );
};

export default StartProjectBtn;
