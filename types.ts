
export enum SampleStatus {
  PENDING = 'Pending',
  IN_PROCESS = 'In Process',
  COMPLETED = 'Completed',
  AWAITING_APPROVAL = 'Awaiting Approval',
  APPROVED = 'Approved',
  REJECTED = 'Rejected'
}

export enum SampleType {
  BLOOD = 'Blood',
  URINE = 'Urine',
  STOOL = 'Stool',
  SWAB = 'Swab',
  OTHER = 'Other'
}

export type PatientCategory = 'OP Section' | 'IP Section' | 'Home Collection' | 'Emergency';

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: 'REGISTRATION' | 'RESULT_ENTRY' | 'SUBMISSION' | 'APPROVAL' | 'CRITICAL_ALERT';
  message: string;
  technicianId: string;
}

export interface TestParameter {
  id: string;
  name: string;
  value: string;
  unit: string;
  minRange: number;
  maxRange: number;
  isAbnormal: boolean;
  isAutoCalc?: boolean;
  category?: string;
}

export interface Sample {
  id: string;
  barcode: string;
  uhid: string;
  patientName: string;
  patientAge: string;
  patientSex: 'Male' | 'Female' | 'Other';
  mobileNumber: string;
  patientCategory: PatientCategory;
  referringDoctor: string;
  sampleCollectionMethod: string;
  collectionDateTime: string;
  reportingDateTime: string;
  testName: string;
  sampleType: SampleType;
  status: SampleStatus;
  date: string;
  parameters: TestParameter[];
  technicianId: string;
  technicianName: string;
  isHighPriority?: boolean;
  isCritical?: boolean;
}

export interface User {
  id: string;
  name: string;
  role: 'LAB_TECHNICIAN';
  department: string;
  shift: string;
}

export type Screen = 'LOGIN' | 'DASHBOARD' | 'SAMPLE_LIST' | 'TEST_ENTRY' | 'REPORTS' | 'PROFILE' | 'NEW_SAMPLE';
