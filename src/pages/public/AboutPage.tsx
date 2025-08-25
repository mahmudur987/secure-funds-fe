import CoreValues from "@/components/modules/public/about/CoreValues";
import Hero from "@/components/modules/public/about/Hero";
import MissionAndVision from "@/components/modules/public/about/MissionAndVision";
import OurStory from "@/components/modules/public/about/OurStory";

export default function AboutPage() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-20">
        <Hero />

        {/* Our Story */}
        <OurStory />

        {/* Mission & Vision */}
        <MissionAndVision />

        {/* Core Values */}
        <CoreValues />
      </div>
    </section>
  );
}
