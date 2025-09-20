export default function FeaturesSection() {
  const features = [
    {
      title: "Speaks Your Industry's Language",
      description: "No more explaining basic concepts. Agents understand healthcare, finance, and insurance from day one.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Never Fail Another Audit",
      description: "SOC 2, HIPAA, GDPR compliant out of the box. Your auditors will actually thank you.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Plug Into Everything You Already Own",
      description: "Don't rip and replace. Works with Snowflake, Tableau, Salesforce, SAP—whatever you've got.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Fix Problems Before You Know They Exist",
      description: "Agents detect and fix data issues automatically. Sleep peacefully knowing your data won't break.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Handle 100x More Without Hiring",
      description: "Process petabytes while your competition struggles with gigabytes. Scale without the headcount.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Know What Happens Before It Happens",
      description: "Predictive alerts save millions. Get insights that turn into revenue before your competitors even see the data.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            Stop Wasting $2.4M on Analysts Who Can't Keep Up
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-3xl mx-auto">
            Your data team is drowning. 90% of requests never get answered. Our agents work 24/7 and never ask for a raise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-[var(--cream-light)] rounded-xl card-border-strong"
            >
              <div className="w-12 h-12 bg-[var(--green-mint)] rounded-lg flex items-center justify-center text-[var(--green-dark)] mb-4 group-hover:bg-[var(--green-light)] transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}