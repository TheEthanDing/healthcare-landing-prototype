export default function ArchitectureSection() {
  return (
    <section className="section-padding-lg bg-gradient-to-br from-[var(--cream)] to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur rounded-full mb-6 border thin-border">
            <span className="text-sm font-medium text-[var(--green-dark)]">
              🏗️ Complete Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-6">
            From Chaos to Intelligence in One Platform
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Every data source, every document, every system—unified into one intelligent layer where agents deliver decisions that drive revenue
          </p>
        </div>

        {/* Main Architecture Visualization */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border thin-border">
          {/* Top: AI + Human Teaming */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-purple-100 rounded-2xl px-6 py-4">
              <span className="text-2xl">🤖</span>
              <h3 className="text-lg font-medium text-purple-800">AI + Human Teaming</h3>
              <span className="text-2xl">👥</span>
            </div>
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Multimodal Models</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Open Source LLMs</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Commercial LLMs</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Operators</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Analysts</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Data Scientists</span>
            </div>
          </div>

          {/* Middle: Agent Types */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Root Cause Analysis Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-red-200">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Root Cause Analysis</h4>
              <p className="text-xs text-[var(--text-secondary)]">Finds why problems happen</p>
            </div>

            {/* Decision Intelligence Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-blue-200">
                <span className="text-2xl">🧠</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Decision Intelligence</h4>
              <p className="text-xs text-[var(--text-secondary)]">Optimizes business choices</p>
            </div>

            {/* Fraud Detection Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-orange-200">
                <span className="text-2xl">🚨</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Fraud Detection</h4>
              <p className="text-xs text-[var(--text-secondary)]">Catches anomalies instantly</p>
            </div>

            {/* Predictive Maintenance Agent */}
            <div className="bg-[var(--cream-light)] rounded-xl p-4 text-center card-border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-green-200">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2 text-sm">Predictive Maintenance</h4>
              <p className="text-xs text-[var(--text-secondary)]">Prevents equipment failures</p>
            </div>
          </div>

          {/* Central Ontology - Full Width */}
          <div className="relative mb-8">
            <div className="w-full">
              <div className="bg-[var(--green-dark)] text-white py-8 rounded-2xl shadow-lg border-2 border-[var(--green-primary)]">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-4xl mr-4">⚙️</span>
                  <span className="text-3xl font-medium">Ontology</span>
                </div>
                <p className="text-center text-gray-300 text-lg">Unified Intelligence Layer</p>
                <p className="text-center text-gray-400 text-sm mt-2">Connects all data sources • Powers all agents • Delivers all insights</p>
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

          {/* Bottom: Data Sources */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Structured Data */}
            <div className="bg-[var(--cream-light)] rounded-xl p-6 card-border-strong">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 text-center border-b border-[var(--border-light)] pb-2">Structured Data</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Data Warehouses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">ERPs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">CRMs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Cloud Providers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Databases</span>
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-[var(--text-light)]">+ More</span>
                </div>
              </div>
            </div>

            {/* Unstructured Data */}
            <div className="bg-[var(--cream-light)] rounded-xl p-6 card-border-strong">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 text-center border-b border-[var(--border-light)] pb-2">Unstructured Data</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">PDFs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">PowerPoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Images</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Emails</span>
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-[var(--text-light)]">+ More</span>
                </div>
              </div>
            </div>

            {/* Public Data Sources */}
            <div className="bg-[var(--cream-light)] rounded-xl p-6 card-border-strong">
              <h4 className="font-medium text-[var(--text-primary)] mb-4 text-center border-b border-[var(--border-light)] pb-2">Public Data Sources</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Government Websites</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Google Searches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Web Scrapers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-sm text-[var(--text-secondary)]">Weather Patterns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Example Use Case - Titan Industries */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-purple-200 rounded-full mb-4">
                  <span className="text-sm font-medium text-purple-800">Example → Titan Industries</span>
                </div>
                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
                  Elements of a Raw Materials Decision
                </h3>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  <li className="flex items-start">
                    <span className="text-[var(--green-primary)] mr-3 mt-1">⚙️</span>
                    <span>Full visibility into revenue at stake for each shortage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--green-primary)] mr-3 mt-1">📊</span>
                    <span>Prioritizing shortages based on revenue at stake</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--green-primary)] mr-3 mt-1">🤖</span>
                    <span>AI/P-driven intelligence and resolutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[var(--green-primary)] mr-3 mt-1">🔄</span>
                    <span>Continuous learning informs future decisions</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                {/* Simplified architecture diagram */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  {/* Top layer - Alerts */}
                  <div className="flex justify-between mb-4">
                    <div className="bg-purple-500 text-white px-3 py-1 rounded text-xs">
                      Alternate Materials
                    </div>
                    <div className="bg-purple-500 text-white px-3 py-1 rounded text-xs">
                      Reactive Alert
                    </div>
                  </div>

                  {/* Central flow diagram */}
                  <div className="relative h-32 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--green-primary)] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">Decision Engine</p>
                    </div>

                    {/* Flow arrows */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-xs">📦</span>
                      </div>
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                        <span className="text-xs">✅</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom sources */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-100 rounded px-2 py-1">
                      <p className="text-xs text-[var(--text-secondary)]">Suppliers</p>
                    </div>
                    <div className="bg-gray-100 rounded px-2 py-1">
                      <p className="text-xs text-[var(--text-secondary)]">Inventory</p>
                    </div>
                    <div className="bg-gray-100 rounded px-2 py-1">
                      <p className="text-xs text-[var(--text-secondary)]">Production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
            See Your Architecture Transformed
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--green-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--green-dark)] transition-colors">
              Get Architecture Assessment →
            </button>
            <button className="bg-white text-[var(--green-primary)] px-8 py-3 rounded-full border thin-border-dark font-semibold hover:bg-[var(--cream)] transition-colors">
              Download Technical Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}