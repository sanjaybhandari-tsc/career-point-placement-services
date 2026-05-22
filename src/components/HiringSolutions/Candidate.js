import Image from "next/image";
import React from "react";

export default function CandidateNetworkSection() {
  const works = [
    {
      img: "/images/hiringsolutions/Extensive Candidate Network.jpg",
      srNo: "01",
      objectPosition: "center center",
      heading: "Extensive Candidate Network",
      desc: "Over the years, Career Point Placement Services has developed a large and active network of professionals across multiple industries. Our continuously growing candidate database allows us to connect with individuals from different experience levels and functional areas. This strong network enables us to quickly identify relevant candidates and provide organizations with access to a broader talent pool when hiring for critical roles.",
    },
    {
      img: "/images/hiringsolutions/Multi-Channel Talent Search Landscape.png",
      srNo: "02",
      objectPosition: "center top",
      heading: "Multi-Channel Talent Search",
      desc: "Our sourcing strategy uses multiple talent channels to ensure access to the best available candidates. Recruitment efforts include professional networking platforms, trusted job portals, industry references, and employee referrals. By combining these sources, we are able to reach both active job seekers and passive professionals who may be open to the right career opportunity.",
    },
    {
      img: "/images/hiringsolutions/Industry-Focused Hiring Landscape.png",
      srNo: "03",
      objectPosition: "center top",
      heading: "Industry-Focused Hiring",
      desc: "With years of recruitment experience across sectors such as Pharmaceutical, Manufacturing, BFSI, FMCG, and Building Materials, our team understands the unique hiring requirements of each industry. This sector-focused approach helps us identify candidates with the right technical knowledge, industry exposure, and professional background needed to succeed in specialized roles.",
    },
    {
      img: "/images/hiringsolutions/Pre-Screened Talent Pool Landscape.png",
      srNo: "04",
      objectPosition: "center center",
      heading: "Pre-Screened Talent Pool",
      desc: "Before presenting candidate profiles to clients, we ensure that potential candidates go through an initial screening process. This includes reviewing experience, skill sets, and role compatibility to ensure alignment with the client's requirements. By recommending only relevant and qualified profiles, we help organizations save time and improve the efficiency of their hiring process.",
    },
  ];

  return (
    <section className="px-4 md:px-14 lg:px-[100px] pb-6 md:pb-[30px] lg:pb-[60px] pt-12 md:pt-[60px] lg:pt-[120px]">
      <div className="max-w-6xl mx-auto text-center px-2 sm:px-4 lg:px-6 pb-10 sm:pb-12 lg:pb-14">
        
        <h2 className="main-heading">
          Our Talent{" "}
          <span className="text-[var(--color-primary)]">Sourcing Strategy</span>
        </h2>
      </div>

      <div className="min-h-[200vh] md:pb-10 lg:px-10">
        {works.map((work, idx) => (
          <React.Fragment key={idx}>
            {idx % 2 === 0 ? (
              <div
                className="
                sticky top-[48px] min-h-[calc(100vh-48px)]
                md:top-[60px] md:min-h-[calc(100vh-60px)]
                lg:top-[80px] lg:min-h-[calc(100vh-80px)]
                z-10 rounded-[40px] overflow-hidden
                bg-[#0B2239] text-white flex flex-col lg:flex-row
              "
              >
                <div className="relative w-full h-[220px] md:h-[300px] lg:h-auto lg:w-1/2">
                  <Image
                    src={work.img}
                    alt={work.heading}
                    fill
                    className="object-cover"
                    style={{ objectPosition: work.objectPosition }}
                  />
                </div>
                <div className="w-full lg:w-1/2 py-4 px-7 lg:p-12 flex flex-col justify-center gap-4 md:gap-5 lg:gap-10">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="main-heading font-semibold lg:mt-4">
                      {work.heading}
                    </h3>
                    <p className="main-subheading ">{work.desc}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="
                sticky top-[48px] min-h-[calc(100vh-48px)]
                md:top-[60px] md:min-h-[calc(100vh-60px)]
                lg:top-[80px] lg:min-h-[calc(100vh-80px)]
                z-10 rounded-[40px] overflow-hidden
                bg-[#0B2239] text-white flex flex-col lg:flex-row
              "
              >
                <div className="relative w-full h-[220px] md:h-[300px] lg:hidden">
                  <Image
                    src={work.img}
                    alt={work.heading}
                    fill
                    className="object-cover"
                    style={{ objectPosition: work.objectPosition }}
                  />
                </div>
                <div className="w-full lg:w-1/2 py-4 px-7 lg:p-12 flex flex-col justify-center gap-4 md:gap-5 lg:gap-10">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="main-heading font-semibold lg:mt-4">
                      {work.heading}
                    </h3>
                    <p className="main-subheading">{work.desc}</p>
                  </div>
                </div>
                <div className="relative hidden lg:block lg:w-1/2">
                  <Image
                    src={work.img}
                    alt={work.heading}
                    fill
                    className="object-cover"
                    style={{ objectPosition: work.objectPosition }}
                  />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
