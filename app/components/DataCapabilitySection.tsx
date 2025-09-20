export default function DataCapabilitySection() {
  return (
    <section className="section-padding-lg bg-[var(--green-dark)] text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-8">
              <span className="text-sm font-medium text-white">
                🚀 Zero Configuration Required
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              Building AI that can query{" "}
              <span className="text-[var(--green-mint)]">100,000 tables</span>{" "}
              with petabytes of data and{" "}
              <span className="text-[var(--green-mint)]">zero configuration</span>
            </h2>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              While your team struggles with a handful of databases, our agents effortlessly navigate
              enterprise-scale data landscapes that would crash traditional systems.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-[var(--green-mint)]">100,000+</p>
                <p className="text-gray-300 text-sm">Tables Queryable</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--green-mint)]">Petabytes</p>
                <p className="text-gray-300 text-sm">Data Scale</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--green-mint)]">0</p>
                <p className="text-gray-300 text-sm">Configuration Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--green-mint)]">Instant</p>
                <p className="text-gray-300 text-sm">Query Response</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--green-mint)] text-[var(--green-dark)] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                See Live Demo →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Test Your Data Scale
              </button>
            </div>
          </div>

          {/* Right side - Data visualization */}
          <div className="relative">
            {/* Main visualization container */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">What is TextQL?</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left: Structured Data + Single Source */}
                <div className="bg-[var(--green-primary)] rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs mr-2">Structured Data</span>
                    <span className="text-white text-xs">Single Source</span>
                  </div>
                  <div className="bg-white rounded p-3 space-y-2">
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Databricks</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tableau</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Snowflake</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Oracle</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Palantir</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">SAP</span>
                    </div>
                  </div>
                </div>

                {/* Top Right: Structured Data + Multi Source */}
                <div className="bg-[var(--green-primary)] rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs mr-2">Structured Data</span>
                    <span className="text-white text-xs">Multi Source</span>
                  </div>
                  <div className="bg-white rounded p-3 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[var(--green-dark)]">TextQL</div>
                      <div className="text-xs text-gray-600">Unified Layer</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Left: Unstructured Data + Single Source */}
                <div className="bg-[var(--green-primary)] rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs mr-2">Unstructured Data</span>
                    <span className="text-white text-xs">Single Source</span>
                  </div>
                  <div className="bg-white rounded p-3 space-y-2">
                    <div className="text-center">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Google Workspace</span>
                      <div className="text-xs text-gray-600 mt-1">with Gemini</div>
                    </div>
                    <div className="text-center">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Copilot</span>
                    </div>
                    <div className="text-center">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Dropbox</span>
                      <div className="text-xs text-gray-600 mt-1">Dash</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right: Unstructured Data + Multi Source */}
                <div className="bg-[var(--green-primary)] rounded-lg p-3">
                  <div className="flex items-center mb-3">
                    <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs mr-2">Unstructured Data</span>
                    <span className="text-white text-xs">Multi Source</span>
                  </div>
                  <div className="bg-white rounded p-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-center">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded block mb-1">ChatGPT</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded block">Claude</span>
                      </div>
                      <div className="text-center">
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded block mb-1">Notion</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded block mb-1">Glean</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded block">Gemini</span>
                      </div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Rogo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 bg-[var(--green-mint)] text-[var(--green-dark)] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              100K+ Tables
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-[var(--green-dark)] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Zero Setup
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}