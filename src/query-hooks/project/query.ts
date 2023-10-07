

import { type MainProjectListOutput, ProjectRepository } from '@/apis/project';
import QUERY_KEY from '@/constants/apis/queryKey';
import useSuspendedQuery from '@/hooks/useSuspensedQuery';
import type {
  ApiError,
  ProjectReqParams,
} from '@/constants/types';
export const useGetProjectList = ({
  searchType,
  category,
}: ProjectReqParams['main']) =>
  useSuspendedQuery<
    MainProjectListOutput,
    ApiError,
    MainProjectListOutput
  >({
    queryFn: () =>
      ProjectRepository.getMainProjectListAsync({ searchType, category }),
    queryKey: QUERY_KEY.PROJECT.main({ searchType, category }),
    staleTime: 1000 * 60 * 5,
    useErrorBoundary: true,
  });

