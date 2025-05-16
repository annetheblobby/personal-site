"use client";
import * as React from "react";
import { useEffect } from "react";
import {
  experienceData,
  researchData,
  educationData,
} from "../data/resumeData";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { FaUndo } from "react-icons/fa";

emailjs.init({
  publicKey: "Mm4TDs90nDOA5B3O9",
});

export default function Resume() {
  const [messageSent, setMessageSent] = useState(false);
  const [color, setColor] = useState("#000000");
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const canvasData =
      canvasRef.current.canvasContainer.children[1].toDataURL();
    e.target.elements.drawing.value = canvasData;

    console.log(e.target);

    emailjs.sendForm("service_zjmfecd", "template_0u66079", e.target).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 2000);
        canvasRef.current.clear();
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <main>
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10 monoFont">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <section
            className="flex flex-col max-w-full w-[1002px]"
            aria-labelledby="about-heading"
          >
            <div className="relative">
              <h1
                id="about-heading"
                className="text-4xl font-medium uppercase text-zinc-800 max-md:max-w-full z-10"
              >
                About
              </h1>
              <svg
                className="object-contain absolute bottom-px z-[-1] shrink-0 -left-1 self-start"
                width="149"
                height="18"
                viewBox="0 0 149 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12.8534C34.7713 12.8534 63.0757 11.0737 92.6087 7.79231C109.38 5.9288 126.327 5 143.219 5"
                  stroke="#A7EB7B"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="mt-5 text-2xl tracking-wide text-black max-md:max-w-full">
              I'm a Designer / Developer interested
              <br />
              in designing and implementing products through multiple lens of
              view.
            </p>
          </section>

          <div className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full">
            <section
              className="flex flex-col grow shrink min-w-[240px] w-[413px] max-md:max-w-full"
              aria-labelledby="experience-heading"
            >
              <div className="flex relative flex-col w-full text-3xl font-medium uppercase whitespace-nowrap text-zinc-800 max-md:max-w-full">
                <h2 id="experience-heading" className="z-0 max-md:max-w-full">
                  Experience
                </h2>
              </div>
              <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                {experienceData.map((item, index) => (
                  <article
                    key={index}
                    className="flex flex-col w-full max-md:max-w-full mt-5 first:mt-0"
                  >
                    <h3 className="text-xl tracking-wide text-black max-md:max-w-full">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm tracking-wide text-neutral-500 max-md:max-w-full">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <div className="flex flex-col grow shrink min-w-[240px] w-[411px] max-md:max-w-full">
              <section
                aria-labelledby="research-heading"
                className="flex flex-col w-full max-md:max-w-full"
              >
                <div className="flex relative flex-col w-full text-3xl font-medium uppercase text-zinc-800 max-md:max-w-full">
                  <h2 id="research-heading" className="z-0 max-md:max-w-full">
                    Research Papers
                  </h2>
                </div>
                {researchData.map((item, index) => (
                  <article
                    key={index}
                    className="flex flex-col mt-5 w-full max-md:max-w-full"
                  >
                    <h3 className="text-xl tracking-wide text-black max-md:max-w-full">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm tracking-wide text-neutral-500 max-md:max-w-full">
                      {item.conference}
                    </p>
                  </article>
                ))}
              </section>

              <section
                aria-labelledby="education-heading"
                className="flex flex-col mt-8 w-full max-md:max-w-full"
              >
                <div className="flex relative flex-col w-full text-3xl font-medium uppercase whitespace-nowrap text-zinc-800 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0e1e8c29b7e09833f491084b46a4359ad9a49b098f774967689895ee673abbd?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9"
                    className="object-contain absolute left-0 bottom-px z-0 max-w-full h-0 aspect-[20.41] w-[193px]"
                    alt=""
                    aria-hidden="true"
                  />
                  <h2 id="education-heading" className="z-0 max-md:max-w-full">
                    Education
                  </h2>
                </div>
                <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                  {educationData.map((item, index) => (
                    <article
                      key={index}
                      className="flex flex-col mt-5 first:mt-0 w-full max-md:max-w-full"
                    >
                      <h3 className="text-xl tracking-wide text-black max-md:max-w-full">
                        {item.school}
                      </h3>
                      <p className="mt-2 text-sm tracking-wide text-neutral-500 max-md:max-w-full">
                        {item.degree}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <section className="flex flex-col mt-8 w-full max-md:max-w-full">
              <h2 className="text-3xl font-medium uppercase text-zinc-800">
                Contact
              </h2>
              <form
                onSubmit={sendEmail}
                className="flex flex-col mt-5 w-full max-md:max-w-full"
              >
                <div className="flex flex-row max-md:flex-col gap-4 max-md:max-w-full">
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="name"
                      className="p-2 border border-gray-800"
                      placeholder="Your name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      className="mt-3 p-2 border border-gray-800"
                      placeholder="Your email"
                      required
                    />
                    <textarea
                      name="message"
                      className="p-2 border border-gray-800 mt-3 h-64"
                      placeholder="Your message"
                      required
                    />
                  </div>

                  <div className="flex flex-col w-full">
                    <input
                      type="hidden"
                      name="drawing"
                      placeholder="Your sketch (optional)"
                    />
                    <p className="text-gray-400 absolute ml-4 mt-4">
                      Your drawing
                    </p>
                    <div className="flex flex-col absolute ml-4 mt-[250px] bg-gray-100 border border-gray-800 p-2 z-10">
                      <button
                        type="button"
                        className="p-2 bg-[#A7EB7B] mt-1"
                        onClick={() => setColor("#A7EB7B")}
                      ></button>
                      <button
                        type="button"
                        className="p-2 bg-blue-500 mt-1"
                        onClick={() => setColor("#0000ff")}
                      ></button>
                      <button
                        type="button"
                        className="p-2 bg-black mt-1"
                        onClick={() => setColor("#000000")}
                      ></button>
                      <button
                        type="button"
                        className="pt-1 mt-1"
                        onClick={() => canvasRef.current.undo()}
                      >
                        <FaUndo />
                      </button>
                    </div>

                    <CanvasDraw
                      ref={canvasRef}
                      brushColor={color}
                      brushRadius={2}
                      lazyRadius={0}
                      canvasHeight={368}
                      canvasWidth={isMobile ? 350 : 400}
                      className="border border-gray-800 h-64 w-full max-md:h-48 max-md:w-full"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-3 p-2 bg-[#A7EB7B] text-black w-32"
                >
                  Send
                </button>
                {messageSent && (
                  <p className="mt-2 font-xs">Message sent successfully!</p>
                )}
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
