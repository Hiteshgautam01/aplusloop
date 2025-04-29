import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { DigitalTransformationHero } from "@/components/DigitalTransformation/Hero";
import { FleetOptimization } from "@/components/DigitalTransformation/FleetOptimization";
import { OperationalEfficiency } from "@/components/DigitalTransformation/OperationalEfficiency";
import { ScalablePlatforms } from "@/components/DigitalTransformation/ScalablePlatforms";
import { MultimodalIntegration } from "@/components/DigitalTransformation/MultimodalIntegration";

export const metadata = {
  title: "Digital Transformation Services | A+ Transportation",
  description:
    "Enhancing vehicle utilization, operational efficiency, and multi-modal transit integration through advanced technology solutions.",
};

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <DigitalTransformationHero />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Digital Transformation Services
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
            Transforming transportation systems with cutting-edge technology
            solutions that optimize operations, reduce costs, and enhance
            customer experience.
          </p>
        </div>

        <FleetOptimization />
        <OperationalEfficiency />
        <ScalablePlatforms />
        <MultimodalIntegration />
      </div>
    </main>
  );
}
