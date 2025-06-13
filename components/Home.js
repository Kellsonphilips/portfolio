"use client"

import Image from "next/image";
import profilePic from "../public/";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-6 mt-10">
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-xl mb-4">
          ICT Solution Provider, Software Engineer & Data Analyst
        </p>
        <p className="text-md text-gray-600">
          Welcome to my portfolio where I showcase projects, skills, and
          capabilities.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <Image
          src={profilePic}
          alt="Profile Picture"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>
    </section>
  );
}
