import React from 'react';
import withOverlay from './withOverlay';
import LikeActionIcon from '../ActionIcon/LikeAction';
import AddActionIcon from '../ActionIcon/AddAction';
import ShareActionIcon from '../ActionIcon/ShareAction';
import { Badge } from '../Badge';
import type { clickHandler } from '../../types/eventHandler.types';

const Badges: React.FC<{ badges: Array<string> }> = ({ badges }) => (
  <div className="grow flex items-end justify-end">
    {badges &&
      badges.map((badge, key) => (
        <Badge key={key} label={badge} className="m-1" color="indigo" />
      ))}
  </div>
);

const SocialCategoryAction: React.FC<{
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
  className?: string;
}> = ({ likeHandler, addHandler, shareHandler, badges, className = '' }) => {
  return (
    <>
      <div
        className={`social-category-action flex flex-col items-end justify-end ${className}`}
      >
        <div className="grow">
          <LikeActionIcon
            label="Like button"
            onClick={likeHandler}
            className="m-2"
          />
          <AddActionIcon
            label="Add button"
            onClick={addHandler}
            className="m-2"
          />
          <ShareActionIcon
            label="Share button"
            onClick={shareHandler}
            className="m-2"
          />
        </div>
        <Badges badges={badges} />
      </div>
    </>
  );
};

export default withOverlay(SocialCategoryAction);
