import waiveTheWait from "../../works/images/wtw.png";
import waiveTheWaitCover from "../../works/images/wtwcover3.jpg";

export const projectData = {
  id: "waive-the-wait",
  image: waiveTheWait.src, // You'll need to import this image
  title: "WaiveTheWait: Smart Room",
  description: ["UX Design", "Startup", "Healthcare"],
  cover: waiveTheWaitCover.src,
  details: [
    {
      id: 1,
      title: "Context",
      description: "Startup venture project",
      underlineWidth: "w-[62px]",
      underlineLeft: "left-[5px]",
    },
    {
      id: 2,
      title: "Co-founders",
      description: "Shreyansh Anand, Daniel Oh, Tabassum Pasha",
      underlineWidth: "w-8",
      underlineLeft: "left-[3px]",
    },
    {
      id: 3,
      title: "Tools",
      description: "Figma, Adobe Suite, HTML, CSS, Typescript",
      underlineWidth: "w-[39px]",
      underlineLeft: "left-[3px]",
    },
    {
      id: 4,
      title: "Role",
      description:
        "User Experience, Ideation, Prototyping, Visual Design, Marketing",
      underlineWidth: "w-[54px]",
      underlineLeft: "left-[3px]",
    },
  ],
  brief: [
    {
      id: 1,
      title: "Listen.",
      description:
        "60% of Canadian patients report waiting rooms as one of the most frustrating aspects of clinical experience",
      hasBorder: true,
      hasUnderline: true,
      customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
      borderStyle: "border-2 border-solid border-stone-950",
    },
    {
      id: 2,
      title: "Reshape.",
      description:
        "How might we transform the waiting room experience for both patients and clinics?",
      hasBorder: true,
      borderStyle: "border-dashed border-[3px] border-stone-950",
    },
    {
      id: 3,
      title: "Create.",
      description:
        "A virtual waiting room that improves clinic efficiency and patient experience",
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
          text: "Pain Point",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Think of the most boring place you have ever been to. If you thought of a waiting room, you're not the only one. The current waiting room system for most clinics is not optimal because:",
            },
            {
              id: 2,
              type: "paragraph",
              text: "1. The amount of patients they can contain is capped at around 15 for small clinics (and even less during the pandemic)\n\n2. People can be doing something productive during the wasted time and clinics can make use of the physical space\n\n3. Being sick and in the waiting room may pose a risk to others.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Impact",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Finalist at Queen's DDQIC Pitch competition (awarded $15,000 in seed funding). Currently partnered with clinics around the GTA. Featured on Global News.",
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
          text: "Key Findings",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "1. Patients want service reasonably quickly and would like to know how long they would wait.",
            },
            {
              id: 2,
              type: "quote",
              text: '💬 "People feel that healthcare should be delivered the moment they want it"',
            },
            {
              id: 3,
              type: "paragraph",
              text: "2. People have negative interactions with staff, especially with receptionists who are often juggling many tasks.",
            },
            {
              id: 4,
              type: "quote",
              text: "💬 \"It's really distressing when I see patients that don't follow our instructions to socially distance themselves in the wait room\"",
            },
            {
              id: 5,
              type: "paragraph",
              text: "3. Accessibility concerns for tech-based clinic aids, especially for elderly users.",
            },
            {
              id: 6,
              type: "quote",
              text: '💬 "I\'m just not too comfortable online"',
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
          text: "The Solution",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "We created a completely virtual waiting room that digitally notifies patients exactly when their appointment is and sends them smart reminders on when they should arrive - allowing them to social distance at home. It decreases patient drop-off rate by improving wait room customer experience and dynamically manages new walk-in patients to increase efficiencies and reduce clinic workload.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Design System",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Our design system strives to improve the developer experience and unify the visual experience throughout all future products. The system was built to be both resilient and flexible to change, focusing on basic elements that stayed constant throughout our journey.",
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
              text: "We've raised $15,000 of pitch funding and will be participating in the Next36 program along with 35 of the most successful student startups in Canada. We have successfully piloted our software with clinics and are expanding our clientele.",
            },
          ],
        },
      ],
    },
  ],
};
