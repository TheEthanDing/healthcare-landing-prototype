import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding-lg bg-[var(--green-dark)] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 pattern-grid"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">
          Your Competition Is Already Using AI Agents
        </h2>

        <p className="text-xl text-gray-200 mb-2 max-w-2xl mx-auto font-semibold">
          Don&apos;t Get Left Behind
        </p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          While you&apos;re reading this, 847 companies are saving millions with our agents. Every day you wait costs you money.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#contact"
            className="inline-block bg-[var(--green-mint)] text-[var(--green-dark)] px-10 py-4 rounded-full hover:bg-white transition-all font-bold text-lg shadow-lg"
          >
            Get My ROI Calculator (Free) →
          </Link>
          <Link
            href="#solutions"
            className="inline-block bg-transparent text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white/10 transition-colors font-semibold"
          >
            See $28.8M Case Study
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-[var(--green-mint)]">847</p>
            <p className="text-gray-200 mt-2">companies ahead of you</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--green-mint)]">$28.8M</p>
            <p className="text-gray-200 mt-2">Lumeris saves annually</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[var(--green-mint)]">30 days</p>
            <p className="text-gray-200 mt-2">to positive ROI</p>
          </div>
        </div>
      </div>
    </section>
  );
}