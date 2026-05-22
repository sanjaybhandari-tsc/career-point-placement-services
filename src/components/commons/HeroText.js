import Image from "next/image";
import React, { useRef, useEffect } from "react";

function HeaderPart({ headingText }) {
  return (
    <header
      className="h-[56px] md:h-[80px] lg:h-[120px] relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] md:py-12 py-10 mb-[28px]   md:mb-[40px] lg:mb-[60px] rounded-b-2xl overflow-hidden" aria-label={`${headingText}`}>
      <img
        className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
        src="/images/permanentHiring/permanentTop1.svg"
        aria-hidden="true"
      />
      <img
        className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
        src="/images/permanentHiring/permanentTop2.svg"
        aria-hidden="true"
      />

      <img
        className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
        src="/images/permanentHiring/permanentTop3.svg"
        aria-hidden="true"
      />
      <img
        className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
        src="/images/permanentHiring/permanentTop4.svg"
        aria-hidden="true"
      />
      <h2 className="heading-bold text-white">{headingText}</h2>
    </header>
  );
}

export default HeaderPart;

    // <div className="relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-12 lg:py-22 rounded-b-2xl overflow-hidden">
    //   <img
    //     className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
    //     alt="header parmanent hiring"
    //     src="/images/permanentHiring/permanentTop1.svg"
    //   />
    //   <img
    //     className="absolute  lg:top-0 lg:left-0  md:top-0 md:left-0 -top-10 -left-5 "
    //     alt="header parmanent hiring"
    //     src="/images/permanentHiring/permanentTop2.svg"
    //   />

    //   <img
    //     className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
    //     alt="header parmanent hiring"
    //     src="/images/permanentHiring/permanentTop3.svg"
    //   />
    //   <img
    //     className="absolute lg:top-0 lg:right-0 md:top-0 md:right-0  -top-10 -right-5"
    //     alt="header parmanent hiring"
    //     src="/images/permanentHiring/permanentTop4.svg"
    //   />
    //   <h1 className="font-black lg:text-5xl text-3xl text-white">
    //     {headingText}
    //   </h1>
    // </div>
    //  <header>
    //   <section className="relative flex justify-center items-center bg-gradient-to-b from-[#0277BD] to-[#0E6497] py-10 md:py-14 lg:py-16 mb-10 md:mb-14 lg:mb-16 rounded-b-2xl overflow-hidden">

    //     {/* Decorative Elements */}
    //     <Image
    //       className="absolute -top-13 lg:-top-10 -left-5"
    //       alt=""
    //       aria-hidden="true"
    //       src="/images/permanentHiring/permanentTop1.svg"
    //       width={70}
    //       height={70}
    //     />

    //     <Image
    //       className="absolute -top-7 -left-0 lg:top-0 lg:left-0 md:-top-4 md:left-0"
    //       alt=""
    //       aria-hidden="true"
    //       src="/images/permanentHiring/permanentTop2.svg"
    //       width={100}
    //       height={100}
    //     />

    //     <Image
    //       className="absolute -top-7 -right-0 lg:top-0 lg:right-0 md:-top-4 md:right-0"
    //       alt=""
    //       aria-hidden="true"
    //       src="/images/permanentHiring/permanentTop3.svg"
    //       width={100}
    //       height={100}
    //     />

    //     <Image
    //       className="absolute -top-13 lg:-top-10 -right-5"
    //       alt=""
    //       aria-hidden="true"
    //       src="/images/permanentHiring/permanentTop4.svg"
    //       width={70}
    //       height={70}
    //     />

    //     {/* Main Heading */}
    //     <h1 className="main-heading  tracking-normal text-white">
    //       {headingText}
    //     </h1>

    //   </section>
    // </header>