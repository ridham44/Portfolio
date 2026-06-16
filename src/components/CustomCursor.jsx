import { useEffect, useState } from "react";
export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setFollower((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.12,
        y: prev.y + (mouse.y - prev.y) * 0.12,
      }));
    };

    const id = setInterval(animate, 16);

    return () => clearInterval(id);
  }, [mouse]);

  useEffect(() => {
    const down = () =>
      document.body.classList.add("cursor-click");

    const up = () =>
      document.body.classList.remove("cursor-click");

    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  useEffect(() => {
    const interactive = document.querySelectorAll(
      "a, button, .glass"
    );

    interactive.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-hover");
      });

      item.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover");
      });
    });

    return () => {
      interactive.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      <div
        className="cursor-glass"
        style={{
          left: follower.x,
          top: follower.y,
        }}
      />
    </>
  );
}