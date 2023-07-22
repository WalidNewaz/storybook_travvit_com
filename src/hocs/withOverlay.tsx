import React, { ComponentType } from 'react';

const DEFAULT_OVERLAY_CLASSES = `action-overlay absolute top-0 left-0 w-full h-full bg-black-500 flex flex-col justify-center items-center p-4 text-white`;

const withOverlay = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ExtendingComponent: React.FC<P> = ({ ...props }) => {
    // Extending component logic

    return (
      <div className={`${DEFAULT_OVERLAY_CLASSES}`}>
        {/* Extending component rendering */}
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };

  return ExtendingComponent;
};

export default withOverlay;
