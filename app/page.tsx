// app/page.tsx
import { Navbar } from "@/components/Navbar";
import AnimatedLanding from "@/components/AnimatedLanding";
import AboutUs from "./about/components/AboutUs";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function Home() {
  return (
    <div>
      <AnimatedLanding />
      <AboutUs />
    </div>
  );
}