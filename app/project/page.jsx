"use client";

import { useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import Status from "@/app/Status/page";
import Link from "next/link";

import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";

import CSS from "@/public/techno/css-3 (copie).svg";
import ReactLogo from "@/public/techno/react-2.svg";
import Tailwind from "@/public/techno/tailwindcss (copie).svg";
import Javascript from "@/public/techno/logo-javascript.svg";
import Firebase from "@/public/techno/firebase-1.svg";

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

function Projpage() {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".box",

      { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 },

      {
        duration: 0.2,
      }
    );
  }, []);
  return (
    <div ref={scope} className="relative max-w-5xl mx-auto px-8">
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          Projects
        </h2>
        <Link href={"/"}>
          <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
            <TbArrowBackUp className="dark:text-white  text-black text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-44">
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <motion.div
                initial={{ opacity: 0, scale: 0, filter: "blur(0px)", x: 0 }}
                className="h-60 box w-64 "
              >
                <Image
                  width={600}
                  height={600}
                  alt={each.subT}
                  className=" h-full w-full md:w-64 object-cover rounded-md"
                  src={each.imgLink}
                />
              </motion.div>

              <div>
                <div className="w-fit flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
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
    </div>
  );
}

export default Projpage;
