import Link from "next/link";
import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";

export default function HeroSection() {
  const bannerItems = [
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Global Clients" },
    { value: "15K+", label: "Placements" },
    { value: "48hrs", label: "Talent Match" },
  ];
  return (
    <>
      <div className="relative flex justify-center items-center min-h-[68vh] sm:min-h-[75vh] lg:h-[130vh] w-full overflow-hidden rounded-b-4xl">
        <Image
          src="/images/homepage/HeroImage.webp"
          alt="Hero image"
          fill
          className="object-cover lg:scale-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#66666600] to-[#00000075]"></div>

        <div
          className={`absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[50%] sm:-top-[38%] md:-top-[45%] lg:w-[120%] lg:h-[130%] lg:-top-[60%] lg:-left-[10%] rounded-[50%] bg-gradient-to-t from-[#080F249C] to-[#039BE69C] ${styles.slideDown} flex flex-col justify-end items-end`}
        >
          <div
            className={`absolute inset-0  min-w-[95%] md:min-w-[70%] lg:min-w-[60%] flex flex-col gap-2.5 md:gap-3 lg:gap-10.5 items-center justify-end text-center px-4 pb-10 sm:pb-16 md:pb-20 lg:pb-25 pt-4 ${styles.slideup}`}
          >
            <div className=" px-3 py-1 lg:px-4 border border-white rounded-full backdrop-blur-md text-sm flex justify-center items-center gap-2 md:gap-5 bg-transparent">
              <Image
                src="/images/homepage/HeroInnerImg.png"
                alt="Glassdoor rating badge"
                width={24}
                height={24}
                className="w-4 h-4 lg:w-6 lg:h-6"
              />
              <div className="text-[10px] md:text-[12px]">
                <p className=" text-start tracking-wider leading-tight">
                  <span className=" text-white">4.8 </span>
                  <span className="text-amber-300">★★★★★</span>
                </p>
                <p className=" text-[#FFFFFF] ">based on Glassdoor reviews</p>
              </div>
            </div>

            <div className="max-w-[85%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[45%] flex flex-col justify-center items-center">
              <h1 className="hero-heading-extra-home text-white ">
                Hire Exceptional <span className="lg:block">Talent</span>
              </h1>

              <p className="text-sm md:text-lg lg:text-xl text-white">
                Connect with skilled professionals across industries and build
                high-performing teams faster.
              </p>
            </div>

            <button className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-lg border-[1.5px]  border-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base whitespace-nowrap text-white group hover:border-transparent transition-colors cursor-pointer">
              <span className="relative z-10 flex items-center gap-2.5">
                <Link href="/get-in-touch">
                  <p className="small-text">Get in touch</p>
                </Link>
                <Image
                  src="/images/homepage/HeroSendIcon.png"
                  alt="Send"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </span>
              <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-[var(--color-primary-hover)] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`w-full relative  flex justify-center -mt-16 sm:-mt-11  md:-mt-16 lg:-mt-24  z-10 `}
      >
        <div
          className={`w-[90%] py-3 px-3 sm:py-4 sm:px-6 lg:py-12 lg:px-20 rounded-4xl dark:text-[#333333] flex flex-wrap sm:flex-nowrap justify-between gap-y-3 bg-gradient-to-r from-[#E6F6FD] to-[#FEFFFE] ${styles.statsShadow}`}
        >
          {bannerItems.map(({ value, label }) => (
            <div key={label} className="text-center w-1/2  sm:w-full">
              <h2 className="hero-bottom  !font-[700] md:!font-[800] lg:!font-[900] font-montserrat text-[#0277BD] lg:mb-2.5 ">
                {value}
              </h2>
              <p className="content font-mediumc md:font-bold lg:font-extrabold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
