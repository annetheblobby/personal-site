
"use client";
import { useState } from "react";
import PasswordProtection from "../../components/PasswordProtection";

export default function Tree() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[100px] max-md:mb-10">
            <div className="flex flex-col items-start max-w-full w-[895px]">
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
                            Tree Experiment
                        </h1>
                    </div>
                    <p className="mt-4 text-xl text-zinc-600">
                        Welcome to the Tree experiment page!
                    </p>
                    <div className="mt-4 text-sm text-zinc-500">March 15, 2024</div>
                </div>
            </div>
        </div>
    );
}