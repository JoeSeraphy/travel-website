export const Search = () => {
  return (
    <>
      <h1 className="text-white text-7xl font-bold w-[729px]">
        The Whole world awaits.
      </h1>
      <div className="flex mt-10 w-auto backdrop-blur-lg bg-gray-200/40 px-4 py-2 flex gap-x-8 items-center rounded-2xl">
        <div className="flex gap-2">
          <img src="search.svg" />
          <input
            className="w-80 py-2 bg-transparent focus:outline-none
              placeholder:text-white text-white"
            type="text"
            placeholder="Search destinations, hotels"
          />
        </div>
        <div className="w-auto flex gap-2 relative">
          <img src="calendar.svg" />
          <input
            className="bg-transparent text-white focus:outline-none"
            type="date"
            name="Check in"
          />
        </div>
        <div className="w-auto flex gap-2 relative">
          <img src="calendar.svg" />
          <input
            className="bg-transparent text-white focus:outline-none"
            type="date"
            name="Check out"
          />
        </div>

        <div className="w-auto flex gap-2 relative">
          <img src="icons/user.png" />
          <input
            className="bg-transparent text-white w-[115px] focus:outline-none placeholder:text-white"
            type="text"
            placeholder="1 room, 2 adults"
          />
        </div>
        <button className="flex justify-end bg-white text-blue-600 font-bold rounded-3xl px-12 py-3 transition ease-in-out hover:bg-[#2659C3] hover:text-white duration-300">
          Search
        </button>
      </div>
    </>
  );
};
