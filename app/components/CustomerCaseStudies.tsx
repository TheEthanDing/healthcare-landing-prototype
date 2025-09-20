"use client";

import { useState } from "react";
import Link from "next/link";

export default function CustomerCaseStudies() {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: "Lumeris: AI-Powered Care Team Member",
      organization: "Lumeris",
      metric: "$28.8M Annual Savings",
      description: "Using TextQL Agents to drive patient intervention and prevent ER visits",
      quote: "Ana just did in 30 seconds what would have taken me a full day to do",
      speaker: "Matt Howard, Director of In-Market Analytics",
      results: [
        "55% reduction in preventable ER visits",
        "Real-time patient risk stratification",
        "Automated care team alerts",
        "30-second analysis vs full-day manual process",
      ],
      featured: true,
    },
    {
      title: "Major Health System: Claims Analytics",
      organization: "Top 10 Health System",
      metric: "1B+ Claims Processed",
      description: "Transforming insurance claims analytics to optimize submissions and reduce denials",
      results: [
        "35% reduction in claim denials",
        "60% faster claim processing",
        "Automated denial pattern detection",
        "Proactive submission optimization",
      ],
    },
    {
      title: "Regional Hospital Network: Clinical Analytics",
      organization: "500+ Bed Hospital Network",
      metric: "40% Time Savings",
      description: "Deploying agents for real-time clinical decision support",
      results: [
        "Improved patient outcomes",
        "Reduced readmission rates",
        "Faster clinical insights",
        "Better resource allocation",
      ],
    },
  ];

  const featuredCase = caseStudies[0];

  return (
    <section className="section-padding-lg bg-[var(--cream-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-3 py-1 bg-white rounded-full mb-4 border thin-border">
            <span className="text-sm font-medium text-[var(--green-dark)]">💰 Proven ROI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            This Saved My Hospital $28.8 Million
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-2xl mx-auto">
            Matt Howard, Lumeris Director: What took me a full day now takes 30 seconds
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="inline-block px-3 py-1 bg-[var(--green-mint)] rounded-full mb-6">
                <span className="text-sm font-bold text-[var(--green-dark)]">LUMERIS</span>
              </div>

              <blockquote className="mb-8">
                <p className="text-2xl font-light text-[var(--text-primary)] mb-4">
                  "{featuredCase.quote}"
                </p>
                <cite className="text-sm text-[var(--text-secondary)]">
                  {featuredCase.speaker}
                </cite>
              </blockquote>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-[var(--green-dark)]">30s</p>
                  <p className="text-xs text-[var(--text-secondary)]">vs full day</p>
                </div>
                <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-[var(--green-dark)]">55%</p>
                  <p className="text-xs text-[var(--text-secondary)]">fewer ER visits</p>
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]"
              >
                Full story →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[var(--green-dark)] to-[var(--green-primary)] p-8 lg:p-12 text-white">
              <h3 className="text-4xl font-bold mb-8">{featuredCase.metric}</h3>
              <p className="text-xl font-light mb-6">Annual Savings</p>
              <div className="space-y-4">
                {featuredCase.results.slice(0, 3).map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/90">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.slice(1).map((study, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all group cursor-pointer card-border-strong">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-[var(--green-primary)] font-medium mb-2">{study.organization}</p>
                  <h3 className="text-3xl font-bold text-[var(--green-dark)]">{study.metric}</h3>
                </div>
                <svg className="w-8 h-8 text-[var(--green-light)] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="text-[var(--text-secondary)] text-sm line-clamp-2">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}