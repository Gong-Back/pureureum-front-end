import { CategoryType, ProjectItemType } from '@/constants/types';
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
  static async registerProjectAsync(
    title: string,
    introduction: string,
    content: string,
    projectStartDate: string,
    projectEndDate: string,
    totalRecruits: number,
    minAge: number,
    maxAge: number,
    // guide: string | null,
    // notice: string | null,
    // paymentType: 'NONE' | 'DEPOSIT' | 'ENTRY_FEE',
    // amount: number | null,
    // refundInstruction: string | null,
    // depositInformation: string | null,
    // facilityId: number,
    // thumbnailImage?: string,
    // commonImage?: string,
  ) {
    const formData = new FormData();
    formData.append(
      'projectRegisterReq',
      new Blob(
        [
          JSON.stringify({
            title,
            introduction,
            content,
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

    const response = await postAsync<any, FormData>(
      '/api/v1/projects',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response;
  }
}
