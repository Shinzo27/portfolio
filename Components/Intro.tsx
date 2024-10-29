"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10 font-sequel">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Pratham.</h1>
        <p className="text-base text-white text-justify">
          Motivated and detail-oriented full stack developer with hands-on
          experience in building and deploying scalable web applications. Proven
          ability to develop both frontend and backend solutions, manage
          databases, and implement real-time features. Experienced in leveraging
          modern technologies and tools to create seamless user experiences and
          optimize performance. Eager to contribute to innovative projects and
          collaborate in a dynamic team environment, with a focus on continuous
          learning and problem-solving.
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src="/profile.jpg"
          alt="Me"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Intro;
