// Placeholder image - replace with actual functions image when available
import functionsImage from "../../works/images/functions.png";
// import functionsCover from "../../works/images/functions-cover.jpg";
import diagrams from "../../works/images/diagrams.png";
import structure from "../../works/images/structure.png";
import functionscover from "../../works/images/functionscover4.png";
export const projectData = {
  id: "functions",
  image: functionsImage.src, // Update with actual image path
  title: "Functions Documentation Redesign",
  description: ["UX Design", "Tooling Development", "Asset Design"],
  cover: functionscover.src,
  isPasswordProtected: true,
  details: [
    {
      id: 1,
      title: "Context",
      description: "Shopify.dev Documentation",
      underlineWidth: "w-[62px]",
      underlineLeft: "left-[5px]",
    },
    {
      id: 2,
      title: "Role",
      description: "UX designer, tooling development, Asset designer (pixel art)",
      underlineWidth: "w-8",
      underlineLeft: "left-[3px]",
    },
    {
      id: 3,
      title: "Tools",
      description: "Figma, React Flow, Mermaid",
      underlineWidth: "w-[39px]",
      underlineLeft: "left-[3px]",
    },
    {
      id: 4,
      title: "Focus",
      description: "Developer Experience, Information Architecture",
      underlineWidth: "w-[54px]",
      underlineLeft: "left-[3px]",
    },
  ],
  brief: [
    {
      id: 1,
      title: "Listen.",
      description:
        "Functions documentation was disorganized and lacked information and examples.",
      hasBorder: true,
      hasUnderline: true,
      customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
      borderStyle: "border-2 border-solid border-stone-950",
    },
    {
      id: 2,
      title: "Reshape.",
      description:
        "Can we reframe the clutter of information into a cohesive usage storyline for developers?",
      hasBorder: true,
      borderStyle: "border-dashed border-[3px] border-stone-950",
    },
    {
      id: 3,
      title: "Create.",
      description:
        "I redesigned the information architecture and internal pages to follow the job to be done of developers at each stage of learning.",
      hasBorder: true,
      borderStyle: "border-2 border-solid border-stone-950",
      image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2bf3a67692e58c1bb649008d1e2a59faae6032e475edf1d8fe8b66d9d79c3b?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9",
    imageAlt: "Circular prototype preview",
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
          text: "Research & Analysis",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "I started by reviewing and organizing qualitative feedback pulled from site analytics, looking for recurring themes across ratings and comments. To accelerate synthesis, I used ChatGPT to help cluster feedback into common user needs and behavioral patterns. From there, I translated those insights into a concrete example use case and built a small prototype app that demonstrated how developers might actually use Functions in practice. This helped ground the problem space in real workflows rather than abstract documentation gaps.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Key Pain Points",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Two issues surfaced quickly. First, developers were forced to bounce between multiple pages to piece together the information they needed, which added friction to an already complex process. Second, the documentation lacked clear, end-to-end examples that showed how individual concepts fit together into a complete workflow.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "section",
      text: "Reshape.",
      children: [
        {
          id: 1,
          type: "subheading",
          text: "Redefining Success",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "The first step was redefining what success looked like for the Functions docs. Developers needed a clear technical overview upfront—what Functions are, what they enable, and how they're structured—before diving into details. From there, I rethought documentation pages as containers for complete, end-to-end examples, shifting toward an 'example-first' approach and aiming to put everything a developer needs on a single page.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Reducing Cognitive Load",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Because there are many moving parts to Functions, I focused on reducing cognitive load. Instead of relying on dense text, I explored using diagrams to communicate concept flow more quickly.",
            },
            {
              id: 2,
              type: "image",
              src: diagrams.src,
              alt: "Diagrams",
            },
            {
              id: 3,
              type: "paragraph",
              text: " This led to a broader rethink of how diagrams were used across the site, with a goal of making them interactive rather than static. While I explored coded diagram solutions like React Flow and Mermaid, engineering constraints led me to build a lightweight Figma plugin that exports diagrams as linked SVGs instead.",
            },
            {
              id: 4,
              type: "video",
              src: "/plugin.mp4",
              alt: "Figma plugin",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "section",
      text: "Create.",
      children: [
        {
          id: 1,
          type: "subheading",
          text: "Creating a clear mental model",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "In execution, I consolidated all high-level 'targets' or injection points into a single, scannable entry page to give developers a clearer mental model of the ecosystem.",
            },
            {
              id: 2,
              type: "image",
              src: structure.src,
              alt: "Structure",
            },
          ],
        },
        // {
        //   id: 2,
        //   type: "subheading",
        //   text: "Streamlining & Testing",
        //   children: [
        //     {
        //       id: 1,
        //       type: "paragraph",
        //       text: "Alongside this, I removed redundant structures—such as the common objects folder—in favor of clearer introspection patterns. Finally, I ran an interaction design study using a coded prototype to experiment with example section layouts, testing how to surface essential information without overwhelming the reader. The result was a documentation structure that felt more cohesive, navigable, and aligned with how developers actually learn and build.",
        //     },
        //   ],
        // },
      ],
    },
  ],
};

