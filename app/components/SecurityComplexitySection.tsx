export default function SecurityComplexitySection() {
  return (
    <section className="section-padding bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border thin-border">
            <span className="text-sm font-medium text-[var(--green-dark)]">
              🔒 Enterprise Security & Complexity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-6">
            Built for Healthcare's Unique Challenges
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
            Healthcare data is different. We understand HIPAA, clinical workflows, and the complexity that breaks other platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Security & Compliance */}
          <div className="bg-white rounded-2xl p-8 card-border-strong">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[var(--green-mint)] rounded-xl flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">Security & Compliance</h3>
                <p className="text-sm text-[var(--text-secondary)]">Healthcare-grade protection</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">SOC 2 Type II</p>
                <p className="text-xs text-[var(--text-secondary)]">Certified</p>
              </div>
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">HIPAA</p>
                <p className="text-xs text-[var(--text-secondary)]">Compliant</p>
              </div>
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">HITECH</p>
                <p className="text-xs text-[var(--text-secondary)]">Ready</p>
              </div>
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">FDA Class II</p>
                <p className="text-xs text-[var(--text-secondary)]">Validated</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">End-to-end encryption in transit and at rest</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Complete audit trails for every patient interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Role-based access controls and data sovereignty</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Private cloud deployment options</span>
              </li>
            </ul>
          </div>

          {/* Healthcare Complexity */}
          <div className="bg-white rounded-2xl p-8 card-border-strong">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[var(--green-mint)] rounded-xl flex items-center justify-center">
                <span className="text-3xl">🧬</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[var(--text-primary)]">Healthcare Complexity</h3>
                <p className="text-sm text-[var(--text-secondary)]">Enterprise healthcare scale</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">100K+</p>
                <p className="text-xs text-[var(--text-secondary)]">Patient Records</p>
              </div>
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">50+</p>
                <p className="text-xs text-[var(--text-secondary)]">Data Sources</p>
              </div>
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">24/7</p>
                <p className="text-xs text-[var(--text-secondary)]">Monitoring</p>
              </div>
              <div className="text-center p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                <p className="text-lg font-bold text-[var(--green-dark)]">Real-time</p>
                <p className="text-xs text-[var(--text-secondary)]">Processing</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Handles complex clinical terminology and medical coding</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Scales across multi-facility health systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Integrates with legacy systems and modern cloud platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[var(--green-primary)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--text-secondary)]">Adapts to changing regulations and clinical guidelines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-[var(--text-primary)] mb-6">
            Trusted by Leading Healthcare Organizations
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--green-dark)]">847</p>
              <p className="text-sm text-[var(--text-secondary)]">Hospitals</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-light)]"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--green-dark)]">1M+</p>
              <p className="text-sm text-[var(--text-secondary)]">Patients Protected</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-light)]"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--green-dark)]">$500M+</p>
              <p className="text-sm text-[var(--text-secondary)]">Savings Generated</p>
            </div>
            <div className="w-px h-12 bg-[var(--border-light)]"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--green-dark)]">Zero</p>
              <p className="text-sm text-[var(--text-secondary)]">Security Incidents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}