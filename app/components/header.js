import Logo from '../components/logo';

export default function Header({ experimentMode = false }) {
  return (
    <div className={`flex gap-5 justify-between w-full whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:max-w-full py-4 sticky top-0 z-50 ${experimentMode ? `bg-none` : `bg-[#FBF7F7]`} w-[895px]`}>
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