
import React from 'react';
import { Sample, SampleStatus, SampleType, User, TestParameter } from './types';
import { Activity, ClipboardList, CheckCircle2, AlertCircle, UserPlus } from 'lucide-react';

export const LAB_INFO = {
  name: "SAI RITVIKA DIAGNOSTIC CENTRE",
  address: "CHALAMAIAH STREET, YPPM SCHOOL GROUND, ALLAGADDA - 518543",
  contact: "+91 9533550105",
  email: "info@sairitvikalabs.com",
  regNo: "NABL-REG-AP-KRN-2024-089",
  subHeader: "Clinical Pathology | Microbiology | Biochemistry",
  timings: "24 HOURS"
};

export const MOCK_USER: User = {
  id: 'LT-BALARAJU',
  name: 'S. BALARAJU',
  role: 'LAB_TECHNICIAN',
  department: 'Hematology & Clinical Pathology',
  shift: '24 HOURS'
};

export type TestCategory = 'PATHOLOGY' | 'BIOCHEMISTRY' | 'MICROBIOLOGY' | 'SEROLOGY' | 'CLINICAL_PATHOLOGY';

export interface LabTest {
  id: string;
  name: string;
  category: TestCategory;
  parameters: TestParameter[];
}

export const AVAILABLE_TESTS: LabTest[] = [
  // --- HEMATOLOGY / PATHOLOGY ---
  {
    id: 'CBC',
    name: 'Complete Blood Count (CBC)',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'hb', name: 'Hemoglobin (Hb)', category: 'CBC', value: '', unit: 'g/dL', minRange: 13.0, maxRange: 17.0, isAbnormal: false },
      { id: 'wbc', name: 'Total WBC Count', category: 'CBC', value: '', unit: '/µL', minRange: 4000, maxRange: 11000, isAbnormal: false },
      { id: 'rbc', name: 'RBC Count', category: 'CBC', value: '', unit: 'million/µL', minRange: 4.5, maxRange: 5.9, isAbnormal: false },
      { id: 'pcv', name: 'PCV (Hematocrit)', category: 'CBC', value: '', unit: '%', minRange: 40, maxRange: 54, isAbnormal: false },
      { id: 'plt', name: 'Platelet Count', category: 'CBC', value: '', unit: 'Lakhs/µL', minRange: 1.5, maxRange: 4.5, isAbnormal: false },
      { id: 'mcv', name: 'MCV', category: 'CBC', value: '', unit: 'fL', minRange: 80, maxRange: 100, isAbnormal: false, isAutoCalc: true },
      { id: 'mch', name: 'MCH', category: 'CBC', value: '', unit: 'pg', minRange: 27, maxRange: 32, isAbnormal: false, isAutoCalc: true },
      { id: 'mchc', name: 'MCHC', category: 'CBC', value: '', unit: 'g/dL', minRange: 32, maxRange: 36, isAbnormal: false, isAutoCalc: true }
    ]
  },
  {
    id: 'HB_ONLY',
    name: 'Hemoglobin (Hb) Test',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'hb_val', name: 'Hemoglobin (Hb)', category: 'Hematology', value: '', unit: 'g/dL', minRange: 13.0, maxRange: 17.0, isAbnormal: false }
    ]
  },
  {
    id: 'BLOOD_GROUP',
    name: 'Blood Grouping (ABO & Rh Typing)',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'abo', name: 'ABO Blood Group', category: 'Blood Bank', value: '', unit: 'Type', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'rh', name: 'Rh (D) Factor', category: 'Blood Bank', value: 'Positive', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false }
    ]
  },
  {
    id: 'AEC',
    name: 'Absolute Eosinophil Count (AEC)',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'aec_val', name: 'Absolute Eosinophil Count', category: 'Hematology', value: '', unit: 'cells/µL', minRange: 40, maxRange: 400, isAbnormal: false }
    ]
  },
  {
    id: 'ESR',
    name: 'ESR (Westergren Method)',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'esr_val', name: 'ESR (1st Hour)', category: 'Hematology', value: '', unit: 'mm/hr', minRange: 0, maxRange: 15, isAbnormal: false }
    ]
  },
  {
    id: 'PLATELET_ONLY',
    name: 'Platelet Count Only',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'plt_val', name: 'Platelet Count', category: 'Hematology', value: '', unit: 'Lakhs/µL', minRange: 1.5, maxRange: 4.5, isAbnormal: false }
    ]
  },
  {
    id: 'PT_INR',
    name: 'PT / INR',
    category: 'PATHOLOGY',
    parameters: [
      { id: 'pt_sec', name: 'Prothrombin Time', category: 'Coagulation', value: '', unit: 'sec', minRange: 11, maxRange: 15, isAbnormal: false },
      { id: 'inr_val', name: 'INR', category: 'Coagulation', value: '', unit: 'ratio', minRange: 0.8, maxRange: 1.2, isAbnormal: false }
    ]
  },

  // --- BIOCHEMISTRY ---
  {
    id: 'LFT',
    name: 'Liver Function Test (LFT)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'tbil', name: 'Total Bilirubin', category: 'LFT', value: '', unit: 'mg/dL', minRange: 0.3, maxRange: 1.2, isAbnormal: false },
      { id: 'dbil', name: 'Direct Bilirubin', category: 'LFT', value: '', unit: 'mg/dL', minRange: 0.0, maxRange: 0.3, isAbnormal: false },
      { id: 'ibil', name: 'Indirect Bilirubin', category: 'LFT', value: '', unit: 'mg/dL', minRange: 0.2, maxRange: 0.9, isAbnormal: false, isAutoCalc: true },
      { id: 'sgot', name: 'SGOT (AST)', category: 'LFT', value: '', unit: 'U/L', minRange: 5, maxRange: 40, isAbnormal: false },
      { id: 'sgpt', name: 'SGPT (ALT)', category: 'LFT', value: '', unit: 'U/L', minRange: 5, maxRange: 41, isAbnormal: false },
      { id: 'alp', name: 'Alkaline Phosphatase', category: 'LFT', value: '', unit: 'U/L', minRange: 44, maxRange: 147, isAbnormal: false },
      { id: 'tprot', name: 'Total Protein', category: 'LFT', value: '', unit: 'g/dL', minRange: 6.0, maxRange: 8.3, isAbnormal: false },
      { id: 'alb', name: 'Serum Albumin', category: 'LFT', value: '', unit: 'g/dL', minRange: 3.5, maxRange: 5.5, isAbnormal: false }
    ]
  },
  {
    id: 'KFT',
    name: 'Kidney Function Test (KFT)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'urea', name: 'Blood Urea', category: 'KFT', value: '', unit: 'mg/dL', minRange: 15, maxRange: 40, isAbnormal: false },
      { id: 'crea', name: 'Serum Creatinine', category: 'KFT', value: '', unit: 'mg/dL', minRange: 0.6, maxRange: 1.3, isAbnormal: false },
      { id: 'uric', name: 'Uric Acid', category: 'KFT', value: '', unit: 'mg/dL', minRange: 3.4, maxRange: 7.0, isAbnormal: false },
      { id: 'bun', name: 'BUN', category: 'KFT', value: '', unit: 'mg/dL', minRange: 7, maxRange: 20, isAbnormal: false, isAutoCalc: true }
    ]
  },
  {
    id: 'LIPID',
    name: 'Lipid Profile',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'tchol', name: 'Total Cholesterol', category: 'Lipid', value: '', unit: 'mg/dL', minRange: 100, maxRange: 200, isAbnormal: false },
      { id: 'trig', name: 'Triglycerides', category: 'Lipid', value: '', unit: 'mg/dL', minRange: 25, maxRange: 150, isAbnormal: false },
      { id: 'hdl', name: 'HDL Cholesterol', category: 'Lipid', value: '', unit: 'mg/dL', minRange: 40, maxRange: 60, isAbnormal: false },
      { id: 'ldl', name: 'LDL Cholesterol', category: 'Lipid', value: '', unit: 'mg/dL', minRange: 0, maxRange: 100, isAbnormal: false, isAutoCalc: true }
    ]
  },
  {
    id: 'SUGAR_PROFILE',
    name: 'Blood Sugar Profile (FBS/PPBS/RBS)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'fbs', name: 'FBS (Fasting Blood Sugar)', category: 'Sugar', value: '', unit: 'mg/dL', minRange: 70, maxRange: 99, isAbnormal: false },
      { id: 'ppbs', name: 'PPBS (Post-Prandial Blood Sugar)', category: 'Sugar', value: '', unit: 'mg/dL', minRange: 0, maxRange: 140, isAbnormal: false },
      { id: 'rbs', name: 'RBS (Random Blood Sugar)', category: 'Sugar', value: '', unit: 'mg/dL', minRange: 0, maxRange: 200, isAbnormal: false }
    ]
  },
  {
    id: 'RBS_STANDALONE',
    name: 'Random Blood Sugar (RBS)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { 
        id: 'rbs_god_pod', 
        name: 'Random Blood Sugar (GOD–POD)', 
        category: 'Sugar', 
        value: '', 
        unit: 'mg/dL', 
        minRange: 70, 
        maxRange: 140, 
        isAbnormal: false 
      }
    ]
  },
  {
    id: 'HBA1C',
    name: 'HbA1c (Glycosylated Hemoglobin)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'hba1c_val', name: 'HbA1c', category: 'Sugar', value: '', unit: '%', minRange: 4.0, maxRange: 5.7, isAbnormal: false }
    ]
  },
  {
    id: 'THYROID_PROFILE',
    name: 'Thyroid Profile (T3/T4/TSH)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 't3', name: 'T3 (Triiodothyronine)', category: 'Thyroid', value: '', unit: 'ng/dL', minRange: 80, maxRange: 200, isAbnormal: false },
      { id: 't4', name: 'T4 (Thyroxine)', category: 'Thyroid', value: '', unit: 'µg/dL', minRange: 5, maxRange: 12, isAbnormal: false },
      { id: 'tsh', name: 'Serum TSH', category: 'Thyroid', value: '', unit: 'µIU/mL', minRange: 0.4, maxRange: 4.0, isAbnormal: false }
    ]
  },
  {
    id: 'ELECTROLYTES',
    name: 'Serum Electrolytes',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'sodium', name: 'Sodium (Na+)', category: 'Electrolytes', value: '', unit: 'mmol/L', minRange: 135, maxRange: 145, isAbnormal: false },
      { id: 'potassium', name: 'Potassium (K+)', category: 'Electrolytes', value: '', unit: 'mmol/L', minRange: 3.5, maxRange: 5.1, isAbnormal: false },
      { id: 'chloride', name: 'Chloride (Cl-)', category: 'Electrolytes', value: '', unit: 'mmol/L', minRange: 98, maxRange: 107, isAbnormal: false }
    ]
  },
  {
    id: 'VITAMINS',
    name: 'Vitamin B12 & D3',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'vit_b12', name: 'Vitamin B12', category: 'Vitamins', value: '', unit: 'pg/mL', minRange: 200, maxRange: 900, isAbnormal: false },
      { id: 'vit_d', name: 'Vitamin D (25-OH)', category: 'Vitamins', value: '', unit: 'ng/mL', minRange: 30, maxRange: 100, isAbnormal: false }
    ]
  },
  {
    id: 'FOLIC_ACID',
    name: 'Serum Folic Acid',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'folic_val', name: 'Folic Acid', category: 'Vitamins', value: '', unit: 'ng/mL', minRange: 2.7, maxRange: 17.0, isAbnormal: false }
    ]
  },
  {
    id: 'CRP',
    name: 'CRP (Quantitative)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'crp_val', name: 'C-Reactive Protein', category: 'Immunology', value: '', unit: 'mg/L', minRange: 0, maxRange: 6, isAbnormal: false }
    ]
  },
  {
    id: 'TROP_I',
    name: 'Troponin-I (Quantitative)',
    category: 'BIOCHEMISTRY',
    parameters: [
      { id: 'tropi_val', name: 'Troponin-I', category: 'Cardiac', value: '', unit: 'ng/mL', minRange: 0, maxRange: 0.04, isAbnormal: false }
    ]
  },

  // --- MICROBIOLOGY ---
  {
    id: 'MALARIA',
    name: 'Malaria Parasite (MP/Antigen)',
    category: 'MICROBIOLOGY',
    parameters: [
      { id: 'mp_result', name: 'Malaria Parasite', category: 'Parasitology', value: '', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'mp_antigen', name: 'Malaria Antigen (Pf/Pv)', category: 'Parasitology', value: '', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false }
    ]
  },
  {
    id: 'SPUTUM_AFB',
    name: 'Sputum for AFB',
    category: 'MICROBIOLOGY',
    parameters: [
      { id: 'afb_result', name: 'Acid Fast Bacilli', category: 'Bacteriology', value: '', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false }
    ]
  },

  // --- SEROLOGY ---
  {
    id: 'DENGUE_PROFILE',
    name: 'Dengue Profile (NS1/IgM/IgG)',
    category: 'SEROLOGY',
    parameters: [
      { id: 'ns1', name: 'NS1 Antigen', category: 'Serology', value: '', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'igm', name: 'IgM Antibody', category: 'Serology', value: '', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'igg', name: 'IgG Antibody', category: 'Serology', value: '', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false }
    ]
  },
  {
    id: 'WIDAL',
    name: 'Widal Test',
    category: 'SEROLOGY',
    parameters: [
      { id: 'to', name: 'Salmonella Typhi "O"', category: 'Widal', value: '', unit: 'titer', minRange: 0, maxRange: 80, isAbnormal: false },
      { id: 'th', name: 'Salmonella Typhi "H"', category: 'Widal', value: '', unit: 'titer', minRange: 0, maxRange: 80, isAbnormal: false }
    ]
  },
  {
    id: 'VIRAL_SEROLOGY',
    name: 'Viral Serology Panel',
    category: 'SEROLOGY',
    parameters: [
      { id: 'hiv_val', name: 'HIV I & II (Antibody)', category: 'Serology', value: 'Non-reactive', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'hbsag_val', name: 'HBsAg (Aust. Antigen)', category: 'Serology', value: 'Non-reactive', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'hcv_val', name: 'Anti-HCV Antibody', category: 'Serology', value: 'Non-reactive', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'vdrl_val', name: 'VDRL / RPR', category: 'Serology', value: 'Non-reactive', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false }
    ]
  },

  // --- CLINICAL PATHOLOGY ---
  {
    id: 'URINE_ROUTINE',
    name: 'Urine Routine Examination',
    category: 'CLINICAL_PATHOLOGY',
    parameters: [
      { id: 'u_sugar', name: 'Urine Sugar', category: 'Chemistry', value: 'Nil', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'u_prot', name: 'Urine Protein', category: 'Chemistry', value: 'Nil', unit: 'Result', minRange: 0, maxRange: 0, isAbnormal: false },
      { id: 'u_pus', name: 'Pus Cells', category: 'Microscopy', value: '0-2', unit: '/HPF', minRange: 0, maxRange: 5, isAbnormal: false }
    ]
  }
];

export const INITIAL_SAMPLES: Sample[] = [
  {
    id: 'cbc-001',
    barcode: 'SRD-00125',
    uhid: 'UHID-2026-001',
    patientName: 'Ramesh Kumar',
    patientAge: '35',
    patientSex: 'Male',
    mobileNumber: '9876543210',
    patientCategory: 'OP Section',
    referringDoctor: 'Self / Walk-in',
    sampleCollectionMethod: 'Venous Blood',
    collectionDateTime: '06-01-2026 08:30 AM',
    reportingDateTime: '06-01-2026 05:00 PM',
    technicianId: 'LT-BALARAJU',
    technicianName: 'S. BALARAJU',
    testName: 'Complete Blood Count (CBC)',
    sampleType: SampleType.BLOOD,
    status: SampleStatus.APPROVED,
    date: '2026-01-06',
    parameters: [
      { id: 'hb', name: 'Hemoglobin (Hb)', category: 'CBC', value: '14.2', unit: 'g/dL', minRange: 13.0, maxRange: 17.0, isAbnormal: false },
      { id: 'wbc', name: 'Total WBC Count', category: 'CBC', value: '7200', unit: '/µL', minRange: 4000, maxRange: 11000, isAbnormal: false },
      { id: 'plt', name: 'Platelet Count', category: 'CBC', value: '2.5', unit: 'Lakhs/µL', minRange: 1.5, maxRange: 4.5, isAbnormal: false },
    ]
  }
];

export const NAV_ITEMS = [
  { id: 'DASHBOARD', label: 'Dashboard', icon: <Activity className="w-6 h-6" /> },
  { id: 'NEW_SAMPLE', label: 'New Registration', icon: <UserPlus className="w-6 h-6" /> },
  { id: 'SAMPLE_LIST', label: 'Samples', icon: <ClipboardList className="w-6 h-6" /> },
  { id: 'REPORTS', label: 'Reports', icon: <CheckCircle2 className="w-6 h-6" /> },
  { id: 'PROFILE', label: 'Profile', icon: <AlertCircle className="w-6 h-6" /> },
];
