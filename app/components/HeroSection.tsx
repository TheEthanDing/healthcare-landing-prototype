import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--cream-light)] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-[var(--green-mint)] rounded-full mb-6">
              <span className="text-sm font-medium text-[var(--green-dark)]">
                🚨 1M+ Agents Already Deployed
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--text-primary)] leading-tight">
              Turn 90% of Your Abandoned{" "}
              <span className="text-[var(--green-primary)]">Data Requests</span>{" "}
              Into Revenue
            </h1>

            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              Stop losing millions to the &ldquo;long tail&rdquo; of data analysis. Our AI agents tackle the 90% of requests your team can&apos;t afford to touch—delivering insights that pay for themselves in weeks, not months.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="inline-block bg-[var(--green-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--green-dark)] transition-colors font-bold text-center"
              >
                Calculate My ROI in 60 Seconds →
              </Link>
              <Link
                href="#solutions"
                className="inline-block bg-white text-[var(--green-primary)] px-8 py-3 rounded-full border thin-border-dark hover:bg-[var(--cream)] transition-colors font-semibold text-center"
              >
                See $28.8M Case Study
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-sm text-[var(--text-light)]">Already Deployed</p>
                <p className="text-2xl font-bold text-[var(--text-primary)]">1M+ Agents</p>
              </div>
              <div className="w-px h-12 bg-[var(--border-light)]"></div>
              <div>
                <p className="text-sm text-[var(--text-light)]">Average ROI</p>
                <p className="text-2xl font-bold text-[var(--text-primary)]">10x in Year 1</p>
              </div>
            </div>
          </div>

          {/* Right content - Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 card-border-strong">
              <div className="space-y-0">
                {/* Mock workflow visualization */}
                <div className="flex items-center gap-4 py-4 border-b border-[var(--border-light)]">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center border border-[var(--green-light)]">
                    <span className="text-[var(--green-dark)] font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--text-primary)]">5-Min Setup</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Zero IT involvement required</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4 border-b border-[var(--border-light)]">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center border border-[var(--green-light)]">
                    <span className="text-[var(--green-dark)] font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--text-primary)]">AI Learns Your Data</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Automatically maps all relationships</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4 border-b border-[var(--border-light)]">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center border border-[var(--green-light)]">
                    <span className="text-[var(--green-dark)] font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--text-primary)]">Generate Revenue</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Turn insights into immediate profit</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center border border-[var(--green-light)]">
                    <span className="text-[var(--green-dark)] font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[var(--text-primary)]">Scale Infinitely</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Handle 100x more analysis requests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--green-light)] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--green-mint)] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}