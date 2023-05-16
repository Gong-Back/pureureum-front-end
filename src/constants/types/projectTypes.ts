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
    Step3InputType {
  // category: CategoryType;
  // locationInfo: {
  //  name: string;
  //  address: string;
  //  latitude: number;
  //  longitude: number;
  // };
}

export interface ProjectItemType {
  projectId: number;
  type: CategoryType;
  thumbnail: string;
  title: string;
  introduction: string;
  onwerName: string;
  currentRecruit: number;
  totalRecruit: number;
  location: string;
  startDate: string;
  endDate: string;
}
