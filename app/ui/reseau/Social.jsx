"use client";
import React from "react";
import Instagram from "@/public/svg/instagram.svg";
import Twitter from "@/public/svg/x-twitter.svg";
import LinkedIn from "@/public/svg/linkedin.svg";
import Github from "@/public/svg/github.svg";
import News from "@/public/svg/envelope-solid.svg";
import Image from "next/image";

const SocialIcon = ({ plateform, icon, text, link, background }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`inline-flex items-center justify-center p-2 ${background} rounded-md hover:opacity-75 transition-opacity duration-300`}
    >
      <Image src={icon} alt={plateform} width={20} height={30} className="" />
      <span className="pl-2">{text}</span>
    </a>
  );
};

export default function Social() {
  return (
    <div className="flex flex-wrap gap-2">
      <SocialIcon
        plateform="LinkedIn"
        icon={LinkedIn}
        text="LinkedIn"
        link="https://github.com/mouhamedhanne"
        background="bg-[#0e79b1]"
      />
      <SocialIcon
        plateform="Instagram"
        icon={Instagram}
        text="Instagram"
        link="https://instagram.com/geek___genius"
        background="bg-[#dc4764]"
      />
      <SocialIcon
        plateform="Twitter"
        icon={Twitter}
        text="Twitter"
        link="https://twitter.com/mouhamedhanne13"
        background="bg-[#299fe8]"
      />

      <SocialIcon
        plateform="Github"
        icon={Github}
        text="Github"
        link="https://github.com/mouhamedhanne"
        background="bg-gray-400"
      />
      <SocialIcon
        plateform="News"
        icon={News}
        text="Newsletter"
        link="/newsletter"
        background="bg-indigo-500"
      />
    </div>
  );
}
