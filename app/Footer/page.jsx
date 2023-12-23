import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Fpage() {
  return (
    <div className=" my-36 text-center">
      <p className="dark:text-neutral-600 text-sm font-InterBold">
        Stay Hungary, Stay Foolish
      </p>
      <p className="dark:text-neutral-500 text-base font-InterBlack">
        Propulsé avec{" "}
        <FontAwesomeIcon
          icon={faHeart}
          className="text-red-500 heartbeat-animation"
        />{" "}
        par @mouhamedhanne
      </p>
    </div>
  );
}

export default Fpage;
