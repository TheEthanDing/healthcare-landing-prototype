export default function HealthcareArchitectureSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-br from-[var(--cream)] to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur rounded-full mb-6 border thin-border">
            <span className="text-sm font-medium text-[var(--green-dark)]">
              🏥 Healthcare Intelligence Platform
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-6">
            Every Patient Record, Alert, and Decision in One System
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            From scattered health data to life-saving interventions—unified into one HIPAA-compliant layer where clinical agents prevent readmissions and save lives
          </p>
        </div>

        {/* Main Architecture Visualization */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border thin-border">
          {/* Top: AI + Clinical Team */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-blue-100 rounded-2xl px-6 py-4">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg font-medium text-blue-800">AI + Clinical Teams</h3>
              <span className="text-2xl">👩‍⚕️</span>
            </div>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Clinical AI Models</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Medical LLMs</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">FHIR Models</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Physicians</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Nurses</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Care Coordinators</span>
            </div>
          </div>

          {/* Middle: Healthcare Agent Types */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Clinical Risk Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-red-200">
                <span className="text-2xl">🚨</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Clinical Risk Assessment</h4>
              <p className="text-xs text-[var(--text-secondary)]">Predicts patient deterioration</p>
            </div>

            {/* Revenue Cycle Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-200">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Revenue Cycle Optimization</h4>
              <p className="text-xs text-[var(--text-secondary)]">Prevents claim denials</p>
            </div>

            {/* Population Health Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-200">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Population Health</h4>
              <p className="text-xs text-[var(--text-secondary)]">Manages care cohorts</p>
            </div>

            {/* Quality Measures Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-purple-200">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Quality Measures</h4>
              <p className="text-xs text-[var(--text-secondary)]">Automates HEDIS reporting</p>
            </div>
          </div>

          {/* Central Ontology - Full Width */}
          <div className="relative mb-8">
            <div className="w-full">
              <div className="bg-[var(--green-dark)] text-white py-8 rounded-2xl shadow-lg border-2 border-[var(--green-primary)]">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-4xl mr-4">🏥</span>
                  <span className="text-3xl font-medium">Healthcare Ontology</span>
                </div>
                <p className="text-center text-gray-300 text-lg">HIPAA-Compliant Intelligence Layer</p>
                <p className="text-center text-gray-400 text-sm mt-2">Connects all health data • Powers clinical agents • Delivers patient insights</p>
              </div>
            </div>

            {/* Connection lines visualization */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                {/* Lines from top to ontology */}
                <path d="M 200 50 L 400 100" stroke="var(--green-light)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 400 50 L 400 100" stroke="var(--green-light)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 600 50 L 400 100" stroke="var(--green-light)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />

                {/* Lines from ontology to bottom */}
                <path d="M 400 120 L 200 180" stroke="var(--green-light)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 400 120 L 400 180" stroke="var(--green-light)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                <path d="M 400 120 L 600 180" stroke="var(--green-light)" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Bottom: Healthcare Data Sources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Clinical Data */}
            <div className="bg-[var(--cream-light)] rounded-xl p-6 card-border-strong">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 text-center border-b border-[var(--border-light)] pb-2">Clinical Data</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">EHRs (Epic, Cerner)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Lab Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Imaging (DICOM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Claims Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Pharmacy</span>
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-[var(--text-light)]">+ More</span>
                </div>
              </div>
            </div>

            {/* Clinical Documents */}
            <div className="bg-[var(--cream-light)] rounded-xl p-6 card-border-strong">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 text-center border-b border-[var(--border-light)] pb-2">Clinical Documents</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Clinical Notes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Research Papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Policy Documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Care Plans</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Medical Images</span>
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-[var(--text-light)]">+ More</span>
                </div>
              </div>
            </div>

            {/* Public Health Data */}
            <div className="bg-[var(--cream-light)] rounded-xl p-6 card-border-strong">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 text-center border-b border-[var(--border-light)] pb-2">Public Health Data</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">CDC APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">CMS Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Medical Literature</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Clinical Trials</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Social Determinants</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Public Registries</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
            See Your Healthcare Data Transformed
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--green-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--green-dark)] transition-colors">
              Get Healthcare Architecture Review →
            </button>
            <button className="bg-white text-[var(--green-primary)] px-8 py-3 rounded-full border thin-border-dark font-semibold hover:bg-[var(--cream)] transition-colors">
              Download Healthcare Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}