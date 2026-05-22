import { FeatureCard } from "./FeatureCard";
import HeroSection from "./HeroSection";
import Candidate from "./Candidate";
import FeatureCardSection from "./FeatureCardSection";
import TestimonialSection from "./TestimonialSection";
import CTASection from "./CTASection";
import HeroText from "./HeroText.js";



export default function HiringSolutions() {
  return (
    <>
      <HeroSection />
      <Candidate />
      {/* <CandidateNetworkSection /> */}
      <FeatureCardSection />
      <TestimonialSection />
      <CTASection />
      <HeroText />
    </>
  );
}
