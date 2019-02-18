/* eslint object-curly-newline: 0 */
/* eslint no-unneeded-ternary: 0 */
/* eslint no-unused-vars: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint operator-linebreak: 0 */
/* global googletag */
import {
  compose,
  withStateHandlers,
  lifecycle,
  branch,
} from 'recompose';
import { withRouter } from 'react-router-dom';
import getPostBySlug from 'graphql/getPostBySlug.graphql';
import { loadDataAsync, withAuthor, withMedia } from 'hocs';
import window from 'global/window';

const handleGoogleTagPush = () => {
  if (googletag) {
    googletag.cmd.push(() => { googletag.display('div-gpt-ad-1550497711029-0'); });
  }
};

export default compose(
  withRouter,
  loadDataAsync({
    query: getPostBySlug,
    config: {
      options: props => ({
        variables: {
          slug: props.match.params.slug,
        },
      }),
    },
  }),
  branch(
    ({ data }) =>
      data && data.Post && data.Post.featured_media ? true : false,
    withMedia,
  ),
  withStateHandlers(
    () => ({
      fetchPrev: false,
      fetchNext: false,
      date: '',
      showSpinner: true,
      category: '',
    }),
    {
      updateSpinner: (props) => (showSpinner) => ({
        showSpinner,
      }),
      handlePrev: ({ fetchPrev }) => date => ({ fetchPrev: true, date }),
      handleNext: ({ fetchNext }) => date => ({ fetchNext: true, date }),
    },
  ),
  lifecycle({
    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.updateSpinner(false);
      handleGoogleTagPush();
    },
    componentWillMount() {
      this.props.updateSpinner(true);
    },
    componentWillReceiveProps(nextProps, prevProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        window.scrollTo(0, 0);
        handleGoogleTagPush();
      }
    },
  }),
  branch(
    ({ data }) => (data && data.Post && data.Post.author ? true : false),
    withAuthor,
  ),
);
