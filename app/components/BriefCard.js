export default function BriefCard({
  image,
  imageAlt,
  title,
  description,
  hasBorder,
  borderStyle,
  hasShadow,
  customStyle,
  hasUnderline,
}) {
  const baseClasses =
    "flex grow shrink justify-center self-stretch my-auto min-h-[275px] min-w-[240px] w-[220px]";
  const classes = hasBorder ? `${baseClasses} ${borderStyle}` : baseClasses;

  if (image) {
    return (
      <div className={`relative ${classes}`}>
        <img
          loading="lazy"
          src={image}
          alt={imageAlt}
          className={`object-contain ${hasShadow ? customStyle : ""} ${
            title
              ? "absolute top-2/4 left-2/4 z-0 self-start rounded-full -translate-x-2/4 -translate-y-2/4"
              : ""
          } aspect-square ${title ? "h-[250px] min-w-[240px] w-[250px]" : ""}`}
        />
        {title && (
          <div className="flex z-0 flex-col my-8 mx-8 min-h-[107px] relative">
            {hasUnderline && (
              <div className="flex relative gap-2.5 items-start self-start font-bold whitespace-nowrap">
                <svg
                  className="object-contain absolute bottom-px left-0.5 z-0 shrink-0 self-start w-[80px]"
                  width="86"
                  height="9"
                  viewBox="0 0 86 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3.01495C7.73264 4.19981 11.5751 3.14341 16.0769 3.01495C20.2132 2.89693 24.1878 3.50983 28.2991 3.71976C38.9933 4.2658 49.362 5.25374 60.094 5.25374C67.731 5.25374 75.6026 6 83 6"
                    stroke="#A7EB7B"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="z-0 my-auto monoFont">{title}</div>
              </div>
            )}
            <div className="font-bold monoFont">{title}</div>
            <div className="mt-3">{description}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes}>
      <div className="flex flex-col self-stretch my-8 mx-8 ">
        {hasUnderline && (
          <div className="flex relative gap-2.5 items-start self-start font-bold whitespace-nowrap">
            <svg
              className="object-contain absolute bottom-px left-0.5 z-0 shrink-0 self-start w-[80px]"
              width="86"
              height="9"
              viewBox="0 0 86 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3.01495C7.73264 4.19981 11.5751 3.14341 16.0769 3.01495C20.2132 2.89693 24.1878 3.50983 28.2991 3.71976C38.9933 4.2658 49.362 5.25374 60.094 5.25374C67.731 5.25374 75.6026 6 83 6"
                stroke="#A7EB7B"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            <div className="z-0 my-auto monoFont">{title}</div>
          </div>
        )}
        {!hasUnderline && <div className="font-bold monoFont">{title}</div>}
        <div className="mt-3">{description}</div>
      </div>
    </div>
  );
}
