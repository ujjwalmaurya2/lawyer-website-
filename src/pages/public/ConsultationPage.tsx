import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { ConsultationFormData } from '../../types';
import { PRIMARY_ADVOCATE } from '../../data/advocate';
import { buildWhatsAppMessage, getWhatsAppUrl } from '../../utils/whatsapp';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  User,
  Phone,
  Mail,
  Briefcase,
  FileText,
  Clock,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Lock,
  Copy,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export const ConsultationPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledType = searchParams.get('type') || '';

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    mobile: '',
    email: '',
    matterType: prefilledType || 'Constitutional & Writ Matters',
    description: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    language: 'hi',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const stepsMeta = [
    { num: 1, label: 'Full Name', icon: User },
    { num: 2, label: 'Mobile / WhatsApp', icon: Phone },
    { num: 3, label: 'Email', icon: Mail },
    { num: 4, label: 'Legal Matter', icon: Briefcase },
    { num: 5, label: 'Brief Description', icon: FileText },
    { num: 6, label: 'Preferred Time', icon: Clock },
  ];

  const matterTypes = [
    'Constitutional & Writ Matters',
    'Criminal Law & Bail Matters',
    'Service & Administrative Matters',
    'Civil Litigation & Appeals',
    'Family & Matrimonial Matters',
    'Other Legal Matters / Chamber Advisory',
  ];

  const preferredTimeSlots = [
    'Morning (10:00 AM - 01:00 PM)',
    'Afternoon (02:00 PM - 04:00 PM)',
    'Evening (04:30 PM - 07:00 PM)',
    'In-Person Chamber Visit (Chamber 62)',
  ];

  const updateField = (field: keyof ConsultationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    } else if (step === 2) {
      if (!formData.mobile.trim()) {
        errs.mobile = 'Please enter your mobile phone number.';
      } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobile.trim())) {
        errs.mobile = 'Please enter a valid phone number.';
      }
    } else if (step === 3) {
      if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    } else if (step === 4) {
      if (!formData.matterType) errs.matterType = 'Please select a case category.';
    } else if (step === 5) {
      if (!formData.description.trim()) {
        errs.description = 'Please provide a brief 1-2 sentence description of your matter.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 6) {
        setCurrentStep((prev) => prev + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitted(true);
    }
  };

  const handleLaunchWhatsApp = () => {
    const url = getWhatsAppUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const msg = buildWhatsAppMessage(formData);
    navigator.clipboard.writeText(msg);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-navy-950 text-ivory-50 min-h-screen relative overflow-hidden transition-colors">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy-900/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brass-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-brass-400 text-xs font-bold uppercase tracking-[0.25em] font-mono">
            <MessageSquare className="w-4 h-4" />
            <span>CONFIDENTIAL CASE INTAKE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ivory-50 font-normal leading-tight tracking-tight">
            Let’s discuss your matter.
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-serif text-brass-300/90 italic">
            Share the essentials of your matter and continue the conversation directly on WhatsApp.
          </p>
        </div>

        {/* Main Grid: Multi-Step Form on Left, Live WhatsApp Message Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Multi-Step Form Surface in Warm Ivory / White */}
          <div className="lg:col-span-7 bg-ivory-50 dark:bg-charcoal-900 text-charcoal-800 dark:text-ivory-100 rounded-2xl border border-brass-500/30 p-5 sm:p-8 md:p-10 shadow-2xl relative transition-colors">
            
            {/* Visual Icon Step Markers */}
            {!isSubmitted && (
              <div className="mb-8">
                {/* Horizontal Step Icons */}
                <div className="grid grid-cols-6 gap-2 mb-3">
                  {stepsMeta.map((s) => {
                    const StepIcon = s.icon;
                    const isPassed = currentStep > s.num;
                    const isCurrent = currentStep === s.num;

                    return (
                      <div key={s.num} className="flex flex-col items-center text-center">
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center border transition-all ${
                            isCurrent
                              ? 'bg-burgundy-800 text-ivory-50 border-burgundy-900 shadow-md ring-2 ring-brass-400/40'
                              : isPassed
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300'
                              : 'bg-white dark:bg-charcoal-800 text-stone-400 dark:text-stone-600 border-ivory-300 dark:border-stone-700'
                          }`}
                        >
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <span className="hidden sm:block text-[9px] font-mono mt-1 text-stone-500 truncate max-w-full">
                          0{s.num}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 mb-2">
                  <span className="uppercase tracking-wider font-mono text-burgundy-800 dark:text-brass-400 font-bold">
                    Step 0{currentStep} of 06 · {stepsMeta[currentStep - 1]?.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateField('language', formData.language === 'hi' ? 'en' : 'hi')}
                      className="px-2.5 py-0.5 rounded border border-ivory-300 dark:border-stone-700 text-[10px] uppercase font-mono text-stone-700 dark:text-stone-300 bg-white dark:bg-charcoal-850 hover:border-burgundy-800 transition-colors cursor-pointer font-bold"
                    >
                      Language: {formData.language === 'hi' ? 'हिंदी' : 'English'}
                    </button>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-ivory-200 dark:bg-charcoal-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-burgundy-800 dark:bg-brass-400 transition-all duration-300"
                    style={{ width: `${(currentStep / 6) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                
                {/* STEP 1: Full Name */}
                {currentStep === 1 && (
                  <div className="space-y-3 sm:space-y-4 animate-fade-in">
                    <div className="space-y-0.5">
                      <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        <User className="w-4 h-4" />
                        <span>01. What is your Full Name? *</span>
                      </label>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        आपका पूरा नाम (परामर्श हेतु)
                      </p>
                    </div>
                    <input
                      type="text"
                      autoFocus
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-sm sm:text-base focus:border-burgundy-800 focus:outline-none transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">{errors.fullName}</p>
                    )}
                  </div>
                )}

                {/* STEP 2: Mobile Number */}
                {currentStep === 2 && (
                  <div className="space-y-3 sm:space-y-4 animate-fade-in">
                    <div className="space-y-0.5">
                      <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        <Phone className="w-4 h-4" />
                        <span>02. What is your Mobile / WhatsApp Number? *</span>
                      </label>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        मोबाइल नंबर (जिस पर आपसे संपर्क किया जा सके)
                      </p>
                    </div>
                    <input
                      type="tel"
                      autoFocus
                      autoComplete="tel"
                      value={formData.mobile}
                      onChange={(e) => updateField('mobile', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-sm sm:text-base focus:border-burgundy-800 focus:outline-none font-mono transition-colors"
                    />
                    {errors.mobile && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">{errors.mobile}</p>
                    )}
                  </div>
                )}

                {/* STEP 3: Email Address */}
                {currentStep === 3 && (
                  <div className="space-y-3 sm:space-y-4 animate-fade-in">
                    <div className="space-y-0.5">
                      <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        <Mail className="w-4 h-4" />
                        <span>03. Email Address (Optional)</span>
                      </label>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        ईमेल पता (दस्तावेज़ प्रेषण हेतु)
                      </p>
                    </div>
                    <input
                      type="email"
                      autoFocus
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-sm sm:text-base focus:border-burgundy-800 focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                )}

                {/* STEP 4: Matter / Case Type */}
                {currentStep === 4 && (
                  <div className="space-y-3 sm:space-y-4 animate-fade-in">
                    <div className="space-y-0.5">
                      <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        <Briefcase className="w-4 h-4" />
                        <span>04. Select Legal Matter / Case Type *</span>
                      </label>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        कानूनी मामले की श्रेणी का चयन करें
                      </p>
                    </div>
                    <div className="space-y-2">
                      {matterTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateField('matterType', type)}
                          className={`w-full p-3 sm:p-3.5 rounded-lg text-left text-xs sm:text-sm font-sans flex items-center justify-between transition-all cursor-pointer ${
                            formData.matterType === type
                              ? 'bg-burgundy-800 text-ivory-50 font-semibold shadow-md'
                              : 'bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-burgundy-800'
                          }`}
                        >
                          <span>{type}</span>
                          {formData.matterType === type && (
                            <CheckCircle2 className="w-4 h-4 text-brass-300 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                    {errors.matterType && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">{errors.matterType}</p>
                    )}
                  </div>
                )}

                {/* STEP 5: Brief Description */}
                {currentStep === 5 && (
                  <div className="space-y-3 sm:space-y-4 animate-fade-in">
                    <div className="space-y-0.5">
                      <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        <FileText className="w-4 h-4" />
                        <span>05. Brief Description of Your Legal Matter *</span>
                      </label>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        मामले का संक्षिप्त विवरण (जैसे: FIR रद्दीकरण, जमानत, सेवा विवाद, अपील आदि)
                      </p>
                    </div>
                    <textarea
                      rows={4}
                      autoFocus
                      value={formData.description}
                      onChange={(e) => updateField('description', e.target.value)}
                      placeholder="e.g. High Court mein regular bail petition file karni hai sessions court rejection ke baad..."
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-charcoal-800 dark:text-ivory-100 text-sm focus:border-burgundy-800 focus:outline-none transition-colors"
                    />
                    {errors.description && (
                      <p className="text-xs text-rose-600 dark:text-rose-400 font-mono">{errors.description}</p>
                    )}
                  </div>
                )}

                {/* STEP 6: Preferred Contact Time */}
                {currentStep === 6 && (
                  <div className="space-y-3 sm:space-y-4 animate-fade-in">
                    <div className="space-y-0.5">
                      <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-burgundy-800 dark:text-brass-400 font-bold font-mono">
                        <Clock className="w-4 h-4" />
                        <span>06. Preferred Consultation Time Window</span>
                      </label>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                        परामर्श के लिए पसंदीदा समय
                      </p>
                    </div>
                    <div className="space-y-2">
                      {preferredTimeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => updateField('preferredTime', slot)}
                          className={`w-full p-3 sm:p-3.5 rounded-lg text-left text-xs sm:text-sm font-sans flex items-center justify-between transition-all cursor-pointer ${
                            formData.preferredTime === slot
                              ? 'bg-burgundy-800 text-ivory-50 font-semibold shadow-md'
                              : 'bg-white dark:bg-charcoal-850 border border-ivory-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-burgundy-800'
                          }`}
                        >
                          <span>{slot}</span>
                          {formData.preferredTime === slot && (
                            <CheckCircle2 className="w-4 h-4 text-brass-300 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Form Navigation Buttons with Deep Burgundy CTA */}
                <div className="pt-5 sm:pt-6 border-t border-ivory-300 dark:border-stone-800 flex items-center justify-between gap-3">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handlePrev}
                      icon={<ArrowLeft className="w-3.5 h-3.5" />}
                    >
                      Previous
                    </Button>
                  ) : <div />}

                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={handleNext}
                    icon={currentStep === 6 ? <MessageSquare className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    className="font-semibold"
                  >
                    {currentStep === 6 ? 'Continue on WhatsApp' : 'Next Step'}
                  </Button>
                </div>
              </form>
            ) : (
              /* SUCCESS STATE & DIRECT WHATSAPP HANDOFF */
              <div className="py-6 space-y-5 text-center animate-fade-in">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-serif text-charcoal-800 dark:text-ivory-100 font-normal">
                    Consultation Request Prepared
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto font-light leading-relaxed">
                    Your details have been formatted into an official chamber inquiry message. Click below to continue directly on WhatsApp with Advocate Ashutosh Pandey.
                  </p>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleLaunchWhatsApp}
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full sm:w-auto shadow-burgundy-glow"
                  >
                    Open WhatsApp Chat
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={handleCopyMessage}
                    icon={<Copy className="w-3.5 h-3.5" />}
                    className="w-full sm:w-auto"
                  >
                    {copiedMessage ? 'Message Copied ✓' : 'Copy Message'}
                  </Button>
                </div>

                <div className="pt-3 border-t border-ivory-300 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="text-burgundy-800 dark:text-brass-400 hover:underline cursor-pointer font-bold font-mono"
                  >
                    Edit details or start new request
                  </button>
                </div>
              </div>
            )}

            {/* Privacy Badge */}
            <div className="mt-5 pt-3.5 border-t border-ivory-300 dark:border-stone-800 flex items-center gap-2 text-[10px] text-stone-500 dark:text-stone-400">
              <Lock className="w-3 h-3 text-burgundy-800 dark:text-brass-400" />
              <span>Privileged and confidential attorney-client inquiry.</span>
            </div>
          </div>

          {/* RIGHT: Live Generated WhatsApp Payload Preview */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 sm:p-7 rounded-2xl bg-navy-900 border border-navy-700 space-y-3.5 shadow-2xl transition-colors">
              <div className="flex items-center justify-between border-b border-navy-800 pb-2.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider font-mono">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Message Preview</span>
                </div>
                <Badge variant="brass">{formData.language === 'hi' ? 'हिंदी' : 'English'}</Badge>
              </div>

              {/* Chat Bubble Layout */}
              <div className="p-4 rounded-lg bg-navy-950 border border-navy-800 text-xs sm:text-sm text-ivory-100 font-sans leading-relaxed whitespace-pre-line shadow-inner">
                {buildWhatsAppMessage(formData)}
              </div>

              <div className="text-[11px] text-ivory-300/80 space-y-1 font-mono">
                <div className="flex items-center justify-between">
                  <span>Recipient:</span>
                  <span className="font-bold text-ivory-50">Advocate Ashutosh Pandey</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>WhatsApp Line:</span>
                  <span className="font-bold text-emerald-400">+{PRIMARY_ADVOCATE.whatsappNumber}</span>
                </div>
              </div>
            </div>

            {/* Quick Call Fallback Card */}
            <div className="p-5 rounded-2xl bg-navy-900 border border-navy-700 space-y-2.5 text-xs text-ivory-200 shadow-xl transition-colors">
              <div className="flex items-center gap-2 text-brass-400 font-bold uppercase tracking-wider font-mono">
                <Phone className="w-3.5 h-3.5" />
                <span>Urgent High Court Listings?</span>
              </div>
              <p className="text-ivory-300/80 leading-relaxed font-light">
                For urgent registry filings or same-day listing mentions, contact the chamber desk directly:
              </p>
              <div className="pt-0.5">
                <a
                  href={`tel:${PRIMARY_ADVOCATE.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-mono text-ivory-50 hover:text-brass-300 font-bold"
                >
                  <Phone className="w-4 h-4 text-brass-400" />
                  <span>{PRIMARY_ADVOCATE.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
