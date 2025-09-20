export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-3 py-1 bg-[var(--green-mint)] rounded-full mb-4">
            <span className="text-sm font-medium text-[var(--green-dark)]">⚡ 30-Second Setup</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            Turn Your Data Into Life-Saving Alerts
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-2xl mx-auto">
            From scattered EHR data to real-time patient intervention in 72 hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-[var(--cream-light)] p-8 rounded-2xl border thin-border hover:shadow-lg transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--green-light)] to-[var(--green-mint)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                Plug In & Go
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Zero IT headaches. Works with Epic, Cerner instantly
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Epic</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">FHIR</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">HL7</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-[var(--cream-light)] p-8 rounded-2xl border thin-border hover:shadow-lg transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--green-light)] to-[var(--green-mint)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                AI Learns Your Patients
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Automatically maps every patient risk factor
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Auto-model</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Ontology</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Self-heal</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-[var(--cream-light)] p-8 rounded-2xl border thin-border hover:shadow-lg transition-all h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--green-light)] to-[var(--green-mint)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                Save Lives Automatically
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Alerts care teams before patients crash
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Risk</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Revenue</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[var(--text-secondary)]">Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual connector */}
        <div className="hidden lg:block">
          <div className="relative -mt-48">
            <svg className="absolute w-full h-32" style={{ top: "120px" }}>
              <path
                d="M 250 50 L 500 50"
                stroke="var(--green-light)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
              <path
                d="M 750 50 L 1000 50"
                stroke="var(--green-light)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}