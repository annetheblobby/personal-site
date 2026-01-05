"use client";
import MovingBanner from "../components/MovingBanner";
import Link from "next/link";
import Image from "next/image";

export default function experiments() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="absolute left-[50%] top-[300px] max-md:relative max-md:left-0 max-md:w-full max-md:top-0 w-[300px] drop-animation">
            <Link href="https://tattote.ca/">
              <Image
                src="/images/tattote.png"
                width={300}
                height={300}
                className="hover:scale-110 transition-transform duration-100"
                alt="Tattote"
              />
            </Link>
          </div>
          <div className="absolute left-[10%] max-md:relative max-md:left-0 max-md:w-full w-[550px] z-10 drop-animation ">
            <Link href="/experiments/revHeist">
              <Image
                src="/images/frame.png"
                width={550}
                height={550}
                className="hover:scale-110 transition-transform duration-100"
                alt="Frame"
              />
            </Link>
          </div>
          <div className="absolute left-[40%] top-[400px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[650px] z-10 drop-animation">
            <Link href="/experiments/guitar">
              <Image
                src="/images/guitar.png"
                width={650}
                height={650}
                className="hover:scale-110 transition-transform duration-100"
                alt="Guitar"
              />
            </Link>
          </div>
          <div className="absolute left-[65%] top-[600px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="https://tattote.ca/">
              <Image
                src="/images/tote.png"
                width={350}
                height={350}
                className="hover:scale-110 transition-transform duration-100"
                alt="Tote"
              />
            </Link>
          </div>
          <Link
            href="/experiments/sketches"
            className="absolute left-[25%] top-[650px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[450px] drop-animation"
          >
            <Image
              src="/images/sketch.png"
              width={450}
              height={450}
              className="hover:scale-110 transition-transform duration-100"
              alt="Sketch"
            />
          </Link>
          <div className="absolute left-[10%] top-[900px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[250px] drop-animation">
            <Link href="/experiments/tree">
              <Image
                src="/images/tree.png"
                width={250}
                height={250}
                className="hover:scale-110 transition-transform duration-100"
                alt="Tree"
              />
            </Link>
          </div>
          <div className="absolute left-[25%] top-[1200px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="/experiments/puppet">
              <Image
                src="/images/puppet.png"
                width={350}
                height={350}
                className="hover:scale-110 transition-transform duration-100 rotateLeft"
                alt="Puppet"
              />
            </Link>
          </div>
          <div className="absolute left-[55%] top-[1300px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="https://www.instagram.com/blob.by.design/">
              <Image
                src="/images/blob.png"
                width={350}
                height={350}
                className="hover:scale-110 transition-transform duration-100"
                alt="Blob"
              />
            </Link>
          </div>
          <div className="absolute left-[60%] top-[1000px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[350px] drop-animation">
            <Link href="https://www.instagram.com/blob.by.design/">
              <Image
                src="/images/art.jpg"
                width={350}
                height={350}
                className="hover:scale-110 transition-transform duration-100 rotateLeft"
                alt="Painting"
              />
            </Link>
          </div>
          {/* <div className="absolute left-[50%] top-[1000px] max-md:relative max-md:left-0 max-md:top-0 max-md:w-full w-[150px] drop-animation">
            <Link href="/experiments/vr">
              <Image
                src="/images/vr.png"
                width={150}
                height={150}
                className="hover:scale-110 transition-transform duration-100"
                alt="VR"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
