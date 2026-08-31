export interface AdvocateProfile {
  name: string;
  hindiName: string;
  alias: string;
  title: string;
  court: string;
  motto: string;
  mottoTranslation: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  chamber: {
    number: string;
    building: string;
    court: string;
    city: string;
    state: string;
    pincode: string;
  };
  currentAddress: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
  };
  permanentAddress?: {
    line1: string;
    locality: string;
    district: string;
    state: string;
    pincode: string;
  };
}

export interface AssociatedAdvocate {
  id: string;
  hindiName: string;
  englishName: string;
  alias?: string;
  title: string;
  court: string;
  phone: string;
  role: string;
}

export interface PracticeArea {
  id: string;
  slug: string;
  number: string;
  title: string;
  hindiTitle: string;
  shortDescription: string;
  detailedOverview: string;
  commonMatters: string[];
  consultationApproach: string[];
  documentsToBring: string[];
}

export type MatterStatus = 'Active' | 'Pending' | 'Hearing Scheduled' | 'Awaiting Documents' | 'Order Reserved' | 'Closed';
export type MatterPriority = 'Normal' | 'High' | 'Urgent';
export type CaseTimelineStage = 'Filed' | 'Notice' | 'Reply' | 'Hearing' | 'Order' | 'Closed';

export interface TimelineEvent {
  stage: CaseTimelineStage;
  date: string;
  title: string;
  description: string;
  completed: boolean;
  active?: boolean;
}

export interface Matter {
  id: string;
  title: string;
  matterNumber: string;
  court: string;
  bench?: string;
  matterType: string;
  category: string;
  filingDate: string;
  nextHearingDate?: string;
  status: MatterStatus;
  priority: MatterPriority;
  isPublic: boolean; // Publish to Website flag
  isDemoData: boolean; // Flag to indicate demo status
  clientName: string; // Hidden or anonymized on public site
  summary: string;
  publicDescription: string;
  timeline: TimelineEvent[];
  documentsCount: number;
  hearingsCount: number;
}

export interface LegalInsight {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  hindiQuestion?: string;
  answer: string;
  category: 'Consultation' | 'Chamber' | 'Process' | 'Documents';
}

export interface ConsultationFormData {
  fullName: string;
  mobile: string;
  email: string;
  matterType: string;
  description: string;
  preferredTime: string;
  language: 'hi' | 'en';
}

export interface ConsultationLead {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  matterType: string;
  description: string;
  preferredTime: string;
  date: string;
  status: 'New' | 'Contacted' | 'Scheduled' | 'Converted' | 'Closed';
  notes?: string;
  isDemoData: boolean;
}

export interface CalendarEvent {
  id: string;
  title: string;
  eventType: 'Court Hearing' | 'Consultation' | 'Chamber Meeting' | 'Unavailable';
  date: string;
  startTime: string;
  endTime: string;
  courtRoom?: string;
  location: string;
  matterId?: string;
  clientName?: string;
  status: 'Confirmed' | 'Tentative' | 'Completed' | 'Urgent';
  availability: 'Court' | 'Consultation' | 'Busy' | 'Available' | 'Unavailable';
  isDemoData: boolean;
}

export interface LegalDocument {
  id: string;
  name: string;
  category: 'Petitions' | 'Affidavits' | 'Orders' | 'Judgments' | 'Evidence' | 'Other';
  matterId: string;
  matterTitle: string;
  clientName: string;
  fileSize: string;
  uploadedAt: string;
  fileType: string;
  isDemoData: boolean;
}

export interface ClientRecord {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  status: 'Active' | 'Former' | 'Prospective';
  activeMattersCount: number;
  lastActivity: string;
  isDemoData: boolean;
}
