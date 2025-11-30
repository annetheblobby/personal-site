import blockbot from "../../works/images/blockbot-cover.jpg";
import persona from "../../works/images/persona.png";
import blockbotcover from "../../works/images/arblockbotcover.jpg";
import diagram from "../../works/images/diagram.png";
export const projectData = {
  id: "blockbot",
  image: blockbot.src,
  title: "BlockBot: Making Robotics Accessible with AR",
  description: "AR/VR, Education, UI/UX, Mobile",
  imageAlt: "BlockBot",
  cover: blockbotcover.src,
  details: [
    {
      id: 1,
      title: "Context",
      description: "VR AR App Development",
      underlineWidth: "w-[62px]",
      underlineLeft: "left-[5px]",
    },
    {
      id: 2,
      title: "Team",
      description: "Kevin Feng, Daniel Martin, Anjali Thatte",
      underlineWidth: "w-8",
      underlineLeft: "left-[3px]",
    },
    {
      id: 3,
      title: "Tools",
      description: "Unity, ARCore, Figma",
      underlineWidth: "w-[39px]",
      underlineLeft: "left-[3px]",
    },
    {
      id: 4,
      title: "Role",
      description: "Interface design/development",
      underlineWidth: "w-[54px]",
      underlineLeft: "left-[3px]",
    },
  ],
  brief: [
    {
      id: 1,
      title: "Listen.",
      description:
        "Learning robotics can be overwhelming. Expensive equipment and complex coding create major roadblocks.",
      hasBorder: true,
      hasUnderline: true,
      customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
      borderStyle: "border-2 border-solid border-stone-950",
    },
    {
      id: 2,
      title: "Reshape.",
      description:
        "How might we make robotics education more accessible and engaging for students?",
      hasBorder: true,
      borderStyle: "border-dashed border-[3px] border-stone-950",
    },
    {
      id: 3,
      title: "Create.",
      description:
        "An AR-based platform that teaches coding through interactive block-based programming",
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
        // {
        //   id: 1,
        //   type: "image",
        //   className: "mt-8 mb-8",
        //   src: blockbotcover.src,
        // },
        {
          id: 2,
          type: "subheading",
          text: "Pain Point",
          children: [
            {
              id: 1,
              type: "paragraph",

              text: "Learning robotics can be overwhelming. Expensive equipment, complex coding, and frustrating mechanical issues create major roadblocks. BlockBot eliminates these challenges by using Augmented Reality (AR) to teach coding in a fun, interactive way—no physical robot required.",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      type: "section",
      text: "Reshape.",
      children: [
        {
          id: 1,
          type: "subheading",
          text: "Reimagining Robotics Education",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "BlockBot allows users to snap together colored puzzle blocks to create code that moves a virtual robot in AR. Students can see their programmed robot interact with real-world objects in their own environment—bridging the gap between coding and robotics without the need for expensive hardware.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "We designed BlockBot for students like Zara, who lack access to robotics resources. By leveraging mixed reality, we recreated the hands-on experience of robotics in a digital format, making it easy for students to test and iterate their code instantly.",
            },
            {
              id: 3,
              type: "image",
              className: "mt-8 mb-8",
              src: persona.src,
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
          text: "Key Features",
          children: [
            {
              id: 1,
              type: "image",
              className: "mt-8 mb-8",
              src: diagram.src,
            },
            {
              id: 2,
              type: "paragraph",
              text: "Visual Programming: Block-based coding simplifies learning.\n\nAR Interactions: The robot moves within real-world spaces, enhancing immersion.\n\nOptimized for Mobile: A collapsible coding canvas improves usability for small screens.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Development Process",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "With a tight timeline, we iterated quickly, refining the UI through A/B testing. Adjustments like better block spacing and horizontal scrolling improved precision and user experience.",
            },
          ],
        },
        {
          id: 3,
          type: "subheading",
          text: "Future Vision",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Advanced Challenges: Coding levels that progressively increase in difficulty.\n\nMultiplayer Features: Users can battle or collaborate with friends in shared AR scenes.\n\nExpanded Robotics Integration: Adding real-world physics interactions like throttle control.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "BlockBot transforms robotics education—making it more inclusive, engaging, and fun for learners of all levels.",
            },
            {
              id: 3,
              type: "video",
              src: "https://player.vimeo.com/video/427623490",
              className: "mt-12 mb-12",
            },
          ],
        },
      ],
    },
  ],
};
