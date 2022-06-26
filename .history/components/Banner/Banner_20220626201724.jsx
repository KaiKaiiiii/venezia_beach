import React from "react";

const Banner = () => {
  return (
    <section className="w-full h-[500px]">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-primary opacity-50 z-[2] "></div>

      {/* <!-- Background image & Background video --> */}
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className=" w-full h-[500px] absolute top-0 left-0 object-cover"
      >
        <source
          src="https://venezia.net.vn/wp-content/uploads/2021/09/Venezia-Beach-Video-3D-dự-án-1.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Banner;
