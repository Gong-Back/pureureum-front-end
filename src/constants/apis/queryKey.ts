import { ProjectReqParams } from '../types';

const QUERY_KEY = {
  USER: {
    base: ['users'],
  },
  PROJECT: {
    base: ['projects'],
    main: (searchType: ProjectReqParams['main']) => [
      ...QUERY_KEY.PROJECT.base,
      'main',
      searchType,
    ],
    detail: (id: number) => [...QUERY_KEY.PROJECT.base, 'detail', id],
  },
};

export default QUERY_KEY;
