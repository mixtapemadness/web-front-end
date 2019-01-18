import { getMainDefinition } from 'apollo-utilities';
import { graphql } from 'react-apollo';

import getEmitter from '../eventEmitter';

const eventEmitter = getEmitter();

const mutation = (query, qName = null) => {
  let name = qName;

  if (!name) {
    const queryDef = getMainDefinition(query);
    name = queryDef.name.value;
  }

  return graphql(query, {
    props: ({ mutate }) => ({
      [name]: async variables => {
        const res = await mutate({
          variables,
        });

        eventEmitter.emit(name, {
          payload: res.data,
        });

        return res;
      },
    }),
  });
};

export default mutation;
