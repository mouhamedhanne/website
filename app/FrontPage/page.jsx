"use client";

import Status from "@/app/Status/page";

import React, { useState } from "react";
import Link from "next/link";
//import { PiLockThin } from "react-icons/pi";
import Social from "@/app/ui/reseau/Social";
import Image from "next/image";

import CSS from "@/public/techno/css-3 (copie).svg";
import ReactLogo from "@/public/techno/react-2.svg";
import Tailwind from "@/public/techno/tailwindcss (copie).svg";
import Javascript from "@/public/techno/logo-javascript.svg";
import Firebase from "@/public/techno/firebase-1.svg";
import NextJs from "@/public/techno/next-js (copie).svg";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import { motion } from "framer-motion";
import Stack from "../ui/stack/page";
import Contact from "@/app/ui/contact/page";

const projects = [
  {
    imgLink: "/img/online-translator.png",
    title: "La Puissance de la Traduction!",
    subT: "Architecte de l'accessibilité linguistique, j'ai conçu une application de traduction révolutionnaire qui élimine les barrières linguistiques, permettant aux utilisateurs d'explorer un monde de communication multilingue sans limites. Du texte à la traduction de fichiers PDF.",
    year: "2024",
    useTechno: [
      {
        icon: [Javascript, ReactLogo, NextJs, Tailwind],
      },
    ],
    linkGithub: "https://github.com/mouhamedhanne/Translator_Online",
    linkProject: "https://online-translator.vercel.app/",
    iconeGithub: <FaGithub />,
    iconeProject: <TbWorld />,
  },
  {
    imgLink: "/img/challenge-integration.png",
    title: "Challenge-Integration",
    subT: "Le projet 'Challenge d'Intégration' représente un passionnant défi que j'ai relevé en intégrant une maquette inspirante trouvée en ligne. Guidé par ma créativité et mes compétences en intégration, j'ai reproduit avec précision le design tout en m'assurant de maintenir une expérience utilisateur optimale.",
    year: "2024",
    useTechno: [
      {
        icon: [Javascript, ReactLogo, Tailwind],
      },
    ],
    linkGithub: "https://github.com/mouhamedhanne/Challenge_Integration",
    linkProject: "https://mouhamedhanne-challenge-integration.vercel.app/",
    iconeGithub: <FaGithub />,
    iconeProject: <TbWorld />,
  },
  {
    imgLink: "/img/netflix-collection.png",
    title: "NetflixCollection : Mon Univers Cinéphile Personnalisé",
    subT: "Explorez NetflixCollection, une application que j'ai façonnée de bout en bout. Plongez dans une expérience cinématographique sur mesure en découvrant, suggérant et favorisant vos films préférés. ",
    year: "2023",
    useTechno: [
      {
        icon: [Javascript, ReactLogo, Tailwind, Firebase],
      },
    ],
    linkGithub: "https://github.com/mouhamedhanne/Netflix_collection",
    linkProject: "https://netflix-ollection.vercel.app/",
    iconeGithub: <FaGithub />,
    iconeProject: <TbWorld />,
  },
  {
    imgLink: "/img/intelli-surveillance.png",
    title: "IntelliSurveillance : Pionnier en Sécurité Scolaire au Sénégal",
    subT: "Leaders en installations de vidéosurveillance sur mesure, nous protégeons les établissements scolaires avec des solutions innovantes, assurant un environnement éducatif sûr et propice à la croissance.",
    year: "2023",
    useTechno: [
      {
        icon: [CSS, Javascript, ReactLogo],
      },
    ],
    linkGithub: "https://github.com/mouhamedhanne/Intelli-Surveillance",
    linkProject: "https://intelli-surveillance.vercel.app/",
    iconeGithub: <FaGithub />,
    iconeProject: <TbWorld />,
  },
  {
    imgLink: "/img/burger-house.png",
    title: "Burger House : Un Template Gourmet à Personnaliser",
    subT: "Explorez le potentiel du template Burger House, un site web unique dédié à la gastronomie.",
    year: "2023",
    useTechno: [
      {
        icon: [Javascript, ReactLogo, Tailwind, Firebase],
      },
    ],
    linkGithub: "https://github.com/mouhamedhanne/burger_house",
    linkProject: "https://house-burger.vercel.app/",
    iconeGithub: <FaGithub />,
    iconeProject: <TbWorld />,
  },
];

{
  /*
let link = [
  {
    date: "Dec 2022 - Apr 2023",
    imgLink: "/img/img6.jpg",
    title: "Product Design Intern",
    sub: "Avalon Scenes",
    subTitle:
      "At Scenes, we were building an all-in-one community platform that enables creators to connect & manage their community better.",
    bttn: "View my work",
  },
  {
    date: "Jul 2022 - Sep 2022",
    imgLink: "/img/img3.jpg",
    title: "Designer in Residence",
    sub: "10kdesigners",
    subTitle:
      "Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects.",
  },

  {
    date: "Jan 2022 - Mar 2022",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Dive",
    subTitle:
      "I built and facilitated engaging remote experiences, connecting colleagues at work. I designed various games, including 'Word Pirate,' which became one of the platform's most-played games within two weeks of launch.",
  },
  {
    date: "Sep 2021 - Dec 2021 ",
    imgLink: "/img/img2.jpg",
    title: "Product Design Intern",
    sub: "Winuall",
    subTitle:
      "I focused on visual and interaction design for the product, crafting compelling narratives. My responsibilities included creating interactive features that enriched user experiences on both the app and website.",
  },
];
 */
}

function Frpage() {
  // const [show, setShow] = useState(link[0]);

  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <Image
          width={300}
          height={300}
          className="w-16 h-16 rounded-full object-cover"
          src="/img/mouhamedhanne.jpeg"
          alt="Profile"
        />
        <div>
          <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
            GEEK GENIUS
          </h2>
          <Link href={"https://twitter.com/mouhamedhanne13"}>
            <span className="text-neutral-500 ">@mouhamedhanne</span>
          </Link>
          <Status isAvailbale />
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <h3 className="text-neutral-500 text-xs font-InterBold  uppercase ">
          À propos de moi
        </h3>
        <p className="dark:text-neutral-300  font-InterMedium  mt-3">
          Je suis Mouhamed El Malick Hanne, un passionné de la nouvelle
          technologie et un développeur web créatif. Je navigue avec
          enthousiasme dans le monde en constante évolution du développement,
          créant des expériences numériques uniques qui repoussent les limites
          de l'innovation.
        </p>
        <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          Mon amour pour le code et ma soif de créativité me guident dans la
          conception de solutions web exceptionnelles. À travers ma quête
          incessante d'apprentissage, je me lance constamment dans de nouveaux
          défis technologiques pour offrir des produits qui marquent les
          esprits.
        </p>

        <div className="mt-10">
          <Social />
        </div>
      </div>

      {/* Marquee text */}

      <div>
        <div className="marquee  relative my-24 h-10 max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-semibold justify-evenly text-sm text-neutral-700">
              Project Project Project Project Project Project Project Project
              Project Project Project Project Project Project Project Project
              Project Project Project Project Project Project Project Project
              Project Project Project Project Project Project Project
            </div>
          </motion.div>
          <div className=" bg-gradient-to-l absolute right-0 z-10 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      {/* Projects */}

      <div className="">
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row gap-x-8 my-6">
              <div className="h-60 w-full md:w-64 ">
                <Image
                  width={950}
                  height={700}
                  alt="project"
                  className="w-full h-full object-cover rounded-md"
                  src={each.imgLink}
                />
              </div>

              <div>
                <div className="w-fit flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold border rounded-full dark:border-neutral-700">
                    <span>{each.year}</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Status
                      Relaxing
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="font-InterBold text-lg max-w-lg mt-4">
                    {each.title}
                  </h1>
                  <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>

                  <div className="flex items-center gap-2 mt-8">
                    {each.useTechno[0].icon.map((techIcon, index) => (
                      <Image
                        key={index}
                        src={techIcon}
                        alt={`Technologie ${index + 1}`}
                        className="w-[30px]"
                      />
                    ))}
                  </div>
                  <div
                    className="text-[22px] flex items-center gap-3 mt-3 font-InterMedium
                   dark:text-neutral-400 max-w-lg"
                  >
                    {each.linkGithub && (
                      <div>
                        <Link href={each.linkGithub} target="_blank">
                          {each.iconeGithub}
                        </Link>
                      </div>
                    )}

                    {each.linkProject && (
                      <div>
                        <Link href={each.linkProject} target="_blank">
                          {each.iconeProject}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>

      {/* Marque texts */}

      <div>
        <div className="marquee my-24 h-10 relative  max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700">
              Compétences Compétences Compétences Compétences Compétences
              Compétences Compétences Compétences Compétences Compétences
              Compétences Compétences Compétences Compétences Compétences
              Compétences Compétences Compétences Compétences Compétences
              Compétences Compétences Compétences Compétences Compétences
              Compétences Compétences Compétences Compétences Compétences
            </div>
          </motion.div>
          <div
            className=" bg-gradient-to-l absolute right-0 z-10
           dark:from-[#161616] dark:via-[#161616] from-[#fff]
            via-[#fff] to-transparent w-16 rounded-md h-9 transition-all
             ease-in duration-200"
          />
        </div>
      </div>

      <div>
        <Stack />
      </div>

      {/* Experience */}

      {/*
      <div className="">
        <div className=" ">
          {link.map((each) => (
            <div key={each.title} className="my-8  p-2 rounded-md ">
              <div className="border border-neutral-700 rounded-full  w-fit px-2 p-1 flex items-center ">
                <span className="text-xs text-neutral-700 dark:text-neutral-300 ">
                  {each.date}
                </span>
              </div>

              <div>
                <div className="flex gap-x-4 my-6">
                  <Image
                    width={400}
                    height={400}
                    className="w-14 h-14 rounded-full"
                    src={each.imgLink}
                    alt=""
                  />
                  <div>
                    <h1 className="font-InterBold  text-lg ">{each.title}</h1> */}
      {/* you can add your desired links hrefs in the lnk array n wrap here with href */}
      {/* <Link className="font-semibold hover:underline" href={"/"}>
                      {each.sub}
                    </Link>
                  </div>
                </div>

                <p className=" text-neutral-500 text-lg max-w-3xl">
                  {each.subTitle}
                </p>
              </div>

              {show.bttn && (
                <button className="mt-10 border border-neutral-700/30 rounded-md px-2 py-2 flex justify-between items-center gap-x-2 lg:w-36 bg-neutral-800/20 text-sm text-neutral-900 dark:text-neutral-200 font-semibold">
                  <span>View my work</span>
                  <PiLockThin className="text-neutral-900 dark:text-neutral-200" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
  */}

      {/* Marque texts */}

      <div>
        <div
          className="marquee  relative my-24 h-10 max-w-6xl
         overflow-x-hidden"
        >
          <div
            className=" bg-gradient-to-r absolute z-10 from-[#fff]
           via-[#fff] dark:from-[#161616] dark:via-[#161616] 
           to-transparent w-20 rounded-md h-9 transition-all ease-in
            duration-200"
          />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div
              className=" flex gap-x-5 mt-2 uppercase font-bold
             justify-evenly text-sm  text-neutral-700"
            >
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
              ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS
            </div>
          </motion.div>

          <div
            className=" bg-gradient-to-l absolute right-0 z-10
           dark:from-[#161616] dark:via-[#161616] from-[#fff]
            via-[#fff] to-transparent w-16 rounded-md h-9 transition-all
             ease-in duration-200"
          />
        </div>

        <div>
          <Contact />
        </div>

        <p>
          Rejoignez-moi dans cette aventure digitale où chaque ligne de code est
          une opportunité de créer quelque chose d'extraordinaire.
        </p>
      </div>
    </div>
  );
}

export default Frpage;

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 11,
        ease: "linear",
      },
    },
  },
};
