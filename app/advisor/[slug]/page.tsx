import Link from "next/link";

export default function AdvisorPage({ params }: { params: { slug: string } }) {
  const advisorData = {
    "varsha-rao": {
      name: "Varsha Rao",
      title: "CEO & Founder, Zeal AI | Former CEO, Nurx",
      currentRole: "CEO & Founder at Zeal AI",
      previousRoles: ["CEO of Nurx (acquired by Thirty Madison)", "COO of Clover Health", "Head of Global Operations at Airbnb"],
      expertise: "Digital Health, Telehealth Platforms, Healthcare Operations",
      background: "Varsha brings over 20 years of experience scaling healthcare technology companies. At Nurx, she grew the direct-to-consumer telehealth platform by 250% and onboarded 200,000+ customers. Previously, she was COO at Clover Health, focusing on Medicare Advantage and preventive care analytics.",
      education: "MBA from Harvard Business School, B.A. in Mathematics and B.S. in Economics from University of Pennsylvania",
      why: "Varsha's experience scaling consumer health platforms and her deep understanding of healthcare operations brings invaluable insights to TextQL's product strategy.",
    },
    "dave-griffith": {
      name: "Dave Griffith, MD",
      title: "Healthcare Executive, Trinity Health",
      currentRole: "Healthcare Executive at Trinity Health",
      previousRoles: ["Clinical Leadership roles at Trinity Health system"],
      expertise: "Clinical Operations & Healthcare Technology",
      background: "Dr. Griffith brings deep clinical experience from Trinity Health, one of the largest Catholic health systems in the United States. His expertise in clinical operations and healthcare technology transformation provides critical guidance on real-world implementation challenges.",
      education: "MD, Clinical training in healthcare operations",
      why: "Dr. Griffith's frontline clinical experience ensures TextQL's agents address real physician and nursing workflow challenges.",
    },
    "vikram-bandugula": {
      name: "Vikram Bandugula",
      title: "Senior Director of Data Science, Elevance Health",
      currentRole: "Senior Director of Data Science at Elevance Health (formerly Anthem)",
      previousRoles: ["Healthcare data science roles focused on bias mitigation"],
      expertise: "Healthcare AI, Data Science, Bias Mitigation",
      background: "Vikram specializes in mitigating bias in healthcare AI and data science, recognizing that biased models can have life-altering consequences for patients. His work at Elevance Health (formerly Anthem) focuses on building fair and effective healthcare AI systems.",
      education: "Advanced degrees in Data Science and Healthcare Analytics",
      why: "Vikram's expertise in healthcare AI bias ensures TextQL's agents are fair, accurate, and clinically sound across diverse patient populations.",
    },
    "raghu-chandra": {
      name: "Raghu Chandra",
      title: "Healthcare Consulting Leader, Capgemini",
      currentRole: "Healthcare Digital Transformation Leader at Capgemini",
      previousRoles: ["Healthcare consulting and digital transformation projects"],
      expertise: "Healthcare Digital Transformation, Data Strategy",
      background: "Raghu leads healthcare digital transformation initiatives at Capgemini, helping health systems modernize their data infrastructure and AI capabilities. His experience spans public health, health insurance, and life sciences digital transformation.",
      education: "Advanced degrees in Healthcare Management and Technology",
      why: "Raghu's experience with enterprise healthcare transformations ensures TextQL can scale across complex health system environments.",
    },
    "jean-claude-saghbini": {
      name: "Jean-Claude Saghbini",
      title: "CTO & President of Technology, Lumeris",
      currentRole: "Chief Technology Officer and President of Technology Services at Lumeris",
      previousRoles: ["CTO at Wolters Kluwer Health", "GM and CTO at Cardinal Health (via WaveMark acquisition)"],
      expertise: "Value-Based Care Technology, Healthcare Innovation",
      background: "Jean-Claude has over 20 years of healthcare technology experience, from startups to Fortune 20 companies. At Lumeris, he integrates technological innovations with clinical processes for value-based care. He holds six patents and is a frequent speaker on healthcare technology.",
      education: "MS in Engineering and Management from MIT Sloan, MS from MIT, BS in Mechanical Engineering from UMass Dartmouth",
      why: "As the technology leader behind Lumeris's $28.8M savings with TextQL, Jean-Claude provides direct validation of our platform's enterprise impact.",
    },
  };

  const advisor = advisorData[params.slug as keyof typeof advisorData];

  if (!advisor) {
    return <div>Advisor not found</div>;
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[var(--cream-light)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/healthcare"
            className="inline-flex items-center text-[var(--green-primary)] mb-6 hover:text-[var(--green-dark)]"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Healthcare
          </Link>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-[var(--green-primary)]">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-4">
              {advisor.name}
            </h1>
            <p className="text-lg text-[var(--green-primary)] mb-6">
              {advisor.title}
            </p>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              {advisor.background}
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-medium text-[var(--text-primary)] mb-6">Experience</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <h3 className="font-medium text-[var(--text-primary)] mb-1">Current Role</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{advisor.currentRole}</p>
                </div>
                <div className="p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <h3 className="font-medium text-[var(--text-primary)] mb-2">Previous Roles</h3>
                  <ul className="space-y-1">
                    {advisor.previousRoles.map((role, index) => (
                      <li key={index} className="text-sm text-[var(--text-secondary)]">• {role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[var(--text-primary)] mb-6">Education & Expertise</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <h3 className="font-medium text-[var(--text-primary)] mb-1">Education</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{advisor.education}</p>
                </div>
                <div className="p-4 bg-[var(--cream-light)] rounded-lg border-subtle">
                  <h3 className="font-medium text-[var(--text-primary)] mb-1">Areas of Expertise</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{advisor.expertise}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[var(--green-dark)] text-white rounded-2xl">
            <h3 className="text-lg font-medium mb-3">Why {advisor.name.split(" ")[0]} Advises TextQL</h3>
            <p className="text-gray-200">{advisor.why}</p>
          </div>
        </div>
      </section>
    </div>
  );
}