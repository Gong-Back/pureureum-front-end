import {
  CategoryType,
  FacilityReqParams,
  FacilityResponses,
} from '@/constants/types';

import { getAsync, postAsync } from './API';

export class FacilityRepository {
  /**
   * 새로운 시설을 등록하는 함수 registerFacilityAsync
   * @param category 시설 카테고리
   * @param name 시설 이름
   * @param city 시설 주소 (시)
   * @param county 시설 주소 (군, 구)
   * @param district 시설 주소 (동, 읍, 면)
   * @param jibun 시설 주소 (지번)
   * @param detail 시설 상세 주소
   * @param longitude 시설 위도
   * @param latitude 시설 경도
   * @param certificationDoc 시설 인증 서류
   * @returns 성공 시 200, 실패 시 40X 에러 반환
   */
  static async registerFacilityAsync({
    category,
    name,
    city,
    county,
    district,
    jibun,
    detail,
    longitude,
    latitude,
    certificationDoc,
  }: FacilityReqParams['register']) {
    const formData = new FormData();
    formData.append(
      'facilityReq',
      new Blob(
        [
          JSON.stringify({
            category,
            name,
            city,
            county,
            district,
            jibun,
            detail,
            longitude,
            latitude,
          }),
        ],
        {
          type: 'application/json',
        },
      ),
    );
    if (certificationDoc) formData.append('certificationDoc', certificationDoc);

    await postAsync<undefined, FormData>('/facilities/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  /**
   * 관리자로부터 인증이 완료된 시설 목록을 보여주는 함수 getApprovedFacilitiesAsync
   * @param category 분류할 시설 카테고리
   * @returns 시설 목록이 담긴 배열 (SearchFacilityOutputType[])
   */
  static async getApprovedFacilitiesAsync(category: CategoryType) {
    const response = await getAsync<FacilityResponses['searchByCategory']>(
      'facilities/me',
      {
        params: { category },
      },
    );
    return response;
  }

  /**
   * 현재 자신이 등록한 모든 시설 목록을 보여주는 함수 getAllFacilitiesAsync
   * @returns 시설 목록이 담긴 배열 (SearchFacilityOutputType[])
   */
  static async getAllFacilitiesAsync() {
    const response = await getAsync<FacilityResponses['searchAll']>(
      'facilities/all',
    );
    return response;
  }
}
