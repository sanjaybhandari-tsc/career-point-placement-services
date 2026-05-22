import HeroSection from "./HeroSection";
import HeroText from "./HeroText";
import IndustryCombined from "@/components/Industries/IndustryCombined";
import CTASection from "./CTASection";

import {
  ShieldCheck, // Regulatory Compliance
  FlaskConical, // Research & Innovation
  Activity, // Quality & Safety Standards
  Settings, // Production & Operations
  BadgeCheck, // Quality Management
  Building2, // Industrial Technology / Production Management
  Truck, // Supply Chain & Distribution / Supply Chain Management
  CheckCircle, // Quality & Process Standards
  Landmark, // Financial Operations
  FileSearch, // Risk & Compliance
  Users, // Customer & Digital Services
  TrendingUp, // Sales & Market Operations
  BarChart3, // Consumer Market Insights
} from "lucide-react";
import { CogIcon } from "@/components/icons/CogIcon";
import { PulseIcon } from "@/components/icons/PulseIcon";

export default function Industries() {
  const iconClass = "w-8 h-8 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px]";
  const pharmaSalesData = {
    title: "Pharmaceutical",
    description1:
      "The pharmaceutical and healthcare sector plays a vital role in driving innovation, research, and public health advancement. With constant developments in medicine, technology, and regulatory standards, organizations require professionals who understand the industry’s dynamic and highly regulated environment.",
    description2:
      "We support pharmaceutical companies in building capable teams by connecting them with professionals who bring the right expertise, adaptability, and understanding of evolving industry demands. Our focus is on helping organizations strengthen their workforce so they can maintain quality standards, support innovation, and contribute to long-term growth within the healthcare ecosystem.",
    imageSrc: "/images/industries/pharmaceuticalSales.png",
    imageAlt: "Pharmaceutical recruitment and sales professionals",
    imagePosition: "left",
  };

  const pharmaManufacturingData = {
    title: "Manufacturing",
    description1:
      "The manufacturing sector forms the backbone of industrial growth, requiring skilled professionals who understand production processes, operational efficiency, and evolving technological advancements. Organizations in this sector depend on capable teams that can maintain productivity, ensure quality standards, and adapt to modern manufacturing practices.",
    description2:
      "We support manufacturing companies by connecting them with professionals who bring the right technical knowledge and practical experience, helping businesses strengthen their operations and achieve sustainable growth.",
    imageSrc: "/images/industries/pharmaManufacturing.png",
    imageAlt: "Pharma manufacturing recruitment",
    imagePosition: "right",
  };

  const buildingMaterialsData = {
    title: "Building Materials Industry",
    description1:
      "The building materials sector plays a significant role in supporting infrastructure development and construction growth. Companies in this industry rely on professionals who understand production processes, supply networks, and evolving market demands within a competitive and fast-moving environment.",
    description2:
      "We support organizations in the building materials space by connecting them with professionals who bring industry awareness, operational understanding, and the ability to contribute to efficient production, supply chain management, and distribution systems that support consistent business growth.",
    imageSrc: "/images/industries/buildingMaterialsIndustry.png",
    imageAlt:
      "Building materials recruitment and construction industry workforce",
    imagePosition: "left",
  };

  const bfsiData = {
    title: "The Banking, Financial Services & Insurance (BFSI)",
    description1:
      "The BFSI sector plays a vital role in supporting economic growth and financial stability. Organizations in this industry require professionals who understand financial systems, regulatory environments, and evolving customer expectations within a rapidly changing market landscape.",
    description2:
      "We support banks, financial institutions, and insurance organizations by connecting them with professionals who bring analytical expertise, industry awareness, and the ability to contribute to efficient operations, risk management, and long-term organizational growth.",
    imageSrc: "/images/industries/bfsi.webp",
    imageAlt:
      "BFSI recruitment banking financial services insurance professionals",
    imagePosition: "right",
  };

  const fmcgData = {
    title: "Fast Moving Consumer Goods (FMCG)",
    description1:
      "The FMCG sector operates in a fast-paced and highly competitive environment where efficiency, strong distribution networks, and market understanding play a crucial role. Companies in this industry require professionals who can respond quickly to changing consumer demands, shifting market trends, and evolving retail landscapes.",
    description2:
      "We support FMCG organizations by connecting them with professionals who bring industry awareness, operational understanding, and the ability to contribute to sales growth, supply chain efficiency, product movement, and overall business performance across competitive consumer markets.",
    imageSrc: "/images/industries/fast-moving-consumer-goods.webp",
    imageAlt:
      "FMCG recruitment and consumer goods industry workforce distribution",
    imagePosition: "left",
  };

  const PharmaceuticalSalesCardData = [
    {
      title: "Regulatory Compliance",
      description:
        "Professionals familiar with pharmaceutical regulations, compliance standards, and quality control processes across production and operations.",
      icon: <ShieldCheck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Research & Innovation",
      description:
        "Talent supporting research, product development, and innovation within evolving pharmaceutical and healthcare environments.",
      icon: <FlaskConical className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Quality & Safety Standards",
      description:
        "Experts focused on maintaining strict quality standards, safety protocols, and regulatory guidelines in pharmaceutical operations.",
      icon: <PulseIcon className={iconClass} strokeWidth={1.5} />,
    },
  ];

  const PharmaceuticalManufacturingCardData = [
    {
      title: "Production & Operations",
      description:
        "Professionals experienced in managing production workflows, operational processes, and manufacturing efficiency.",
      icon: <CogIcon className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Quality Management",
      description:
        "Ensuring consistent product quality through strong standards, inspections, and effective process monitoring.",
      icon: <BadgeCheck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Industrial Technology",
      description:
        "Talent familiar with modern manufacturing tools, automation systems, and evolving industrial technologies.",
      icon: <Building2 className={iconClass} strokeWidth={1.5} />,
    },
  ];

  const BuildingMaterialsIndustryCardData = [
    {
      title: "Production Management",
      description:
        "Professionals experienced in managing production activities and ensuring efficient manufacturing operations.",
      icon: <Building2 className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Supply Chain & Distribution",
      description:
        "Talent skilled in managing supply networks, logistics operations, and ensuring smooth distribution efficiency across markets.",
      icon: <Truck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Quality & Process Standards",
      description:
        "Ensuring consistent product quality through structured processes, inspections, and operational standards. ",
      icon: <BadgeCheck className={iconClass} strokeWidth={1.5} />,
    },
  ];

  const BankingFinancialServicesInsuranceCardData = [
    {
      title: "Financial Operations",
      description:
        "Professionals experienced in managing financial operations, transactions, and structured banking processes.",
      icon: <Landmark className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Risk & Compliance",
      description:
        "Experts focused on regulatory compliance, financial risk monitoring, and operational governance.",
      icon: <FileSearch className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Customer & Digital Services",
      description:
        "Talent supporting customer services, financial platforms, and evolving digital banking systems and experiences.",
      icon: <Users className={iconClass} strokeWidth={1.5} />,
    },
  ];

  const FastMovingConsumerGoodsCardData = [
    {
      title: "Sales & Market Operations",
      description:
        "Professionals experienced in managing sales activities, market presence, and business expansion.",
      icon: <TrendingUp className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Supply Chain Management",
      description:
        "Talent skilled in handling product movement, distribution systems, and supply chain coordination.",
      icon: <Truck className={iconClass} strokeWidth={1.5} />,
    },
    {
      title: "Consumer Market Insights",
      description:
        "Experts focused on understanding consumer behavior, market trends, and product demand analysis.",
      icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
    },
  ];

  return (
    <>
      <HeroSection />
      <HeroText />

      <IndustryCombined
        data={pharmaSalesData}
        cards={PharmaceuticalSalesCardData}
      />

      <IndustryCombined
        data={pharmaManufacturingData}
        cards={PharmaceuticalManufacturingCardData}
      />

      <IndustryCombined
        data={buildingMaterialsData}
        cards={BuildingMaterialsIndustryCardData}
      />

      <IndustryCombined
        data={bfsiData}
        cards={BankingFinancialServicesInsuranceCardData}
      />

      <IndustryCombined
        data={fmcgData}
        cards={FastMovingConsumerGoodsCardData}
      />
      <CTASection />
      <HeroText />
    </>
  );
}
