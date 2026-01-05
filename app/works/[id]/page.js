"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectDetailCard from "../../components/ProjectDetail";
import BriefCard from "../../components/BriefCard";
import { projects } from "../../data/worksData";
import PasswordProtection from "../../components/PasswordProtection";

export default function ProjectPage({ params: paramsPromise }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [project, setProject] = useState(null);
  const [params, setParams] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    }
    fetchParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (params) {
      const projectData = projects.find((p) => p.id === params.id);
      setProject(projectData);
      setLoading(false); // Set loading to false once the project is loaded
    }
  }, [params]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setExpandedImage(null);
      }
    };
    if (expandedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [expandedImage]);

  if (loading) {
    return (
      <div className="flex flex-col items-center px-20 pt-40">
        <h1>Loading...</h1>
      </div>
    );
  }

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

  if (project.isPasswordProtected && !isAuthenticated) {
    return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div>
      {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src={expandedImage.src}
            alt={expandedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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
            <div className="w-screen h-[60vh] relative mb-16 max-md:mb-10 max-md:h-[40vh] max-md:-mx-5 max-md:left-0 ml-[-50vw] left-[50%] right-[50%] mt-8 bg-[#444444] group">
              {project.coverType === "video" || project.cover?.endsWith(".mp4") || project.cover?.endsWith(".webm") || project.cover?.endsWith(".mov") ? (
                <video
                  src={project.cover}
                  className="w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <>
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    className="object-cover w-full h-full cursor-pointer"
                  />
                  <button
                    onClick={() => setExpandedImage({ src: project.cover, alt: `${project.title} cover` })}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full"
                    aria-label="Expand image"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                    </svg>
                  </button>
                </>
              )}
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
                      return (
                        <div
                          key={content.id}
                          className="relative w-full flex items-center justify-center overflow-hidden mt-8 group"
                        >
                          <img
                            src={content.src}
                            alt={content.alt}
                            className="w-full h-full object-contain cursor-pointer"
                          />
                          <button
                            onClick={() => setExpandedImage({ src: content.src, alt: content.alt })}
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full"
                            aria-label="Expand image"
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                            </svg>
                          </button>
                        </div>
                      );
                    } else if (content.type === "video") {
                      return (
                        <div
                          key={content.id}
                          className={`w-full flex items-center justify-center overflow-hidden rounded mt-8 ${
                            content.className || ""
                          }`}
                        >
                          {content.src.includes("vimeo") ||
                          content.src.includes("youtube") ? (
                            <iframe
                              src={content.src}
                              className="w-full aspect-video"
                              style={{ minHeight: "500px" }}
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <video
                              src={content.src}
                              className="w-full h-full object-contain"
                              controls
                              autoPlay={content.autoPlay}
                              muted={content.muted}
                              loop={content.loop}
                            />
                          )}
                        </div>
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
                          {typeof content.text === "string"
                            ? content.text.split("\n").map((line, i) => (
                                <span key={i}>
                                  {line}
                                  {i < content.text.split("\n").length - 1 && (
                                    <br />
                                  )}
                                </span>
                              ))
                            : content.text}
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
