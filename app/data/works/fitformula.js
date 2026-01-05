// Placeholder image - replace with actual fitformula image when available
import fitformulaImage from "../../works/images/fitformula.png";
import fitformulaflow from "../../works/images/appflowfitformula.png";
export const projectData = {
  id: "fitformula",
  image: fitformulaImage.src, // Update with actual image path when available
  title: "Fit Formula: An AI-Powered Closet App",
  description: ["UX Design", "Mobile Development", "AI", "Personal Project"],
  cover: "/fitformulawalkthrough.mp4",
  coverType: "video",

  details: [
    {
      id: 1,
      title: "Context",
      description: "Personal Project (Work in Progress)",
      underlineWidth: "w-[62px]",
      underlineLeft: "left-[5px]",
    },
    {
      id: 2,
      title: "Role",
      description: "Product Designer, Developer",
      underlineWidth: "w-8",
      underlineLeft: "left-[3px]",
    },
    {
      id: 3,
      title: "Tools",
      description: "Figma, Expo, React Native, Supabase, OpenAI",
      underlineWidth: "w-[39px]",
      underlineLeft: "left-[3px]",
    },
    {
      id: 4,
      title: "Focus",
      description: "AI/ML, Mobile UX",
      underlineWidth: "w-[54px]",
      underlineLeft: "left-[3px]",
    },
  ],
  brief: [
    {
      id: 1,
      title: "Listen.",
      description:
        "I want to spend less time choosing what to wear while still maintaining a strong sense of personal style and feeling appropriately dressed for the weather and occasion.",
      hasBorder: true,
      hasUnderline: true,
      customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
      borderStyle: "border-2 border-solid border-stone-950",
    },
    {
      id: 2,
      title: "Reshape.",
      description:
        "What if a closet app worked more like a creative lab—where I control the style formula, and the system handles the grunt work of generating the best outfit combinations?",
      hasBorder: true,
      borderStyle: "border-dashed border-[3px] border-stone-950",
    },
    {
      id: 3,
      title: "Create.",
      description:
        "An AI-powered app that organizes your closet and generates outfit recommendations through fine-tunable style settings, balancing automation with personal control.",
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
          text: "The Problem",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Getting dressed was taking more time and mental energy than it should. I wanted an easy way to organize my closet and track what I wear without turning it into a chore—think \"Steve Jobs level effort,\" but with color, variation, and style intact. I also didn't want to mentally juggle variables like changing weather, multiple events in a day, or dress codes. Finally, while I wanted the system to do most of the work, personalization was non-negotiable.",
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
          text: "Reframing the Approach",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Rather than treating a closet app as a static inventory, I reframed it as a creative lab. The idea was to let users control the \"style formula\" while the system handles the heavy lifting of combining pieces, factoring in context, and generating options. This shift opened up space for experimentation—less manual planning, more guided creativity.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Design Principles",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "To support that, the experience needed to be fast, flexible, and opinionated in the right places. Adding clothing had to be nearly effortless, recommendations needed to feel adjustable rather than prescriptive, and feedback loops had to be lightweight enough to fit into daily use.",
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
          text: "Design & Interaction",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "I designed an AI-powered closet app that organizes clothing and generates outfit suggestions based on fine-tuned style settings. Users add items by taking quick photos, minimizing friction while building a usable digital closet. The main screen centers on outfit recommendations, paired with a control panel that lets users tweak the underlying \"formula\" driving those suggestions.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "An assistant chat allows for lightweight edits and refinements—adjusting for mood, occasion, or personal preferences on the fly. To help the system learn quickly, outfits use a familiar interaction pattern: tap \"no\" on the left, \"like\" on the right, with the ability to tweak or save favorites. The app can also send daily push notifications with outfit suggestions, requiring no input unless the user wants to engage.",
            },
            {
                //add image here
                id: 3,
                type: "image",
                className: "mt-8 mb-8",
                src: fitformulaflow.src,
                alt: "Fit Formula",
            }
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Technical Implementation",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "The app is built with Expo and React Native for streamlined iOS and Android development. Supabase handles data storage and leverages vector similarity matching to connect user preferences with outfit generation. An OpenAI-powered agent drives the recommendation logic and conversational interface, enabling adaptive, personalized styling at scale. Note: the work is still in progress as seen in the cover video.",
            },
          ],
        },
      ],
    },
  ],
};

