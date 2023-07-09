import React, { ReactNode } from 'react';

interface VideoSource {
  src: string;
  type: string;
}

export interface ResponsiveVideoProps extends Record<string, any> {
  sources: VideoSource[];
  requiredMediaType: string;
  children?: ReactNode;
}

const MissingVideo: React.FC<{ requiredMediaType: string }> = ({
  requiredMediaType,
}) => <p>Error: Required media type '{requiredMediaType}' is missing.</p>;

const Video: React.FC<{
  sources: VideoSource[];
  children?: ReactNode;
}> = ({ sources, children, ...attributes }) => {
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
  children,
  ...attributes
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
    <Video sources={sources} {...attributes}>
      {children}
    </Video>
  );
};
