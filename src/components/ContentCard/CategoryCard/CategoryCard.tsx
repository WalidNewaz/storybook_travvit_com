import React from 'react';
import { MediaCard } from '../../MediaCard/MediaCard';
import LinkHeadingActionLayer from '../../MediaCard/LinkHeadingActionLayer/LinkHeadingActionLayer';
import CategoryCardProps from './CategoryCard.interface';

const MEDIA_DIMS_CLASSNAME = `
  w-[22rem] h-80
  lg:w-[19rem] h-[19rem]
`;

export const CategoryCard: React.FC<CategoryCardProps> = ({
  mediaType = 'image',
  imageProps,
  heading,
  href,
  className,
}) => {
  return (
    <div
      className={`category-card flex flex-col relative ${MEDIA_DIMS_CLASSNAME} ${className}`}
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
