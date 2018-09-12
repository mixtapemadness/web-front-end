import { compose, withStateHandlers, lifecycle } from 'recompose'
import loadDataAsync from '../../hocs'
import getNews from '../../graphql/getNews.graphql'

export default compose(
  withStateHandlers(
    () => ({
      width: window.innerWidth,
      newsFilter: '',
      sort: 'DATE_DESC',
    }),
    {
      handleSortNews: ({ newsSort }) => () => ({ newsSort }),
      handleFilterCategory: ({ newsFilter }) => () => ({ newsFilter }),
      updateWidth: () => () => ({ width: window.innerWidth }),
    },
  ),

  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWidth)
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWidth)
    },
  }),

  loadDataAsync({
    query: getNews,
    config: {
      options: props => ({
        variables: {
          filter: { categories: props.newsFilter },
          sort: props.sort,
        },
      }),
    },
  }),
)
