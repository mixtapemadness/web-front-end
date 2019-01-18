/* eslint implicit-arrow-linebreak: 0 */

import { compose } from 'recompose';

import load from './load';

const loadDataAsync = ({ query, config, name = 'data' }) =>
  compose(load({ query, config, name }));

export default loadDataAsync;
