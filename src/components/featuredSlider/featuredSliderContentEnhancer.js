import { compose, branch } from 'recompose';
import {
  withMedia, withTags, withCategory, withAuthor,
} from 'hocs';

export default compose(
  branch(({ data }) => (!!data), withMedia),
  branch(({ data }) => (!!data), withTags),
  branch(({ data }) => (!!data), withCategory),
  branch(({ data }) => (!!data), withAuthor),
);
