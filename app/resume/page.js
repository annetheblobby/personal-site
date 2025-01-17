import * as React from "react";
import {
  experienceData,
  researchData,
  educationData,
} from "../data/resumeData";
import Header from "../components/header";

export default function Resume() {
  return (
    <main>
      <Header />
      <div
        className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[100px] max-md:mb-10 monoFont"
        role="main"
      >
        <div className="flex flex-col w-full max-md:max-w-full ">
          <section
            className="flex flex-col max-w-full w-[1002px]"
            aria-labelledby="about-heading"
          >
            <h1
              id="about-heading"
              className="text-4xl font-medium uppercase text-zinc-800 max-md:max-w-full"
            >
              About
            </h1>
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
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/20343e17857cf351a40102df1ecb99ed8d87b35303ecd9491b9c9950788527fc?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9"
                  className="object-contain absolute bottom-0 -left-0.5 z-0 max-w-full h-0 aspect-[23.26] w-[221px]"
                  alt=""
                  aria-hidden="true"
                />
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
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a575955ee26dcf9c2c2e3673b1cb979940936e092dcc54951fc87ca3090db701?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9"
                    className="object-contain absolute bottom-0.5 left-1.5 z-0 max-w-full aspect-[45.45] h-[7px] w-[324px]"
                    alt=""
                    aria-hidden="true"
                  />
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
          </div>
        </div>
      </div>
    </main>
  );
}
