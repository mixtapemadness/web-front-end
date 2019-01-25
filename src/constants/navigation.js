import { ROUTES } from './index';

const {
  news, events, community, audio, videos, interviews, reviews, articles, coors, madaboutmixtapes,
} = ROUTES.categories;
export default {
  topLevel: {
    news,
    videos,
    events,
    articles,
    interviews,
  },
  more: {
    'mad-about-bars': ROUTES.categories['mad-about-bars'],
    community,
    coors,
    audio,
    madaboutmixtapes,
    reviews,
  },
};
