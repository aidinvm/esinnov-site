"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Clock, ArrowLeft } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

// Productized Services
const services = [
    {
        id: "feasibility",
        name: "Feasibility Study",
        badge: "START HERE",
        price: "$1,500",
        duration: "48 hours",
        desc: "We analyze your use case and deliver architecture recommendations with MCP + A2A integration mapping.",
        includes: ["Use case analysis", "Architecture recommendation", "Integration mapping", "Cost estimation"]
    },
    {
        id: "pilot",
        name: "Agent Pilot",
        badge: "MOST POPULAR",
        price: "Custom Quote",
        duration: "14 days",
        desc: "Functional agent prototype with Sovereign RAG, MCP tooling, and human-in-the-loop validation.",
        includes: ["Custom agent development", "Sovereign RAG setup", "MCP integration", "14-day monitoring"]
    },
    {
        id: "deployment",
        name: "Production Deployment",
        badge: "SME & ENTERPRISE",
        price: "Custom Quote",
        duration: "4 weeks",
        desc: "Full production with A2A orchestration, custom infrastructure, training, and ongoing support.",
        includes: ["Custom architecture", "A2A integration", "Team training", "Ongoing maintenance"]
    },
];

type FormData = { name: string; email: string; company: string; service: string; useCase: string };

export default function AccessPage() {
    const [step, setStep] = useState<'select' | 'form' | 'success'>('select');
    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", company: "", service: "", useCase: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const captchaRef = useRef<HCaptcha>(null);

    const selectedService = services.find(s => s.id === formData.service);

    const handleServiceSelect = (serviceId: string) => {
        setFormData({ ...formData, service: serviceId });
        setStep('form');
    };

    const handleBack = () => {
        setStep('select');
        setCaptchaToken(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            setError('Please complete the human verification.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, captchaToken })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Failed to submit');
            }

            setStep('success');
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to submit';
            setError(`${message}. Please try again or email aidinvm@esinnov.com directly.`);
            captchaRef.current?.resetCaptcha();
            setCaptchaToken(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setStep('select');
        setFormData({ name: "", email: "", company: "", service: "", useCase: "" });
        setCaptchaToken(null);
        setError(null);
    };

    return (
        <div className="min-h-screen bg-mesh pt-8">
            <div className="section-container !pt-6 !pb-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <div className="font-section mb-4">Get Started</div>
                    <h1 className="font-heading text-display mb-6">
                        Let&apos;s Build Together
                    </h1>
                    <p className="text-body-lg text-text-secondary">
                        {step === 'select'
                            ? 'Choose a service that fits your stage. From feasibility to production.'
                            : step === 'form'
                                ? `You selected: ${selectedService?.name}. Tell us about your project.`
                                : 'Thank you for reaching out!'
                        }
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {/* Step 1: Service Selection */}
                    {step === 'select' && (
                        <motion.div
                            key="select"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="grid-3 items-stretch">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onClick={() => handleServiceSelect(service.id)}
                                        className="surface-card p-6 flex flex-col cursor-pointer transition-all duration-300 hover:ring-1 hover:ring-glass-border hover:scale-[1.01]"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="badge text-xs">
                                                {service.badge}
                                            </span>
                                            <span className="text-text-tertiary text-xs flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {service.duration}
                                            </span>
                                        </div>

                                        <h3 className="font-heading text-title mb-2">{service.name}</h3>
                                        <div className="font-terminal text-accent-blue text-sm font-semibold mb-4">
                                            {service.price}
                                        </div>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                            {service.desc}
                                        </p>

                                        <div className="space-y-2 mb-6 flex-grow">
                                            {service.includes.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-accent-emerald flex-shrink-0" />
                                                    <span className="text-text-secondary text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            className="w-full btn-secondary"
                                        >
                                            Select & Continue
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Contact Form */}
                    {step === 'form' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="surface-card p-8 lg:p-10">
                                {/* Back Button */}
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-6"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to services
                                </button>

                                {/* Selected Service Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6">
                                    <Check className="w-4 h-4 text-accent-blue" />
                                    <span className="text-accent-blue text-sm font-medium">{selectedService?.name}</span>
                                </div>

                                <h2 className="font-heading text-headline mb-2">Complete Your Request</h2>
                                <p className="text-text-secondary mb-8">
                                    Tell us about your project and we&apos;ll get back to you within 48 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="form-label">Name *</label>
                                            <input
                                                type="text" required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="input-field bg-bg-surface/50 border-glass-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">Email *</label>
                                            <input
                                                type="email" required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="input-field bg-bg-surface/50 border-glass-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label className="form-label">Company</label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="input-field bg-bg-surface/50 border-glass-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                                            placeholder="Your company (optional)"
                                        />
                                    </div>

                                    {/* Use Case */}
                                    <div>
                                        <label className="form-label">Describe Your Use Case *</label>
                                        <textarea
                                            required rows={4}
                                            value={formData.useCase}
                                            onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                                            className="input-field bg-bg-surface/50 border-glass-border focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50 resize-none"
                                            placeholder="What problem are you solving? What data sources are involved?"
                                        />
                                    </div>

                                    {/* Human Verification */}
                                    <div className="space-y-3">
                                        <label className="form-label text-center block">Human Verification *</label>
                                        <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-bg-surface/30 border border-glass-border">
                                            <HCaptcha
                                                ref={captchaRef}
                                                sitekey="21ca1b58-b39a-4c00-94e8-229ed888dfc6"
                                                onVerify={(token) => setCaptchaToken(token)}
                                                onExpire={() => setCaptchaToken(null)}
                                                theme="dark"
                                            />
                                            {captchaToken && (
                                                <div className="flex items-center gap-2 text-accent-emerald text-sm">
                                                    <Check className="w-4 h-4" />
                                                    Verified
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="btn-primary w-full py-4 text-base"
                                        disabled={isLoading || !captchaToken}
                                    >
                                        {isLoading ? (
                                            <>
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Submit Request
                                            </>
                                        )}
                                    </button>

                                    {error && (
                                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                            <p className="text-red-400 text-sm text-center">
                                                {error}
                                            </p>
                                        </div>
                                    )}

                                    <p className="text-text-tertiary text-xs text-center pt-2">
                                        We respond within 48 hours. Your data is never shared.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Success */}
                    {step === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="max-w-md mx-auto"
                        >
                            <div className="surface-card p-8 lg:p-10 text-center">
                                <div className="w-20 h-20 rounded-2xl bg-accent-emerald/10 flex items-center justify-center mx-auto mb-6">
                                    <Check className="w-10 h-10 text-accent-emerald" />
                                </div>
                                <h2 className="font-heading text-headline mb-4">Request Received!</h2>
                                <p className="text-text-secondary mb-2">
                                    Thank you for your interest in our <strong className="text-text-primary">{selectedService?.name}</strong>.
                                </p>
                                <p className="text-text-secondary mb-8">
                                    We&apos;ll respond within 48 hours with a preliminary assessment.
                                </p>
                                <button onClick={handleReset} className="btn-secondary">
                                    Submit Another Request
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
