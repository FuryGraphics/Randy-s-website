import { useState, ChangeEvent, FormEvent } from 'react';
import { Route } from '../types';
import {
  Send,
  CheckCircle,
  Clock,
  ShieldCheck,
  User,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  UploadCloud,
  FileCheck2
} from 'lucide-react';

interface LeadFormProps {
  type: 'contact' | 'quote';
  defaultService?: string;
  onSuccessNavigate?: (route: Route) => void;
}

export default function LeadForm({ type, defaultService = 'repair', onSuccessNavigate }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: defaultService,
    message: '',
    fileSimulate: null as string | null,
    fileSimulateName: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesOptionList = [
    { value: 'repair', label: 'Plumbing Repair' },
    { value: 'water-heaters', label: 'Water Heater Installs/Repair' },
    { value: 'water-softeners', label: 'Water Softener & Filtration' },
    { value: 'drain-cleaning', label: 'Professional Drain Cleaning' },
    { value: 'emergency', label: 'Emergency Urgency Fix' },
    { value: 'residential', label: 'Residential System Plumbing' },
    { value: 'commercial', label: 'Commercial Plumbing' },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Safe file mock upload triggers beautiful feedback
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({
        ...prev,
        fileSimulateName: file.name,
        fileSimulate: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Quick basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone number so Travis can reach back.');
      return;
    }

    setLoading(true);

    // Simulate reliable api submission in 1.4s
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 1400);
  };

  if (success) {
    return (
      <div className="bg-brand-navy text-white p-8 md:p-12 rounded-xl border border-brand-orange shadow-2xl text-center space-y-6 max-w-2xl mx-auto animate-fadeIn">
        <div className="flex justify-center">
          <div className="bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/20 animate-bounce">
            <CheckCircle className="w-12 h-12 stroke-[2.5]" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-3xl font-bold tracking-wide uppercase text-brand-amber">Request Submitted Successfully!</h3>
          <p className="text-sm text-gray-300 font-sans max-w-md mx-auto">
            Thank you for trusting Peak Plumbing Company Inc. Travis Zohner and our office supervisor will evaluate your details right away.
          </p>
        </div>

        {/* Informative dispatch checkpoints */}
        <div className="bg-brand-slate text-left rounded-lg p-5 border border-brand-slate space-y-4 max-w-md mx-auto">
          <p className="font-display text-xs text-brand-orange uppercase tracking-widest font-bold border-b border-brand-navy pb-2">What happens next?</p>
          <div className="space-y-3.5 text-xs text-gray-300 font-sans">
            <div className="flex gap-2.5 items-start">
              <Clock className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
              <span><strong className="text-white">Under 2 hours response:</strong> Our dispatcher will review scheduling and call you.</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <ShieldCheck className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
              <span><strong className="text-white">Upfront Visual Review:</strong> If you uploaded photos in your quote request, Travis will audit them to prepare precise parts.</span>
            </div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => {
              setFormData({
                name: '',
                phone: '',
                email: '',
                address: '',
                serviceType: defaultService,
                message: '',
                fileSimulate: null,
                fileSimulateName: ''
              });
              setSuccess(false);
            }}
            className="px-6 py-2.5 bg-brand-slate border border-brand-orange text-white text-xs tracking-wider uppercase font-display font-semibold hover:bg-brand-orange rounded cursor-pointer transition-colors"
          >
            Submit Another Request
          </button>
          {onSuccessNavigate && (
            <button
              onClick={() => onSuccessNavigate('home')}
              className="px-6 py-2.5 bg-brand-orange text-white text-xs tracking-wider uppercase font-display font-bold hover:bg-brand-amber hover:text-brand-navy rounded cursor-pointer transition-transform"
            >
              Back to Home page
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Absolute Loading Backdrop Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-brand-navy/85 select-none z-40 rounded-xl flex flex-col justify-center items-center text-white space-y-4 rounded-xl border border-brand-slate">
          <div className="border-4 border-brand-orange border-t-white w-10 h-10 rounded-full animate-spin"></div>
          <p className="font-display text-sm tracking-widest uppercase text-brand-amber animate-pulse">Transmitting secure data to Travis...</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-brand-slate text-white p-6 md:p-8 rounded-xl border border-brand-navy shadow-2xl space-y-5"
        id={`${type}-lead-form`}
      >
        <div className="border-b border-brand-navy pb-4 mb-2">
          <h3 className="font-display text-2xl text-white uppercase tracking-wide">
            {type === 'quote' ? 'Request A Free Quote Estimator' : 'Send Travis A Direct Message'}
          </h3>
          <p className="text-xs text-gray-400 font-sans mt-1">
            Fill in the points below. We respect your security and never spam your info.
          </p>
        </div>

        {errorMessage && (
          <div className="bg-red-950/60 border border-red-500/40 text-red-300 text-xs py-3 px-4 rounded space-y-1">
            <span className="font-bold uppercase tracking-wider">Validation Alert:</span>
            <p>{errorMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Contact Name */}
          <div className="space-y-1.5">
            <label className="text-xs tracking-widest text-gray-300 uppercase font-bold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-brand-amber" />
              <span>Your Full Name *</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="e.g. Travis Zohner"
              className="w-full bg-brand-navy text-white text-sm py-2.5 px-3.5 rounded border border-brand-slate focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>

          {/* Contact Phone */}
          <div className="space-y-1.5">
            <label className="text-xs tracking-widest text-gray-300 uppercase font-bold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-amber animate-pulse" />
              <span>Phone Contact *</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="e.g. (208) 897-1389"
              className="w-full bg-brand-navy text-white text-sm py-2.5 px-3.5 rounded border border-brand-slate focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs tracking-widest text-gray-300 uppercase font-bold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-amber" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. client@gmail.com"
              className="w-full bg-brand-navy text-white text-sm py-2.5 px-3.5 rounded border border-brand-slate focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>

          {/* Service categorization selection */}
          <div className="space-y-1.5">
            <label className="text-xs tracking-widest text-gray-300 uppercase font-bold flex items-center gap-1.5">
              <ClipboardList className="w-3.5 h-3.5 text-brand-amber" />
              <span>Inquiry Category</span>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full bg-brand-navy text-white text-sm py-2.5 px-3 rounded border border-brand-slate focus:border-brand-orange focus:outline-none transition-colors cursor-pointer"
            >
              {servicesOptionList.map((srv) => (
                <option key={srv.value} value={srv.value} className="bg-brand-navy text-white">
                  {srv.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address: Essential for Free Quote estimation requests */}
        {type === 'quote' && (
          <div className="space-y-1.5 animate-fadeIn">
            <label className="text-xs tracking-widest text-gray-300 uppercase font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-amber" />
              <span>Project Site Address *</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required={type === 'quote'}
              placeholder="e.g. 100 E Benton St, Pocatello, ID 83201"
              className="w-full bg-brand-navy text-white text-sm py-2.5 px-3.5 rounded border border-brand-slate focus:border-brand-orange focus:outline-none transition-colors"
            />
          </div>
        )}

        {/* Custom description paragraph */}
        <div className="space-y-1.5">
          <label className="text-xs tracking-widest text-gray-300 uppercase font-bold">
            {type === 'quote' ? 'Describe the issue or project in detail:' : 'How can we help you?'}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder={
              type === 'quote'
                ? 'e.g. Need old 50-gallon Rheem water heater replaced with a high-efficiency Rheem or Bradford White. Basement has direct stairwell access.'
                : 'Write your general questions, feedback, or scheduled request dates here...'
            }
            className="w-full bg-brand-navy text-white text-sm py-2.5 px-3.5 rounded border border-brand-slate focus:border-brand-orange focus:outline-none transition-colors resize-y"
          />
        </div>

        {/* Real-use drag-and-drop simulated file uploader specifically for quoting */}
        {type === 'quote' && (
          <div className="space-y-2 animate-fadeIn border border-dashed border-brand-slate rounded-lg p-4 bg-brand-navy/40">
            <div className="flex flex-col items-center justify-center text-center space-y-1">
              <UploadCloud className="w-7 h-7 text-brand-amber" />
              <p className="text-xs text-white uppercase font-bold tracking-widest">Share Leak / Heater Pictures</p>
              <p className="text-[10px] text-gray-400 font-sans max-w-xs">
                Upload a snapshot of your copper pipe joint or heater model plate so Travis can prepare your pricing list perfectly.
              </p>
            </div>
            <div className="flex justify-center items-center pt-2">
              <label className="bg-brand-slate hover:bg-brand-orange text-white text-xs font-bold font-display uppercase tracking-wider py-2 px-4 rounded border border-brand-slate cursor-pointer transition-colors flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Select Snapshot File</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
            {formData.fileSimulateName && (
              <div className="bg-brand-slate/40 text-brand-amber font-mono text-[10px] py-1.5 px-3 rounded flex items-center gap-2 justify-center animate-fadeIn border border-brand-slate">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Snapshot Attached: <strong>{formData.fileSimulateName}</strong></span>
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-brand-orange hover:bg-brand-amber text-white hover:text-brand-navy py-3 px-6 rounded text-sm tracking-widest font-display font-bold uppercase transition-all shadow-lg transform active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>{type === 'quote' ? 'Transmit Free Estimate Details' : 'Send Message to Travis'}</span>
        </button>
      </form>
    </div>
  );
}
