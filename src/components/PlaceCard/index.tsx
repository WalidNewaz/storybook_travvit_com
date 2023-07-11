import React from 'react';
import { MediaCard } from '../MediaCard';
import SocialCategoryActionLayer from '../MediaCard/SocialCategoryActionLayer';
import { Badge } from '../Badge';
import { PiStarFill } from 'react-icons/pi';

/** Assets */
import mountainsLake from '../../stories/images/mountains_lake.jpeg';
import mountainsLakePng from '../../stories/images/mountains_lake.png';
import mountainsLakeWebp from '../../stories/images/mountains_lake.webp';

const imgSources = [
  {
    type: 'image/webp',
    srcSet: mountainsLakeWebp,
  },
  {
    type: 'image/png',
    srcSet: mountainsLakePng,
  },
];

const imageProps = {
  sources: imgSources,
  src: mountainsLake,
  alt: 'Moutains and lakes',
  className: 'rounded-2xl w-80 h-80',
};

export const PlaceCard: React.FC = () => {
  return (
    <div className="place-card flex flex-col relative w-80 h-80">
      <MediaCard
        imageProps={imageProps}
        mediaType="image"
        actionLayer={
          <SocialCategoryActionLayer
            badges={['Hike', 'National Park']}
            likeHandler={() => alert('You clicked like!')}
            addHandler={() => alert('You clicked add!')}
            shareHandler={() => alert('You clicked share!')}
            className="w-72 h-80"
          />
        }
      />
      <div className="card-description mt-[21rem] mx-4">
        <a href="#" className="text-travvit-blue-800 hover:text-travvit-blue">
          <h2>Rocky Mountain National Park</h2>
        </a>
        <a href="#" className="text-slate-500 hover:text-slate-700">
          <p>Colorado, USA</p>
        </a>
        <div>
          <Badge rounded className="my-2">
            <PiStarFill className="text-indigo-700 mr-2" /> 4.9
          </Badge>
        </div>
      </div>
    </div>
  );
};
