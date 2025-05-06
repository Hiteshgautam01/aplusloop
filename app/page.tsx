// app/page.tsx
import { Navbar } from "@/components/Navbar";
import AnimatedLanding from "@/components/AnimatedLanding";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function Home() {
  return <AnimatedLanding />;
}