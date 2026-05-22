import { useEffect, useRef, useState } from "react";

import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    id: 1,
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/testimonials/Ajay Kumar Pandey.png",
    text: "It was an excellent opportunity through Career Point Placement Services. Their support throughout the process was exceptional. I truly appreciate their efforts and highly recommend their services.",
  },
  {
    id: 2,
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/testimonials/Hitesh Dhalawat.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team understood our requirements clearly and delivered the right candidates on time. Highly recommended for their consistent support.",
  },
  {
    id: 3,
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Uday Joshi.png",
    text: "Thanks to CPPS Jobs, I joined Kotak Mahindra Life Insurance as a Divisional Manager. They understood my expectations perfectly and guided me to the right opportunity after my 10+ years at Axis Max Life Insurance.",
  },
  {
    id: 4,
    name: "Somen Roy",
    role: "Chief Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Somen Roy.png",
    text: "Thank you Career Point Placement Services for understanding my requirements and providing excellent support—from interview scheduling to feedback. Everything was managed professionally. I'm happy to have found the right opportunity.",
  },
  {
    id: 5,
    name: "Sachin Pandey",
    role: "Manager Sales @ Prism Johnson Limited",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team clearly understood our needs and delivered the right candidates on time. Highly appreciated and strongly recommended.",
  },
  {
    id: 6,
    name: "Pitchai Vivek Ramasamy",
    role: "Zonal Business Manager @ Cipla",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "The consultancy provided clear, practical guidance that helped me secure the right role for my skills. I highly recommend them for honest advice and effective job search support.",
  },
  {
    id: 7,
    name: "Rahul Pawar",
    role: "Territory Head @ HDFC Life Insurance Co Ltd, Kolhapur",
    image: "/images/testimonials/Rahul Pawar.png",
    text: "Thanks to Career Point Placement Agency, I secured a role at HDFC Life Insurance with great growth and culture. They helped me find the right opportunity in my native place, Kolhapur.",
  },
  {
    id: 8,
    name: "Manmeet Singh Bhakshi",
    role: "Area Manager @ Aditya Birla Health Insurance Co Ltd",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "I joined Aditya Birla Health Insurance as Area Manager. Career Point Placement Services handled the entire process efficiently and truly care about candidates. Thank you for this opportunity.",
  },
  {
    id: 9,
    name: "Mateen Khan",
    role: "Office Head @ Axis Max Life Insurance",
    image: "/images/testimonials/Mateen Khan.png",
    text: "I had a great experience with Career Point Placement Services. The team supported me throughout the process, understood my profile, and matched me with the right opportunity. Highly recommended.",
  },
  {
    id: 10,
    name: "Usha Rane",
    role: "Territory Manager @ HDFC Life Insurance",
    image: "/images/testimonials/Usha Rane.png",
    text: "Career Point Placement Services helped me secure a career advancement with a significant salary increase. Their industry understanding, prompt communication, and efficient coordination ensured a smooth, professional recruitment process.",
  },
  {
    id: 11,
    name: "Mahesh Yadav",
    role: "Accounts Manager @ Johnson Print",
    image: "/images/testimonials/Mahesh Yadav.png",
    text: "I’m very thankful to Career Point Placement Services for guiding me to a great opportunity as an Account Manager. The team supported me throughout. I highly recommend them for career growth.",
  },
];

const testimonialsOld = [
  {
    id: 1,
    name: "Manmeet Singh Bhakshi",
    role: "Area Manager @ Aditya Birla Health Insurance Co Ltd",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "I joined Aditya Birla Health Insurance as Area Manager. Career Point Placement Services handled the entire recruitment process efficiently and truly care about candidates. Thank you for this opportunity.",
  },
  {
    id: 2,
    name: "Sachin Pandey",
    role: "Manager Sales @ Prism Jonshon Limited",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Working with Career Point Placement Services was smooth and professional. The team clearly understood our hiring needs and delivered the right candidates on time. Highly recommended.",
  },
  {
    id: 3,
    name: "Pitchai Vivek Ramasamy",
    role: "Zonal Business Manager @ Cipla",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "The consultancy provided clear guidance that helped me secure the right role. I highly recommend their recruitment support and job consultancy services.",
  },
  {
    id: 4,
    name: "Rahul Pawar",
    role: "Territory Head @ Hdfc Life Insurance Co Ltd.",
    image: "/images/testimonials/Rahul Pawar.png",
    text: "Thanks to Career Point Placement Services, I secured a role at HDFC Life Insurance with great growth and culture. Their hiring support helped me find the right opportunity.",
  },
  {
    id: 5,
    name: "Somen Roy",
    role: "Chief Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Excellent recruitment support from interview scheduling to feedback. Everything was handled professionally.",
  },
  {
    id: 6,
    name: "Ajay Kumar Pandey",
    role: "DSM @ Zuventus HC",
    image: "/images/testimonials/Pitchai Vivek Ramasamy.png",
    text: "It was an excellent opportunity through Career Point Placement Services. Their support throughout the process was exceptional. I truly appreciate their efforts and highly recommend their services.",
  },
  {
    id: 7,
    name: "Hitesh Dhalawat",
    role: "Zonal Business Manager @ Cipla Oncology",
    image: "/images/testimonials/Manmeet Singh Bhakshi.png",
    text: "The team understood our recruitment requirements clearly and delivered the right candidates on time. Highly recommended.",
  },
  {
    id: 8,
    name: "Uday Joshi",
    role: "Divisional Manager @ Kotak Mahindra Life Insurance Co Ltd",
    image: "/images/testimonials/Sachin Pandey.png",
    text: "Career,Point guided me to the right opportunity after 10+ years of experience. Their job consultancy support was very helpful.",
  },
];

export default function TestimonialSection() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);

          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-[30px] lg:py-[60px] relative"
    >
      <div
        className="hidden lg:block absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-full h-[150px] rounded-[50%] z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #039BE6 7%, #ffffff 100%)",
          filter: "blur(18px) saturate(100%)",
          opacity: 0.12,
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`
    text-center mb-10 sm:mb-12
    transform transition-all duration-700 ease-out 
    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 "}
  `}
        >
          <h2 className="main-heading leading-none text-center mb-2 md:mb-3 lg:mb-4">
            Voices of Success
          </h2>

          <p className="main-subheading mb-6 md:mb-12 lg:mb-[60px]">
            Real experiences from candidates and companies who benefited from
            our recruitment, staffing, and hiring solutions.
          </p>
        </div>
      </div>

      <div className="overflow-x-hidden w-full">
        <div
          className={`
       overflow-x-hidden mx-auto transform transition-all duration-700 ease-out relative z-30
      ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
    `}
        >
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="snap-center flex-shrink-0 first:pl-4 first:md:pl-14 first:lg:pl-[100px] last:pr-4 h-full self-stretch"
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
