import { PRIMARY_ADVOCATE } from '../data/advocate';

/**
 * Generates and downloads a .vcf (vCard 3.0) file for Advocate Ashutosh Pandey
 */
export function downloadVCard(): void {
  const adv = PRIMARY_ADVOCATE;

  const vCardContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:Pandey;Ashutosh;;;`,
    `FN:${adv.name} (Jayesh)`,
    `ORG:${adv.title}, ${adv.court}`,
    `TITLE:${adv.title}, High Court Allahabad`,
    `TEL;TYPE=CELL,VOICE:${adv.phone}`,
    `TEL;TYPE=WHATSAPP:${adv.phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${adv.email}`,
    `ADR;TYPE=WORK:;;${adv.chamber.number}, ${adv.chamber.building};High Court;Allahabad;Uttar Pradesh;211001;India`,
    `NOTE;CHARSET=UTF-8:Motto: ${adv.motto} (${adv.mottoTranslation}). Chamber: ${adv.chamber.number}, ${adv.chamber.building}, High Court Allahabad.`,
    'URL:https://ashutoshpandey-advocate.in',
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Ashutosh_Pandey_Advocate_High_Court.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
