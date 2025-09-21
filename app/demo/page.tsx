"use client";

import { useState } from "react";
import Link from "next/link";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    phone: "",
    howHeard: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request:", formData);
    alert("Thanks! We'll reach out within 24 hours to schedule your demo.");
  };

  return (
    <div className="pt-16 min-h-screen bg-[var(--cream-light)]">
      <section className="section-padding-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Compelling Copy */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[var(--green-mint)] rounded-full mb-6">
                <span className="text-sm font-medium text-[var(--green-dark)]">
                  🚨 Stop Losing Money to Data Backlogs
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6 leading-tight">
                See How TextQL Can Save You{" "}
                <span className="text-[var(--green-primary)]">$28.8 Million</span>
              </h1>

              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Stop writing SQL. Stop waiting weeks for analysis. Stop losing millions to the 90% of data requests your team can't handle.
              </p>

              {/* Value Props */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-1">Connect Your Live Data in 10 Minutes</h3>
                    <p className="text-[var(--text-secondary)] text-sm">We'll show you real insights from your actual data stack—not some fake demo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-1">Get ROI Analysis Based on Your Data Volume</h3>
                    <p className="text-[var(--text-secondary)] text-sm">We'll calculate exactly how much you're losing to data bottlenecks</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-1">Walk Away with Custom Agent Recommendations</h3>
                    <p className="text-[var(--text-secondary)] text-sm">Purpose-built for your biggest data pain points</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-[var(--green-dark)] text-white p-6 rounded-2xl">
                <blockquote className="mb-4">
                  <p className="text-lg italic mb-3">
                    "TextQL is a lifesaver. It created these graphs and pulled stats instantly from our Snowflake warehouse right before an All Hands meeting."
                  </p>
                  <cite className="text-sm text-gray-300">
                    — Dillon Woods, CTO of company with 10,000+ tables
                  </cite>
                </blockquote>
              </div>

              {/* Data Stack Icons */}
              <div className="mt-8">
                <p className="text-sm text-[var(--text-secondary)] mb-4 text-center">
                  Ana finds insights in your existing data stack
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Snowflake', 'Databricks', 'Tableau', 'PowerBI', 'Looker', 'dbt', 'Azure', 'AWS', 'Salesforce', 'Oracle', 'SAP', 'Slack'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)] border-subtle">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Demo Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 card-border-strong">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-2">
                  Request a Demo
                </h2>
                <p className="text-[var(--text-secondary)]">
                  See how hundreds of data teams have stopped writing SQL
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors text-lg"
                    placeholder="john.doe@company.com"
                  />
                </div>

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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    How did you hear about us? (optional)
                  </label>
                  <select
                    name="howHeard"
                    value={formData.howHeard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[var(--border-light)] rounded-lg focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  >
                    <option value="">Select an option...</option>
                    <option value="colleague">Colleague referral</option>
                    <option value="conference">HLTH Conference</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="google">Google search</option>
                    <option value="blog">Blog/Content</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--green-primary)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors text-lg"
                >
                  Get My Free ROI Analysis →
                </button>

                <p className="text-xs text-[var(--text-secondary)] text-center">
                  We'll contact you within 24 hours with your custom ROI projection
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section - Why This Demo is Different */}
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 card-border-strong">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
                Why This Demo Will Change Everything
              </h2>
              <p className="text-[var(--text-secondary)] max-w-3xl mx-auto">
                While competitors show you fake data, we connect to your real systems and show you actual insights you've been missing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--green-mint)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔗</span>
                </div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">Connect Your Real Data</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  No toy datasets. We plug into your actual Snowflake, Databricks, or whatever you've got
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--green-mint)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">Find Hidden Revenue</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  We'll show you the insights your team never had time to find—worth millions in revenue
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--green-mint)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-medium text-[var(--text-primary)] mb-2">Get Your ROI Calculator</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Walk away knowing exactly how much TextQL will save you in Year 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}