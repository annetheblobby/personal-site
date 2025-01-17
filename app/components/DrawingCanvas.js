"use client";
import { useState, useEffect, useRef } from "react";

export default function DrawingCanvas() {
  const [currentPath, setCurrentPath] = useState(null);
  const [paths, setPaths] = useState([]);
  const [lastPath, setLastPath] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const isOverInteractiveElement = (e) => {
    if (!Number.isFinite(e.clientX) || !Number.isFinite(e.clientY)) {
      return true;
    }
    const element = document.elementFromPoint(e.clientX, e.clientY);
    const isInteractive = (el) => {
      if (!el) return false;
      if (el.tagName === "svg" || el.tagName === "path") return false;

      if (
        el.tagName === "IMG" ||
        el.tagName === "H1" ||
        el.tagName === "P" ||
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.onclick ||
        getComputedStyle(el).cursor !== "auto"
      ) {
        return true;
      }

      return isInteractive(el.parentElement);
    };

    console.log(isInteractive(element));
    return isInteractive(element);
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!isOverInteractiveElement(e)) {
        e.preventDefault();
        startDrawing(e);
      }
    };

    const handleMouseMove = (e) => {
      if (isDrawing) {
        e.preventDefault();
        draw(e);
      }
    };

    const preventSelection = (e) => {
      if (!isOverInteractiveElement(e)) {
        e.preventDefault();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDrawing);
    document.addEventListener("mouseleave", stopDrawing);
    document.addEventListener("selectstart", preventSelection);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDrawing);
      document.removeEventListener("mouseleave", stopDrawing);
      document.removeEventListener("selectstart", preventSelection);
    };
  }, [isDrawing]);

  const startDrawing = (e) => {
    if (isOverInteractiveElement(e)) return;

    const point = `M ${e.clientX} ${e.clientY}`;
    setCurrentPath({
      path: point,
      timestamp: Date.now(),
    });
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || isOverInteractiveElement(e)) return;
    // if (!isDrawing) return;

    setCurrentPath((prev) => ({
      path: `${prev.path} L ${e.clientX} ${e.clientY}`,
      timestamp: Date.now(),
    }));
  };

  const stopDrawing = () => {
    if (isDrawing && currentPath) {
      setPaths((prev) => [...prev, { ...currentPath }]);
      setCurrentPath(null);
    }
    setIsDrawing(false);
  };

  useEffect(() => {
    console.log(paths);
  }, [paths]);

  // useEffect(() => {
  //     // Create animation frame for smooth updates
  //     let animationFrameId;

  //     const updatePaths = () => {
  //         const now = Date.now();
  //         setPaths(prevPaths => {
  //             // Only update if there are paths that need to be removed
  //             const needsUpdate = prevPaths.some(path => now - path.timestamp >= 3000);
  //             if (!needsUpdate) return prevPaths;

  //             return prevPaths.filter(path => now - path.timestamp < 3000);
  //         });

  //         animationFrameId = requestAnimationFrame(updatePaths);
  //     };

  //     animationFrameId = requestAnimationFrame(updatePaths);

  //     return () => {
  //         if (animationFrameId) {
  //             cancelAnimationFrame(animationFrameId);
  //         }
  //     };
  // }, []);

  // Add effect to manage body cursor
  // useEffect(() => {
  //     // Add or remove pencil-cursor class on body based on drawing state
  //     if (isDrawing) {
  //         document.body.classList.add('pencil-cursor');
  //     } else {
  //         document.body.classList.remove('pencil-cursor');
  //     }

  //     // Cleanup when component unmounts
  //     return () => {
  //         document.body.classList.remove('pencil-cursor');
  //     };
  // }, [isDrawing]);

  return (
    <svg
      className="fixed inset-0 w-full h-full"
      style={{
        zIndex: 0,
        // pointerEvents: isOverInteractiveElement ? 'none' : 'auto'
      }}
    >
      {paths.map((path, index) => {
        const opacity = Math.max(0, 1 - (Date.now() - path.timestamp) / 3000);
        return (
          <path
            key={`${index}-${opacity}`}
            d={path.path}
            stroke="#A7EB7B"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              opacity,
            }}
          />
        );
      })}
      {currentPath && (
        <path
          d={currentPath.path}
          stroke="#A7EB7B"
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
