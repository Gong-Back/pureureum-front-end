import { ApiResponse, CategoryType, ProjectItemType } from '@/constants/types';
import { getAsync, postAsync } from './API';

interface MainProjectListOutput {
  page: number;
  projectList: ProjectItemType[];
  size: number;
  totalPages: number;
}

export class ProjectRepository {
  /**
   * 메인 페이지에서 보여줄 프로젝트 목록을 조회하는 함수 getMainProjectListAsync
   * @returns 검색 타입을 기준으로 정렬되어 있는 총 6개의 프로젝트 목록 데이터
   */
  static async getMainProjectListAsync(
    searchType: 'POPULAR' | 'LATEST',
    category?: CategoryType,
  ) {
    const response = await getAsync<MainProjectListOutput>(`/api/v1/projects`, {
      params: {
        searchType,
        category,
        size: 6,
      },
    });
    return response;
  }
}
