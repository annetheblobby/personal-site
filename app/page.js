'use client';
import Image from "next/image";
import Header from "./components/header";
import DrawingCanvas from "./components/DrawingCanvas";
import { useState, useEffect, useRef } from 'react';


const projects = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
    title: "Shopify.dev | Interactive Two Column Coding Tutorials",
    description: "UX Design, UX research, Prototyping, Feature Development"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
    title: "Shopify.dev | Interactive Two Column Coding Tutorials",
    description: "UX Design, UX research, Prototyping, Feature Development"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e31d0a311b75ef92a898faf378ddd742d5d9e8a526be9c0a2347866c429f06e?",
    title: "Shopify.dev | Interactive Two Column Coding Tutorials",
    description: "UX Design, UX research, Prototyping, Feature Development"
  }
]

const project = ({ image, title, description }) => {

  return (
    <>
      <img
        loading="lazy"
        src={image}
        className="mt-28 mr-44 max-w-full border border-black border-solid aspect-[1.47] w-[659px] max-md:mt-10 max-md:mr-2.5"
      />
      <div className="flex flex-col px-2 py-px mt-4 ml-28 max-md:max-w-full">
        <div className="font-medium text-stone-950 max-md:max-w-full">
          {title}
        </div>
        <div className="mt-1 font-light text-neutral-700 max-md:max-w-full">
          {description}
        </div>
      </div>
    </>
  )
}

export default function Home() {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const [overInteractiveElement, setOverInteractiveElement] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.matches('img, h1, p, a, button, [onclick], [role="button"]');

      console.log('Mouse over:', {
        target: target.tagName,
        isInteractive: isInteractive
      });

      setOverInteractiveElement(isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // const isOverInteractiveElement = (e) => {
  //   const element = document.elementFromPoint(e.clientX, e.clientY);
  //   const isInteractive = (el) => {
  //     if (!el) return false;
  //     if (el.tagName === 'svg' || el.tagName === 'path') return false;

  //     if (
  //       el.tagName === 'IMG' ||
  //       el.tagName === 'H1' ||
  //       el.tagName === 'P' ||
  //       el.tagName === 'A' ||
  //       el.tagName === 'BUTTON' ||
  //       el.onclick ||
  //       getComputedStyle(el).cursor !== 'auto'
  //     ) {
  //       return true;
  //     }

  //     return isInteractive(el.parentElement);
  //   };

  //   return isInteractive(element);
  // };

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   let lines = [];

  //   const updateCanvasSize = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };

  //   updateCanvasSize();
  //   window.addEventListener('resize', updateCanvasSize);

  //   const draw = (e) => {
  //     if (!isDrawing || isOverInteractiveElement(e)) return;

  //     const rect = canvas.getBoundingClientRect();
  //     const x = e.clientX - rect.left;
  //     const y = e.clientY - rect.top;

  //     ctx.strokeStyle = '#00FF00';
  //     ctx.lineWidth = 4;
  //     ctx.lineCap = 'round';

  //     if (lines.length === 0 || lines[lines.length - 1].length === 0) {
  //       ctx.beginPath();
  //       ctx.moveTo(x, y);
  //       lines.push([{ x, y, timestamp: Date.now() }]);
  //     } else {
  //       ctx.lineTo(x, y);
  //       ctx.stroke();
  //       lines[lines.length - 1].push({ x, y, timestamp: Date.now() });
  //     }
  //   };

  //   const fadeLines = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     const now = Date.now();
  //     lines = lines.filter(line => now - line[0].timestamp < 3000);

  //     lines.forEach(line => {
  //       ctx.beginPath();
  //       ctx.strokeStyle = '#00FF00';
  //       ctx.lineWidth = 4;
  //       ctx.moveTo(line[0].x, line[0].y);
  //       line.forEach(point => ctx.lineTo(point.x, point.y));
  //       ctx.stroke();
  //     });

  //     requestAnimationFrame(fadeLines);
  //   };

  //   canvas.addEventListener('mousemove', draw);
  //   canvas.addEventListener('mousedown', () => setIsDrawing(true));
  //   canvas.addEventListener('mouseup', () => setIsDrawing(false));
  //   canvas.addEventListener('mouseout', () => setIsDrawing(false));

  //   fadeLines();

  //   return () => {
  //     window.removeEventListener('resize', updateCanvasSize);
  //     canvas.removeEventListener('mousemove', draw);
  //   };
  // }, [isDrawing]);

  const smiley = (<svg className="smiley-path" width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.28125 3.67383C5.28125 7.35509 6.11835 10.8157 6.11835 14.5561" stroke="#A7EB7B" stroke-width="3" stroke-linecap="round"/>
    <path d="M12.8145 2V13.7194" stroke="#A7EB7B" stroke-width="3" stroke-linecap="round"/>
    <path d="M1.58984 24.2076C12.4344 23.1231 23.9511 22.7893 34.3657 19.154C34.8834 18.9733 36.4459 18.2954 35.1959 19.0097C34.1513 19.6066 33.9425 21.0192 33.5896 22.0779C32.8675 24.2442 31.9455 25.8695 30.1785 27.3841C25.1408 31.7021 19.0631 33.5892 12.4369 31.6616C8.35537 30.4742 2.56446 28.538 2.56446 23.5578" stroke="#A7EB7B" stroke-width="3" stroke-linecap="round"/>
    </svg>
    );


  return (
    <div className="mx-auto max-w-[1280px] mb-40">
      <div className="flex flex-col py-5 pr-14 pl-7 text-lg max-md:px-5">
        <Header />
        <div className="pointer-events-none">
          <DrawingCanvas />
        </div>

        <h1 className="mt-56 w-[857px] max-md:mt-10 max-md:max-w-full text-stone-950 uppercase">
          Hello, I'm <span className="name"> Anne! {smiley}</span>
          I'm a <span className="circle-animation">
            Design Technologist
            <svg className="circle-svg" width="505" height="69" viewBox="0 0 505 69" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M10.0834 66.7132C36.6197 66.7132 63.3273 67.5153 89.8441 66.4369C114.039 65.4529 138.824 67.3958 162.879 64.8481C192.958 61.6626 223.829 64.4101 254.053 62.3614C284.704 60.2839 315.489 62.9831 345.975 62.9831C369.062 62.9831 392.24 60.4964 415.477 60.4964C431.29 60.4964 446.699 57.3324 462.287 56.7664C468.56 56.5386 476.833 55.464 482.873 53.658C486.838 52.4724 495.322 52.9412 498.295 49.5826C506.969 39.7838 502.465 21.7304 494.355 13.2492C485.571 4.06336 475.088 2.50074 462.627 2.12811C431.441 1.19553 399.795 5.60315 368.667 7.30873C319.509 10.0022 270.866 12.0058 221.646 12.0058C191.946 12.0058 162.358 14.4925 132.714 14.4925C114.743 14.4925 96.8315 17.7971 78.838 18.2226C69.0063 18.455 56.41 18.8981 46.8386 21.3309C38.1058 23.5506 25.9858 21.8119 18.0323 26.3043C13.0373 29.1257 2.74596 30.1301 2.74596 38.1161C2.74596 42.1915 1.06755 44.8451 2.74596 48.6846C5.05887 53.9756 11.5837 54.5353 16.1979 56.4901C26.5578 60.8788 41.2322 60.8956 52.4775 62.3614C67.5628 64.3278 82.6629 65.4698 97.861 65.4698C117.847 65.4698 138.192 66.6569 158.055 64.5028C168.987 63.3172 180.357 64.3661 191.345 64.2265C202.528 64.0844 213.658 62.9831 224.907 62.9831C248.235 62.9831 271.402 64.2265 294.681 64.2265C323.121 64.2265 351.56 65.4698 379.945 65.4698C396.013 65.4698 413.367 67.1848 428.997 64.2955C447.034 60.9613 469.126 63.7202 485.794 55.2467C492.26 51.9596 499.56 46.4511 499.246 37.8398C499.087 33.4595 495.589 30.4435 492.928 27.3405C486.965 20.386 481.386 15.306 473.565 10.7625C461.561 3.78854 450.081 4.54573 436.606 4.54573C412.641 4.54573 388.667 3.70013 364.862 7.03243C346.204 9.64428 328.07 12.0058 309.22 12.0058C294.585 12.0058 280.077 14.4925 265.399 14.4925C248.784 14.4925 232.236 15.7359 215.6 15.7359C168.77 15.7359 121.116 15.6536 74.8295 22.5743C52.831 25.8634 26.55 22.6444 6.41468 33.4191C-2.11621 37.984 5.36204 54.7195 10.0834 59.2531C17.3133 66.1954 33.9913 62.9831 43.1019 62.9831" stroke="#A7EB7B" stroke-width="3" stroke-linecap="round" />
            </svg>
          </span> @Shopify.
          I love tinkering on solutions that are user-focused and accessible.
        </h1>

        {projects.map(project)}
      </div>
    </div>
  );
}
