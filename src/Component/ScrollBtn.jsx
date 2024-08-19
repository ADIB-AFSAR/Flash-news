import React, { useState, useEffect } from 'react';

const SCROLL_DURATION = 2000; // Duration for scrolling in milliseconds

const smoothScroll = (target, duration) => {
  const start = window.scrollY;
  const distance = target - start;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    window.scrollTo(0, start + distance * easeInOutQuad(progress));

    if (elapsedTime < duration) {
      requestAnimationFrame(scroll);
    }
  };

  const easeInOutQuad = (t) => {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  };

  requestAnimationFrame(scroll);
};

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const handleScroll = () => {
    setShowScrollUp(window.scrollY > 200);
    setShowScrollDown(window.innerHeight + window.scrollY < document.documentElement.scrollHeight - 200);
  };

  const scrollToTop = () => {
    smoothScroll(0, SCROLL_DURATION);
  };

  const scrollToBottom = () => {
    smoothScroll(document.documentElement.scrollHeight, SCROLL_DURATION);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-buttons">
      {showScrollUp && (
        <button onClick={scrollToTop} className="scroll-btn scroll-top-btn">
        <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      )}
      {showScrollDown && (
        <button onClick={scrollToBottom} className="scroll-btn scroll-bottom-btn">
        <i className="bi bi-arrow-down-circle-fill"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollButtons;
