import React, { useRef, useState, useEffect } from 'react';
import './ContentRibbon.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface ContentRibbonProps {
  children: React.ReactNode;
}

const ContentRibbon: React.FC<ContentRibbonProps> = ({ children }) => {
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollRight, setShowScrollRight] = useState(false);

  useEffect(() => {
    if (ribbonRef.current) {
      ribbonRef.current.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (ribbonRef.current) {
        ribbonRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    if (ribbonRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ribbonRef.current;
      setScrollPosition(scrollLeft);
      setShowScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleScrollLeft = () => {
    if (ribbonRef.current) {
      ribbonRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
      handleScroll();
    }
  };

  const handleScrollRight = () => {
    if (ribbonRef.current) {
      ribbonRef.current.scrollLeft += 200; // Adjust scroll distance as needed
      handleScroll();
    }
  };

  return (
    <div className="content-ribbon">
      <div className="ribbon-scroll-container" ref={ribbonRef}>
        {children}
      </div>
      {scrollPosition > 0 && (
        <button
          className="scroll-button scroll-left"
          onClick={handleScrollLeft}
        >
          <BsChevronLeft className="w-6 h-6" />
        </button>
      )}
      {showScrollRight && (
        <button
          className="scroll-button scroll-right"
          onClick={handleScrollRight}
        >
          <BsChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ContentRibbon;
