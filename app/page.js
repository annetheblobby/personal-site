"use client";
import Image from "next/image";
import Header from "./components/header";
import DrawingCanvas from "./components/DrawingCanvas";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "./data/worksData";

// const projects = [
//   {
//     id: "interactive-tutorials",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
//     title: "Shopify.dev | Interactive Two Column Coding Tutorials",
//     description: "UX Design, UX research, Prototyping, Feature Development",
//   },
//   {
//     id: "sketches",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
//     title: "Shopify.dev | Interactive Two Column Coding Tutorials",
//     description: "UX Design, UX research, Prototyping, Feature Development",
//   },
//   {
//     id: "drawing",
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
//     title: "Shopify.dev | Interactive Two Column Coding Tutorials",
//     description: "UX Design, UX research, Prototyping, Feature Development",
//   },
// ];

const Project = ({ image, title, description, id }) => {
  return (
    <Link href={`/works/${id}`} className="block">
      <img
        loading="lazy"
        src={image}
        className="mt-28 mr-44 max-w-full border border-black border-solid aspect-[1.47] w-[659px] max-md:mt-10 max-md:mr-2.5"
      />
      <div className="flex flex-col px-2 py-px mt-4 max-md:max-w-full">
        <div className="font-medium text-stone-950 max-md:max-w-full">
          {title}
        </div>
        <div className="mt-1 font-light text-neutral-700 max-md:max-w-full">
          {description}
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  const smiley = (
    <svg
      className="smiley-path max-md:top-[-80px]"
      width="38"
      height="34"
      viewBox="0 0 38 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.28125 3.67383C5.28125 7.35509 6.11835 10.8157 6.11835 14.5561"
        stroke="#A7EB7B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12.8145 2V13.7194"
        stroke="#A7EB7B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M1.58984 24.2076C12.4344 23.1231 23.9511 22.7893 34.3657 19.154C34.8834 18.9733 36.4459 18.2954 35.1959 19.0097C34.1513 19.6066 33.9425 21.0192 33.5896 22.0779C32.8675 24.2442 31.9455 25.8695 30.1785 27.3841C25.1408 31.7021 19.0631 33.5892 12.4369 31.6616C8.35537 30.4742 2.56446 28.538 2.56446 23.5578"
        stroke="#A7EB7B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );

  const arrow = (
    <svg
      className="top-[-10px] rotate-[180]"
      width="45"
      height="38"
      viewBox="0 0 45 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7547 15.1306C23.1249 14.4741 24.093 14.1668 24.7392 13.8784C25.5799 13.5031 26.5058 13.0717 27.247 12.5193C27.7339 12.1563 28.2473 11.7815 28.7586 11.4542C29.1664 11.1931 29.5235 10.8367 29.9253 10.5952C31.2663 9.78928 32.3787 8.6474 33.654 7.77775C33.7683 7.69987 34.792 6.94885 34.8285 7.00277C35.5936 8.1332 36.6544 9.00315 37.5068 10.076C37.958 10.6438 38.5167 11.2166 39.065 11.6947C39.5695 12.1346 39.9015 12.7541 40.41 13.1797C40.7507 13.465 41.0132 13.9603 41.2433 14.3327C41.5797 14.877 41.996 15.4223 42.3751 15.9399C42.8698 16.6153 43.3577 17.0135 42.6309 17.6846C41.7789 18.4714 40.7241 19.0919 39.7161 19.6698C38.7328 20.2336 37.7185 20.7194 36.7006 21.2159C35.4406 21.8305 34.2261 22.4903 33.0106 23.1744C32.1987 23.6313 31.4165 24.1557 30.6075 24.5984C30.4591 24.6796 30.2897 24.6954 30.2897 24.8885C30.2897 25.3085 30.3716 25.6234 30.6036 25.9842C31.5117 27.3963 32.1198 29.0162 33.0649 30.4012C33.3942 30.8837 33.6004 31.4484 33.8634 31.9664C34.1344 32.5004 34.4465 33.0419 34.6463 33.6042C34.6861 33.7162 35.1258 34.367 34.9021 34.425C34.5569 34.5145 34.1524 34.509 33.7975 34.509C33.2051 34.509 32.6181 34.5777 32.0261 34.5777C30.0797 34.5777 28.1482 34.9096 26.2043 34.9213C24.1019 34.9339 21.99 35.1085 19.898 35.2993C18.8565 35.3942 17.8071 35.4574 16.7623 35.5398C15.3054 35.6546 13.8704 35.8834 12.4057 35.8834C9.80581 35.8834 7.1313 36.1674 4.54511 35.849C3.95043 35.7758 3.25519 35.6085 2.66136 35.6085C2.5235 35.6085 2.10915 35.5813 2.04895 35.4405C1.89129 35.0717 2.1575 34.5895 2.24275 34.2494C2.53554 33.0815 2.84183 31.8998 3.25827 30.7677C3.97308 28.8245 5.07929 27.0988 6.02575 25.2703C6.46501 24.4216 6.89446 23.574 7.32034 22.7201C7.65667 22.0457 7.87941 21.3396 8.17694 20.6509C9.05413 18.6206 9.4953 16.4453 10.2274 14.367C10.5491 13.4535 10.8174 12.5217 11.1421 11.6107C11.3874 10.9225 11.7062 10.2765 11.9754 9.59878C12.2337 8.94867 12.5657 8.32315 12.8863 7.70903C12.949 7.58907 13.0271 7.48498 13.0956 7.36926C13.1298 7.31163 13.1615 7.16047 13.2119 7.2051C13.6191 7.56608 14.0664 7.84479 14.5259 8.15188C15.1733 8.58459 15.9218 8.80962 16.5995 9.18265C16.9804 9.39225 17.3519 9.66831 17.7003 9.92328C18.0182 10.1559 18.3504 10.3651 18.6383 10.6334C19.0812 11.046 19.5247 11.4682 19.9639 11.9008C20.5243 12.4528 21.0617 13.0104 21.6384 13.5501C21.9096 13.8039 22.3772 14.112 22.5454 14.4434"
        stroke="#A7EB7B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M12.9531 1.83008C13.0034 3.49063 14.5154 5.00004 15.4666 6.31058C16.4486 7.66361 17.4803 9.06199 18.663 10.2447C19.2535 10.8351 19.7801 11.4842 20.2749 12.1571C20.5347 12.5104 20.7997 12.849 21.0672 13.1953C21.5284 13.7921 20.6238 11.77 20.5754 11.6653"
        stroke="#A7EB7B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M12.462 2.07617C12.462 6.96122 10.9955 11.4936 9.89389 16.2007C9.09231 19.6256 8.12597 23.0118 7.17553 26.3911C6.5173 28.7315 5.7492 31.1385 4.83966 33.4124C4.74678 33.6446 4.09651 35.4626 4.143 35.6253C4.21081 35.8626 10.1904 35.3967 10.4403 35.3794C15.6972 35.0151 20.9702 34.8329 26.2313 35.2155C28.6155 35.3889 31.056 35.4144 33.4438 35.516C34.9751 35.5812 36.4816 35.7619 38.0336 35.7619C39.149 35.7619 39.1216 35.5159 38.4161 34.6144C37.1874 33.0445 35.9909 31.4442 34.7825 29.8607C34.0483 28.8986 33.1872 28.0548 32.3784 27.1561C31.8673 26.5882 31.7205 25.7605 31.149 25.189"
        stroke="#A7EB7B"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );

  const code = (
    <svg
      className="absolute top-[-10px] left-[-10px]"
      width="60"
      height="27"
      viewBox="0 0 60 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6063 8.06542C10.1359 10.4991 7.59497 13.1705 5.13578 14.5815C4.40777 14.9992 0.819363 17.1549 2.14695 18.2268C4.85945 20.4168 8.40668 21.8859 11.4504 23.6048C12.7479 24.3376 14.1265 25.5233 15.5488 24.8031"
        stroke="#A7EB7B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M33.8047 2.35742C30.5357 10.0547 23.6424 25.2952 23.6424 25.2952"
        stroke="#A7EB7B"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M42.636 5.49731C46.8468 7.39509 51.8313 8.34746 56.2699 9.63118C58.1177 10.1656 58.3369 10.3085 57.45 11.879C55.7049 14.9691 53.3175 17.4619 50.8738 20.0097C49.8238 21.1045 47.2359 24.0091 45.6226 23.9276"
        stroke="#A7EB7B"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );

  return (
    <div>
      <Header />

      <div className="flex overflow-hidden flex-col items-center px-20 pt-40 pb-[990px] max-md:px-5 max-md:py-24">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <h1 className="w-[857px] max-md:mt-10 max-md:max-w-full text-stone-950 uppercase text-6xl font-medium max-md:text-4xl">
            Hello, I'm <span className="name"> Anne! {smiley}</span>
            I'm a{" "}
            <span className="design-technologist">
              {code}Design Technologist
            </span>{" "}
            @Shopify . I love tinkering on{" "}
            <span className="circle-animation">
              solutions
              <svg
                className="circle-svg max-md:w-[300px]"
                width="450"
                height="69"
                viewBox="0 0 505 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M10.0834 66.7132C36.6197 66.7132 63.3273 67.5153 89.8441 66.4369C114.039 65.4529 138.824 67.3958 162.879 64.8481C192.958 61.6626 223.829 64.4101 254.053 62.3614C284.704 60.2839 315.489 62.9831 345.975 62.9831C369.062 62.9831 392.24 60.4964 415.477 60.4964C431.29 60.4964 446.699 57.3324 462.287 56.7664C468.56 56.5386 476.833 55.464 482.873 53.658C486.838 52.4724 495.322 52.9412 498.295 49.5826C506.969 39.7838 502.465 21.7304 494.355 13.2492C485.571 4.06336 475.088 2.50074 462.627 2.12811C431.441 1.19553 399.795 5.60315 368.667 7.30873C319.509 10.0022 270.866 12.0058 221.646 12.0058C191.946 12.0058 162.358 14.4925 132.714 14.4925C114.743 14.4925 96.8315 17.7971 78.838 18.2226C69.0063 18.455 56.41 18.8981 46.8386 21.3309C38.1058 23.5506 25.9858 21.8119 18.0323 26.3043C13.0373 29.1257 2.74596 30.1301 2.74596 38.1161C2.74596 42.1915 1.06755 44.8451 2.74596 48.6846C5.05887 53.9756 11.5837 54.5353 16.1979 56.4901C26.5578 60.8788 41.2322 60.8956 52.4775 62.3614C67.5628 64.3278 82.6629 65.4698 97.861 65.4698C117.847 65.4698 138.192 66.6569 158.055 64.5028C168.987 63.3172 180.357 64.3661 191.345 64.2265C202.528 64.0844 213.658 62.9831 224.907 62.9831C248.235 62.9831 271.402 64.2265 294.681 64.2265C323.121 64.2265 351.56 65.4698 379.945 65.4698C396.013 65.4698 413.367 67.1848 428.997 64.2955C447.034 60.9613 469.126 63.7202 485.794 55.2467C492.26 51.9596 499.56 46.4511 499.246 37.8398C499.087 33.4595 495.589 30.4435 492.928 27.3405C486.965 20.386 481.386 15.306 473.565 10.7625C461.561 3.78854 450.081 4.54573 436.606 4.54573C412.641 4.54573 388.667 3.70013 364.862 7.03243C346.204 9.64428 328.07 12.0058 309.22 12.0058C294.585 12.0058 280.077 14.4925 265.399 14.4925C248.784 14.4925 232.236 15.7359 215.6 15.7359C168.77 15.7359 121.116 15.6536 74.8295 22.5743C52.831 25.8634 26.55 22.6444 6.41468 33.4191C-2.11621 37.984 5.36204 54.7195 10.0834 59.2531C17.3133 66.1954 33.9913 62.9831 43.1019 62.9831"
                  stroke="#A7EB7B"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            that are user-focused and accessible.
          </h1>

          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
