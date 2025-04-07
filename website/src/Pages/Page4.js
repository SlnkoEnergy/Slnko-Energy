import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../CSS/Page4_CSS.css";

import Img1 from "../assets/Tendering.png";
import Img2 from "../assets/Loan.png";
import Img3 from "../assets/Construction.png";
import Img4 from "../assets/Commissioning.png";

const services = [
  { title: "Tendering", img: Img1 },
  { title: "Loan Assistance", img: Img2 },
  { title: "Construction", img: Img3 },
  { title: "Liaisoning", img: Img4 },
];

const getSlidesPerView = (width) => {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
};
const Page4 = () => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial slides count

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="services-container">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Services we provide
      </motion.h2>

      <div className="slider-wrapper">
        <Swiper
          key={slidesPerView}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          navigation
          loop={true}
        >
          {services.map(({ title, img }, index) => (
            <SwiperSlide key={index}>
              <motion.img src={img} alt={title} className="service-image" whileHover={{ scale: 1.05 }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div className="arrow-button" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        ➜
      </motion.div>
    </div>
  );
};

export default Page4;
