import { ROUTES } from './index';

const {
  news, events, audio, videos, interviews, reviews, articles, nextup, underrated,
} = ROUTES.categories;
export default {
  topLevel: {
    news,
    videos,
    articles,
    audio,
  },
  features: {
    underrated,
  },
  more: {
    'mad-about-bars': ROUTES.categories['mad-about-bars'],
    nextup,
    events,
    reviews,
    interviews,
  },
};
