import React, { ReactNode } from 'react';

interface VideoSource {
  src: string;
  type: string;
}

export interface ResponsiveVideoProps {
  sources: VideoSource[];
  requiredMediaType: string;
  attributes?: React.VideoHTMLAttributes<HTMLVideoElement>;
  children?: ReactNode;
}

export const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({
  sources,
  requiredMediaType,
  attributes,
  children,
}) => {
  const sourceElements = sources.map((source, index) => (
    <source key={index} src={source.src} type={source.type} />
  ));

  // Check if the required media type exists in the sources array
  const hasRequiredMediaType = sources.some(
    (source) => source.type === requiredMediaType,
  );

  if (!hasRequiredMediaType) {
    return <p>Error: Required media type '{requiredMediaType}' is missing.</p>;
  }

  return (
    <video {...attributes}>
      {sourceElements}
      {children}
    </video>
  );
};
