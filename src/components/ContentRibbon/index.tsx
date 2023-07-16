import React, { useRef, useState } from 'react';
import './ContentRibbon.css'; // Example CSS styles

interface ContentRibbonProps {
  content: string[]; // Array of content items
}

const ContentRibbon: React.FC<ContentRibbonProps> = ({ content }) => {
  const ribbonRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    if (ribbonRef.current) {
      ribbonRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
    }
  };

  const handleScrollRight = () => {
    if (ribbonRef.current) {
      ribbonRef.current.scrollLeft += 200; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="content-ribbon">
      <div className="ribbon-scroll-container" ref={ribbonRef}>
        {content.map((item, index) => (
          <div className="content-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      {scrollPosition > 0 && (
        <button
          className="scroll-button scroll-left"
          onClick={handleScrollLeft}
        >
          &lt;
        </button>
      )}
      {ribbonRef.current &&
        scrollPosition <
          ribbonRef.current.scrollWidth - ribbonRef.current.clientWidth && (
          <button
            className="scroll-button scroll-right"
            onClick={handleScrollRight}
          >
            &gt;
          </button>
        )}
    </div>
  );
};

export default ContentRibbon;
