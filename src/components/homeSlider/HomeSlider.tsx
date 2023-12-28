import img1 from "@/assets/sliderTemp/img1.png";
import img2 from "@/assets/sliderTemp/img2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const HomeSlider = () => {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{ width: "100vw", height: "50vh", position: "relative" }}
      >
        <Image
          src={img1}
          alt=""
          layout="fill"
          objectFit="contain"
          // width={width}
          // height={height / 2}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{ width: "100vw", height: "50vh", position: "relative" }}
      >
        <Image
          src={img2}
          alt=""
          layout="fill"
          objectFit="contain"
          // width={width}
          // height={height / 2}
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeSlider;
