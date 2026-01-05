"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects as staticProjects } from "./data/worksData";
import { ArticleCard } from "./components/ArticleCard";

const Project = ({ image, title, description, id }) => {
  const descriptionText = Array.isArray(description) 
    ? description.join(", ") 
    : description;
  
  return (
    <Link href={`/works/${id}`} className="block relative">
      <div className="relative">
        <img
          loading="lazy"
          src={image}
          alt={`${title} cover`} // Add meaningful alt text
          width={410}
          height={410}
          className="mt-8 aspect-square h-[410px] max-w-full border-[2px] border-solid border-gray-900 w-full max-md:mt-10 max-md:mr-2.5 max-md:h-auto grayscale hover:grayscale-0 transition-all duration-300 object-cover"
        />
        <div className="absolute bottom-[0px] px-4 bg-lime-300 border-[2px] border-solid border-gray-900 py-3 monoFont text-xs">
          {descriptionText}
        </div>
      </div>
      <div className="flex flex-col px-2 py-px mt-4 max-md:max-w-full">
        <div className="text-xl text-stone-950 max-md:max-w-full sansFont">
          {title}
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  useEffect(() => {
    // Simulate fetching projects (if dynamic)
    setProjects(staticProjects);
    setLoading(false);
  }, []);

  // Map description tags to all matching filter categories
  const getProjectCategories = (description) => {
    if (!description || !Array.isArray(description)) return [];
    
    const descLower = description.map(d => d.toLowerCase()).join(" ");
    const categories = [];
    
    // Check UX
    if (descLower.includes("ux") || descLower.includes("ui/ux") || descLower.includes("ux design")) {
      categories.push("UX");
    }
    // Check for research
    if (descLower.includes("ux research") || descLower.includes("research")) {
      categories.push("RESEARCH");
    }
    // Check for development
    if (descLower.includes("development") || descLower.includes("frontend") || descLower.includes("ar/vr") || descLower.includes("mobile") || descLower.includes("documentation") || descLower.includes("prototyping")) {
      categories.push("DEVELOPMENT");
    }
    
    return categories;
  };

  // Filter projects based on selected category
  const filteredProjects = projects?.filter((project) => {
    if (selectedFilter === "ALL") return true;
    
    const projectCategories = getProjectCategories(project.description);
    return projectCategories.includes(selectedFilter);
  }) || [];

  if (loading) {
    return (
      <div className="flex flex-col items-center px-20 pt-40">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="flex flex-col items-center px-20 pt-40">
        <h1>No projects found</h1>
      </div>
    );
  }

  const smiley = (
    <svg
      className="smiley-path max-md:top-[-100px]"
      width="77"
      height="72"
      viewBox="0 0 77 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8828 6.97852C11.0495 15.315 13.7124 23.4672 15.9482 31.2925"
        stroke="#A7EB7B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M30.1328 2.92773C30.1328 13.2696 34.1851 23.2383 34.1851 33.3202"
        stroke="#A7EB7B"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M2.7793 51.5558C9.18451 58.2734 17.4631 68.0267 27.5435 68.7219C30.6384 68.9353 33.7843 68.7781 36.8864 68.7781C44.4097 68.7781 51.5481 66.7316 57.9359 62.6434C68.7236 55.7393 70.0685 44.1997 73.695 33.3203"
        stroke="#A7EB7B"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );

  const line = (
    <svg
      className="line object-contain absolute"
      width="100%"
      height="46"
      viewBox="0 0 546 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9746 25.7613C18.2029 32.9896 38.1118 33.9877 47.4276 31.1929C58.2292 27.9524 67.4053 18.4116 78.5051 15.8502C96.3315 11.7364 118.904 20.4087 132.205 32.1448C138.656 37.8375 149.708 34.377 156.563 31.3609C163.092 28.488 168.759 24.2969 175.489 21.7297C182.739 18.9641 189.83 15.6278 196.991 12.6584C205.772 9.01782 220.348 15.1766 229.133 17.0261C235.386 18.3426 239.884 20.3109 245.036 23.7455C252.079 28.4411 265.405 30.1988 273.593 28.5611C282.941 26.6915 290.92 21.8813 299.015 16.9141C305.565 12.8948 312.617 10.6426 320.405 10.6426C331.304 10.6426 339.099 21.5251 349.299 23.1856C358.984 24.7622 372.565 25.4212 382 22.1776C395.378 17.579 407.464 13.0554 421.589 11.1465C430.413 9.95416 437.863 10.8152 445.163 15.6822C453.11 20.9801 461.171 24.6387 471.033 24.7534C475.883 24.8098 480.854 25.0229 485.704 24.7534C487.44 24.657 490.196 21.5082 491.975 20.7218C505.525 14.7348 520.334 15.6822 535.092 15.6822"
        stroke="#A7EB7B"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  );

  const underline = (
    <svg
     className="object-contain absolute max-md:hidden"
      width="100%"
      height="32"
      viewBox="0 0 388 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 21.747C99.7647 17.7075 189.346 11.4684 279.201 11.4684C311.868 11.4684 344.465 10 377.092 10"
        stroke="#A7EB7B"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div>
      <div className="flex overflow-hidden flex-col items-center px-8 pt-[150px] pb-[200px] max-w-[1440px] mx-auto max-md:px-5 max-md:py-24">
        <div className="flex flex-col items-start w-full">
          <h1 className="max-w-[1000px] mb-20 max-md:mt-10 max-md:max-w-full text-stone-950 uppercase text-[90px] leading-none font-medium max-md:text-4xl">
            Hello, I&apos;m <span className="name"> Anne! {smiley}</span>
            I&apos;m a{" "}
            <span className="design-technologist">
              Design {underline}
            </span>{" "} Technologist {" "} 
            <span className="shopify">@Shopify{line}</span> . 
            {/* I love tinkering
            on{" "}
            <span className="circle-animation">
              solutions
              <svg
                className="circle-svg max-md:w-[300px]"
                width="650"
                height="120"
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
            </span>{" "} */}
          </h1>

          <div className="mt-3 w-full">
            <h2 className="text-2xl monoFont uppercase text-zinc-800 max-md:max-w-full z-10 tracking-tight">
              <span className="">/</span> CASE STUDIES
            </h2>

            {/* Filter Buttons */}
            <div className="flex gap-4 mt-6 mb-8 flex-wrap">
              {["ALL", "UX", "DEVELOPMENT", "RESEARCH"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 monoFont text-sm uppercase border-2 border-solid border-gray-900 transition-all ${
                    selectedFilter === filter
                      ? "bg-lime-300 text-stone-950 font-bold"
                      : "bg-transparent text-stone-950 hover:bg-lime-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 w-full max-md:grid-cols-1 max-md:gap-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.id} className="w-full min-w-0">
                    <Project {...project} />
                  </div>
                ))
              ) : (
                <div className="col-span-2 max-md:col-span-1 text-center py-10 monoFont text-stone-950">
                  No projects found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
