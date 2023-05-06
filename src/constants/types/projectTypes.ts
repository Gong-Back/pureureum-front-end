export type CategoryType =
  | 'YOUTH_FARMING'
  | 'FARMING_HEALING'
  | 'FARMING_EXPERIENCE'
  | 'ETC';

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

// TODO 'NONE'을 여기에 넣는게 맞나?
