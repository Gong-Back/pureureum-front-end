/** 프로젝트 카테고리 */
export type CategoryType =
  | 'YOUTH_FARMING'
  | 'FARMING_HEALING'
  | 'FARMING_EXPERIENCE'
  | 'ETC';

/** 지불 방식 */
export type PaymentType = 'NONE' | 'DEPOSIT' | 'ENTRY_FEE';

/** 프로젝트 관련 이미지 파일 */
export type ProjectFileType = {
  projectFileType: 'THUMBNAIL' | 'COMMON';
  projectFileUrl: string;
};

export interface Step1InputType {
  title: string;
  guide: string;
}
export interface Step2InputType {
  introduction: string;
  content: string;
  projectStartDate: { year: string; month: string; day: string };
  projectEndDate: { year: string; month: string; day: string };
  totalRecruits: number;
  minAge: number;
  maxAge: number;
  notice: string;
  thumnail: any;
}

export interface Step3InputType {
  paymentType: PaymentType;
  refundInstruction?: string;
  depositionInformation?: string;
  amount?: number;
}

export interface ProjectCreationInputType
  extends Step1InputType,
    Step2InputType,
    Step3InputType {}

/** 주소 정보 Type */
export interface FacilityAddressType {
  city: string;
  county: string;
  district: string;
  jibun: string;
  detail: string;
  longitude: string;
  latitude: string;
}

/** 프로젝트와 관련된 주요 정보 Type */
export interface ProjectPartInfoType {
  id: number;
  title: string;
  likeCount: number;
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

// TODO id 및 소유주 정보 추가 필요
// TODO project Status -> union
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
