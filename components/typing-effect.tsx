import React, { useEffect, useState, useRef } from "react";

type TypingEffectProps = {
  text: string;
  speed?: number; // ms per character (base speed)
  className?: string;
};

export const TypingEffect: React.FC<TypingEffectProps> = ({ text = "", speed = 60, className }) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);
  const frame = useRef<number | null>(null);
  const iRef = useRef(0);
  const erasing = useRef(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    iRef.current = 0;
    erasing.current = false;
    let cancelled = false;

    function typeChar() {
      if (cancelled) return;
      if (!erasing.current && iRef.current < text.length) {
        const char = text[iRef.current];
        if (typeof char === "string") {
          setDisplayed((prev) => prev + char);
        }
        iRef.current++;
        if (iRef.current < text.length) {
          const nextDelay = speed + Math.random() * 40;
          frame.current = window.setTimeout(typeChar, nextDelay);
        } else {
          setDone(true);
          // Pause before erasing
          frame.current = window.setTimeout(() => {
            erasing.current = true;
            eraseChar();
          }, 1200);
        }
      }
    }

    function eraseChar() {
      if (cancelled) return;
      if (erasing.current && iRef.current > 0) {
        setDisplayed((prev) => prev.slice(0, -1));
        iRef.current--;
        if (iRef.current > 0) {
          const nextDelay = speed / 2 + Math.random() * 30;
          frame.current = window.setTimeout(eraseChar, nextDelay);
        } else {
          // Pause before typing again
          frame.current = window.setTimeout(() => {
            erasing.current = false;
            setDone(false);
            typeChar();
          }, 800);
        }
      }
    }

    frame.current = window.setTimeout(typeChar, speed);
    return () => {
      cancelled = true;
      if (frame.current) clearTimeout(frame.current);
    };
  }, [text, speed]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className} style={{ whiteSpace: "pre" }}>
      {displayed}
      <span style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.2s" }}>|</span>
    </span>
  );
};
