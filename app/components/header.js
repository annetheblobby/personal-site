"use client";
import Logo from "../components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UnderlineHover = () => (
  <svg
    className="object-contain absolute bottom-px left-0.5 z-[-1] shrink-0 self-start w-full opacity-0 group-hover:opacity-100 transition-opacity "
    width="100%"
    height="9"
    viewBox="0 0 100 9"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3.01495C7.73264 4.19981 11.5751 3.14341 16.0769 3.01495C20.2132 2.89693 24.1878 3.50983 28.2991 3.71976C38.9933 4.2658 49.362 5.25374 60.094 5.25374C67.731 5.25374 75.6026 6 97 6"
      stroke="#A7EB7B"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const experimentMode = pathname === "/experiments";

  const getLinkStyle = (path) => {
    const isActive = pathname === path;
    return `${experimentMode ? "text-black" : "text-stone-950"} ${
      isActive ? "font-bold" : "font-normal"
    } relative group`;
  };

  return (
    <div
      className={`flex gap-5 justify-between w-full whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:max-w-full py-4 sticky top-0 z-50 ${
        experimentMode ? `bg-none` : `bg-[#FBF7F7]`
      } w-[895px] px-10`}
    >
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full major-mono-display-regular">
        <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap">
          <Link href="/" className={`${getLinkStyle("/")} no-underline`}>
            WORK
            <UnderlineHover />
          </Link>
          <Link
            className={`${getLinkStyle("/deepDives")} no-underline`}
            href="/deepDives"
          >
            DEEP DIVES
            <UnderlineHover />
          </Link>
          <Link
            className={`${getLinkStyle("/experiments")} no-underline`}
            href="/experiments"
          >
            EXPERIMENTS
            <UnderlineHover />
          </Link>
          <Link
            className={`${getLinkStyle("/resume")} no-underline`}
            href="/resume"
          >
            RESUME
            <UnderlineHover />
          </Link>
        </div>
      </div>
    </div>
  );
}
