import { ProjectReqParams } from '../types';

const QUERY_KEY = {
  USER: {
    base: ['users'],
  },
  PROJECT: {
    base: ['projects'],
    main: ({ searchType, category }: ProjectReqParams['main']) => [
      ...QUERY_KEY.PROJECT.base,
      'main',
      searchType,
      ...(category ? [category] : []),
    ],
  },
};

export default QUERY_KEY;
