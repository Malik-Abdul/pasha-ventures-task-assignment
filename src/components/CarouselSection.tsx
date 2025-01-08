"use client";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay style if needed

const CarouselSection = () => {
  return (
    <Swiper
      //   modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, type: "bullets" }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <section className="bg-white text-black py-20 text-center relative">
          <div className="space-y-8">
            <div className="mx-auto w-[472px] h-[34px] font-poppins font-bold text-[45px] leading-[32px] tracking-[-0.02em] text-[#CBCBCB]">
              What We Do
            </div>

            <div className="mx-auto w-[802px] h-[170px] font-poppins font-bold text-[70px] leading-[80px] tracking-[-0.02em] text-[#3B3E48]">
              Taking Brands to the Next Level
            </div>

            <div className="mx-auto w-[728px] h-[122px] font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
              With access to our capital, distribution channels, and talent,
              you're empowered to take your brand to new heights.
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-white text-black py-20 text-center relative">
          <div className="space-y-8">
            <div className="mx-auto w-[472px] h-[34px] font-poppins font-bold text-[45px] leading-[32px] tracking-[-0.02em] text-[#CBCBCB]">
              What We Do
            </div>

            <div className="mx-auto w-[802px] h-[170px] font-poppins font-bold text-[70px] leading-[80px] tracking-[-0.02em] text-[#3B3E48]">
              Creating Successful Strategies
            </div>

            <div className="mx-auto w-[728px] h-[122px] font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
              Refine your business practices with help from our best-in-class
              team of finance, operations, and marketing experts.
            </div>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-white text-black py-20 text-center relative">
          <div className="space-y-8">
            <div className="mx-auto w-[472px] h-[34px] font-poppins font-bold text-[45px] leading-[32px] tracking-[-0.02em] text-[#CBCBCB]">
              What We Do
            </div>

            <div className="mx-auto w-[802px] h-[170px] font-poppins font-bold text-[70px] leading-[80px] tracking-[-0.02em] text-[#3B3E48]">
              Growing and Scaling Businesses
            </div>

            <div className="mx-auto w-[728px] h-[122px] font-poppins font-normal text-[28px] leading-[36px] tracking-[-0.02em] text-[#3B3E48]">
              Drive sustainable growth by collaborating with us from the ground
              up. Together, we'll transform your business into a legacy brand.
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* Additional slides */}
    </Swiper>
  );
};

export default CarouselSection;
