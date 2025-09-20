import Link from "next/link";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DataCapabilitySection from "./components/DataCapabilitySection";
import ArchitectureSection from "./components/ArchitectureSection";
import IntegrationSection from "./components/IntegrationSection";
import CTASection from "./components/CTASection";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Section Divider */}
      <hr className="section-divider" />

      {/* Key Features */}
      <FeaturesSection />

      {/* Section Divider */}
      <hr className="section-divider-dark" />

      {/* Data Capability Showcase */}
      <DataCapabilitySection />

      {/* Section Divider */}
      <hr className="section-divider" />

      {/* Full Architecture */}
      <ArchitectureSection />

      {/* Section Divider */}
      <hr className="section-divider-dark" />

      {/* Integration Ecosystem */}
      <IntegrationSection />

      {/* Stats Section */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-margin-lg">
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
              The Numbers Don't Lie
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 text-lg">
              While your competitors struggle with data backlogs, our customers count money
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[var(--green-dark)]">$28.8M</h3>
              <p className="text-[var(--text-secondary)] mt-2">Saved by Lumeris (Annual)</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[var(--green-dark)]">30 sec</h3>
              <p className="text-[var(--text-secondary)] mt-2">vs Full Day Analysis</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[var(--green-dark)]">10x ROI</h3>
              <p className="text-[var(--text-secondary)] mt-2">Average First Year</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[var(--green-dark)]">100%</h3>
              <p className="text-[var(--text-secondary)] mt-2">SOC 2 Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section id="solutions" className="section-padding bg-[var(--cream-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-margin-lg">
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
              Pick Your Biggest Money Leak
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 text-lg">
              Every industry loses millions to data backlog. Choose where you want your ROI first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare */}
            <div className="bg-white p-8 rounded-lg card-border-strong group">
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--green-light)] transition-colors border border-[var(--green-light)] border border-[var(--green-light)]">
                <svg className="w-6 h-6 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border-light)]">
                Healthcare: Stop $28.8M in Preventable Readmissions
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 mt-3">
                Predict patient crashes 48 hours early. Cut readmissions 55%. Proven with 847 hospitals.
              </p>
              <Link href="/healthcare" className="text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]">
                Explore Healthcare →
              </Link>
            </div>

            {/* Financial Services */}
            <div className="bg-white p-8 rounded-lg card-border-strong group">
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--green-light)] transition-colors border border-[var(--green-light)] border border-[var(--green-light)]">
                <svg className="w-6 h-6 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border-light)]">
                Finance: Catch $2.4M in Fraud Before It Happens
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 mt-3">
                AI agents detect fraud patterns 100x faster than humans. Stop losses before they start.
              </p>
              <Link href="#financial" className="text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]">
                Learn more →
              </Link>
            </div>

            {/* FP&A */}
            <div className="bg-white p-8 rounded-lg card-border-strong group">
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--green-light)] transition-colors border border-[var(--green-light)] border border-[var(--green-light)]">
                <svg className="w-6 h-6 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border-light)]">
                FP&A: Cut Budget Cycles from 6 Weeks to 6 Hours
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 mt-3">
                Eliminate month-end madness. Agents build budgets while you sleep. CFOs love us.
              </p>
              <Link href="#fpa" className="text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]">
                Learn more →
              </Link>
            </div>

            {/* Insurance */}
            <div className="bg-white p-8 rounded-lg card-border-strong group">
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--green-light)] transition-colors border border-[var(--green-light)]">
                <svg className="w-6 h-6 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border-light)]">
                Insurance: Process 10x More Claims with Same Staff
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 mt-3">
                Automated underwriting that never misses risk. Turn claim backlogs into profit centers.
              </p>
              <Link href="#insurance" className="text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]">
                Learn more →
              </Link>
            </div>

            {/* Data Teams */}
            <div className="bg-white p-8 rounded-lg card-border-strong group">
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--green-light)] transition-colors border border-[var(--green-light)]">
                <svg className="w-6 h-6 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border-light)]">
                Data Teams: Answer 100x More Requests Without Burnout
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 mt-3">
                Your analysts stop working weekends. Agents handle the grunt work. Everyone wins.
              </p>
              <Link href="#data-teams" className="text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]">
                Learn more →
              </Link>
            </div>

            {/* Retail & Supply Chain */}
            <div className="bg-white p-8 rounded-lg card-border-strong group">
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--green-light)] transition-colors border border-[var(--green-light)]">
                <svg className="w-6 h-6 text-[var(--green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 pb-2 border-b border-[var(--border-light)]">
                Retail: Never Run Out of Stock Again
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 mt-3">
                Predict demand spikes before they happen. Optimize inventory in real-time. Customers always find what they want.
              </p>
              <Link href="#retail" className="text-[var(--green-primary)] font-medium hover:text-[var(--green-dark)]">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
