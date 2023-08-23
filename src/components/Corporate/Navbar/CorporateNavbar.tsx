
import logo from "../../../assets/logo/corporate.png";
const CorporateNavbar = () => {
  const navbar = ["Home", "About", "Services", "Resorces", "Projects"];

  return (
    <div className="bg-white font-Lato">
      <div className="navbar max-w-[1200px] mx-auto py-5">
        <div className="navbar-start">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar.map((item, index) => (
              <li key={index}>
                {index === 0 ? (
                  <p className="hover:bg-white focus:bg-white text-ReddishOrange text-base font-semibold underline">
                    {item}
                  </p>
                ) : (
                  <p className="hover:bg-white focus:bg-white  text-base font-semibold">
                    {item}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex justify-end">
          <button className="py-[14px]  px-[17px] bg-ReddishOrange text-[14px] font-semibold text-white hover:bg-ReddishOrange rounded-[5px]">
            Contact us today
          </button>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 left-[-170px] rounded-[5px]"
            >
              {navbar.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
              <li>
                <button className="py-[6px] px-[10px] bg-ReddishOrange text-[14px] font-semibold text-center text-white hover:bg-ReddishOrange rounded-[5px] w-fit ml-3">
                  Contact us today
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateNavbar;
