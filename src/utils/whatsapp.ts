import { ConsultationFormData } from '../types';
import { PRIMARY_ADVOCATE } from '../data/advocate';

/**
 * Builds the exact Hindi / English consultation message for WhatsApp
 */
export function buildWhatsAppMessage(formData: Partial<ConsultationFormData>): string {
  const name = formData.fullName?.trim() || '[Name]';
  const matterType = formData.matterType?.trim() || '[Case Type]';
  const description = formData.description?.trim() || '[Description]';
  const preferredTime = formData.preferredTime ? `\nपसंदीदा समय: ${formData.preferredTime}` : '';

  if (formData.language === 'en') {
    return `Respected Advocate Ashutosh Pandey,\n\nMy name is ${name}. I am seeking a legal consultation regarding a matter related to ${matterType}.\n\nBrief Summary of Matter:\n${description}${preferredTime}\n\nKindly advise on the next steps for consultation.\n\nThank you.\n(${formData.mobile || ''})`;
  }

  // Exact Hindi template as specified
  return `नमस्कार अधिवक्ता महोदय,

मेरा नाम ${name} है। मुझे ${matterType} से संबंधित कानूनी मामले में consultation की आवश्यकता है।

मेरे मामले का संक्षिप्त विवरण:
${description}${preferredTime}

कृपया मुझे आगे की consultation प्रक्रिया के बारे में बताएं।

धन्यवाद।`;
}

/**
 * Generates direct WhatsApp deep link with URL-encoded text payload
 */
export function getWhatsAppUrl(formData: Partial<ConsultationFormData>): string {
  const message = buildWhatsAppMessage(formData);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PRIMARY_ADVOCATE.whatsappNumber}?text=${encoded}`;
}

/**
 * Direct link for quick inquiry without form
 */
export function getDirectWhatsAppUrl(customText?: string): string {
  const defaultText = `नमस्कार अधिवक्ता महोदय, मुझे इलाहाबाद उच्च न्यायालय (High Court Allahabad) में कानूनी मामले के संबंध में consultation की आवश्यकता है।`;
  const text = customText || defaultText;
  return `https://wa.me/${PRIMARY_ADVOCATE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
