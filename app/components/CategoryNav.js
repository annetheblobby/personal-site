import * as React from "react";

const categories = ["All", "AI", "Accessibility", "UX", "Development", "Prototyping"];

export function CategoryNav() {
    return (

        <div className="flex flex-col w-full text-base text-neutral-900 max-md:max-w-full monoFont">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <div className="self-stretch my-auto font-bold">Categories </div>
                <div className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="self-stretch my-auto hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                            tabIndex={0}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-3.5 w-full border border-black border-solid min-h-[1px] max-md:max-w-full" />
        </div>
    );
}