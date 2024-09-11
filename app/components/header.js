export default function Header() {
    return (
        <div className="flex gap-5 justify-between w-full whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a548bfe0dc1e256916a41845a82379ca9a2993b681738f3d711e55dee37bf4b?"
          className="shrink-0 aspect-[1.11] fill-[radial-gradient(50%_50%_at_50%_50%,#89AD24_0%,rgba(137,173,36,0.38)_100%)] w-[58px]"
        />
        <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap">
            <div className="font-semibold text-stone-950">Work</div>
            <div>Deep-Dives</div>
            <div>About</div>
            <div>Experiments</div>
            <div>Resume</div>
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 aspect-[1.64] w-[54px]"
          />
        </div>
      </div>
    );
};  