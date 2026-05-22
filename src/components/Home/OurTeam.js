import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Home/Home.module.css";
import Image from "next/image";

function OurTeam() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },

      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const teams = [
    {
      img: "/images/homepage/ReameshD.svg",
      name: "Ramesh D. Waychal",
      department: "Managing Director",
      desc: "25+ years of expertise in HR",
      FB: "https://facebook.com/username",
      LinkedIn: "https://linkedin.com/in/username",
      Twitter: "https://twitter.com/username",
    },
    {
      img: "/images/homepage/UmakantYelka.webp",
      name: "Umakant Yelka",
      department: "Business Partner - BFSI",
      desc: "17+ years in BFSI Recruitment ",
      FB: "https://facebook.com/username",
      LinkedIn: " https://www.linkedin.com/in/umakant-yelka-01b507180/ ",
      Twitter: "https://twitter.com/username",
    },
    {
      img: "/images/homepage/ParveenMulla.webp",
      name: "Parveen Mulla",
      department: "Business Partner - BFSI",
      desc: "15+ Years in BFSI Recruitment",
      FB: "https://www.facebook.com/share/17aNMYtWri/",
      LinkedIn:
        " https://www.linkedin.com/in/paraveen-jamadar-371b66368?utm_source=share_via&utm_content=profile&utm_medium=member_android ",
      Twitter: "https://twitter.com/username",
    },
    {
      img: "/images/homepage/Abhishek.webp",
      name: "Abhishek Gangareddy",
      department: "Business Partner -Pharma Manufacturing",
      desc: "15+ Years in BFSI Recruitment",
      LinkedIn:
        " https://www.linkedin.com/in/abhishek-gangareddy-73348a155?utm_source=share_via&utm_content=profile&utm_medium=member_android ",
      FB: "https://www.facebook.com/share/17veTECogf/",
      Twitter: "https://twitter.com/username",
    },
    {
      img: "/images/homepage/Karishma.svg",
      name: "Karishma Saifan",
      department: "Business Partner -Pharma",
      desc: "9+ Years in Pharmaceutical Hiring ",
      FB: "https://facebook.com/username",
      LinkedIn: "https://www.linkedin.com/in/karishma-s-b312b2184/ ",
      Twitter: "https://twitter.com/username",
    },
    {
      img: "/images/homepage/KausarMulla.webp",
      name: "Kausar Mulla",
      department: "Business Partner -Pharma ",
      desc: "9+ Years in Pharma Recruitment",
      FB: "https://facebook.com/username",
      LinkedIn: "www.linkedin.com/in/kausar-m-2644b236b",
      Twitter: "https://twitter.com/username",
    },
    {
      img: "/images/homepage/Amruta.svg",
      name: "Amruta Salunke",
      department: "Business Partner -Pharma ",
      desc: "8+ Years in Pharma Hiring",
      LinkedIn:
        " https://www.linkedin.com/in/amruta-salunke-ba60133a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  ",
      FB: " https://www.facebook.com/profile.php?id=100049265576323 ",
      Twitter: "https://twitter.com/username",
    },
  ];
  return (
    <div className="py-7 md:py-10 lg:py-15 px-4 flex flex-col  gap-6 md:gap-12 lg:gap-15 items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center max-w-[90%] md:w-[70%] gap-2 md:gap-3 lg:gap-4">
        <h2 className="heading !font-bold">
          Meet Our <span className=" text-[#0277BD]">Team</span>
        </h2>
        <p className="content">
          A team of experienced professionals delivering strong hiring solutions
          with deep expertise, strategic thinking, and a people-first approach
          to building high-performing teams.
        </p>
      </div>

      <div
        ref={ref}
        className={` w-full   ${visible ? styles.slideright : "opacity-0"} `}
      >
        <div className=" flex flex-nowrap overflow-x-auto overflow-y-hidden pl-4 gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {teams.map((team, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col group items-center h-fit py-1 gap-3 w-full md:1/2 lg:w-1/3 font-medium"
              >
                <div className="relative rounded-full w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden">
                  <Image
                    src={team.img}
                    alt={team.name}
                    fill
                    className="object-cover"
                  />

                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(81, 81, 81, 0.37) 0%, rgba(19, 19, 19, 0.37) 100%)",
                    }}
                  />

                  <div
                    className={`absolute -left-[8%] w-[116%] h-[116%] rounded-full bg-[#039BE6]/90 flex justify-center top-40 py-5 gap-4 lg:top-[100%] lg:py-13 lg:gap-13 transition-all duration-500 lg:group-hover:top-60 lg:group-hover:py-8 lg:group-hover:gap-4 ${styles.slideup}`}
                  >
                    <a href={team.LinkedIn}>
                      <Image
                        src="/images/homepage/brand-linkedin.svg"
                        alt="LinkedIn"
                        width={36}
                        height={36}
                        className="w-9 h-9"
                      />
                    </a>
                    <a href={team.Twitter} className="relative -top-2.5">
                      <Image
                        src="/images/homepage/brand-x.svg"
                        alt="Twitter / X"
                        width={36}
                        height={36}
                        className="w-9 h-9"
                      />
                    </a>
                    <a href={team.FB}>
                      <Image
                        src="/images/homepage/brand-facebook.svg"
                        alt="Facebook"
                        width={36}
                        height={36}
                        className="w-9 h-9"
                      />
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <p className="content">{team.name}</p>
                  <h3 className="content !font-semibold">{team.department}</h3>
                </div>
                <p className="small-text">{team.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
