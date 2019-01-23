/* eslint operator-linebreak: 0 */
/* eslint implicit-arrow-linebreak: 0 */
/* eslint no-unneeded-ternary: 0 */

import { compose, branch } from 'recompose'
import getMediaById from 'graphql/getMediaById.graphql'
import loadDataAsync from './loadDataAsync'

const withMedia = compose(
  branch(
    props =>
      props &&
      props.data &&
      props.data.featured_media &&
      props.data.featured_media > -1
        ? true
        : false,
    loadDataAsync({
      query: getMediaById,
      name: 'media',
      config: {
        options: props => ({
          variables: {
            id:
              props &&
              props.data &&
              props.data.featured_media &&
              parseInt(props.data.featured_media, 10),
          },
        }),
      },
    }),
  ),
)

export default withMedia
