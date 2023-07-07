import React, { useRef, useEffect, useCallback, useState } from 'react';

interface FullPageScrollProps {
  children: React.ReactNode;
}

export const FullPageScroll: React.FC<FullPageScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState<number | null>(null);

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

  const handleTouchStart = (event: TouchEvent) => {
    setStartY(event.touches[0].clientY || null);
  };

  const handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
    const container = containerRef.current;
    if (!container) return;
    const touchY = event.touches[0].clientY;
    const deltaY = touchY - (startY ?? 0);
    setStartY(touchY);
    container.scrollTo({
      top: container.scrollTop + deltaY,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleWheel]);

  return (
    <div ref={containerRef} className="full-page-scroll">
      {children}
    </div>
  );
};
