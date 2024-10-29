"use client";

import Image from "next/image";

const Intro = () => {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10 font-melody-bold">
            <div className="flex flex-col gap-2 w-full lg:w-4/5">
                <h1 className="text-4xl font-bold mb-4">Hi, I'm Pratham.</h1>
                <p className="text-base text-white text-justify">I'm a full stack developer, and I love to build things. I'm currently working on a portfolio website. I'm also a big fan of music and I love to play guitar. I'm also a big fan of movies and I love to watch them. I'm also a big fan of music and I love to play guitar.</p>
            </div>
            <div className="flex items-center justify-center md:mb-0">
                <Image src="/profile.jpg" alt="Me" width={160} height={160} className="border-2 border-gray-100 rounded-full object-cover" />
            </div>
        </div>
    );
}

export default Intro;