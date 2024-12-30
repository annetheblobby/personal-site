import Logo from '../components/logo';

export default function Header() {
    return (
        <div className="flex gap-5 justify-between w-full whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:max-w-full">
        <Logo />
        <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full major-mono-display-regular">
          <div className="flex flex-auto gap-5 justify-between my-auto max-md:flex-wrap">
            <div className="font-semibold text-stone-950">WORK</div>
            <div>DEEP DIVES</div>
            <div>EXPERIMENTS</div>
            <div>RESUME</div>
          </div>
        </div>
      </div>
    );
};  