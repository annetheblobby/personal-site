import Link from "next/link";
import ProjectDetailCard from "../../components/ProjectDetail";
import BriefCard from "../../components/BriefCard";
import { projects } from "../../data/worksData";
import Image from "next/image";

export default async function ProjectPage(props) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);
  console.log(project);

  if (!project) {
    return (
      <div className="flex flex-col items-center px-20 pt-40">
        <h1>Project not found</h1>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[100px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="flex flex-col max-w-full font-semibold uppercase text-zinc-800 w-[821px] max-md:text-4xl headerWorks">
            <div className="w-full max-md:max-w-full max-md:text-4xl text-6xl">
              {project.title}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-16 text-base text-neutral-900 max-md:mt-10">
            {project.details.map((detail) => (
              <ProjectDetailCard key={detail.id} {...detail} />
            ))}
          </div>

          {project.cover && (
            <div className="w-screen h-[60vh] relative mb-16 max-md:-mx-5 ml-[-50vw] left-[50%] right-[50%] mt-8">
              <Image
                src={project.cover}
                alt={`${project.title} cover`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="flex flex-col self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold text-neutral-900 max-md:max-w-full monoFont">
              BRIEF
            </div>
            <div className="flex flex-wrap gap-9 justify-center items-center mt-12 mb-12  text-lg text-neutral-700 max-md:mt-10 max-md:max-w-full">
              {project.brief.map((card) => (
                <BriefCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          {project.bodyContents.map((section) => (
            <div
              key={section.id}
              className="flex flex-col mt-12 max-w-full text-lg text-neutral-900 max-md:mt-10 mb-12"
            >
              <div className="flex relative gap-2.5 items-start self-start font-bold whitespace-nowrap">
                <svg
                  className="object-contain absolute bottom-px left-0.5 z-0 shrink-0 self-start w-full"
                  width="100%"
                  height="9"
                  viewBox="0 0 100 9"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3.01495C7.73264 4.19981 11.5751 3.14341 16.0769 3.01495C20.2132 2.89693 24.1878 3.50983 28.2991 3.71976C38.9933 4.2658 49.362 5.25374 60.094 5.25374C67.731 5.25374 75.6026 6 97 6"
                    stroke="#A7EB7B"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="z-0 my-auto monoFont">{section.text}</div>
              </div>

              {section.children.map((subheading) => (
                <div
                  key={subheading.id}
                  className="flex flex-col mt-3.5 w-full max-md:max-w-full mb-8"
                >
                  <div className="max-md:max-w-full">
                    <span className="text-3xl font-bold text-neutral-900">
                      {subheading.text}
                    </span>
                  </div>

                  {subheading.children.map((content) => {
                    if (content.type === "image") {
                      console.log("Image URL:", content.src); // Add this line to log image URLs
                      return (
                        <img
                          key={content.id}
                          src={content.src}
                          alt={content.alt}
                          className={`mt-3 max-md:max-w-full ${content.className}`}
                        />
                      );
                    } else if (content.type === "quote") {
                      return (
                        <blockquote
                          key={content.id}
                          className={`mt-3 max-md:max-w-full border-l-4 border-[#A7EB7B] pl-4 italic ${content.className}`}
                        >
                          {content.text}
                        </blockquote>
                      );
                    } else {
                      return (
                        <div
                          key={content.id}
                          className={`mt-3 max-md:max-w-full ${content.className}`}
                        >
                          {content.text}
                        </div>
                      );
                    }
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
