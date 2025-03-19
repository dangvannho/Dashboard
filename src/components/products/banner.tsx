import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  id: number;
  date: string;
  title: string;
  description: string;
  buttonText: string;
}

const banners: Banner[] = [
  {
    id: 1,
    date: "September 12-22",
    title: "Enjoy free home delivery in this summer",
    description: "Designer Dresses - Pick from trendy Designer Dress.",
    buttonText: "Get Started",
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const handlePrevious = () => {
    setCurrentBanner((prev) => (prev > 0 ? prev - 1 : banners.length - 1));
  };
  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  return (
    <div
      className="relative bg-[#4880FF] text-white p-20 rounded-[20px]
     h-[350px] flex flex-col justify-center overflow-hidden"
    >
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#fff]
         p-2 rounded-full shadow-sm hover:bg-white transition-colors"
        onClick={handlePrevious}
      >
        <ChevronLeft size={16} />
      </button>
      <div className="max-w-[80%]">
        <span className="text-[14px]  text-white/90">
          {banners[currentBanner].date}
        </span>

        <h1 className="text-[40px] font-bold leading-[48px] mt-3 pl-0 pr-[380px] ">
          {banners[currentBanner].title}
        </h1>

        <p className="text-[16px] mt-2 text-white/80">
          {banners[currentBanner].description}
        </p>

        <button
          className="bg-[#FF7E20] hover:bg-[#FF7E20]/90 px-6 py-3
         mt-6 rounded-[10px] text-[14px] font-semibold transition-colors"
        >
          {banners[currentBanner].buttonText}
        </button>
      </div>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2
         bg-white/80 p-2 rounded-full shadow-sm hover:bg-white transition-colors"
        onClick={handleNext}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Banner;
