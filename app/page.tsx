import Education from "@/Components/education";
import GetInTouch from "@/Components/getintouch";
import Intro from "@/Components/intro";
import Projects from "@/Components/projects";
import Skills from "@/Components/skills";
import Meteors from "@/Components/ui/meteors";
import { Spotlight } from "@/Components/ui/spotlight";
import WorkExperience from "@/Components/workexperience";

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
        <Education/>
        <WorkExperience />
        <Skills/>
        <Projects/>
        <GetInTouch/>
      </main>
    </div>
    </>
  );
}
