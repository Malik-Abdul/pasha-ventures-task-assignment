"use client";

import BelowHeaderSection from "./BelowHeaderSection";
import CarouselSection from "./CarouselSection";
import Header from "./Header";
import HowWeDoItSection from "./HowWeDoItSection";
import OurPortfolio from "./OurPortfolio";
import WhyMonolith from "./WhyMonolith";

const MainLayout = () => {
  return (
    <div className="w-full mt-0">
      <Header />
      <BelowHeaderSection />
      <CarouselSection />
      <HowWeDoItSection />
      <OurPortfolio />
      <WhyMonolith />
    </div>
  );
};
export default MainLayout;
