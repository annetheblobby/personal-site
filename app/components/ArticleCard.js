import * as React from "react";
import Link from "next/link";
import Image from "next/image";

export function ArticleCard({ image, category, title, href }) {
  console.log("href", href);
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[399px] max-md:max-w-full">
      <Link href={href}>
        <div className="flex relative w-full text-base whitespace-nowrap min-h-[335px] text-neutral-900 max-md:max-w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="z-0 flex-1 shrink w-full aspect-[1.49] basis-[30px] min-w-[240px] max-md:max-w-full max-sm:w-full max-sm:max-w-full max-sm:basis-auto"
          />
          <div className="overflow-hidden absolute bottom-0 gap-2.5 self-start px-4 py-3 bg-lime-300 border border-black border-solid h-[41px] min-h-[41px] monoFont text-xs">
            {category}
          </div>
        </div>
        <div className="mt-3.5 text-lg font-medium text-stone-950">{title}</div>
      </Link>
    </div>
  );
}
