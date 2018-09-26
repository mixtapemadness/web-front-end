import { compose } from 'recompose'
import getMediaById from 'graphql/getMediaById.graphql'
import loadDataAsync from './loadDataAsync'

const withMedia = compose(
  loadDataAsync({
    query: getMediaById,
    name: 'media',
    config: {
      options: props => ({
        variables: {
          id: parseInt(props.data.featured_media, 10),
        },
      }),
    },
  }),
)

export default withMedia
