import { compose, branch } from 'recompose';
import { withCategory, withMedia, withAuthor } from 'hocs';

export default compose(
  branch(
    ({ data: { categories } }) => (!!categories),
    withCategory,
  ),
  branch(
    ({ data: { featured_media } }) => (!!featured_media),
    withMedia,
  ),
  branch(({ data }) => (!!data), withAuthor),
);
