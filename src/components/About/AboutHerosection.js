import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "@/styles/hiring/Hiring.module.css";

export default function AboutHeroSection() {
  return (
    <section className="pb-3 md:pb-6 lg:pb-[30px] relative w-full min-h-dvh md:min-h-screen flex items-center rounded-b-3xl overflow-hidden">
      <Image
        src="/images/about/aboutHero.webp"
        alt="About Us"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className={`${styles.slideLayer}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/0 z-10 rounded-b-3xl overflow-hidden" />

        <div className="w-full h-auto gap-6 relative max-w-6xl mx-0 z-20 px-6 md:px-20 text-white z-20">
          <h1 className="banner-heading ">
            About Us
          </h1>

          <p className=" banner-content mt-[8px] leading-relaxed text-gray-200 max-w-5xl !font-roboto">
            Connecting organizations with the right talent through structured recruitment solutions and industry-focused expertise. We support businesses in building strong teams that drive long-term growth and success.
          </p>
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