import ExecutiveBanner from "./ExecutiveBanner";
import StategicLeaderShipHiring from "./StategicLeaderShipHiring";
import WhyChooseUsSection from "./WhyChooseUsSection";
// import HowWeWork from "./HowWeWork";
// import CTASection from "./CTASection";
import Lastmessage from "./Lastmessage";
import HeroText from "../commons/HeroText";
import HowWeWork from "../commons/HowWeWork";
import WhyChoose from "../commons/WhyChoose";
import ServicesSecondCompo from "../commons/ServicesSecondCompo";
import Common from "../commons/CTASection";

export default function ExecutiveSearch() {
  const workData = [
    {
      srNo: "01",
      heading: "Leadership Requirement Discussion",
      desc: "We begin with detailed discussions to understand the leadership expectations, responsibilities, and strategic importance of the role.",
    },
    {
      srNo: "02",
      heading: "Market Mapping",
      desc: "Potential senior professionals are identified through market research and industry talent mapping.",
    },
    {
      srNo: "03",
      heading: "Candidate Engagement",
      desc: "Targeted candidates are approached confidentially and engaged for potential leadership opportunities.",
    },
    {
      srNo: "04",
      heading: "Screening & Assessment",
      desc: "Candidates undergo detailed screening and background evaluation to assess leadership suitability.",
    },
    {
      srNo: "05",
      heading: "Client Discussions & Selection",
      desc: "Shortlisted leaders are presented to the client, followed by discussions, negotiations, and final appointment.",
    },
  ];
  const reasons = [
    {
      heading: "Leadership Talent Identification",
      desc: "We focus on identifying experienced professionals with strong leadership capabilities and industry expertise.",
      img: "/images/permanentHiring/shield-check.svg",
    },
    {
      heading: "Confidential Search Approach",
      desc: "Senior-level recruitment is handled with complete discretion and professionalism.",
      img: "/icons/executivesearch/Confidential Search Approach.svg",
    },
    {
      heading: "Strategic Talent Evaluation",
      desc: "Candidates are assessed through detailed screening and background evaluation to ensure the right leadership fit.",
      img: "/images/permanentHiring/activity-square.svg",
    },
  ];
  const hiringData = [
    {
      title: " Strategic Leadership Hiring",
      image: "/images/executivesearch/Strategic Leadership Hiring.png",
      objectPosition: "center top",
      description: [
        "Executive search focuses on identifying senior professionals and leadership talent for critical organizational roles. These positions require strong industry experience, strategic thinking, and the ability to guide organizations through complex business challenges.",
        "Our executive search approach is designed to carefully identify and engage experienced professionals who possess the leadership capabilities required for high-impact roles. Through targeted research, market mapping, and structured evaluation, we help organizations connect with leaders who can contribute to long-term strategic growth.",
      ],
    },
  ];
  return (
    <>
      {/* <ExecutiveBanner /> */}
      <HeroText headingText={"Executive Search"} />
      <ServicesSecondCompo hiringData={hiringData} />
      {/* <StategicLeaderShipHiring /> */}
      {/* <WhyChooseUsSection /> */}
      <WhyChoose reasons={reasons} />
      {/* <HowWeWork /> */}
      <HowWeWork workData={workData} />
      <Lastmessage />
      <Common />
    </>
  );
}
