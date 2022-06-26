import React from "react";

const Banner = () => {
  return (
    <section>
      <video autoPlay muted loop className="absolute w-full h-full ">
        <source
          src="https://venezia.net.vn/wp-content/uploads/2021/09/Venezia-Beach-Video-3D-dự-án-1.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Banner;
