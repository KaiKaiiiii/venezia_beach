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
          <div className="flex-col items-center font-bold text-xl mt-2">
            <p className=""> Tài sản truyền đời - Sinh lời bền vững</p>
            <div className="">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="info-circle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-info-circle fa-w-16 fa-lg d-flex text-white"
                tabIndex="0"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-trigger="hover focus"
                data-bs-content="*Bất động sản đa năng sở hữu - tích lũy - khai thác. 93% sổ hồng vĩnh viễn. Vốn đầu tư chỉ từ 2.2 tỷ, cam kết lợi nhuận cho thuê >5%/1 năm."
                style="cursor: pointer;"
                data-bs-original-title=""
                title=""
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
