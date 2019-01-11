import { compose } from 'recompose';
import getPosts from 'graphql/getPosts.graphql';
import loadDataAsync from './loadDataAsync';

const withMainSlider = compose(
  loadDataAsync({
    query: getPosts,
    name: 'sliderData',
    config: {
      options: {
        variables: {
          page: 1,
          perPage: 3,
        },
      },
    },
  }),
);

export default withMainSlider;
