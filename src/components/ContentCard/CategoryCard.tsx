import React from 'react';
import { MediaCard } from '../MediaCard';
import { ResponsiveImageProps } from '../ResponsiveImage';
import LinkHeadingActionLayer from '../MediaCard/LinkHeadingActionLayer';

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;

export const CategoryCard: React.FC<{
  mediaType: 'image' | 'video';
  imageProps: ResponsiveImageProps;
  heading: string;
  href: string;
  className?: string;
}> = ({ mediaType = 'image', imageProps, heading, href, className }) => {
  return (
    <div
      className={`activity-card flex flex-col relative ${MEDIA_DIMS_CLASSNAME} ${className}`}
    >
      <MediaCard
        imageProps={{
          ...imageProps,
          className: `rounded-2xl ${MEDIA_DIMS_CLASSNAME} ${imageProps.className}`,
        }}
        mediaType={mediaType}
        actionLayer={
          <LinkHeadingActionLayer
            heading={heading}
            href={href}
            className="drop-shadow-lg"
          />
        }
      />
    </div>
  );
};
