/* eslint implicit-arrow-linebreak: 0 */
import { graphql } from 'react-apollo';

const load = ({ query, config = {}, name = 'data' }) =>
  graphql(query, Object.assign({}, config, { name }));
export default load;
