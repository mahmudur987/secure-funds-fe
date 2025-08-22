import CallToAction from "@/components/modules/public/home/CallToAction";
import FAQ from "@/components/modules/public/home/FaqSection";
import FeaturesPreview from "@/components/modules/public/home/FeaturesPreview";
import Hero from "@/components/modules/public/home/Hero";
import HowItWorks from "@/components/modules/public/home/HowItWorks";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturesPreview />
      <HowItWorks />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default HomePage;
