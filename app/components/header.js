import Logo from "../components/logo";
import Link from "next/link";

export default function Header({ experimentMode = false }) {
  return (
    <div
      className={`flex gap-5 justify-between w-full whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:max-w-full py-4 sticky top-0 z-50 ${
        experimentMode ? `bg-none` : `bg-[#FBF7F7]`
      } w-[895px]`}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full major-mono-display-regular">
        <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap">
          <Link href="/works" className="font-semibold text-stone-950">
            WORK
          </Link>
          <Link href="/deepDives">DEEP DIVES</Link>
          <Link href="/experiments">EXPERIMENTS</Link>
          <Link href="/resume">RESUME</Link>
        </div>
      </div>
    </div>
  );
}
