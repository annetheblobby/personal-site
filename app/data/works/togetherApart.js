import table from "../../works/images/table.jpg";
import process from "../../works/images/process_colored-01.jpg";
import thematicAnalysis from "../../works/images/thematicanalysis.jpg";
import concepts from "../../works/images/concepts.png";
import materiality from "../../works/images/materiality.jpg";
import implementation from "../../works/images/implementation.jpg";
import candlegif from "../../works/images/candlegif.gif";
import togetherApartImage from "../../works/images/togetherapart.png";

export const projectData = {
  id: "together-apart",
  image: togetherApartImage.src,
  title: "Together Apart: Redefining Remote Co-Dining Interactions",
  description: ["Research"],
  // Add more detailed content for the project page
  brief: [
    {
      id: 1,
      title: "Listen.",
      description:
        "Social isolation and loneliness are on the rise, along with 'screen fatigue' from interacting on digital devices",
      hasBorder: true,
      hasUnderline: true,
      customStyle: "shadow-[6px_6px_6px_rgba(167,235,123,1)]",
      borderStyle: "border-2 border-solid border-stone-950",
    },
    {
      id: 2,
      title: "Reshape.",
      description:
        "How might we provide tangible interactivity between households without using screens?",
      hasBorder: true,
      borderStyle: "border-dashed border-[3px] border-stone-950",
    },
    {
      id: 3,
      title: "Create.",
      description:
        "We designed and tested three interior dining artifacts that promote ambient connecivity and mindfulness",
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
      description: "HCI Research @ iStudio Labs",
      underlineWidth: "w-[62px]",
      underlineLeft: "left-[5px]",
    },
    {
      id: 2,
      title: "Team",
      description:
        "Meara Donovan, Eliza Wallace, Alaa Nousir, Dr. Sara Nabil (Supv)",
      underlineWidth: "w-8",
      underlineLeft: "left-[3px]",
    },
    {
      id: 3,
      title: "Tools",
      description: "Blender, Creality CR-10, Adobe Suite",
      underlineWidth: "w-[39px]",
      underlineLeft: "left-[3px]",
    },
    {
      id: 4,
      title: "Results",
      description: "Published in the 2023 ACM TEI Conference",
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
              text: "The COVID-19 pandemic has brought various challenges, including heightened stress and health-anxiety, employment and financial instability, isolation, and quarantine inside the home. Dining is a chance to connect with friends and family, but during the isolation of the COVID-19 pandemic, physical co-dining (the act of physically dining together) becomes less accessible.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Designing interactive, social, interiors",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "We explored the uses of smart materials for promoting tangible connectivity between physically separated individuals, aiming to increase social health. We then engaged 10 participants in a co-designing study before building 5 prototypes of interactive dining artifacts to deploy in their homes in a second user study 'in-the-wild'.",
            },
            {
              id: 2,
              type: "quote",
              text: `"Canadians are reporting worsening mental health due to the pandemic, with 41% of the population reporting heightened feelings of anxiety." [Angus Reid Institute]`,
            },
            {
              id: 3,
              type: "image",
              className: "mt-8 h-[400px] w-[400px] ",
              src: table.src,
              alt: "Table showing separate dining spaces",
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
          text: "Reimagining Interaction",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Interactive spaces offer opportunities to create immersive enriched user experiences through tangible and tactile interactions using smart materials. This includes the design of different interactive dining spaces, which examines the interactions between users and food and, dining room atmosphere and culture. In many cases, positive experiences of dining are influenced by social factors, such as sharing food or eating with family or friends. A subset of research in the area is dedicated to the remote co-dining experience, or the experience of dining with others in a physically distanced situation.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "In this design research, we look into the potentials of interactive everyday things designed with crafted materiality that augments people's isolated domestic dining experience to feel 'Together Apart'. Using dining as a tool to enhance social connectivity, we hypothesized that an interactive dining system would decrease feelings of isolation in individuals living apart from their families. Our research hopes to provide insight on the domestic dining experience during a pandemic and how an interactive dining room may influence a socially distanced dining experience.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Research Through Design Process",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Our goals in this HCI research project were to address the issues of increased anxiety and feelings of isolation, especially during the COVID-19 pandemic, by seeking to connect family and friends through a remote co-dining experience. We conducted a Research Through Design process so that our artifacts build upon real-life dining experiences. This process includes the problem discussion, an ideation study, ideation sessions based on findings of the study, prototyping, deploying the prototypes in the wild, and reflecting on the findings of the deployment.",
            },
            {
              id: 2,
              type: "image",
              className: "mt-8",
              src: process.src,
            },
          ],
        },
        {
          id: 3,
          type: "subheading",
          text: "Co-design and Ideation",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "We wanted our designs to reflect our study participants' challenges, preferences, and dining habits while being isolated from their friends and family members.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "Interviews were transcribed into 13200 words and analyzed into over two hundred insightful quotes during the thematic analysis. Seven overarching themes were formed from the interviews and these were then further refined in an iterative process (done separately by 5 researchers in our team) into 3 major themes and goals.",
            },
            {
              id: 11,
              type: "image",
              className: "mt-8 mb-8",
              src: thematicAnalysis.src,
            },
            {
              id: 4,
              type: "paragraph",
              className: "font-bold",
              text: "We found three overarching themes in this study:",
            },
            {
              id: 5,
              type: "paragraph",
              text: "1. Emphasize balancing communication and personal time: Participants valued the presence of others at the dining table and eating together is a form of maintaining relationships. Sometimes, participants did need alone time to relax.",
            },
            {
              id: 6,
              type: "quote",
              text: '💬 "[Dining] kinda brings people together...[it] lets me check in with my friends and my roommates [and know] what\'s going on."',
            },
            {
              id: 7,
              type: "paragraph",
              text: "2. Connection to the outside environment: Participants’ aesthetic preferences in the dining room such as ambient music/ background noise, dim light, organic shapes as well as plants and flowers reflect biophilic ideology (that design should emulate nature). People also desire to be connected to activity or ‘bustle’ happening outside of the room.",
            },
            {
              id: 8,
              type: "quote",
              text: '💬"Some candles, some ambient music, just dim lights."',
            },
            {
              id: 9,
              type: "paragraph",
              text: "3. Combating unhealthy habits formed in isolation: Isolation during the pandemic year has led to increased loneliness and poor dining-habits.",
            },
            {
              id: 10,
              type: "quote",
              text: '💬 "You do lose track of time, [it’s] easy to work away and blow through meal times."',
            },
          ],
        },
        {
          id: 4,
          type: "subheading",
          text: "Applying Slow Design and Biophilic Design techniques",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "With feedback from interviews and research, we came up with three designs during the ideation process: a connectivity candle, a pressure sensing placemat, and a yarn concert wall art piece. To explore the three design themes, we apply design methodologies such as Slow Design (a concept that stresses interacting with products at the right speed and with reflection) by combining multiple functionalities within one product, for instance, decoration, communication, and interaction, with the goal of stimulating greater reflection and time spent with the items.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "We also create a calmer method of communication that does not detract from the dining experience itself by designing items that function in the periphery of a user's focus. For example, in the use case of a person video calling another person during dinner, there will be tension between focusing on food and interacting with the video chat interface, whereas flickering candlelights do not take up much focus.",
            },
            {
              id: 3,
              type: "image",
              className: "mt-8 mb-8",
              src: concepts.src,
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
          text: "Prototype: blending technology into a 'traditional interface'",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "In order to incorporate concepts such as presence and interactivity we began experimenting with smart materials such as yarn, single-board computers, 3D printing, and microcontrollers. The two pronged connectivity candle explores the concept of indirectly communicating presence through a sensory detection system. On the other hand, the Yarn Concert allows users to interact with the yarn wall art and produce a soundscape. Finally, the Playful Placemat is designed to emulate food sharing and mindful eating, as LED lights on a crochet mat respond to the pressure of the plates placed on itself. This was contrasted with our exploration of traditional materials such as paint and yarn in the exterior design as participants found them soothing and homely.",
            },
            {
              id: 2,
              type: "image",
              className: "mt-8 mb-8",
              src: materiality.src,
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "Learning from doing",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "We learned about the construction methods during multiple iterations of implementations. For instance, the connectivity candle required learning the intricacies of 3D modelling, 3D printing, implementing a simple web service for the communication system, and exploring painting techniques.",
            },
            {
              id: 2,
              type: "image",
              className: "mt-8 mb-8",
              src: implementation.src,
            },
          ],
        },
        {
          id: 3,
          type: "subheading",
          text: "'In the Wild' prototype testing",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Results from both user interviews/tests reveal that ambient communication and slow technology can be used to communicate without the pressure of forcing conversation. On the other hand, slow interaction helped generate deeper reflection about people’s relationships and allowed them to reach out to family and friends about meaningful topics. Additionally, items that blend into the environment and make metaphors to the outdoors make people feel comfortable. In reaction to the three design artifacts, participants are eating healthier, reframing dining as more of an important event, talking about food with others and spending time with food as opposed to digital screens.",
            },
            {
              id: 2,
              type: "image",
              className: "mt-8 mb-8 w-[500px] h-[400px]",
              src: candlegif.src,
            },
            {
              id: 3,
              type: "paragraph",
              text: (
                <p>
                  Feel free to take a look at the{" "}
                  <a
                    className="underline"
                    href="https://dl.acm.org/doi/10.1145/3613844.3616413"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    full paper
                  </a>
                  .
                </p>
              ),
            },
          ],
        },
        {
          id: 1,
          type: "subheading",
          text: "Reflections",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "All three artefacts were considered “conversation pieces”; they provoked discussion, provided another avenue for users within a relationship to connect, and encouraged users to reflect upon their dining environment. The pieces themselves provided company and “filled the space” by appealing to the senses through light, sound, and touch. Users went through the stages of curiosity, exploration, familiarity, and preference while interacting with the artefacts. The biophilic design of our artefacts was well-received by the users, as they spend whole days on screens due to COVID-19. Overall, the pieces had an emotional impact on users, and rather than being a part of the background, encouraged a more mindful dining experience.",
            },
          ],
        },
        {
          id: 2,
          type: "subheading",
          text: "The Future",
          children: [
            {
              id: 1,
              type: "paragraph",
              text: "Further design iterations should focus on longevity (improved power source and more sustained interaction) and inter-artifact connection. For instance, Yarn Concert could connect wirelessly to its partner piece, further bridging the physical space between their users.",
            },
            {
              id: 2,
              type: "paragraph",
              text: "Moreover, future user studies could be evaluated in other environments such as long-term care homes, between long-distance partners, or in other contexts where loved ones are living separately. Specifically, we discovered that these artefacts have high potential for use with senior citizens where tangible interaction, crafted elements and remembrance are valued more than short-term mass-produced gadgets. Participants noted that the ease of use and lack of visible technology provide interactive artefacts with increased accessibility and inclusivity to participants of different ages.",
            },
          ],
        },
      ],
    },
  ],
};
