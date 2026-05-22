import React, { useMemo, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Lastmessage() {
  function useScreenSize() {
    const [screenWidth, setScreenWidth] = useState(
      typeof window !== "undefined" ? window.innerWidth : 1024,
    );

    useEffect(() => {
      const handler = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }, []);

    return screenWidth;
  }

  const screenWidth = useScreenSize();

  const iconSize = useMemo(() => {
    if (screenWidth < 768) return 24; // Mobile  — matches 18px font visually
    if (screenWidth < 1024) return 28; // Tablet  — slightly larger than 24px font
    return 52; // Desktop — matches 48px font
  }, [screenWidth]);

  return (
    <section className="w-full px-2 md:px-16 bg-white py-16 md:py-24">
      <div className="flex items-start ">
        <Image
          src="/images/about/quote.svg"
          alt="quote"
          width={iconSize}
          height={iconSize}
          className="object-cover flex-shrink-0 -mt-1"
        />
        <h2 className="independent-text">
          We help
          <span className="independent-text text-[#0277BD]"> organizations </span> identify experienced          
          <span className="independent-text text-[#0277BD]"> leaders</span> who bring strong vision and industry 
          <span className="independent-text text-[#0277BD]"> expertise</span>.
        </h2>
      </div>
    </section>
  );
}
