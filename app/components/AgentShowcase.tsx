"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AgentShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const agents = [
    {
      id: "clinical-risk",
      name: "Never Lose Another Patient to Preventable Readmission",
      category: "Clinical Risk Prevention",
      description: "AI agent that continuously monitors patient data across Epic, Cerner, and claims systems to predict deterioration 48 hours early. Alerts care teams before patients crash, preventing costly readmissions and saving lives.",
      dataSources: ["Epic EHR", "Cerner", "Claims Data", "Lab Results", "Vital Signs", "Social Determinants"],
      powersDecision: "Patient intervention timing and care escalation protocols",
      metrics: {
        primary: "45% fewer",
        secondary: "readmissions",
        additionalMetrics: ["$12.5M annual savings", "48-hour early warning", "94% accuracy rate"]
      },
      icon: "🚨",
    },
    {
      id: "revenue-cycle",
      name: "Stop Losing $2.4M Monthly to Claim Denials",
      category: "Revenue Recovery",
      description: "Automates claims processing by analyzing historical denial patterns across multiple payers. Fixes claims pre-submission and predicts denials with 95% accuracy, recovering millions in lost revenue.",
      dataSources: ["Claims History", "Payer Rules", "CPT Codes", "ICD-10", "Prior Authorizations", "Denial Patterns"],
      powersDecision: "Claim submission optimization and denial prevention strategies",
      metrics: {
        primary: "$2.4M recovered",
        secondary: "monthly",
        additionalMetrics: ["95% approval rate", "60% faster processing", "Zero manual scrubbing"]
      },
      icon: "💸",
    },
    {
      id: "population-health",
      name: "Turn Your Patient Population Into Profit",
      category: "Value-Based Care",
      description: "Analyzes population trends across demographics, social determinants, and clinical outcomes to identify high-value intervention opportunities. Optimizes care management programs for maximum ROI.",
      dataSources: ["Patient Demographics", "Social Determinants", "Quality Measures", "Cost Data", "Outcome Metrics", "Risk Scores"],
      powersDecision: "Population health investment allocation and care program prioritization",
      metrics: {
        primary: "30% higher",
        secondary: "quality scores",
        additionalMetrics: ["$8.2M cost avoidance", "15,000+ patients managed", "85% program adherence"]
      },
      icon: "📈",
    },
    {
      id: "quality-measures",
      name: "Guarantee Perfect Quality Scores Every Time",
      category: "Quality Assurance",
      description: "Automates HEDIS, MIPS, and CMS quality measure calculations with real-time gap analysis. Ensures 100% compliant reporting while identifying improvement opportunities before audits.",
      dataSources: ["HEDIS Data", "CMS Reports", "Quality Metrics", "Patient Records", "Care Gaps", "Performance Indicators"],
      powersDecision: "Quality improvement prioritization and resource allocation",
      metrics: {
        primary: "100% compliant",
        secondary: "reporting",
        additionalMetrics: ["4.5 star average", "Zero audit findings", "47 measures automated"]
      },
      icon: "🏆",
    },
  ];

  // Auto-scroll every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % agents.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [agents.length]);

  const activeAgent = agents[activeTab];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-3 py-1 bg-[var(--green-mint)] rounded-full mb-4">
            <span className="text-sm font-medium text-[var(--green-dark)]">🤖 Prebuilt Agents</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            4 Agents That Will Transform Your Hospital
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-2xl mx-auto">
            Each agent pays for itself in the first month. Choose your biggest pain point.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[var(--cream-light)] rounded-2xl p-2 card-border inline-flex">
            {agents.map((agent, index) => (
              <button
                key={agent.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl transition-all font-medium text-sm ${
                  activeTab === index
                    ? 'bg-white text-[var(--green-primary)] shadow-md'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="text-lg mr-2">{agent.icon}</span>
                {agent.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Agent Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden card-border-strong">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image Placeholder */}
            <div className="bg-[var(--cream)] p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-6xl">{activeAgent.icon}</span>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-lg font-medium text-[var(--text-primary)] mb-2">Live Agent Dashboard</p>
                  <p className="text-sm text-[var(--text-secondary)]">Real-time monitoring & alerts</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <div className="w-16 h-3 bg-[var(--green-light)] rounded"></div>
                    <div className="w-12 h-3 bg-[var(--green-mint)] rounded"></div>
                    <div className="w-20 h-3 bg-[var(--green-primary)] rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Agent Details */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-3">
                  {activeAgent.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {activeAgent.description}
                </p>
              </div>

              {/* Data Sources */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[var(--text-primary)] mb-3 border-b border-[var(--border-light)] pb-2">
                  Data Sources & Tables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeAgent.dataSources.map((source, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--cream-light)] rounded-full text-xs text-[var(--text-secondary)] border-subtle"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              {/* Powers Decision */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[var(--text-primary)] mb-3 border-b border-[var(--border-light)] pb-2">
                  Powers Decision
                </h4>
                <p className="text-sm text-[var(--text-secondary)] bg-[var(--cream-light)] p-3 rounded-lg border-subtle">
                  {activeAgent.powersDecision}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <p className="text-2xl font-bold text-[var(--green-dark)]">{activeAgent.metrics.primary}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{activeAgent.metrics.secondary}</p>
                </div>
                {activeAgent.metrics.additionalMetrics.slice(0, 2).map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                    <p className="text-lg font-semibold text-[var(--text-primary)]">{metric}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/agent/${activeAgent.id}`}
                className="inline-flex items-center text-[var(--green-primary)] font-semibold hover:text-[var(--green-dark)] group"
              >
                Explore This Agent
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {agents.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTab === index ? 'bg-[var(--green-primary)]' : 'bg-[var(--border-light)]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}