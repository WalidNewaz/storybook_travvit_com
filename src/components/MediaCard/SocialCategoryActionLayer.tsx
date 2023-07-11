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
      badges.map((badge) => (
        <Badge label={badge} className="m-1" color="indigo" />
      ))}
  </div>
);

const SocialCategoryAction: React.FC<{
  likeHandler: clickHandler;
  addHandler: clickHandler;
  shareHandler: clickHandler;
  badges: Array<string>;
}> = ({ likeHandler, addHandler, shareHandler, badges }) => (
  <>
    <div className="flex flex-col w-full h-full flex items-end justify-end">
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

export default withOverlay(SocialCategoryAction);
