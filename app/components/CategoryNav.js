import * as React from "react";

const UnderlineHover = () => (
  <svg
    className="object-contain absolute bottom-px left-0.5 z-[-1] shrink-0 self-start w-full opacity-0 group-hover:opacity-100 transition-opacity"
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

const categories = ["All", "AI", "Accessibility", "UX", "Development", "Prototyping"];

export function CategoryNav({ selectedCategory, onCategorySelect }) {
    return (
        <div className="flex flex-col w-full text-base text-neutral-900 max-md:max-w-full monoFont">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <div className="self-stretch my-auto font-bold">Categories </div>
                <div className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`self-stretch my-auto relative group ${
                                selectedCategory === category ? 'font-bold' : ''
                            }`}
                            onClick={() => onCategorySelect(category)}
                            tabIndex={0}
                        >
                            {category}
                            <UnderlineHover />
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-3.5 w-full border border-black border-solid min-h-[1px] max-md:max-w-full" />
        </div>
    );
}