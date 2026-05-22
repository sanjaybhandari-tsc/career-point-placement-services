import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import InfoCard from "@/components/Industries/InfoCard";
import { CogIcon  } from "@/components/icons/CogIcon";
import { PulseIcon  } from "@/components/icons/PulseIcon";

export default function IndustryCombined({ data, cards }) {
  const {
    title,
    description1,
    description2,
    imageSrc,
    imageAlt,
    imagePosition = "left",
  } = data;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const isLeft = imagePosition === "left";

  return (
    <section
      ref={sectionRef}
      className="px-4 md:px-14 lg:px-[100px] py-6 md:py-[30px] lg:py-[60px] relative w-full bg-white overflow-hidden"
    >
      {/* ── Image + Text block ── */}
      <div className="pb-3 md:pb-6 lg:pb-[30px]">
        <div className="flex flex-col xl:flex-row items-center gap-10 md:gap-12">
          {/* Text */}
          <div
            className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              ${isLeft ? "order-2 xl:order-2" : "order-2 xl:order-1"}`}
          >
            <h2 className="main-heading mb-5 md:mb-6">{title}</h2>
            <p className="main-content mb-4">{description1}</p>
            <p className="main-content">{description2}</p>
          </div>

          {/* Image */}
          <div
            className={`w-full xl:w-1/2 transform transition-all duration-700 ease-out delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              ${isLeft ? "order-1 xl:order-1" : "order-1 xl:order-2"}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg transition-transform duration-500">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-[240px] sm:h-[260px] md:h-[320px] xl:h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 md:pt-6 lg:pt-[30px]">
        {/* ── Cards grid block ── */}
        {cards?.length > 0 && (
          <div className="pb-8 sm:px-10 md:px-8 lg:px-0">
            {/* Ellipse glow */}
            <div
              className="hidden lg:block absolute bottom-[2%] left-1/2 -translate-x-1/2 w-full h-[120px] rounded-[50%] z-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, #039BE6 2%, #ffffff 100%)",
                filter: "blur(18px) saturate(100%)",
                opacity: 0.12,
              }}
            />

            <div className="relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {cards.map((card, index) => (
                  <article
                    key={index}
                    className={`transition-all duration-700 ease-out transform
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="h-full
                    ">
                      <InfoCard
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
