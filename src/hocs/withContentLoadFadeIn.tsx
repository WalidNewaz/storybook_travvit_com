import React, { ComponentType, useState, useEffect } from 'react';

interface StatusProps {
  status: string;
  className?: string;
}

const withContentLoadFadeIn = <P extends StatusProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const ExtendingComponent: React.FC<P> = ({ status, className, ...props }) => {
    // Extending component logic
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
      if (status === 'succeeded') {
        setShowContent(true);
      }
    }, [status]);
    const computedClasses = `${className} transition-opacity duration-500 ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`;

    return (
      <WrappedComponent className={`${computedClasses}`} {...(props as P)} />
    );
  };

  return ExtendingComponent;
};

export default withContentLoadFadeIn;
