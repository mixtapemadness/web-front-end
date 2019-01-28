/* eslint react/no-array-index-key: 0 */
/* eslint object-curly-newline: 0 */
/* eslint operator-linebreak: 0 */
import React from 'react';

import Slider from 'react-animated-slider';

import { CardLoader } from 'components/loaders';
import featuredSliderEnhancer from './featuredSliderEnhancer';
import FeaturedSliderContent from './FeaturedSliderContent';
import './_FeaturedSlider.scss';

const FeaturedSlider = ({ data }) => {
  const loading = data && data.loading && data.loading;
  const Posts = data && data.Posts && data.Posts;
  if (loading) {
    return (<CardLoader />);
  }
  return (
    <Slider
      classNames={{
        slider: 'featured-slider',
        previousButton: 'previousButton',
        nextButton: 'nextButton',
        buttonDisabled: 'disabled',
        track: 'track',
        slide: 'slide',
        hidden: 'hidden',
        previous: 'previous',
        current: 'current',
        next: 'next',
        animateIn: 'animateIn',
        animateOut: 'animateOut',
      }}
    >
      {Posts.map(item => (
        <div key={item.id}>
          <FeaturedSliderContent loading={loading} data={item} />
        </div>
      ))}
    </Slider>
  );
};

export default featuredSliderEnhancer(FeaturedSlider);
