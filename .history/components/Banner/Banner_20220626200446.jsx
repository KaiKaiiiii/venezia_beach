import React from "react";

const Banner = () => {
  return (
    <section>
      <video
        className="absolute w-full h-full top-0 left-0 z-[1]"
        style="object-fit: cover;"
        autoPlay=""
        muted=""
        loop=""
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
