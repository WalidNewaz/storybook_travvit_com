import React, { useRef, useEffect, useCallback } from 'react';

interface FullPageScrollProps {
  children: React.ReactNode;
}

export const FullPageScroll: React.FC<FullPageScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();

    const container = containerRef.current;
    if (!container) return;

    const containerHeight = container.clientHeight;
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const delta = event.deltaY;

    if (delta < 0 && scrollTop > 0) {
      container.scrollTo({
        top: scrollTop - containerHeight,
        behavior: 'smooth',
      });
    } else if (delta > 0 && scrollTop + containerHeight < scrollHeight) {
      container.scrollTo({
        top: scrollTop + containerHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return (
    <div ref={containerRef} className="full-page-scroll">
      {children}
    </div>
  );
};
