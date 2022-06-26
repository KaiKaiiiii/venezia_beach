import React from "react";

const Navbar = () => {
  return (
    <div className="container px-2 px-sm-4">
      <nav className=" top-0 shadow mt-0 mt-sm-3 py-2 ">
        <div className="container px-3">
          <div className="items-center justify-between">
            <div className="">
              <a href="">
                <img src="/logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
