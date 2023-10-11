import { CategoryType } from '@/constants/types';

export type FacilityReqParams = {
  register: {
    category: CategoryType;
    name: string;
    city: string;
    county: string;
    district: string;
    jibun: string;
    detail: string;
    longitude?: string;
    latitude?: string;
    certificationDoc?: File;
  };
};

export type FacilityResponses = {
  searchByCategory: {
    id: number;
    category: CategoryType;
    name: string;
    city: string;
    county: string;
    district: string;
    jibun: string;
    detail: string;
    longitude: string;
    latitude: string;
  };
  searchAll: {
    id: number;
    category: CategoryType;
    name: string;
    city: string;
    county: string;
    district: string;
    jibun: string;
    detail: string;
    longitude: string;
    latitude: string;
    progress: string;
  }[];
};

export interface CoordinateType {
  latitude: string;
  longitude: string;
}

export interface AddressType {
  city: string;
  county: string;
  district: string;
  jibun: string;
  detail: string;
}

export interface FacilityFormType {
  address: AddressType;
  coordinate: CoordinateType;
  category: CategoryType;
  name: string;
  certificationDoc: File | undefined;
}
