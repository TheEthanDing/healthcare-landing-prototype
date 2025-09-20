import Link from "next/link";
import AgentsInFlightSection from "../../components/AgentsInFlightSection";

export default function AgentDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch agent details based on the ID
  // For now, we'll show a sample detail page

  const agentData = {
    "clinical-risk": {
      name: "Never Lose Another Patient to Preventable Readmission",
      category: "Clinical Risk Prevention",
      description: "AI agent that predicts patient deterioration 48 hours early and alerts care teams before crashes happen.",
      roi: {
        primary: "45% reduction in readmissions",
        secondary: "$12.5M annual savings",
        timeToValue: "2 weeks to first insights",
      },
    },
  };

  const agent = agentData["clinical-risk"]; // Default to clinical-risk for demo

  return (
    <div className="pt-16">
      {/* Hero Section - Streamlined */}
      <section className="bg-[var(--cream-light)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/healthcare"
            className="inline-flex items-center text-[var(--green-primary)] mb-6 hover:text-[var(--green-dark)]"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Healthcare
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-3 py-1 bg-[var(--green-mint)] rounded-full mb-4">
                <span className="text-sm font-medium text-[var(--green-dark)]">{agent.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-4">
                {agent.name}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                {agent.description}
              </p>
              <div className="flex gap-4">
                <Link
                  href="#deploy"
                  className="inline-block bg-[var(--green-primary)] text-white px-6 py-3 rounded-full hover:bg-[var(--green-dark)] transition-colors font-semibold"
                >
                  Deploy Now →
                </Link>
                <Link
                  href="#demo"
                  className="inline-block bg-white text-[var(--green-primary)] px-6 py-3 rounded-full border thin-border-dark hover:bg-[var(--cream)] transition-colors font-semibold"
                >
                  Live Demo
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 card-border-strong">
              <h3 className="text-lg font-medium text-[var(--text-primary)] mb-4 border-b border-[var(--border-light)] pb-2">Proven ROI</h3>
              <div className="space-y-3">
                <div className="text-center p-3 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <p className="text-2xl font-bold text-[var(--green-dark)]">{agent.roi.primary}</p>
                </div>
                <div className="text-center p-3 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <p className="text-xl font-bold text-[var(--text-primary)]">{agent.roi.secondary}</p>
                </div>
                <div className="text-center p-3 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <p className="text-lg font-medium text-[var(--text-primary)]">{agent.roi.timeToValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents in Flight - Now Second Section */}
      <AgentsInFlightSection agentType="clinical-risk" />

      {/* Visual Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-6">Real-Time Patient Monitoring</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-200">
                    <span className="text-2xl">🚨</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">Instant Risk Alerts</h3>
                    <p className="text-[var(--text-secondary)]">AI flags high-risk patients 48 hours before deterioration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">Predictive Scoring</h3>
                    <p className="text-[var(--text-secondary)]">Dynamic risk scores based on 500+ clinical variables</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-200">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)] mb-2">Care Coordination</h3>
                    <p className="text-[var(--text-secondary)]">Automatic alerts to care teams via Epic, Cerner, or Slack</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--cream)] rounded-2xl p-8 card-border aspect-video flex items-center justify-center">
              <div className="text-center text-[var(--text-secondary)]">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-lg font-medium">Live Patient Dashboard</p>
                <p className="text-sm mt-2">Real-time risk monitoring & alerts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Case Study Section */}
      <section className="py-16 bg-[var(--cream-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 card-border-strong aspect-video flex items-center justify-center">
              <div className="text-center text-[var(--text-secondary)]">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-lg font-medium">ROI Analysis Chart</p>
                <p className="text-sm mt-2">$12.5M savings breakdown</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-6">Lumeris Case Study Results</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg card-border">
                  <p className="text-3xl font-bold text-[var(--green-dark)]">$28.8M</p>
                  <p className="text-sm text-[var(--text-secondary)]">Annual savings from prevented readmissions</p>
                </div>
                <div className="bg-white p-4 rounded-lg card-border">
                  <p className="text-3xl font-bold text-[var(--green-dark)]">55%</p>
                  <p className="text-sm text-[var(--text-secondary)]">Reduction in preventable ER visits</p>
                </div>
                <div className="bg-white p-4 rounded-lg card-border">
                  <p className="text-3xl font-bold text-[var(--green-dark)]">30 seconds</p>
                  <p className="text-sm text-[var(--text-secondary)]">vs full day for manual analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--green-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-6">
            Ready to Deploy This Agent?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join 847 hospitals already preventing readmissions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-block bg-[var(--green-mint)] text-[var(--green-dark)] px-8 py-3 rounded-full hover:bg-white transition-colors font-bold"
            >
              Start Deployment →
            </Link>
            <Link
              href="#docs"
              className="inline-block bg-transparent text-white px-8 py-3 rounded-full border-2 border-white hover:bg-white/10 transition-colors font-semibold"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}