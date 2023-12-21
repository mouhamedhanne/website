"use client";
import React, { useState } from "react";
import Image from "next/image";
import HTML from "@/public/techno/html-1 (copie).svg";
import CSS from "@/public/techno/css-3 (copie).svg";
import Tailwind from "@/public/techno/tailwindcss (copie).svg";
import Javascript from "@/public/techno/logo-javascript.svg";
import Typescript from "@/public/techno/typescript (copie).svg";
import ReactLogo from "@/public/techno/react-2.svg";
import Next from "@/public/techno/next-js (copie).svg";
import Python from "@/public/techno/python-4 (copie).svg";
import Django from "@/public/techno/django.svg";
import GIT from "@/public/techno/git.svg";
import Firebase from "@/public/techno/firebase-1.svg";
import NPM from "@/public/techno/npm (copie).svg";

const StackIcon = ({ icon, technologie, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <Image src={icon} alt={technologie} className={`${className}`} />
    </div>
  );
};

export default function Stack() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <StackIcon icon={HTML} technologie="html" className="w-[90px]" />
      <StackIcon icon={CSS} technologie="CSS" className="w-[90px]" />
      <StackIcon icon={Tailwind} technologie="Tailwind" className="w-[90px]" />
      <StackIcon
        icon={Javascript}
        technologie="Javascript"
        className="w-[90px]"
      />
      <StackIcon
        icon={Typescript}
        technologie="Typescript"
        className="w-[90px]"
      />
      <StackIcon
        icon={ReactLogo}
        technologie="ReactLogo"
        className="w-[90px]"
      />
      <StackIcon icon={Next} technologie="Next" className="w-[90px]" />
      <StackIcon icon={Python} technologie="Python" className="w-[90px]" />
      <StackIcon icon={Django} technologie="Django" className="w-[90px]" />
      <StackIcon icon={Firebase} technologie="Firebase" className="w-[90px]" />
      <StackIcon icon={GIT} technologie="GIT" className="w-[100px]" />
      <StackIcon icon={NPM} technologie="NPM" className="w-[100px]" />
    </div>
  );
}
