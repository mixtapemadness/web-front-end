import React from 'react';
import { Link } from 'react-router-dom';
import Video from 'components/video';
import SliderComponent from 'components/slider';
import Advertisement from 'components/advertisement';
import { CardLoader } from 'components/loaders';
import videosEnhancer from './videosEnhancer';
import { ROUTES } from '../../constants';

const Videos = ({ data }) => {
  const Posts = data && data.Posts && data.Posts;
  const dataWithAds = Posts && [...Posts];

  if (dataWithAds) {
    dataWithAds.splice(4, 0, { id: 'adunit' });
  }

  return (
    <SliderComponent
      title={<Link to={ROUTES.categories.videos}>Latest Videos</Link>}
      subTitle="Our selection of bangers"
      cta={<Link to={ROUTES.categories.videos}>see more</Link>}
    >
      {data.loading
        ? [...Array(8)].map(i => <CardLoader key={`${i}-videos-loader`} />)
        : dataWithAds.map(item => {
          if (item.id === 'adunit') {
            return (
              <Advertisement key="div-gpt-ad-1550497747165-0" border>
                <div
                  id="div-gpt-ad-1550497747165-0"
                  className="center"
                  style={{ height: '250px', width: '300px' }}
                />
              </Advertisement>
            );
          }
          return <Video key={item.id} data={item} />;
        })}
    </SliderComponent>
  );
};

export default videosEnhancer(Videos);
