import * as React from "react";
import Link from "next/link";

export function FeaturedArticle({ image, category, title, tagline, href }) {
  return (
    <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <Link href={href}>
        <div className="flex overflow-hidden gap-10 items-start w-full bg-lime-300 border border-black border-solid h-[213px] max-md:p-5 max-md:max-w-full max-md:h-auto transition-all">
          <div className="flex flex-wrap gap-10 min-w-[240px] w-[887px] max-md:flex-col max-md:w-full">
            <div className="flex relative flex-col self-start text-base whitespace-nowrap min-h-[214px] min-w-[240px] text-neutral-900 w-[302px] max-md:w-full">
              <img
                loading="lazy"
                src={image}
                alt={`${title} thumbnail`}
                className="z-0 w-full aspect-[1.41] object-cover"
              />
              <div className="overflow-hidden absolute bottom-0 left-0 gap-2.5 self-start px-4 py-3 bg-lime-300 border border-black border-solid h-[41px] min-h-[41px] monoFont text-xs">
                {category}
              </div>
            </div>
            <div className="flex-1 shrink gap-2.5 pt-6 h-full text-2xl font-medium text-black min-w-[240px] max-md:max-w-full">
              {title}
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-3.5 text-lg font-medium text-stone-950">{tagline}</div>
    </div>
  );
}
