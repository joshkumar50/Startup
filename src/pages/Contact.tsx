import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { brandData } from '../data/mockData';
import { MotionWrapper } from '../components/motion/MotionWrapper';

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(brandData.contactFormEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <div className="w-full bg-white dark:bg-slate-950 min-h-screen">
            <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <MotionWrapper>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Start the Conversation</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Schedule a technical consultation with our solution architects. No sales pressure, just engineering expertise.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <MotionWrapper>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Headquarters</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            {brandData.address.street}<br />
                                            {brandData.address.city}, {brandData.address.state} {brandData.address.zip}<br />
                                            {brandData.address.country}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email Us</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            {brandData.email}<br />
                                            {brandData.careersEmail}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Call Us</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1">
                                            {brandData.phone}<br />
                                            Mon-Fri, 9am - 6pm EST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>

                        {/* Form */}
                        <MotionWrapper delay={0.2}>
                            {status === 'success' ? (
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-12 rounded-xl border border-blue-100 dark:border-blue-800 text-center">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                                        Thank you for reaching out. One of our solution architects will contact you shortly.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                                            <input
                                                required
                                                type="text"
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                                            <input
                                                required
                                                type="text"
                                                id="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Work Email</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                                            placeholder="Acme Corp"
                                        />
                                    </div>

                                    <div className="mb-8">
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Details</label>
                                        <textarea
                                            required
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white"
                                            placeholder="Tell us about your infrastructure needs..."
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-sm mb-4">Something went wrong. Please try again or email us directly.</p>
                                    )}

                                    <button
                                        disabled={status === 'loading'}
                                        type="submit"
                                        className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 ml-2 animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5 ml-2" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
};
