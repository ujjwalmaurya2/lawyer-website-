import { Matter } from '../types';

export const DEMO_MATTERS: Matter[] = [
  {
    id: "matter-001",
    title: "Writ Petition (Civil) — Municipal Development & Tender Notice Challenge",
    matterNumber: "WRIT-C / 14829 / 2024",
    court: "High Court of Judicature at Allahabad",
    bench: "Court No. 34 (Division Bench)",
    matterType: "Constitutional & Writ Matters",
    category: "Writ Petition (Civil)",
    filingDate: "2024-03-12",
    nextHearingDate: "2024-09-18",
    status: "Hearing Scheduled",
    priority: "High",
    isPublic: true,
    isDemoData: true,
    clientName: "Infrastructure Enterprise (Name Withheld - Demo)",
    summary: "Challenge against arbitrary disqualification in a public procurement tender in violation of natural justice and Article 14.",
    publicDescription: "Constitutional challenge before Division Bench challenging arbitrary cancellation of bidding eligibility under municipal development norms. Interim protection sought against re-tendering.",
    documentsCount: 6,
    hearingsCount: 4,
    timeline: [
      {
        stage: "Filed",
        date: "12 Mar 2024",
        title: "Petition Drafted & E-Filed",
        description: "Writ petition along with stay application filed before Registry.",
        completed: true
      },
      {
        stage: "Notice",
        date: "22 Mar 2024",
        title: "Notice Issued & State Reply Sought",
        description: "Division Bench issued notice to respondents; directed standing counsel to seek instructions.",
        completed: true
      },
      {
        stage: "Reply",
        date: "15 May 2024",
        title: "Counter Affidavit & Rejoinder Filed",
        description: "Respondent authority filed Counter Affidavit; detailed Rejoinder Affidavit submitted on behalf of petitioner.",
        completed: true
      },
      {
        stage: "Hearing",
        date: "18 Sep 2024",
        title: "Final Hearing on Arguments",
        description: "Listed for final disposal before Hon'ble Division Bench.",
        completed: false,
        active: true
      },
      {
        stage: "Order",
        date: "Pending",
        title: "Judicial Pronouncement",
        description: "Awaiting final determination.",
        completed: false
      },
      {
        stage: "Closed",
        date: "Pending",
        title: "Matter Disposal",
        description: "Final formal closure of matter.",
        completed: false
      }
    ]
  },
  {
    id: "matter-002",
    title: "Criminal Misc. Bail Application — Commercial Discrepancy & Statutory Bail",
    matterNumber: "BAIL / 8931 / 2024",
    court: "High Court of Judicature at Allahabad",
    bench: "Court No. 48 (Single Judge)",
    matterType: "Criminal Law & Bail Matters",
    category: "Bail Application",
    filingDate: "2024-05-04",
    nextHearingDate: "2024-09-24",
    status: "Active",
    priority: "Urgent",
    isPublic: true,
    isDemoData: true,
    clientName: "Private Individual (Confidential - Demo)",
    summary: "Bail petition under Section 439 CrPC / BNSS emphasizing absence of direct involvement and prolonged custody.",
    publicDescription: "Regular bail application before the High Court highlighting lack of corroborative evidentiary trail and compliance with statutory parameters.",
    documentsCount: 8,
    hearingsCount: 3,
    timeline: [
      {
        stage: "Filed",
        date: "04 May 2024",
        title: "Bail Application Lodged",
        description: "Filed after rejection by Sessions Court.",
        completed: true
      },
      {
        stage: "Notice",
        date: "18 May 2024",
        title: "State Notice Served",
        description: "Notice served on Government Advocate; Case Diary summoned from Investigating Officer.",
        completed: true
      },
      {
        stage: "Reply",
        date: "10 Jul 2024",
        title: "Case Diary & Counter Filed",
        description: "State filed objections; additional factual affidavit submitted by applicant.",
        completed: true
      },
      {
        stage: "Hearing",
        date: "24 Sep 2024",
        title: "Bail Arguments Listed",
        description: "Listed for substantive arguments before Single Bench.",
        completed: false,
        active: true
      },
      {
        stage: "Order",
        date: "Pending",
        title: "Order on Bail",
        description: "Awaiting order.",
        completed: false
      },
      {
        stage: "Closed",
        date: "Pending",
        title: "Matter Concluded",
        description: "Formal closure upon order compliance.",
        completed: false
      }
    ]
  },
  {
    id: "matter-003",
    title: "Service Single Writ — Seniority Fixation & Retiral Dues Claim",
    matterNumber: "WRIT-A / 23104 / 2023",
    court: "High Court of Judicature at Allahabad",
    bench: "Court No. 19 (Service Bench)",
    matterType: "Service & Administrative Matters",
    category: "Service Writ",
    filingDate: "2023-11-20",
    nextHearingDate: "2024-10-08",
    status: "Pending",
    priority: "Normal",
    isPublic: true,
    isDemoData: true,
    clientName: "Retired State Employee (Demo)",
    summary: "Writ challenging incorrect seniority calculation impacting promotional pay scales and terminal pension calculations.",
    publicDescription: "Service writ petition before the High Court seeking recalculation of continuous service tenure for pensionary benefits under Uttar Pradesh Civil Services Regulations.",
    documentsCount: 5,
    hearingsCount: 5,
    timeline: [
      {
        stage: "Filed",
        date: "20 Nov 2023",
        title: "Service Writ Registered",
        description: "Filed challenging departmental recovery and seniority fixation.",
        completed: true
      },
      {
        stage: "Notice",
        date: "05 Dec 2023",
        title: "Interim Stay on Recovery",
        description: "Court granted interim protection staying the recovery order.",
        completed: true
      },
      {
        stage: "Reply",
        date: "22 Feb 2024",
        title: "Counter from Directorate",
        description: "Department filed reply; Rejoinder placed on record.",
        completed: true
      },
      {
        stage: "Hearing",
        date: "08 Oct 2024",
        title: "Listed for Disposal",
        description: "Final hearing on legality of departmental GO.",
        completed: false,
        active: true
      },
      {
        stage: "Order",
        date: "Pending",
        title: "Judgment Awaited",
        description: "Pending adjudication.",
        completed: false
      },
      {
        stage: "Closed",
        date: "Pending",
        title: "Disposal",
        description: "To be concluded.",
        completed: false
      }
    ]
  },
  {
    id: "matter-004",
    title: "Second Appeal (Civil) — Substantial Question of Law on Partition Decree",
    matterNumber: "SA / 412 / 2023",
    court: "High Court of Judicature at Allahabad",
    bench: "Court No. 6 (Appellate Bench)",
    matterType: "Civil Litigation & Appeals",
    category: "Second Appeal",
    filingDate: "2023-04-15",
    status: "Order Reserved",
    priority: "High",
    isPublic: true,
    isDemoData: true,
    clientName: "Ancestral Title Co-sharers (Demo)",
    summary: "Second appeal under Section 100 CPC challenging erroneous construction of family settlement document by first appellate court.",
    publicDescription: "High Court appellate matter formulated on substantial legal questions concerning ancestral property division and admissibility of unprobated testamentary documents.",
    documentsCount: 9,
    hearingsCount: 7,
    timeline: [
      {
        stage: "Filed",
        date: "15 Apr 2023",
        title: "Second Appeal Filed",
        description: "Drafted with framed substantial questions of law.",
        completed: true
      },
      {
        stage: "Notice",
        date: "02 May 2023",
        title: "Admitted on Legal Grounds",
        description: "Appeal admitted and lower court record summoned.",
        completed: true
      },
      {
        stage: "Reply",
        date: "18 Aug 2023",
        title: "LCR Received & Inspected",
        description: "Both parties exchanged written synopsis of arguments.",
        completed: true
      },
      {
        stage: "Hearing",
        date: "12 Aug 2024",
        title: "Substantive Arguments Concluded",
        description: "Hearing concluded before Hon'ble Judge.",
        completed: true
      },
      {
        stage: "Order",
        date: "2024-09-02",
        title: "Judgment Reserved",
        description: "Judgment reserved for delivery.",
        completed: false,
        active: true
      },
      {
        stage: "Closed",
        date: "Pending",
        title: "Decree Preparation",
        description: "Pending final pronouncement.",
        completed: false
      }
    ]
  },
  {
    id: "matter-005",
    title: "Private Internal Matter — Sensitive Property Advisory & Mediation",
    matterNumber: "CHAMBER / PRIV-082 / 2024",
    court: "Chamber Advisory / Pre-Litigation",
    matterType: "Other Legal Matters & Advisory",
    category: "Pre-Litigation Advisory",
    filingDate: "2024-08-01",
    status: "Awaiting Documents",
    priority: "Normal",
    isPublic: false, // PRIVATE MATTER DEMO
    isDemoData: true,
    clientName: "Chamber Client (Private File)",
    summary: "Internal confidential advisory regarding family trust assets prior to initiating writ proceedings.",
    publicDescription: "Private internal matter (Not displayed on public website).",
    documentsCount: 3,
    hearingsCount: 0,
    timeline: [
      {
        stage: "Filed",
        date: "01 Aug 2024",
        title: "Consultation & Case Inception",
        description: "Initial chamber meeting held; primary documents reviewed.",
        completed: true,
        active: true
      },
      {
        stage: "Notice",
        date: "Pending",
        title: "Legal Notice Drafting",
        description: "Pending client verification of title chain.",
        completed: false
      },
      {
        stage: "Reply",
        date: "Pending",
        title: "Pre-Litigation Exchange",
        description: "Pending response from opposing party.",
        completed: false
      },
      {
        stage: "Hearing",
        date: "Pending",
        title: "Court Proceedings",
        description: "Not applicable at pre-litigation stage.",
        completed: false
      },
      {
        stage: "Order",
        date: "Pending",
        title: "Resolution",
        description: "Pending.",
        completed: false
      },
      {
        stage: "Closed",
        date: "Pending",
        title: "File Archive",
        description: "Pending.",
        completed: false
      }
    ]
  }
];
