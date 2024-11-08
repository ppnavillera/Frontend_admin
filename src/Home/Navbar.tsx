import { ReactNode } from "react";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

function Navbar({ children }: Props) {
  const nav = useNavigate();

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col h-screen justify-around ">
          {/* Navbar */}
          <div className="navbar bg-base-300 bg-white w-full drop-shadow-sm border-b border-gray-400/50 min-h-24">
            <div className="flex-none ml-2 lg:ml-10">
              {/* lg:hidden */}
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-10 w-10 lg:h-24 lg:w-24 max-h-full max-w-full stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="text-center mr-4 flex-1 px-2">
              <Logo />
            </div>
            <div
              onClick={() => {
                nav("/");
              }}
              className="btn"
            >
              logout
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {/* <li>
                    <a>Navbar Item 1</a>
                    </li>
                    <li>
                    <a>Navbar Item 2</a>
                    </li> */}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <div className="h-full overflow-hidden"> {children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
