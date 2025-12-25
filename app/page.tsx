"use client";

import dynamicImport from "next/dynamic";
import { navItems } from "@/data";

// Remove this line - it's causing the conflict with static export
// export const dynamic = "force-dynamic";

import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

// Dynamically import components that might use browser APIs
const FloatingNav = dynamicImport(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  { ssr: false }
);

const Hero = dynamicImport(() => import("@/components/Hero"), { 
  ssr: false 
});

const Home = () => {
  return (
    <main
      id="home"
      style={{ scrollMarginTop: "6rem" }}
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;