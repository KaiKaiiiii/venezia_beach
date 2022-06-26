import React from "react";

const Banner = () => {
  return (
    <section className="w-full h-[500px] relative">
      {/* Mask */}
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50 z-[2] "></div>

      {/* Wave */}
      <div className="z-[3] absolute bottom-0 w-full ">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 40"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="moving-waves">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="-1"
              fill="rgba(255, 255, 255, 0.40"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255, 255, 255, 0.35)"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255, 255, 255, 0.25)"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="8"
              fill="rgba(255, 255, 255, 0.20)"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="13"
              fill="rgba(255, 255, 255, 0.15)"
            ></use>
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="16"
              fill="rgba(255, 255, 255, 0.95)"
            ></use>
          </g>
        </svg>
      </div>

      {/*  Background image & Background video  */}
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className=" w-full h-full absolute top-0 left-0 object-cover"
      >
        <source
          src="https://venezia.net.vn/wp-content/uploads/2021/09/Venezia-Beach-Video-3D-dự-án-1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-[5] container">
        <div className="flex-col items-center justify-center text-center  text-white">
          <h1 className=" display-1 !font-black">Venezia Beach</h1>
          <div className="flex-col items-center font-bold mt-2">
            <p className=""> Tài sản truyền đời - Sinh lời bền vững</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
