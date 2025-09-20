"use client";

import { useState, useEffect } from "react";

export default function IntegrationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const integrations = [
    { name: "Snowflake", category: "Data Warehouse" },
    { name: "Databricks", category: "Analytics" },
    { name: "Salesforce", category: "CRM" },
    { name: "SAP", category: "ERP" },
    { name: "Oracle", category: "Database" },
    { name: "Tableau", category: "BI" },
    { name: "PowerBI", category: "BI" },
    { name: "AWS", category: "Cloud" },
    { name: "Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % integrations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [integrations.length]);

  return (
    <section className="section-padding bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)]">
            Don&apos;t Rip and Replace. Plug In and Profit.
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 text-lg">
            Works with whatever you&apos;ve already bought. No million-dollar migrations required.
          </p>
        </div>

        <div className="relative">
          {/* Central hub */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32 bg-[var(--green-primary)] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">TextQL</span>

              {/* Animated connection lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-20 bg-[var(--green-light)] origin-bottom"
                    style={{
                      left: "50%",
                      bottom: "50%",
                      transform: `rotate(${i * 45}deg)`,
                      opacity: currentIndex === i ? 1 : 0.3,
                      transition: "opacity 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Integration logos carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white px-6 py-4 rounded-lg border thin-border"
                >
                  <p className="font-semibold text-[var(--text-primary)]">{integration.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{integration.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <h3 className="font-medium text-[var(--green-dark)]">Databases & Warehouses</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Snowflake, BigQuery, Redshift</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium text-[var(--green-dark)]">BI & Analytics</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Tableau, PowerBI, Looker</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium text-[var(--green-dark)]">SaaS Platforms</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">Salesforce, SAP, Oracle</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium text-[var(--green-dark)]">Cloud Providers</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">AWS, Azure, GCP</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}