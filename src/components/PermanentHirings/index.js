import HowWeWork from "../commons/HowWeWork";
import ServicesSecondCompo from "../commons/ServicesSecondCompo";
import WhyChoose from "../commons/WhyChoose";
import Common from "../commons/CTASection";
import HeaderPart from "./HeaderPart";
// import HowWeWork from "./HowWeWork";
import LongtermTalentHiring from "./LongtermTalentHiring";
import WeConnect from "./WeConnect";
import WhychooseUs from "./WhychooseUs";
import HeroText from "../commons/HeroText";

export default function PermanentHirings() {
  const workData = [
    {
      srNo: "01",
      heading: "Requirement Understanding",
      desc: "We begin by understanding the job role, required skills, experience level, and organizational expectations",
    },
    {
      srNo: "02",
      heading: "Talent Sourcing",
      desc: "Candidates are sourced through our database, professional networks, and trusted recruitment platforms.",
    },
    {
      srNo: "03",
      heading: "Screening & Shortlisting",
      desc: "Profiles are carefully reviewed and shortlisted based on qualifications, experience, and role suitability.",
    },
    {
      srNo: "04",
      heading: "Interview Coordination",
      desc: "We coordinate interviews between the client and selected candidates and manage feedback efficiently.",
    },
    {
      srNo: "05",
      heading: "Offer & Onboarding Support",
      desc: "Our team assists with offer discussions, negotiations, and ensures a smooth joining process.",
    },
  ];
  const reasons = [
    {
      img: "/images/permanentHiring/shield-check.svg",
      heading: "Industry-Focused Talent Identification",
      desc: "We identify professionals who understand industry expectations and can contribute effectively to organizational goals.",
    },
    {
      img: "/images/permanentHiring/flask.svg",
      heading: "Comprehensive Candidate Evaluation",
      desc: "Our recruitment process includes structured screening and careful assessment to ensure the right professional fit.",
    },
    {
      img: "/images/permanentHiring/activity-square.svg",
      heading: "Efficient Recruitment Approach",
      desc: "We streamline sourcing, shortlisting, and interview coordination to help organizations secure the right talent efficiently.",
    },
  ];
  const hiringData = [
    {
      title: "Long-Term Talent Hiring",
      image: "/images/permanentHiring/Long-Term Talent Hiring.png",
      objectPosition: "center top",
      description: [
        "Hiring the right professionals for long-term roles is critical for organizations aiming to build stable and high-performing teams. Permanent hiring requires a clear understanding of both the role and the organization’s culture to ensure that the selected candidate can contribute effectively over time.",
        "Our approach focuses on identifying professionals who not only possess the required skills and experience but also align with the organization’s values and long-term objectives. By carefully evaluating candidates through structured screening and industry insights, we help businesses secure talent that strengthens their workforce.",
        "With a strong network of professionals and a systematic recruitment process, we assist organizations in finding reliable talent that supports operational efficiency, business growth, and long-term success.",
      ],
    },
  ];
  return (
    <>
      <HeroText headingText={"Permanent Hiring"} />

      <ServicesSecondCompo hiringData={hiringData} />
      {/* <LongtermTalentHiring /> */}
      {/* <WhychooseUs /> */}
      <WhyChoose reasons={reasons} />
      <HowWeWork workData={workData} />
      <WeConnect />
      <Common />
    </>
  );
}
