"use client";
import { useState } from "react";
import Header from "../../components/header";
import PasswordProtection from "../../components/PasswordProtection";
import Image from "next/image";

export default function RevHeist() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div>
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[100px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          {/* Blog Header */}
          <div className="flex flex-col max-w-full">
            <div className="relative">
              <svg
                className="absolute -bottom-4 left-0 w-full h-auto z-0"
                width="454"
                height="32"
                viewBox="0 0 454 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56407 12.7192C3.56407 16.984 2.10115 22.2562 5.97194 24.6382C10.8935 27.6668 18.2953 27.8456 22.5863 23.5546C25.4168 20.7241 28.1113 15.3073 30.6526 11.8764C36.3997 4.11796 39.8345 12.3235 44.1969 17.6553C49.2666 23.8516 48.1056 29.6957 57.7412 27.2868C66.0977 25.1977 70.8824 19.2212 76.1614 13.3212C78.1801 11.065 81.8045 3.60455 85.6725 4.05086C89.0314 4.43842 93.7201 16.8871 96.1468 19.702C97.7436 21.5543 100.15 25.9968 102.768 26.7451C118.281 31.1772 130.293 18.9689 141.716 10.5521C144.68 8.36816 150.938 4.86495 154.177 8.56562C158.574 13.5909 158.912 20.2638 165.012 23.3138C169.241 25.4285 174.365 24.6717 178.014 21.3875C183.648 16.3175 187.474 11.8376 195.171 9.52877C201.845 7.52634 203.131 9.51128 207.451 15.1271C213.184 22.5805 215.172 28.9723 224.607 28.9723C238.553 28.9723 247.877 12.6222 261.688 11.6357C263.983 11.4717 267.575 8.67123 269.694 9.64917C274.058 11.6631 276.334 18.261 279.627 21.6283C285.382 27.5147 288.297 28.1934 295.639 23.4944C302.338 19.2073 308.435 14.6111 313.999 9.0472C318.432 4.61442 322.334 2.44066 326.941 8.26464C332.34 15.089 338.639 29.1559 348.612 22.2303C354.411 18.2035 360.822 14.8378 365.467 9.52877C367.277 7.46013 369.557 6.09401 371.487 4.05086C374.075 1.31092 374.461 7.2331 375.34 8.9268C377.888 13.8412 380.234 21.8429 386.657 19.702C391.708 18.0184 399.181 14.61 402.248 10.0103C405.122 5.69909 407.967 4.00989 411.217 8.38503C414.617 12.9617 416.052 18.037 422.052 15.729C425.683 14.3327 429.258 8.38503 433.189 8.38503C437.143 8.38503 437.795 14.302 440.713 15.9698C442.458 16.967 440.835 18.1369 443.723 18.1369C446.171 18.1369 448.619 18.1369 451.067 18.1369"
                  stroke="#A7EB7B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <h1 className="text-6xl font-semibold uppercase text-zinc-800 max-md:text-4xl relative z-10">
                Reverse Heists
              </h1>
            </div>
            <p className="mt-4 text-xl text-zinc-600">
              An art in context experiment
            </p>
            <div className="mt-4 text-sm text-zinc-500">March 15, 2024</div>
          </div>

          {/* Cover Image */}
          <div className="w-full mt-8">
            <img
              src="/images/react-server-components.jpg"
              alt="Understanding React Server Components"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Blog Content */}
          <div className="flex flex-col mt-36 max-w-full text-lg text-neutral-900 max-md:mt-10 mb-20">
            <div className="flex relative gap-2.5 items-start self-start font-bold whitespace-nowrap">
              <svg
                className="object-contain absolute bottom-px left-0.5 z-0 shrink-0 self-start w-[80px]"
                width="86"
                height="9"
                viewBox="0 0 86 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3.01495C7.73264 4.19981 11.5751 3.14341 16.0769 3.01495C20.2132 2.89693 24.1878 3.50983 28.2991 3.71976C38.9933 4.2658 49.362 5.25374 60.094 5.25374C67.731 5.25374 75.6026 6 83 6"
                  stroke="#A7EB7B"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="z-0 my-auto monoFont">Introduction</div>
            </div>

            <div className="flex flex-col mt-3.5 w-full max-md:max-w-full mb-8">
              <div className="max-md:max-w-full">
                <span className="text-3xl font-bold text-neutral-900">
                  What are React Server Components?
                </span>
              </div>

              <div className="mt-3 max-md:max-w-full">
                React Server Components (RSC) represent a paradigm shift in how
                we build React applications. They allow components to run
                exclusively on the server, reducing the JavaScript bundle sent
                to the client and enabling direct access to backend resources.
              </div>
            </div>

            <div className="flex flex-col mt-3.5 w-full max-md:max-w-full mb-8">
              <div className="max-md:max-w-full">
                <span className="text-3xl font-bold text-neutral-900">
                  Key Benefits
                </span>
              </div>

              <div className="mt-3 max-md:max-w-full">
                Server Components offer several advantages: reduced client-side
                JavaScript, improved initial page load, and better security
                through server-side data access. They&apos;re particularly useful for
                data-heavy applications and content-focused websites.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
