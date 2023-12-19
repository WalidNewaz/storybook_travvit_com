import React from 'react';

const OVERLAY_LABEL_CLASSES = `
  overlay-label
  fixed bottom-0 left-0
  w-full
  bg-gray-800 text-white
  p-4`;

// Define the props for the OverlayLabel component
type OverlayLabelProps = {
  label: string;
};

// OverlayLabel component
const OverlayLabel: React.FC<OverlayLabelProps> = ({ label }) => {
  return (
    label &&
    label.length > 0 && (
      <div className={OVERLAY_LABEL_CLASSES}>
        <p>{label}</p>
      </div>
    )
  );
};

OverlayLabel.defaultProps = {
  label: '',
};

export default OverlayLabel;
