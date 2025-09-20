import Link from "next/link";

export default function AgentShowcase() {
  const agents = [
    {
      id: "clinical-risk",
      name: "Never Lose Another Patient to Preventable Readmission",
      category: "Clinical Risk Prevention",
      description: "Continuously analyzes patient data to identify high-risk individuals for proactive intervention",
      capabilities: [
        "Predicts crashes 48hrs early",
        "Alerts via Epic/Cerner",
        "Ranks by urgency",
        "Tracks interventions",
      ],
      metrics: {
        primary: "45% fewer",
        secondary: "readmissions",
      },
      icon: "🚨",
    },
    {
      id: "revenue-cycle",
      name: "Stop Losing $2.4M Monthly to Claim Denials",
      category: "Revenue Recovery",
      description: "Automates claims processing, identifies denial patterns, and optimizes billing workflows",
      capabilities: [
        "Fixes claims pre-submission",
        "Predicts denials",
        "Auto prior-auth",
        "Tracks revenue leaks",
      ],
      metrics: {
        primary: "$2.4M recovered",
        secondary: "monthly",
      },
      icon: "💸",
    },
    {
      id: "population-health",
      name: "Turn Your Patient Population Into Profit",
      category: "Value-Based Care",
      description: "Analyzes population trends, identifies at-risk cohorts, and recommends targeted interventions",
      capabilities: [
        "Finds hidden risk patterns",
        "Social risk scoring",
        "Cost-effective targeting",
        "ROI tracking",
      ],
      metrics: {
        primary: "30% higher",
        secondary: "quality scores",
      },
      icon: "📈",
    },
    {
      id: "quality-measures",
      name: "Guarantee Perfect Quality Scores Every Time",
      category: "Quality Assurance",
      description: "Automates quality measure calculations and regulatory reporting across all programs",
      capabilities: [
        "Zero manual HEDIS work",
        "Perfect MIPS scores",
        "Real-time gap closing",
        "Auto-submit reports",
      ],
      metrics: {
        primary: "100% compliant",
        secondary: "reporting",
      },
      icon: "🏆",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-3 py-1 bg-[var(--green-mint)] rounded-full mb-4">
            <span className="text-sm font-medium text-[var(--green-dark)]">🚀 Deploy in Minutes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            4 Agents That Will Transform Your Hospital
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-2xl mx-auto">
            Each agent pays for itself in the first month. Choose your biggest pain point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agent/${agent.id}`}
              className="group block"
            >
              <div className="bg-[var(--cream-light)] rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 card-border-strong">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{agent.icon}</span>
                    <div className="border-r border-[var(--border-light)] pr-4">
                      <h3 className="text-lg font-medium text-[var(--text-primary)] pb-1 border-b border-[var(--border-light)] mb-1">
                        {agent.name}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)]">{agent.category}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {agent.capabilities.slice(0, 4).map((capability, index) => (
                    <div key={index} className="bg-white rounded-lg px-3 py-2 text-xs text-center text-[var(--text-secondary)] border-subtle">
                      {capability}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[var(--green-dark)]">{agent.metrics.primary}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{agent.metrics.secondary}</p>
                  </div>
                  <div className="w-10 h-10 bg-[var(--green-mint)] rounded-full flex items-center justify-center group-hover:bg-[var(--green-primary)] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-block bg-[var(--green-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--green-dark)] transition-colors font-semibold"
          >
            Deploy Agents in Your Organization
          </Link>
        </div>
      </div>
    </section>
  );
}