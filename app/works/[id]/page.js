import Header from "../../components/header";
import Link from "next/link";
import ProjectDetailCard from "../../components/ProjectDetail";
import BriefCard from "../../components/BriefCard";

// This would typically come from your data file
const projects = [
  {
    id: "interactive-tutorials",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
    title: "Shopify.dev | Interactive Two Column Coding Tutorials",
    description: "UX Design, UX research, Prototyping, Feature Development",
    // Add more detailed content for the project page
    brief: [
      {
        id: 1,
        title: "Listen.",
        description:
          "What if clients can interact with an advisor in a remote setting?",
        hasBorder: true,
        hasUnderline: true,
        customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
        borderStyle: "border-2 border-solid border-stone-950",
      },
      {
        id: 2,
        title: "Reshape.",
        description:
          "What if clients can interact with an advisor in a remote setting?",
        hasBorder: true,
        borderStyle: "border-dashed border-[3px] border-stone-950",
      },
      {
        id: 3,
        title: "Create.",
        description: "A high fidelity prototype was created.",
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2bf3a67692e58c1bb649008d1e2a59faae6032e475edf1d8fe8b66d9d79c3b?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9",
        imageAlt: "Circular prototype preview",
        hasBorder: true,
        borderStyle: "border-2 border-solid border-stone-950",
      },
    ],
    details: [
      {
        id: 1,
        title: "Context",
        description: "RBC Summer Innovation Challenge, 2020",
        underlineWidth: "w-[62px]",
        underlineLeft: "left-[5px]",
      },
      {
        id: 2,
        title: "Role",
        description: "Design Research, Ideation, Prototyping",
        underlineWidth: "w-8",
        underlineLeft: "left-[3px]",
      },
      {
        id: 3,
        title: "Tools",
        description: "Figma, Typescript, React framework",
        underlineWidth: "w-[39px]",
        underlineLeft: "left-[3px]",
      },
      {
        id: 4,
        title: "Impact",
        description: "Increased positive feedback by 50%",
        underlineWidth: "w-[54px]",
        underlineLeft: "left-[3px]",
      },
    ],
    bodyContents: [
      {
        id: 1,
        type: "section",
        text: "Listen.",
        children: [
          {
            id: 1,
            type: "subheading",
            text: "Pain Point",
            children: [
              {
                id: 1,
                type: "paragraph",
                text: "The 2020 Coronavirus pandemic changed the way RBC's 16 million clients interact with the bank as branches closed down and social distancing restrictions were enforced. How might RBC support it's communities in coming together to remain resilient while adjusting to this new reality? Specifically, how might we foster collaboration and communication in virtual environments?",
              },
            ],
          },
          {
            id: 2,
            type: "subheading",
            text: "UX research",
            children: [
              {
                id: 1,
                type: "paragraph",
                text: "The 2020 Coronavirus pandemic changed the way RBC's 16 million clients interact with the bank as branches closed down and social distancing restrictions were enforced. How might RBC support it's communities in coming together to remain resilient while adjusting to this new reality? Specifically, how might we foster collaboration and communication in virtual environments?",
              },
            ],
          },
        ],
      },
    ],
  },
  // ... other projects
];

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
      <Header />
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[100px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="flex flex-col max-w-full font-semibold uppercase text-zinc-800 w-[621px] max-md:text-4xl headerWorks">
            <div className="flex relative flex-col w-full whitespace-nowrap max-md:max-w-full max-md:text-4xl text-6xl">
              <div className="z-0 max-md:max-w-full max-md:text-4xl">
                InterActive
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e03acf82c4953ca2f99b3ce023ce74a672f55d92ab082197aa1059d0bf1eb8b5?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9"
                className="object-contain absolute z-0 max-w-full aspect-[6.62] left-[-74px] top-[-33px] w-[792px] max-md:w-[350px] max-md:left-[-33px] max-sm:hidden"
                alt=""
              />
            </div>
            <div className="w-full max-md:max-w-full max-md:text-4xl text-6xl">
              two Column Tutorials
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-16 text-base text-neutral-900 max-md:mt-10">
            {project.details.map((detail) => (
              <ProjectDetailCard key={detail.id} {...detail} />
            ))}
          </div>

          <div className="flex flex-col self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold text-neutral-900 max-md:max-w-full monoFont">
              BRIEF
            </div>
            <div className="flex flex-wrap gap-9 justify-center items-center mt-12 w-full text-lg text-neutral-700 max-md:mt-10 max-md:max-w-full">
              {project.brief.map((card) => (
                <BriefCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          {project.bodyContents.map((section) => (
            <div
              key={section.id}
              className="flex flex-col mt-36 max-w-full text-lg text-neutral-900 max-md:mt-10 mb-20"
            >
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

                  {subheading.children.map((paragraph) => (
                    <div key={paragraph.id} className="mt-3 max-md:max-w-full">
                      {paragraph.text}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
