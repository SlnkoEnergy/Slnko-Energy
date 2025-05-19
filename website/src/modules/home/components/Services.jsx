import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../css/Page4.css";
import Img1 from "../../../assets/Tendering.png";
import Img2 from "../../../assets/Loan.png";
import Img3 from "../../../assets/Construction.png";
import Img4 from "../../../assets/Commissioning.png";

const services = [
  {img: Img1 },
  {img: Img2 },
  {img: Img3 },
  {img: Img4 },
];

const Services = () => {
  const pageRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div className="services-container" ref={pageRef}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Services we provide
      </motion.h2>

      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          centeredSlides={true}
          navigation
          loop={true}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {services.map(({ title, img }, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.img
                  src={img}
                  alt={title}
                  className="service-image full"
                  whileHover={{ scale: 1.05 }}
                />
                <p className="service-title">{title}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </div>
  );
};

export default Services;
