import ExecutiveBanner from "./ExecutiveBanner";
import StategicLeaderShipHiring from "./StategicLeaderShipHiring";
// import CTASection from "./CTASection";
import Lastmessage from "./Lastmessage";
import WhyChooseUsSection from "./WhyChooseUsSection";
// import HowWeWork from "./HowWeWork";
import HeroText from "../commons/HeroText";
import HowWeWork from "../commons/HowWeWork";
import WhyChoose from "../commons/WhyChoose";
import ServicesSecondCompo from "../commons/ServicesSecondCompo";
import Common from "../commons/CTASection";

export default function RPO() {
  const workData = [
    {
      srNo: "01",
      heading: "Hiring Plan Understanding",
      desc: "We begin by understanding the client’s hiring goals, company culture, and role requirements.",
    },
    {
      srNo: "02",
      heading: "Dedicated Team Assignment",
      desc: "A specialized recruitment team is assigned to manage the hiring process for the client.",
    },
    {
      srNo: "03",
      heading: "Sourcing & Screening",
      desc: "Candidates are sourced, evaluated, and shortlisted based on role requirements and organizational fit.",
    },
    {
      srNo: "04",
      heading: "Interview Coordination",
      desc: "We manage interview scheduling, feedback tracking, and communication throughout the evaluation process.",
    },
    {
      srNo: "05",
      heading: "Offer & Reporting Management",
      desc: "Our team handles offer rollouts, joining follow-ups, and provides regular hiring reports and recruitment insights.",
    },
  ];
  const reasons = [
    {
      heading: "Dedicated Recruitment Team",
      desc: "A focused recruitment team works closely with the client to manage ongoing hiring requirements.",
      img: "/images/permanentHiring/shield-check.svg",
    },
    {
      heading: "Structured Hiring Management",
      desc: "We streamline sourcing, screening, and interview coordination to improve recruitment efficiency.",
      img: "/icons/rpa/Structured Hiring Management.svg",
    },
    {
      heading: "Recruitment Insights & Reporting",
      desc: "Regular hiring updates, recruitment trackers, and analytics help maintain transparency throughout the process.",
      img: "/images/permanentHiring/activity-square.svg",
    },
  ];1
  const hiringData = [
    {
      title: "Managed Hiring Solutions",
      image: "/images/rpa/Managed Hiring Solutions.png",
      objectPosition: "center top",
      description: [
        "Recruitment Process Outsourcing (RPO) allows organizations to delegate part or the entire recruitment function to a dedicated recruitment partner. This approach helps companies streamline hiring activities while improving efficiency and consistency.",
        "Our RPO solutions provide organizations with a structured recruitment process supported by a dedicated hiring team. From sourcing and screening candidates to managing interviews, offer rollouts, and reporting, we ensure a smooth and organized recruitment workflow.",
      ],
    },
  ];
  return (
    <>
      {/* <ExecutiveBanner /> */}
      <HeroText headingText={"Recruitment Process Outsourcing"} />
      <ServicesSecondCompo hiringData={hiringData} />
      {/* <StategicLeaderShipHiring /> */}
      <WhyChoose reasons={reasons} />
      {/* <WhyChooseUsSection /> */}
      {/* <HowWeWork /> */}
      <HowWeWork workData={workData} />
      <Lastmessage />
      <Common />
    </>
  );
}
