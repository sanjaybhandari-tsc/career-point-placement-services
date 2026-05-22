import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BuildingCarrers() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full px-4  sm:px-10 md:px-16 lg:px-20 xl:px-30 py-[28px]   md:py-[40px] lg:py-[60px]  m-auto bg-white overflow-hidden"
    >
       <h2 className=" lg:hidden text-center main-heading pb-2 md:pb-3">
            Building Careers
          </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-15 ">
        <div
          className={` transition-all  lg:h-auto duration-700 ease-out flex items-center ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
        >
          <Image
            src="/images/about/buildingCarrers.svg"
            alt="Building Careers"
            width={500}
            height={500}
            className="w-full h-[200px] md:h-[350px]  lg:h-[400px] xl:h-[435px]  object-contain"
          />
        </div>
        <div
          className={`w-full lg:w-[60%] flex flex-col gap-2 sm:gap-4 text-[#333333] transition-all duration-700 delay-200 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          <div>
          <h2 className="hidden lg:block main-heading ">
            Building Careers
          </h2></div>
          <div className="flex gap-[8px]  flex-col">
          <p className="main-content  !font-roboto ">
            Career Point Placement Services is a trusted recruitment partner helping organizations connect with skilled professionals across industries. With more than 17 years of experience in the recruitment industry, we have successfully supported companies in building strong and capable teams.
          </p>

          <p className="main-content  !font-roboto ">
            Over the years, we have placed more than 15,000 candidates across India, supporting hiring from junior to senior leadership roles with compensation ranging from 3 LPA to 2 CR. Our extensive candidate database and experienced recruitment team enable us to deliver reliable talent solutions across Pharmaceutical, Manufacturing, Building Materials, BFSI, and FMCG sectors.
          </p>

          <p className="main-content  !font-roboto">
            Our approach is built on ethical practices, industry expertise, and a strong commitment to helping organizations find the right talent for long-term growth.
          </p></div>

        </div>

      </div>
    </div>
  );
}