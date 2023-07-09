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

const MissingVideo: React.FC<{ requiredMediaType: string }> = ({
  requiredMediaType,
}) => <p>Error: Required media type '{requiredMediaType}' is missing.</p>;

const Video: React.FC<{
  sources: VideoSource[];
  attributes?: React.VideoHTMLAttributes<HTMLVideoElement>;
  children?: ReactNode;
}> = ({ sources, attributes, children }) => {
  const sourceElements = sources.map((source, index) => (
    <source key={index} src={source.src} type={source.type} />
  ));
  return (
    <video {...attributes}>
      {sourceElements}
      {children}
    </video>
  );
};

export const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({
  sources,
  requiredMediaType,
  attributes,
  children,
}) => {
  let hasRequiredMediaType = false;

  if (sources && sources.length) {
    // Check if the required media type exists in the sources array
    hasRequiredMediaType = sources.some(
      (source) => source.type === requiredMediaType,
    );
  }

  return !hasRequiredMediaType ? (
    <MissingVideo requiredMediaType={requiredMediaType} />
  ) : (
    <Video sources={sources} attributes={attributes}>
      {children}
    </Video>
  );
};
