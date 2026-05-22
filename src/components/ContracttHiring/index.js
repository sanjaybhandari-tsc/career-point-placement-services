// import { FeatureCard } from "./FeatureCard";

import HowWeWork from "../commons/HowWeWork";
import ServicesSecondCompo from "../commons/ServicesSecondCompo";
import WhyChoose from "../commons/WhyChoose";
import Common from "../commons/CTASection";
import HeaderPart from "./HeaderPart";
// import HowWeWork from "./HowWeWork";
import ProjectBasedTalentHiring from "./ProjectBasedTalentHiring";
import WeHelp from "./WeHelp";
import WhyChooseUs from "./WhyChooseUs";
import HeroText from "../commons/HeroText";

export default function ContractHiring() {
  const workData = [
    {
      srNo: "01",
      heading: "Requirement Understanding",
      desc: "We begin by understanding the project scope, duration, and the specific skills required for the contract role.",
    },
    {
      srNo: "02",
      heading: "Candidate Sourcing",
      desc: "Suitable professionals are identified through our internal database and external market sources.",
    },
    {
      srNo: "03",
      heading: "Screening & Evaluation",
      desc: "Candidates are screened to assess technical suitability, experience, and overall role compatibility.",
    },
    {
      srNo: "04",
      heading: "Client Review & Interviews",
      desc: "Shortlisted candidates are shared with the client and interviews are coordinated for final evaluation.",
    },
    {
      srNo: "05",
      heading: "Contract & Deployment",
      desc: "OurOnce selected, we manage employment documentation while the professional begins working at the client location.",
    },
  ];
  const reasons = [
    {
      img: "/images/permanentHiring/shield-check.svg",
      heading: "Flexible Workforce Solutions",
      desc: "Access skilled professionals for project-based roles, seasonal demand, or temporary assignments.",
    },
    {
      img: "/images/permanentHiring/flask.svg",
      heading: "Efficient Talent Deployment",
      desc: "Our streamlined recruitment approach helps organizations quickly identify and onboard suitable contract professionals.",
    },
    {
      img: "/images/permanentHiring/activity-square.svg",
      heading: "Administrative Support Management",
      desc: "We handle employment documentation and administrative processes while the professional works at the client site.",
    },
  ];
  const hiringData = [
    {
      title: " Project-Based Talent Hiring",
      image: "/images/contractHiring/Project-Based Talent Hiring.png",
      objectPosition: "center top",
      description: [
        "Contract staffing enables organizations to hire skilled professionals for specific projects, temporary assignments, or short-term business needs without expanding their permanent workforce. It offers flexibility while ensuring that the right expertise is available when required.",
        "Our contract staffing solutions help companies quickly access qualified professionals who can contribute to ongoing operations or specialized projects. From sourcing and screening candidates to managing employment documentation and administrative responsibilities, we ensure a smooth and reliable staffing process.",
      ],
    },
  ];
  return (
    <>
      <HeroText headingText={"Contract Staffing"} />
      <ServicesSecondCompo hiringData={hiringData} />
      {/* <ProjectBasedTalentHiring /> */}
      {/* <WhyChooseUs /> */}
      <WhyChoose reasons={reasons} />
      {/* <HowWeWork /> */}
      <HowWeWork workData={workData} />
      <WeHelp />
      <Common />
    </>
  );
}
