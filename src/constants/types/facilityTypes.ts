import { CategoryType } from '@/constants/types';

export interface AddFacilityInputType {
  category: CategoryType;
  name: string;
  city: string;
  county: string;
  district: string;
  detail: string;
  certificationDoc: File | null;
}

export interface SearchFacilityOutputType extends AddFacilityInputType {
  id: number;
}
