import React, { useEffect } from 'react'

export default function Ourjourney() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-x-0",
                            "translate-y-0"
                        );
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -80px 0px"
            }
        );

        const elements = document.querySelectorAll(".journey-item");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className='bg-[linear-gradient(180deg,rgba(250,250,250,0.25)_0%,rgba(3,155,230,0.12)_50%,rgba(250,250,250,0.15)_100%)] overflow-hidden w-full px-4 sm:px-6 md:px-16 lg:px-30 py-[28px] md:py-[40px] lg:py-[60px]'>

            <div className="journey-item opacity-0 -translate-y-10 transition-all duration-500 ease-out text-center pb-12 md:pb-20 lg:pb-20">
                <h2 className="main-heading text-center">
                    Our <span className="text-blue-500">Journey</span>
                </h2>
                <p className="text-[#000000] pt-2 md:pt-3 lg:pt-4 main-content">
                    A journey of growth, partnerships, and milestones in building successful recruitment solutions
                </p>
            </div>

            <div className="block ">

              
                <div className="journey-item opacity-0 -translate-y-6 transition-all duration-500 ease-out border-b border-gray-300 py-8 ">
                    <p className="content leading-[150%] tracking-normal mb-2">2009 - 2012</p>
                    <h3 className="text-[18px] md:text-[24px] lg:text-[32px] leading-[150%]  font-semibold tracking-normal mb-4 font-montserrat">Building the Foundation</h3>
                    <p className="text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] font leading-[150%] tracking-normal font-roboto ">
                        Career Point Placement Services was established with a 150 sq. ft office and a team of 3 recruiters, serving its first BFSI client. Over the initial years, the company steadily expanded operations to a 350 sq. ft office with a team of 10 recruiters and partnerships with 7 BFSI clients. By 2012, Career Point had built a{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">strong foundation</span>{" "}
                        in recruitment services, achieving annual revenue growth from{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">400%</span>{" "}
                        through consistent client trust and operational expansion.
                    </p>
                </div>

                {/* 2013 – 2016 */}
                <div className="journey-item opacity-0 -translate-y-6 transition-all duration-500 ease-out border-b border-gray-300 py-8">
                    <p className="content  leading-[150%] tracking-normal mb-2">2013 - 2016</p>
                    <h3 className="text-[18px] md:text-[24px] lg:text-[32px] leading-[150%]  font-semibold tracking-normal mb-4 font-montserrat">Expanding Horizons</h3>
                    <p className="text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] font leading-[150%] tracking-normal font-roboto">
                        The company scaled operations with office expansion to 750 sq. ft and later 1200 sq. ft, strengthening its recruitment and financial service capabilities. Career Point expanded its presence across BFSI and pharmaceutical sectors, serving over{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">25 clients</span>{" "}
                        with a growing workforce of recruiters and loan collection executives. Organization achieved revenue growth up to{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">300%</span>
                        , marking a significant step in business diversification and operational growth.
                    </p>
                </div>

                {/* 2017 – 2020 */}
                <div className="journey-item opacity-0 -translate-y-6 transition-all duration-500 ease-out border-b border-gray-300 py-8">
                    <p className="content  leading-[150%] tracking-normal mb-2">2017 - 2020</p>
                    <h3 className="text-[18px] md:text-[24px] lg:text-[32px] leading-[150%]  font-semibold tracking-normal mb-4 font-montserrat">Strengthening Operations &amp; Career Solutions</h3>
                    <p className="text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] font leading-[150%] tracking-normal font-roboto">
                        Career Point launched Excel Career Management to support professional career consulting and candidate training, further strengthening its recruitment ecosystem. The company moved into its own office premises and expanded operations with recruiters, freelancers, and clients across BFSI, FMCG, manufacturing, pharma sectors. With a growing client portfolio of{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">40+ organizations</span>
                        , the company achieved{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">200%</span>{" "}
                        over last revenue and established a stronger market presence through operational excellence and diversified services.
                    </p>
                </div>

                {/* 2021 – Present */}
                <div className="journey-item opacity-0 -translate-y-6 transition-all duration-500 ease-out pt-8">
                    <p className="content  leading-[150%] tracking-normal mb-2">2021 - Present</p>
                    <h3 className="text-[18px] md:text-[24px] lg:text-[32px] leading-[150%]  font-semibold tracking-normal mb-4 font-montserrat">Strategic Growth &amp; Quality Recognition</h3>
                    <p className="text-[#000000] text-[14px] md:text-[16px] lg:text-[18px] font leading-[150%] tracking-normal font-roboto">
                        Career Point continued its expansion journey by launching Laxmi Financial Solution and Excel Engineering Solution, strengthening its service offerings across multiple industries. The organization expanded its workforce and continued serving 40+ clients nationwide while achieving the milestone of{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">₹1 crore revenue</span>
                        . The company further strengthened its credibility by achieving{" "}
                        <span className="subheading-semibold leading-[150%] tracking-normal text-[#0277BD]">ISO 1002:2018</span>{" "}
                        certifications, reflecting its commitment to quality standards and client satisfaction. Career Point also promoted employees as business partners and onboarded new clients across diverse sectors, continuing its journey of sustainable growth and long-term partnerships.
                    </p>
                </div>

            </div>

        </div>
    )
}