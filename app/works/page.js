import { briefCards, projectDetails } from '../data/cardData';
import ProjectDetailCard from '../components/ProjectDetail';
import BriefCard from '../components/BriefCard';
import Header from '../components/header';

export default function InteractiveTutorial() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="flex flex-col max-w-full font-semibold uppercase text-zinc-800 w-[621px] max-md:text-4xl headerWorks">
            <div className="flex relative flex-col w-full whitespace-nowrap max-md:max-w-full max-md:text-4xl">
              <div className="z-0 max-md:max-w-full max-md:text-4xl">
                InterActive
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e03acf82c4953ca2f99b3ce023ce74a672f55d92ab082197aa1059d0bf1eb8b5?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9"
                className="object-contain absolute z-0 max-w-full aspect-[6.62] left-[-59px] top-[-16px] w-[792px] max-md:w-[350px] max-md:left-[-33px] max-sm:hidden"
                alt=""
              />
            </div>
            <div className="w-full max-md:max-w-full max-md:text-4xl">
              two Column Tutorials
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-16 text-base text-neutral-900 max-md:mt-10">
            {projectDetails.map(detail => (
              <ProjectDetailCard key={detail.id} {...detail} />
            ))}
          </div>

          <div className="flex flex-col self-stretch mt-36 w-full max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold text-neutral-900 max-md:max-w-full monoFont">
              BRIEF
            </div>
            <div className="flex flex-wrap gap-9 justify-center items-center mt-12 w-full text-lg text-neutral-700 max-md:mt-10 max-md:max-w-full">
              {briefCards.map(card => (
                <BriefCard key={card.id} {...card} />
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-36 max-w-full text-lg text-neutral-900 w-[785px] max-md:mt-10">
            <div className="flex relative gap-2.5 items-start self-start font-bold whitespace-nowrap">
              <svg className="object-contain absolute bottom-px left-0.5 z-0 shrink-0 self-start w-[80px]" width="86" height="9" viewBox="0 0 86 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3.01495C7.73264 4.19981 11.5751 3.14341 16.0769 3.01495C20.2132 2.89693 24.1878 3.50983 28.2991 3.71976C38.9933 4.2658 49.362 5.25374 60.094 5.25374C67.731 5.25374 75.6026 6 83 6" stroke="#A7EB7B" stroke-width="5" stroke-linecap="round" />
              </svg>
              <div className="z-0 my-auto monoFont">Listen.</div>
            </div>
            <div className="flex flex-col mt-3.5 w-full max-md:max-w-full">
              <div className="max-md:max-w-full">
                <span className="text-3xl font-bold text-neutral-900">
                  Pain Point
                </span>
              </div>
              <div className="mt-3 max-md:max-w-full">
                The 2020 Coronavirus pandemic changed the way RBC's 16 million
                clients interact with the bank as branches closed down and social
                distancing restrictions were enforced. How might RBC support it's
                communities in coming together to remain resilient while adjusting
                to this new reality? Specifically, how might we foster
                collaboration and communication in virtual environments?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}