import tutorialCover from "../../works/images/tutorial-cover.png"; // Add actual image
import validation from "../../works/images/introspection.png"; // Add actual image
import overview from "../../works/images/overview-component.png"; // Add actual image
import a11y from "../../works/images/a11y.png"; // Add actual image

export const projectData = {
  id: "tutorials",
  title: "Tutorials on Shopify.dev",
  description: "Frontend Development, Documentation",
  image: tutorialCover.src,
  isPasswordProtected: true,
  details: [
    {
      id: 1,
      title: "Role",
      description: "Technical Prototype Designer & Frontend Developer",
      underlineWidth: "w-[62px]",
      underlineLeft: "left-[5px]",
    },
    {
      id: 2,
      title: "Team",
      description: "Designers, PMs, Technical Writers, Developers",
      underlineWidth: "w-8",
      underlineLeft: "left-[3px]",
    },
    {
      id: 3,
      title: "Tools",
      description: "MDX, Markdown, React",
      underlineWidth: "w-[39px]",
      underlineLeft: "left-[3px]",
    },
    {
      id: 4,
      title: "Results",
      description: "30% increase in helpfulness and authorship metrics",
      underlineWidth: "w-[54px]",
      underlineLeft: "left-[3px]",
    },
  ],
  brief: [
    {
      id: 1,
      title: "Listen.",
      description:
        "Third-party developers struggle with text-heavy layouts while non-technical authors face challenges with Liquid markdown extensions.",
      hasBorder: true,
      hasUnderline: true,
      customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
      borderStyle: "border-2 border-solid border-stone-950",
    },
    {
      id: 2,
      title: "Reshape.",
      description:
        "How might we create two-column, code-heavy tutorial pages that enhance learning for readers and simplify maintenance for writers?",
      hasBorder: true,
      borderStyle: "border-dashed border-[3px] border-stone-950",
    },
    {
      id: 3,
      title: "Create.",
      description:
        "A component-based MDX experience that balances reader engagement with author simplicity",
      hasBorder: true,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5f2bf3a67692e58c1bb649008d1e2a59faae6032e475edf1d8fe8b66d9d79c3b?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9",
      borderStyle: "border-2 border-solid border-stone-950",
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
          text: "The Before",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Using markdown with custom Liquid tags presented significant challenges. Liquid, a Shopify-specific template language built on Ruby, uses objects, tags, and filters inside template files to display dynamic content. The basic layout made functionality extension difficult, and Liquid tags proved challenging for non-technical authors to learn.",
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
          text: "Guiding Principles",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Templates must be easy to author. To design an authorship platform that truly works for our authors, it's important to make them feel empowered and productive. This means creating a system that boosts their efficiency while keeping it tough to make mistakes.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "The content should come with a structured setup by default. Offering pre-set templates that guide authors helps keep things consistent and high-quality.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Early Prototyping",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "I prototyped using React components early on, which allowed us to follow the two column design layout and add interactivity.",
            },
            {
              id: 2,
              type: "video",
              src: "/tutorial-proto.mp4",
              autoPlay: true,
              muted: true,
              loop: true,
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
          text: "Technical Implementation",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "MDX is part of the Unified ecosystem, allowing us to transform and compile content using ASTs (Abstract Syntax Trees). We used remark plugins to inspect and validate the AST structure of MDX files.",
            },
            // {
            //   id: 2,
            //   type: "image",
            //   className: "mt-8 mb-8",
            //   //   src: ecosystem.src,
            //   alt: "MDX ecosystem diagram",
            // },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Accessibility Considerations",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "The two-column layout introduced accessibility challenges that required careful consideration. We conducted extensive testing with NVDA and JAWS users through Fable interviews.",
            },
            {
              id: 2,
              type: "image",
              className: "mt-8 mb-8",
              src: a11y.src,
              alt: "Accessibility features mapping",
            },
          ],
        },
        // {
        //   id: 3,
        //   type: "subheading",
        //   text: "Key Learnings",
        //   children: [
        //     {
        //       id: 1,
        //       type: "paragraph",
        //       text: "1. Hide complexity from authors - their focus should be on content creation\n2. Regular accessibility testing is crucial, especially early in development\n3. Balance stakeholder needs with user experience, prioritizing the authorship experience",
        //     },
        //   ],
        // },
      ],
    },
  ],
};
