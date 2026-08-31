import { AdvocateProfile, AssociatedAdvocate } from '../types';

export const PRIMARY_ADVOCATE: AdvocateProfile = {
  name: "Ashutosh Pandey",
  hindiName: "आशुतोष पाण्डेय (जयेश)",
  alias: "Jayesh",
  title: "Advocate",
  court: "High Court of Judicature at Allahabad",
  motto: "न्याय ममः धर्म",
  mottoTranslation: "Justice is My Duty & Faith",
  phone: "+91-8353989901",
  email: "asutos099@gmail.com",
  whatsappNumber: "918353989901",
  chamber: {
    number: "Chamber No. 62",
    building: "New Building",
    court: "High Court",
    city: "Allahabad (Prayagraj)",
    state: "Uttar Pradesh",
    pincode: "211001",
  },
  currentAddress: {
    line1: "A-II/92 Badri Awas Yojana",
    locality: "Teliyarganj",
    city: "Allahabad",
    state: "Uttar Pradesh",
    pincode: "211004",
  },
  permanentAddress: {
    line1: "Village & Post Dumraon",
    locality: "Near Panchayat Bhawan",
    district: "Mau",
    state: "Uttar Pradesh",
    pincode: "275101",
  }
};

export const ASSOCIATED_ADVOCATES: AssociatedAdvocate[] = [
  {
    id: "anand-prakash-pandey",
    hindiName: "आनन्द प्रकाश पाण्डेय",
    englishName: "Anand Prakash Pandey",
    title: "Advocate",
    court: "High Court of Judicature at Allahabad",
    phone: "+91-9415636415",
    role: "Associated Advocate, High Court Practice"
  },
  {
    id: "aditya-pandey",
    hindiName: "आदित्य पाण्डेय (गोलू)",
    englishName: "Aditya Pandey (Golu)",
    alias: "Golu",
    title: "Advocate",
    court: "High Court of Judicature at Allahabad",
    phone: "+91-8400424508",
    role: "Associated Advocate, High Court Practice"
  }
];

export const INSTITUTIONAL_INFO = {
  highCourtName: "High Court of Judicature at Allahabad",
  shortCourtName: "Allahabad High Court",
  benchCity: "Prayagraj (Allahabad)",
  chamberTag: "CHAMBER 62 · NEW BUILDING · ALLAHABAD",
  disclaimer: "Disclaimer: As per the Bar Council of India regulations, this website does not solicit work or advertise. The contents hereof are provided solely for general informational purposes upon specific request of the user and do not constitute legal advice."
};
