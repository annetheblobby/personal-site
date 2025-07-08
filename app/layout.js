"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Header from "./components/header";
import { useState, useEffect } from "react";
import MovingBanner from "./components/MovingBanner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isExperimentsPage = pathname === "/experiments";
  const isHomePage = pathname === "/";

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState([]);
  const [overInteractiveElement, setOverInteractiveElement] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.matches(
        'img, h1, p, a, button, [onclick], [role="button"]'
      );
      setOverInteractiveElement(isInteractive);
    };

    document.addEventListener("mouseover", handleMouseOver);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setIsPageTransitioning(true);
      const timeout = setTimeout(() => setIsPageTransitioning(false), 500); // Match animation duration
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  const handleMouseDown = (e) => {
    if (!overInteractiveElement && isHomePage) {
      e.preventDefault();
      setIsDrawing(true);
      const point = { x: e.clientX, y: e.clientY };
      setCurrentLine([point]);
    }
  };

  const handleMouseMove = (e) => {
    if (isDrawing && !overInteractiveElement && isHomePage) {
      e.preventDefault();
      const point = { x: e.clientX, y: e.clientY };
      setCurrentLine((prev) => [...prev, point]);
    }
  };

  const handleMouseUp = () => {
    if (isDrawing && isHomePage) {
      const newLine = currentLine;
      setLines((prev) => [...prev, newLine]);
      setCurrentLine([]);
      setIsDrawing(false);

      // Add timeout to remove the line after 2 seconds
      setTimeout(() => {
        setLines((prev) => {
          const updatedLines = [...prev];
          updatedLines.shift(); // Remove the oldest line
          return updatedLines;
        });
      }, 2000);
    }
  };

  const handleMainClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300); // Match animation duration
    }
  };

  const DrawingLayer = () => (
    <svg
      className="fixed top-0 left-0 w-full h-full"
      style={{
        zIndex: -10,
        pointerEvents: isDrawing ? "auto" : "none",
      }}
    >
      {lines.map((line, lineIndex) => (
        <path
          key={lineIndex}
          d={`M ${line.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
          stroke="#A7EB7B"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          style={{ pointerEvents: "none" }}
        />
      ))}
      {currentLine.length > 0 && (
        <path
          d={`M ${currentLine.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
          stroke="#A7EB7B"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          style={{ pointerEvents: "none" }}
        />
      )}
    </svg>
  );

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${isExperimentsPage ? "bg-[#89AD24]" : "bg-[#FBF7F7]"} ${
          isHomePage ? "pencil-cursor" : ""
        } leading-relaxed`}
        onMouseDown={(e) => {
          if (!e.target.closest('a, button, [onclick], [role="button"]')) {
            handleMouseDown(e);
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ userSelect: isDrawing ? "none" : "auto" }}
      >
        <MovingBanner />
        <Header />
        <main
          className={`${
            !isHomePage && isPageTransitioning ? "float-up-animation" : ""
          }`}
        >
          {isHomePage && <DrawingLayer />}

          <div className="mx-auto max-w-[1440px] w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
