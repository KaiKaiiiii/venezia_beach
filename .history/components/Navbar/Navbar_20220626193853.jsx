import React from "react";

const Navbar = () => {
  return (
    <div className="container px-2 px-sm-4">
      <nav className=" top-0 shadow mt-0 mt-sm-3 py-2 ">
        <div className="container px-3">
          <div className="items-center justify-between">
            <div className="">
              <a href="https://venezia.net.vn">
                <img
                  width="96"
                  height="55"
                  loading="eager"
                  decoding="async"
                  class="logo d-flex h-auto"
                  style="width: 96px;"
                  alt="logo"
                  src="https://venezia.net.vn/wp-content/themes/venezia-beach/dist/images/logo.png"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
