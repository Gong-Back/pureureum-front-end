import { useQuery } from '@tanstack/react-query';

import { type MainProjectListOutput, ProjectRepository } from '@/apis/project';
import QUERY_KEY from '@/constants/apis/queryKey';
import type {
  ApiError,
  ApiResponse,
  ProjectReqParams,
} from '@/constants/types';

export const useGetProjectList = ({
  searchType,
  category,
}: ProjectReqParams['main']) =>
  useQuery<
    ApiResponse<MainProjectListOutput>,
    ApiError,
    MainProjectListOutput
  >({
    queryFn: () =>
      ProjectRepository.getMainProjectListAsync({ searchType, category }),
    queryKey: QUERY_KEY.PROJECT.main({ searchType, category }),
    staleTime: 1000 * 60 * 5,
    useErrorBoundary: true,
  });
