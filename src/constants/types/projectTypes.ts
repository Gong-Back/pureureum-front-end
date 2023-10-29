import { FacilityAddressType } from './facilityTypes';

/** 프로젝트 카테고리 */
export type CategoryType =
  | 'YOUTH_FARMING'
  | 'FARMING_HEALING'
  | 'FARMING_EXPERIENCE'
  | 'ETC';

/** 프로젝트 관련 이미지 파일 */
export type ProjectFileType = {
  projectFileType: 'THUMBNAIL' | 'COMMON';
  projectFileUrl: string;
};

/** 프로젝트 진행 상태 여부 */
export type ProjectStatusType = 'ADMIN_REQUIRED' | 'REJECTED' | 'PREPARING' | 'RECRUITING' | 'COMPLETED';

/** 프로젝트 검색 필터 종류 */
export type ProjectSortType = 'POPULAR' | 'LATEST' | 'PARTICIPANT';

/** 프로젝트 컨텐츠 종류 */
export type ProjectContentType = 'INTRO' | 'DISCUSSION' | 'LOCATION';

export interface ProjectFormType {
  title: string;
  guide: string;
  introduction: string;
  content: string;
  discussionStartDate: { year: string; month: string; day: string };
  discussionEndDate: { year: string; month: string; day: string };
  projectStartDate: { year: string; month: string; day: string };
  projectEndDate: { year: string; month: string; day: string };
  totalRecruits: number;
  minAge: number;
  maxAge: number;
  notice?: string;
  thumbnailImage?: string;
  commonImage?: string;
  amount?: number;
}

/** 프로젝트와 관련된 주요 정보 Type */
export interface ProjectPartInfoType {
  id: number;
  title: string;
  likeCount: number;
  ownerName: string;
  discussionStartDate: string;
  discussionEndDate: string;
  projectStartDate: string;
  projectEndDate: string;
  recruits: number;
  totalRecruits: number;
  facilityAddress: FacilityAddressType;
}

/** 프로젝트와 관련된 상세 정보 Type (주요 정보 포함) */
export interface ProjectInfoType extends Omit<ProjectPartInfoType, 'id'> {
  introduction: string;
  content: string;
  minAge: number;
  maxAge: number;
  guide: string | null;
  notice: string | null;
}

/** 프로젝트 관련 API 요청 / 응답 타입 */
export type ProjectReqParams = {
  register: {
    title: string;
    introduction: string;
    content: string;
    discussionStartDate: string;
    discussionEndDate: string;
    projectStartDate: string;
    projectEndDate: string;
    totalRecruits: number;
    minAge: number;
    maxAge: number;
    // paymentType: PaymentType;
    /// ** 유의 사항 */
    // notice: string | null;
    /// ** 찾아오시는 길 */
    // guide: string | null;
    /// ** 촘 금액 */
    // amount: number | null;
    /// ** 환불 정책 */
    // refundInstruction: string | null;
    /// ** 예금 정보 */
    // depositInformation: string | null;
    /// ** 시설 ID */
    // facilityId: number;
    /// ** 대표 이미지  */
    // thumbnailImage?: string;
    /// ** 일반 이미지  */
    // commonImage?: string;
  };
  main: {
    searchType: 'POPULAR' | 'LATEST';
    category?: CategoryType;
  };
};

export type ProjectResponses = {
  main: {
    projectPartInformation: ProjectPartInfoType;
    projectCategory: CategoryType;
    thumbnailFileRes: ProjectFileType | null;
  };
  detail: {
    projectInformation: ProjectInfoType;
    projectCategory: CategoryType;
    projectStatus: string;
    projectFiles: ProjectFileType[];
    projectPayment: string | null;
  };
};