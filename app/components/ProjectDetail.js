export default function ProjectDetailCard({
  title,
  description,
  underlineWidth,
  underlineLeft,
}) {
  return (
    <div className="flex flex-col self-stretch my-auto w-[184px]">
      <div className="flex relative flex-col w-full font-bold whitespace-nowrap">
        <svg
          className="object-contain absolute bottom-px z-0 shrink-0 -left-1 self-start"
          width="78"
          height="17"
          viewBox="0 0 78 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.66724C28.5495 6.88892 49.0744 9.22808 69.6919 9.22808"
            stroke="#A7EB7B"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>

        <div className="z-0 monoFont">{title}</div>
      </div>
      <div className="mt-1">{description}</div>
    </div>
  );
}
