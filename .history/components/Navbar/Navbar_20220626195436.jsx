import React from "react";

const Navbar = () => {
  return (
    <div className="container px-2 px-sm-4">
      <nav className=" top-0 shadow mt-0 mt-sm-3 py-2 border-b-2 rounded-b-2xl blurry ">
        <div className="container px-3">
          <div className="flex items-center justify-between">
            <div className="">
              <a href="https://venezia.net.vn">
                <img
                  className="h-auto w-[96px] h-[55px]"
                  alt="logo"
                  src="/logo.png"
                />
              </a>
            </div>
            <div className="">
              <button className=" w-[44px] h-[44px] bg-gradient-success rounded-full flex items-center justify-center shadow-md">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="bars"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="svg-inline--fa fa-bars fa-w-14 fa-2x d-flex w-[21px] h-[24px] text-white  "
                >
                  <path
                    fill="currentColor"
                    d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                    className=""
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
