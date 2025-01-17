"use client";
import Header from "../components/header";
import Image from "next/image";
import tattote from "./images/tattote.png";
import frame from "./images/frame.png";
import guitar from "./images/guitar.png";
import tote from "./images/tote.png";
import sketch from "./images/sketch.png";
import tree from "./images/tree.png";
import puppet from "./images/puppet.png";
import blob from "./images/blob.png";
import painting from "./images/painting.png";
import vr from "./images/vr.png";

import { useEffect } from "react";

export default function experiments() {
  // useEffect(() => {
  //     document.body.style.backgroundColor = "#89AD24";
  //     document.body.style.transition = "background-color 0.5s";
  // }, []);

  return (
    <div className="relative">
      <Header experimentMode={true} />
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="absolute left-[50%] top-[300px] max-md:relative max-md:left-0 max-md:w-full max-md:top-0 w-[300px] drop-animation">
            <Image
              src={tattote}
              className="hover:scale-110 transition-transform duration-100"
              alt="Tattote"
            />
          </div>
          <div className="absolute left-[10%] max-md:relative max-md:left-0 max-md:w-full w-[550px] z-10 drop-animation ">
            <Image
              src={frame}
              className="hover:scale-110 transition-transform duration-100"
              alt="Frame"
            />
          </div>
          <div className="absolute left-[40%] top-[400px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[650px] z-10 drop-animation">
            <Image
              src={guitar}
              className="hover:scale-110 transition-transform duration-100"
              alt="Guitar"
            />
          </div>
          <div className="absolute left-[65%] top-[600px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Image
              src={tote}
              className="hover:scale-110 transition-transform duration-100"
              alt="Tote"
            />
          </div>
          <div className="absolute left-[25%] top-[650px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[450px] drop-animation">
            <Image
              src={sketch}
              className="hover:scale-110 transition-transform duration-100"
              alt="Sketch"
            />
          </div>
          <div className="absolute left-[10%] top-[900px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[250px] drop-animation">
            <Image
              src={tree}
              className="hover:scale-110 transition-transform duration-100"
              alt="Tree"
            />
          </div>
          <div className="absolute left-[25%] top-[1200px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Image
              src={puppet}
              className="hover:scale-110 transition-transform duration-100 rotateLeft"
              alt="Puppet"
            />
          </div>
          <div className="absolute left-[55%] top-[1300px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Image
              src={blob}
              className="hover:scale-110 transition-transform duration-100 "
              alt="Blob"
            />
          </div>
          <div className="absolute left-[60%] top-[1000px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Image
              src={painting}
              className="hover:scale-110 transition-transform duration-100 rotateLeft"
              alt="Painting"
            />
          </div>
          <div className="absolute left-[50%] top-[1000px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[150px] drop-animation">
            <Image
              src={vr}
              className="hover:scale-110 transition-transform duration-100"
              alt="VR"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
