import { ProjectReqParams, ProjectResponses } from '@/constants/types';

import { getAsync, postAsync } from './API';

export interface MainProjectListOutput {
  page: number;
  size: number;
  totalPages: number;
  projectList: Array<ProjectResponses['main']>;
}

export class ProjectRepository {
  /**
   * 메인 페이지에서 보여줄 프로젝트 목록을 조회하는 함수 getMainProjectListAsync
   * @param searchType 검색 기준 (인기순, 최신순)
   * @returns 검색 타입을 기준으로 정렬되어 있는 총 6개의 프로젝트 목록 데이터
   */
  static async getMainProjectListAsync(
    searchType
  : ProjectReqParams['main']) {
    const response = await getAsync<MainProjectListOutput>(`/projects`, {
      params: {
        searchType,
        size: 6,
      },
    });
    return response.data;
  }

  /**
   * 프로젝트 상세 페이지에서 보여줄 데이터를 조회하는 함수 getProjectDetailAsync
   * @param id 프로젝트 id
   * @returns id 값에 해당하는 프로젝트의 상세 데이터
   */
  static async getProjectDetailDataAsync(id: number) {
    const response = await getAsync<ProjectResponses['detail']>(
      `/projects/${id}`,
    );
    return response.data;
  }

  /**
   * 새로운 프로젝트를 생성하는 함수 registerProjectAsync
   * @param title 프로젝트 제목
   * @param introduction 프로젝트 한줄 소개
   * @param content 프로젝트 내용
   * @param projectStartDate 프로젝트 시작 시간
   * @param projectEndDate 프로젝트 종료 시간
   * @param totalRecruits 프로젝트 모집 인원
   * @param minAge 나이 제한(최소)
   * @param maxAge 나이 제한(최대)
   * @param guide 찾아오시는 길 안내
   * @param notice 유의 사항
   * @param paymentType 지불 유형
   * @param amount 총 금액(지불 유형이 NONE이 아닐 경우)
   * @param refundInstruction 환불 정책(지불 유형이 NONE이 아닐 경우)
   * @param depositInformation 예금 정보(지불 유형이 NONE이 아닐 경우)
   * @param facilityId 시설 등록 ID
   * @param thumbnailImage
   * @param commonImage
   * @returns
   */
  static async registerProjectAsync({
    title,
    introduction,
    content,
    discussionStartDate,
    discussionEndDate,
    projectStartDate,
    projectEndDate,
    totalRecruits,
    minAge,
    maxAge,
  }: // notice,
  // guide,
  // paymentType,
  // amount,
  // refundInstruction,
  // depositInformation,
  // facilityId,
  // thumbnailImage,
  // commonImage,
  ProjectReqParams['register']) {
    const formData = new FormData();
    formData.append(
      'projectRegisterReq',
      new Blob(
        [
          JSON.stringify({
            title,
            introduction,
            content,
            discussionStartDate,
            discussionEndDate,
            projectStartDate,
            projectEndDate,
            totalRecruits,
            minAge,
            maxAge,
            guide: null,
            notice: null,
            paymentType: 'NONE',
            amount: 0,
            refundInstruction: null,
            depositInformation: null,
            facilityId: 1,
            projectCategory: 'FARMING_HEALING',
          }),
        ],
        { type: 'application/json' },
      ),
      'projectRegisterReq',
    );

    // if (thumbnailImage) { //  formData.append('THUMBNAIL', thumbnailImage); // }
    // if (commonImage) { //  formData.append('COMMON', commonImage); // }

    const response = await postAsync<any, FormData>('/projects', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        requireToken: true,
      },
    });

    return response;
  }

  /**
   * 프로젝트 참가 신청을 진행하는 함수 postProjectApplyAsync
   * @param projectId 참가 신청을 진행할 프로젝트의 ID
   * @returns 성공 시 204, 실패 시 40X 혹은 500 에러 return
   */
  static async postProjectApplyAsync(projectId: number) {
    const response = await postAsync<void, undefined>(
      `/projects/${projectId}/apply`,
      undefined,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          requireToken: true,
        },
      },
    );
    return response.data;
  }
}
