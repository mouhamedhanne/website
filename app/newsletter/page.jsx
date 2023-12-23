import PageConstruction from "@/public/svg/page-en-construction.svg";
import Image from "next/image";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

export default function Newsletter() {
  return (
    <div className="h-[491px] relative max-w-5xl mx-auto px-8">
      <Link href={"/"}>
        <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
          <TbArrowBackUp className="dark:text-white  text-black text-xl" />
        </div>
      </Link>
      <h1 className="font-bold text-center text-4xl mt-12">
        Page en construction
      </h1>
      <Image
        style={{ width: "500px", margin: "auto", marginTop: "4rem" }}
        src={PageConstruction}
        alt="page en construction"
      />
      <img />
    </div>
  );
}
