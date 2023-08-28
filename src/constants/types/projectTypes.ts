import { AddressType, CoordinateType } from './facilityTypes';

/** 프로젝트 카테고리 */
export type CategoryType =
  | 'YOUTH_FARMING'
  | 'FARMING_HEALING'
  | 'FARMING_EXPERIENCE'
  | 'ETC';

/** 지불 방식 */
export type PaymentType = 'NONE' | 'DEPOSIT' | 'ENTRY_FEE';

/** 프로젝트 컨텐츠 종류 */
export type ProjectContentType = 'intro' | 'cost' | 'location' | 'qna';

/** 프로젝트 관련 이미지 파일 */
export type ProjectFileType = {
  projectFileType: 'THUMBNAIL' | 'COMMON';
  projectFileUrl: string;
};

/** 프로젝트 진행 상태 여부 */
export type ProjectStatusType = 'NOT_STARTED' | 'PROGRESSED' | 'FINISHED';

export interface Step1InputType {
  title: string;
  guide: string;
  introduction: string;
  content: string;
  projectStartDate: { year: string; month: string; day: string };
  projectEndDate: { year: string; month: string; day: string };
  totalRecruits: number;
  minAge: number;
  maxAge: number;
  paymentType: PaymentType;
  notice?: string;
  thumbnailImage?: string;
  commonImage?: string;
  refundInstruction?: string;
  depositionInformation?: string;
  amount?: number;
}

export type ProjectReqParams = {
  register: {
    title: string;
    introduction: string;
    content: string;
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
};

/** 주소 정보 Type */
export interface FacilityAddressType extends AddressType, CoordinateType {}

/** 프로젝트와 관련된 주요 정보 Type */
export interface ProjectPartInfoType {
  id: number;
  title: string;
  likeCount: number;
  ownerName: string;
  ownerName: string;
  projectStartDate: string;
  projectEndDate: string;
  /** 현재 모집된 인원 */
  recruits: number;
  /** 총 모집 인원 */
  totalRecruits: number;
  facilityAddress: FacilityAddressType;
}

/** 프로젝트와 관련된 상세 정보 Type (주요 정보 포함) */
export interface ProjectInfoType extends Omit<ProjectPartInfoType, 'id'> {
  /** 프로젝트 한줄 소개 */
  introduction: string;
  /** 프로젝트 내용 */
  content: string;
  /** 나이 제한 최솟값 (-1: 제한 없음) */
  minAge: number;
  /** 나이 제한 최대값 (-1: 제한 없음) */
  maxAge: number;
  /** 찾아오시는 길 */
  guide: string | null;
  /** 찾아오시는 길 */
  notice: string | null;
}

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
    paymentType: PaymentType;
    projectFiles: ProjectFileType[];
    projectPayment: string | null;
  };
};
