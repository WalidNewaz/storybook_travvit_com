import React from 'react';
import withOverlay from '../../../hocs/withOverlay';
import BookmarkActionIcon from '../../ActionIcon/BookmarkAction/BookmarkAction';
import { Badge } from '../../Badge/Badge';
import type { clickHandler } from '../../../types/eventHandler.types';

const LAYER_BASE_CLASSNAME = `bookmark-category-action-layer flex flex-col items-end justify-end`;

const Badges: React.FC<{ badges: Array<string> }> = ({ badges }) => (
  <div className="grow flex items-end justify-end">
    {badges &&
      badges.map((badge, key) => (
        <Badge key={key} label={badge} className="m-1" color="indigo" />
      ))}
  </div>
);

const BookmarkCategoryActionLayer: React.FC<{
  bookmarkHandler: clickHandler;
  badges: Array<string>;
  bookmarked?: boolean;
  className?: string;
}> = ({ bookmarkHandler, badges, bookmarked = false, className = '' }) => {
  return (
    <>
      <div className={`${LAYER_BASE_CLASSNAME} ${className}`}>
        <div className="grow">
          <BookmarkActionIcon
            label="Bookmark button"
            onClick={bookmarkHandler}
            selected={bookmarked}
            className="m-2"
          />
        </div>
        <Badges badges={badges} />
      </div>
    </>
  );
};

export default withOverlay(BookmarkCategoryActionLayer);
