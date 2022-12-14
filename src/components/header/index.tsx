export const Header = () => {
  return (
    <>
      <header className="max-w-[1366px] h-[85px] flex justify-between items-center m-auto px-12 py-7">
        <div>
          <img className="" src="./logo.svg" alt="logo" />
        </div>
        <nav className="flex gap-x-6 text-white text-base">
          <ul>
            <a href="">
              <li className="hover:border-b-2">Home</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li className="hover:border-b-2">Stays</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li className="hover:border-b-2">Flights</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li className="hover:border-b-2">Packages</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li className="hover:border-b-2">Sign Up</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};
