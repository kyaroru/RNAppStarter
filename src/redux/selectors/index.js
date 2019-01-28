import auth from './auth';
import common from './common';
import persist from './persist';

export default {
  ...auth,
  ...common,
  ...persist,
};
