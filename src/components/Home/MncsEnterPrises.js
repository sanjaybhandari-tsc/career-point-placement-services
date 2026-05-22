import React from "react";
import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";
const logos = [
  {
    src: "/images/homepage/AbbottLogo.svg",
    alt: "AbbottLogo",
    weidth: 103.80330657958984,
    height: 25,
    smW: 70,
  },
  {
    src: "/images/homepage/alkemLogo.svg",
    alt: "alkemLogo",
    weidth: 101,
    height: 36,
    smW: 67,
  },
  {
    src: "/images/homepage/ajantaLogo.svg",
    alt: "anjantaLogo",
    weidth: 235,
    height: 36,
    smW: 150,
  },
  {
    src: "/images/homepage/cilpaLogo.svg",
    alt: "cilpaLogo",
    weidth: 114,
    height: 26,
    smW: 67,
  },
  // {
  //   src: "/images/homepage/emcureLogo.svg",
  //   alt: "emcureLogo",
  //   weidth: "254",
  //   height: "10",
  //   smW: 157,
  // },
  {
    src: "/images/homepage/ZuventusLogo.svg",
    alt: "ZuventusLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/integraceLogo.svg",
    alt: "integraceLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/UsvLogo.svg",
    alt: "UsvLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/MaxLifeLogo.svg",
    alt: "MaxLifeLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/hdfc_lifeLogo.svg",
    alt: "hdfc_lifeLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/LupinLogo.svg",
    alt: "LupinLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/hdfcLogo.svg",
    alt: "MaxLifeLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/bhartiAyalLogo.svg",
    alt: "bhartiAyalLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/zorvialLogo.svg",
    alt: "zorvialLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/CentaurLogo.svg",
    alt: "CentaurLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/AurobindoLogo.svg",
    alt: "AurobindoLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/EnduringValueLogo.svg",
    alt: "EnduringValueLogo",
    weidth: "254",
    height: "60",
    smW: 157,
  },
  {
    src: "/images/homepage/WanburyLogo.svg",
    alt: "WanburyLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/shilpaLogo.svg",
    alt: "shilpaLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/VibrantLogo.svg",
    alt: "VibrantLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/JohnaonLogo.svg",
    alt: "JohnaonLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/raichemLogo.svg",
    alt: "raichemLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/OcSpecialitiesLogo.svg",
    alt: "OcSpecialitiesLogo",
    weidth: "254",
    height: "36",
    smW: 157,
  },
  {
    src: "/images/homepage/adityaBirlaCapital.svg",
    alt: "adityaBirlaCapital",
    weidth: "254",
    height: "36",
    smW: 157,
  },
];

function MncsEnterprises() {
  return (
    <div className="text-center pt-14 md:pt-20 lg:pt-30  pb-7 md:pb-10 lg:pb-15  ">
      <p className="pb-6 md:pb-7 lg:pb-15 text-sm md:text-[16px] lg:text-lg  text-[#333333]">
        Trusted by 100+ MNCs, Enterprises, Startups
      </p>

      <div className={`${styles.marqueeWrapper}`}>
        <div
          className={`${styles.marqueeTrack} flex md:gap-10 h-7 sm:h-8 md:h-9 lg:h-10`}
        >
          {[...Array(3)].map((_, i) =>
            logos.map((logo) => (
              <Image
                key={i}
                width={120}
                height={120}
                src={logo.src}
                alt={logo.alt}
                className={`mx-4 object-contain flex-shrink-0`}
                style={{ width: "auto", height: logo.height }}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}

export default MncsEnterprises;
