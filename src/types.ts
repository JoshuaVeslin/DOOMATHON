export type QcoStatus = 'MANDATORY' | 'VOLUNTARY' | 'NEEDS CONFIRMATION';

export interface ProductProfile {
  productName: string;
  material: string;
  application: string;
  category: string;
  capacityOrRating: string;
  regulatoryRegime: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical (Safety Mandatory)';
  rawInput: string;
}

export interface ClarificationOption {
  id: string;
  label: string;
  subtext: string;
  attributeChanges: Partial<ProductProfile>;
  candidateBoostId?: string;
}

export interface ClarificationQuestion {
  id: string;
  question: string;
  context: string;
  whyWeAsk: string;
  options: ClarificationOption[];
}

export interface EvidenceClause {
  clauseNumber: string;
  clauseTitle: string;
  exactText: string;
  requirementType: 'Safety Critical' | 'Performance' | 'Marking & Traceability' | 'Material Composition';
}

export interface StandardCandidate {
  id: string;
  isNumber: string;
  title: string;
  shortTitle: string;
  matchSignal: number; // e.g. 96
  relevanceTag: string;
  scope: string;
  revision: string;
  gazetteNotification: string;
  gazetteDate: string;
  ministry: string;
  qcoStatus: QcoStatus;
  qcoEnforcementDate: string;
  scheme: 'Scheme I (ISI Mark)' | 'Scheme II (CRS Registration)' | 'Scheme IV (ECO Mark)' | 'FMCS';
  whyMatches: string[];
  keySafetyInvariants: string[];
  evidenceClauses: EvidenceClause[];
  officialSourceUrl?: string;
}

export interface RequiredTest {
  id: string;
  testName: string;
  standardClause: string;
  requirement: string;
  threshold: string;
  testMethod: string;
  criticality: 'Mandatory Pass/Fail' | 'Performance Benchmark' | 'Durability Cycle';
}

export interface AccreditedLaboratory {
  id: string;
  name: string;
  location: string;
  state: string;
  type: 'BIS Central Lab' | 'NABL Accredited' | 'Regional Testing Centre (RTC)' | 'National Test House (NTH)';
  recognizedScope: string[];
  sampleTurnaroundDays: number;
  contactEmail: string;
  address: string;
}

export interface ChecklistItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  estimatedTime: string;
  requiredDocuments: string[];
  completed: boolean;
  notes?: string;
}

export interface ProductPreset {
  id: string;
  label: string;
  sublabel: string;
  description: string;
  defaultProfile: ProductProfile;
  clarification: ClarificationQuestion;
  primaryStandardId: string;
  candidateStandards: StandardCandidate[];
  requiredTests: RequiredTest[];
  accreditedLabs: AccreditedLaboratory[];
  checklist: ChecklistItem[];
}
