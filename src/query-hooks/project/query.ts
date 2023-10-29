import { type MainProjectListOutput, ProjectRepository } from '@/apis/project';
import QUERY_KEY from '@/constants/apis/queryKey';
import type {
  ApiError,
  ProjectReqParams,
  ProjectResponses,
} from '@/constants/types';
import useSuspendedQuery from '@/hooks/useSuspensedQuery';

export const useGetProjectList = (searchType: ProjectReqParams['main']) =>
  useSuspendedQuery<MainProjectListOutput, ApiError, MainProjectListOutput>({
    queryFn: () => ProjectRepository.getMainProjectListAsync(searchType),
    queryKey: QUERY_KEY.PROJECT.main(searchType),
    staleTime: 1000 * 60 * 5,
    useErrorBoundary: true,
  });

export const useGetProjectDetail = (projectId: number) =>
  useSuspendedQuery<
    ProjectResponses['detail'],
    ApiError,
    ProjectResponses['detail']
  >({
    queryFn: () => ProjectRepository.getProjectDetailDataAsync(projectId),
    queryKey: QUERY_KEY.PROJECT.detail(projectId),
    staleTime: 1000 * 60 * 5,
    useErrorBoundary: true,
  });
