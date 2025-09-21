"use client";

import { useState } from "react";
import Link from "next/link";

export default function HLTHPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    useCase: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thanks! We'll reach out to schedule your HLTH demo.");
  };

  return (
    <div className="pt-16 min-h-screen bg-[var(--cream-light)]">
      <section className="section-padding-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - CTA Content */}
            <div className="lg:pr-8">
              <Link
                href="/healthcare"
                className="inline-flex items-center text-[var(--green-primary)] mb-6 hover:text-[var(--green-dark)]"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Healthcare
              </Link>

              <div className="inline-flex items-center px-4 py-2 bg-[var(--green-mint)] rounded-full mb-8">
                <span className="text-sm font-medium text-[var(--green-dark)]">
                  🏥 HLTH 2024 Special
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6 leading-tight">
                Make Us Prove It
              </h1>

              <h2 className="text-2xl md:text-3xl font-medium text-[var(--green-primary)] mb-8">
                TextQL at HLTH
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">Live ROI Calculation</h3>
                    <p className="text-[var(--text-secondary)]">
                      We'll analyze your actual data and show you exactly how much you're losing to preventable readmissions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">30-Second Demo</h3>
                    <p className="text-[var(--text-secondary)]">
                      Watch our agents identify high-risk patients in your real EHR data—live at our booth
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">Custom Agent Build</h3>
                    <p className="text-[var(--text-secondary)]">
                      Leave HLTH with a working agent trained on your specific use case
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--green-dark)] text-white p-6 rounded-2xl">
                <h3 className="text-xl font-medium mb-4">HLTH Exclusive Offer</h3>
                <p className="text-gray-200 mb-4">
                  Book your demo at HLTH and get a free 30-day pilot deployment worth $50,000
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-medium">Booth #1247</p>
                    <p className="text-sm text-gray-300">October 15-18, Las Vegas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 card-border-strong">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-2">
                  Schedule Your HLTH Demo
                </h3>
                <p className="text-[var(--text-secondary)]">
                  See the $28.8M Lumeris case study live
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    placeholder="john.smith@hospital.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    placeholder="Memorial Healthcare"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    placeholder="Chief Medical Officer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Biggest Data Challenge
                  </label>
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  >
                    <option value="">Select your biggest pain point</option>
                    <option value="readmissions">Hospital Readmissions</option>
                    <option value="claims">Claim Denials</option>
                    <option value="quality">Quality Measures</option>
                    <option value="population">Population Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors resize-none"
                    placeholder="Tell us about your current data challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--green-primary)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors text-lg"
                >
                  Schedule My HLTH Demo →
                </button>

                <p className="text-xs text-[var(--text-secondary)] text-center">
                  We'll contact you within 24 hours to schedule your booth visit
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}