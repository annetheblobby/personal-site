import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col py-5 pr-14 pl-7 text-lg bg-stone-50 max-md:px-5">
    <Header />
    <div className="mt-56 ml-32 text-6xl font-medium text-stone-950 w-[857px] max-md:mt-10 max-md:max-w-full max-md:text-4xl major-mono-display-regular">
      <span className="text-4xl leading-9  text-neutral-900 major-mono-display-regular">
        HELLO I'M ANNE!
      </span>{" "}
      <br />
      <span className="text-5xl leading-10 ">I’m a Design Technologist </span>
      <span className="text-5xl leading-10  text-stone-950">@Shopify</span>
      <span className="text-5xl leading-10 ">.</span>
      <br />
      <span className="text-5xl leading-10 ">
        I love tinkering on solutions that are user-focused and accessible.
      </span>
      <br />
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="mt-36 ml-32 max-w-full border border-black border-solid aspect-[1.43] w-[645px] max-md:mt-10"
    />
    <div className="flex flex-col self-start px-2 mt-4 ml-52 max-md:max-w-full">
      <div className="font-medium text-stone-950 max-md:max-w-full">
        Shopify.dev | Interactive Two Column Coding Tutorials
      </div>
      <div className="mt-1 font-light text-neutral-700 max-md:max-w-full">
        UX Design, UX research, Prototyping, Feature Development{" "}
      </div>
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="self-end mt-28 mr-44 max-w-full border border-black border-solid aspect-[1.47] w-[659px] max-md:mt-10 max-md:mr-2.5"
    />
    <div className="flex flex-col self-center px-2 py-px mt-4 ml-28 max-md:max-w-full">
      <div className="font-medium text-stone-950 max-md:max-w-full">
        Shopify.dev | Interactive Two Column Coding Tutorials
      </div>
      <div className="mt-1 font-light text-neutral-700 max-md:max-w-full">
        UX Design, UX research, Prototyping, Feature Development{" "}
      </div>
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="mt-28 ml-32 max-w-full border border-black border-solid aspect-[1.47] w-[649px] max-md:mt-10"
    />
    <div className="flex flex-col self-start px-2 mt-4 ml-52 max-md:max-w-full">
      <div className="font-medium text-stone-950 max-md:max-w-full">
        Shopify.dev | Interactive Two Column Coding Tutorials
      </div>
      <div className="mt-1 font-light text-neutral-700 max-md:max-w-full">
        UX Design, UX research, Prototyping, Feature Development{" "}
      </div>
    </div>
    <img
      loading="lazy"
      srcSet="..."
      className="self-end mt-32 mr-44 max-w-full border border-black border-solid aspect-[1.47] w-[648px] max-md:mt-10 max-md:mr-2.5"
    />
    <div className="flex flex-col self-center px-2 mt-4 ml-32 max-md:max-w-full">
      <div className="font-medium text-stone-950 max-md:max-w-full">
        Shopify.dev | Interactive Two Column Coding Tutorials
      </div>
      <div className="mt-1 font-light text-neutral-700 max-md:max-w-full">
        UX Design, UX research, Prototyping, Feature Development{" "}
      </div>
    </div>
    <div className="flex gap-3.5 self-center mt-44 text-4xl text-zinc-600 max-md:mt-10">
      <div className="grow my-auto">Deep - Dives</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?"
        className="shrink-0 aspect-square w-[57px]"
      />
    </div>
  </div>
  );
}
