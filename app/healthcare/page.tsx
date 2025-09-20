import Link from "next/link";
import AdvisoryBoard from "../components/AdvisoryBoard";
import HealthcareArchitectureSection from "../components/HealthcareArchitectureSection";
import CustomerCaseStudies from "../components/CustomerCaseStudies";
import AgentShowcase from "../components/AgentShowcase";

export default function HealthcarePage() {
  return (
    <div className="pt-16">
      {/* Hero Section with Video */}
      <section className="relative bg-gradient-to-br from-[var(--cream-light)] to-[var(--cream)] section-padding-lg">
        <div className="absolute inset-0 pattern-dots opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-margin-lg">
            <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur rounded-full mb-8 border thin-border">
              <span className="text-sm font-medium text-[var(--green-dark)]">🚨 Lumeris Saves $28.8M Annually</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--text-primary)] mb-6">
              Cut Hospital Readmissions by{" "}
              <span className="text-[var(--green-primary)]">55%</span>{" "}
              in 30 Days
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Stop losing $28.8M to preventable ER visits. Our AI agents identify at-risk patients
              before they become statistics.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--green-dark)] to-[var(--green-primary)] rounded-3xl aspect-video flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow cursor-pointer group">
              <div className="text-center text-white">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold">See How Lumeris Prevented 2,847 ER Visits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Architecture */}
      <HealthcareArchitectureSection />

      {/* Customer Case Studies */}
      <CustomerCaseStudies />

      {/* Agent Showcase */}
      <AgentShowcase />

      {/* Advisory Board */}
      <AdvisoryBoard />

      {/* Healthcare-specific CTA */}
      <section className="section-padding-lg bg-gradient-to-br from-[var(--green-dark)] to-[var(--green-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Join 847 Hospitals Already Saving Lives & Money
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your competitors are already preventing readmissions. Don&apos;t let them get ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-block bg-white text-[var(--green-dark)] px-8 py-4 rounded-full hover:shadow-lg transition-all font-bold text-lg"
            >
              Get My $28.8M ROI Analysis →
            </Link>
            <Link
              href="#resources"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white/10 transition-colors font-semibold"
            >
              See Lumeris Case Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}