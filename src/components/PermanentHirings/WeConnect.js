import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(0); 

  useEffect(() => {
    setScreenWidth(window.innerWidth); 
    const handler = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return screenWidth;
}

export default function WeConnect() {
  const screenWidth = useScreenSize();

  const iconSize = useMemo(() => {
    if (screenWidth < 768) return 24; // Mobile  — matches 18px font visually
    if (screenWidth < 1024) return 28; // Tablet  — slightly larger than 24px font
    return 52; // Desktop — matches 48px font
  }, [screenWidth]);

  return (
    <section className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] w-full bg-white">
      <div className="flex items-start ">
        {" "}

        {screenWidth > 0 && ( 
          <Image
            src="/images/about/quote.svg"
            alt="Quotation icon"
            width={iconSize}
            height={iconSize}
            className="object-contain flex-shrink-0 -mt-1 md:-mt-1.5 lg:-mt-2" 
          />
        )}
        <h2 className=" independent-text">
          We <span className="text-[#0277BD]">connect </span>
          organizations with professionals who align with their
          <span className="text-[#0277BD]"> goals</span> and
          culture.
        </h2>
      </div>
    </section>
  );
}
