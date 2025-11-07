import { useState, useEffect } from "react";

const SmoothTypewriter = ({ text, typingSpeed = 150, deletingSpeed = 75, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index));
        setIndex(index - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index > text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && index < 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, pause]);

  return (
    <h1 className="smooth-typewriter">{displayedText}</h1>
  );
};

export default SmoothTypewriter;
