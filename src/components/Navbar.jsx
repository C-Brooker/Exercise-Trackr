import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-4 sticky top-0 w-full min-w-full bg-blue-600 shadow shadow-xl">
        <nav className="flex sm:flex-row sm:justify-between flex-col">
          <Link
            to="/"
            className="font-bold text-xl text-white hover:text-blue-100"
          >
            ExcerTracker.io
          </Link>
          <div>
            <ul className="flex sm:flex-row flex-col sm:space-x-4 sm:items-center justify-center text-white text-lg text-base">
              <li className="hover: text-blue-100">
                <Link to="/" className="nav-link">
                  Exercises
                </Link>
              </li>
              <li className="hover: text-blue-100">
                <Link to="/create" className="nav-link">
                  Create Exercise Log
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
