/** 프로젝트 카테고리 타입 */
export type CategoryType =
  | 'YOUTH_FARMING'
  | 'FARMING_HEALING'
  | 'FARMING_EXPERIENCE'
  | 'ETC';

/** 프로젝트 생성 Input 타입 (step1~3) */
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
  paymentType: 'NONE' | 'DEPOSIT' | 'ENTRY_FEE';
  refundInstruction?: string;
  depositionInformation?: string;
  amount?: number;
}

export interface ProjectCreationInputType
  extends Step1InputType,
    Step2InputType,
    Step3InputType {}

export interface FacilityAddressType {
  city: string;
  county: string;
  district: string;
  jibun: string;
  detail: string;
  longitude: string;
  latitude: string;
}

export interface ProjectBasicInfoType {
  id: number;
  title: string;
  likeCount: number;
  projectStartDate: string;
  projectEndDate: string;
  recruits: number;
  totalRecruits: number;
  facilityAddress: FacilityAddressType;
}

/** 프로젝트 정보 */
export interface ProjectItemType {
  projectPartInformation: ProjectBasicInfoType;
  projectCategory: CategoryType;
  thumbnailFileRes: {
    projectFileUrl: string;
    projectFileType: string;
  } | null;
}
