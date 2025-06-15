"use client";
import tattote from "./images/tattote.png";
import frame from "./images/frame.png";
import guitar from "./images/guitar.png";
import tote from "./images/tote.png";
import sketch from "./images/sketch.png";
import tree from "./images/tree.png";
import puppet from "./images/puppet.png";
import blob from "./images/blob.png";
import art from "./images/art.jpg";
import vr from "./images/vr.png";
import MovingBanner from "../components/MovingBanner";

import Link from "next/link";

export default function experiments() {
  // useEffect(() => {
  //     document.body.style.backgroundColor = "#89AD24";
  //     document.body.style.transition = "background-color 0.5s";
  // }, []);

  return (
    <div className="relative">
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="absolute left-[50%] top-[300px] max-md:relative max-md:left-0 max-md:w-full max-md:top-0 w-[300px] drop-animation">
            <Link href="https://tattote.ca/">
              <img
                src={tattote}
                className="hover:scale-110 transition-transform duration-100"
                alt="Tattote"
              />
            </Link>
          </div>
          <div className="absolute left-[10%] max-md:relative max-md:left-0 max-md:w-full w-[550px] z-10 drop-animation ">
            <Link href="/experiments/revHeist">
              <img
                src={frame}
                className="hover:scale-110 transition-transform duration-100"
                alt="Frame"
              />
            </Link>
          </div>
          <div className="absolute left-[40%] top-[400px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[650px] z-10 drop-animation">
            <img
              src={guitar}
              className="hover:scale-110 transition-transform duration-100"
              alt="Guitar"
            />
          </div>
          <div className="absolute left-[65%] top-[600px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="https://tattote.ca/">
              <img
                src={tote}
                className="hover:scale-110 transition-transform duration-100"
                alt="Tote"
              />
            </Link>
          </div>
          <Link
            href="/experiments/sketches"
            className="absolute left-[25%] top-[650px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[450px] drop-animation"
          >
            <img
              src={sketch}
              className="hover:scale-110 transition-transform duration-100"
              alt="Sketch"
            />
          </Link>
          <div className="absolute left-[10%] top-[900px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[250px] drop-animation">
            <img
              src={tree}
              className="hover:scale-110 transition-transform duration-100"
              alt="Tree"
            />
          </div>
          <div className="absolute left-[25%] top-[1200px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <img
              src={puppet}
              className="hover:scale-110 transition-transform duration-100 rotateLeft"
              alt="Puppet"
            />
          </div>
          <div className="absolute left-[55%] top-[1300px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="https://www.instagram.com/blob.by.design/">
              <img
                src={blob}
                className="hover:scale-110 transition-transform duration-100 "
                alt="Blob"
              />
            </Link>
          </div>
          <div className="absolute left-[60%] top-[1000px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="https://www.instagram.com/blob.by.design/">
              <img
                src={art}
                className="hover:scale-110 transition-transform duration-100 rotateLeft"
                alt="Painting"
              />
            </Link>
          </div>
          <div className="absolute left-[50%] top-[1000px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[150px] drop-animation">
            <img
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
