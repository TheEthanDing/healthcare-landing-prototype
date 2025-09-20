export default function AdvisoryBoard() {
  const advisors = [
    {
      name: "Dr. Sarah Johnson",
      title: "Former CMO, Mayo Clinic",
      expertise: "Clinical Operations & Digital Health",
      image: "/advisor-placeholder.png",
    },
    {
      name: "Michael Chen",
      title: "Ex-CTO, Epic Systems",
      expertise: "Healthcare IT & Interoperability",
      image: "/advisor-placeholder.png",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Chief Data Officer, Kaiser Permanente",
      expertise: "Healthcare Analytics & AI",
      image: "/advisor-placeholder.png",
    },
    {
      name: "James Williams",
      title: "Former CEO, Cerner Corporation",
      expertise: "Healthcare Technology Strategy",
      image: "/advisor-placeholder.png",
    },
    {
      name: "Dr. Lisa Park",
      title: "Director, Stanford Medicine AI Lab",
      expertise: "Medical AI & Research",
      image: "/advisor-placeholder.png",
    },
  ];

  return (
    <section className="section-padding-lg bg-gradient-to-br from-[var(--cream)] to-[var(--cream-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-3 py-1 bg-white rounded-full mb-4 border thin-border">
            <span className="text-sm font-medium text-[var(--green-dark)]">🏆 Trusted by the Best</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            CEOs Who Built $100B+ Healthcare Companies Back Us
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg max-w-2xl mx-auto">
            Former leaders from Mayo Clinic, Epic, Cerner, and Kaiser guide our healthcare strategy
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <div className="text-[var(--green-light)]">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-medium text-sm text-[var(--text-primary)] max-w-[150px] mx-auto">{advisor.name}</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-[150px] mx-auto line-clamp-2">{advisor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}