import { useEffect, useState, useRef } from "react";

const FloatingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const bubbleRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        bubbleRef.current = { x: e.clientX, y: e.clientY };
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      );
      setIsHovering(!!isInteractive);
    };

    const animate = () => {
      const ease = 0.15;
      bubbleRef.current.x +=
        (targetRef.current.x - bubbleRef.current.x) * ease;
      bubbleRef.current.y +=
        (targetRef.current.y - bubbleRef.current.y) * ease;

      setPosition({
        x: bubbleRef.current.x,
        y: bubbleRef.current.y,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    rafRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Single floating bubble cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full backdrop-blur-sm transition-all duration-200 ease-out ${
            isHovering
              ? "w-14 h-14 opacity-40 scale-110"
              : isClicking
              ? "w-5 h-5 opacity-95 scale-90"
              : "w-7 h-7 opacity-85"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9))",
            boxShadow: isHovering
              ? "0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)"
              : "0 0 25px rgba(59, 130, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.3), inset 0 0 12px rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>

      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default FloatingCursor;
