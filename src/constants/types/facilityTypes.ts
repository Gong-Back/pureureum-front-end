/** 주소 정보 Type */
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

export interface FacilityAddressType extends AddressType, CoordinateType {}