import styles from "@/styles/hiring/Hiring.module.css";
import Image from "next/image";
import HeroWrapper from "@/components/HeroWrapper";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className=" pb-3 md:pb-6 lg:pb-[30px] relative w-full min-h-dvh md:min-h-screen flex items-center rounded-b-3xl overflow-hidden">
      <Image
        src="/images/hiringsolutions/heroSectionHiringSolutions.webp"
        alt="Hiring solutions and staffing services"
        fill
        priority
        className="object-cover object-center"
      />

      <div className={`${styles.slideLayer}`}>
        <div
          className={`absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/0 z-10 rounded-b-3xl overflow-hidden`}
        />

        <div className="w-full h-auto gap-6 relative max-w-6xl mx-0 z-20 px-6 md:px-20 text-white z-20">
          <h1 className="banner-heading ">
            Smart hiring Solutions     
          </h1>
          {/* <h1 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-[48px] md:text-5xl lg:text-6xl leading-tight">
            Smart hiring Solutions
          </h1> */}
          <p className="banner-content  max-w-4xlt  leading-relaxed text-gray-200 !font-roboto">
            Connecting organizations with skilled professionals through reliable
            and efficient recruitment support, helping businesses build stronger
            teams and achieve long-term growth.
          </p>
          {/* <p className="font-roboto font-normal text-lg sm:text-xl lg:text-2xl leading-relaxed mt-4 md:text-lg text-gray-200 max-w-4xl">
            Connecting organizations with skilled professionals through reliable
            and efficient recruitment support, helping businesses build stronger
            teams and achieve long-term growth.
          </p> */}
          {/* <button
            className={`mt-6 relative overflow-hidden w-40 sm:w-44 md:w-48 lg:w-50 h-10 sm:h-11 md:h-12 flex items-end justify-center gap-2.5 rounded-lg border-[1.5px] border-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-white group hover:border-0`}
          >
            <span className="absolute flex z-10 gap-2.5">
              <p className="small-text">Get in touch</p>
              <img src="/images/homepage/HeroSendIcon.png" />
            </span>
            <span className=" left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-5 h-5 bg-[var(--color-primary)] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1000 origin-center"></span>
          </button> */}
          <button className="mt-10 relative subheading-content-space overflow-hidden bg-[var(--color-primary-hover)] lg:bg-transparent border-0  lg:border-white  flex items-end justify-center gap-2.5 rounded-lg lg:border-[1.5px] Common_btn text-white group hover:border-transparent transition-colors  cursor-pointer"
          >
            <Link
              href="/get-in-touch">
              <span className="relative z-10 flex items-center gap-2.5">
                <p className="banner-content">
                  Get in touch
                </p>
                <Image
                  src="/images/about/sendIcon.svg"
                  alt="send Icon"
                  width={24}
                  height={24}
                />
              </span>

              <span className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-5 h-5  bg-[var(--color-primary-hover)] rounded-full scale-0 group-hover:scale-[15] transition-transform duration-1500 "></span></Link>
          </button>
        </div>
      </div>
    </section>
  );
}


