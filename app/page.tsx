import Intro from "@/Components/Intro";
import Meteors from "@/Components/ui/meteors";
import { Spotlight } from "@/Components/ui/spotlight";
import WorkExperience from "@/Components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Spotlight 
    className="-top-40 left-0 md:left-60 md:-top-20"
    fill="purple"
    />
    <div className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
      <main>
        <Meteors/>
        <Intro />
        <WorkExperience />
      </main>
    </div>
    </>
  );
}
