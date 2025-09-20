interface AgentsInFlightProps {
  agentType: 'clinical-risk' | 'revenue-cycle' | 'population-health' | 'quality-measures';
}

export default function AgentsInFlightSection({ agentType }: AgentsInFlightProps) {
  const agentConfigs = {
    'clinical-risk': {
      title: 'Clinical Risk Prevention Agents',
      subtitle: 'Deploy our Patient Risk Agent that has been custom trained for readmission prevention on 2,847 patient cases, at enterprise scale',
      useCases: ['Patient Outreach', 'Readmit Forecaster', 'Prevent High Costs', 'Provider Evaluator'],
      agents: [
        { name: 'Diabetes Houston Readmission Agent', status: 'active', location: 'Houston Medical Center', metric: '127 alerts today' },
        { name: 'CHF Austin Prevention Agent', status: 'active', location: 'Austin Regional', metric: '89 interventions' },
        { name: 'COPD Dallas Monitoring Agent', status: 'active', location: 'Dallas Presbyterian', metric: '156 at-risk patients' },
        { name: 'Cardiac San Antonio Agent', status: 'learning', location: 'San Antonio Methodist', metric: 'Training on 2.1M records' },
        { name: 'Stroke Houston Prevention Agent', status: 'active', location: 'Houston General', metric: '43 early warnings' },
        { name: 'Sepsis Dallas Detection Agent', status: 'active', location: 'Dallas Medical City', metric: '67 cases flagged' },
        { name: 'Pneumonia Austin Agent', status: 'deploying', location: 'Austin Health Network', metric: 'Initializing...' },
        { name: 'Fall Risk Houston Agent', status: 'active', location: 'Houston Methodist', metric: '234 assessments' },
      ]
    },
    'revenue-cycle': {
      title: 'Revenue Cycle Intelligence Agents',
      subtitle: 'Deploy our Claims Intelligence Agent that has been custom trained for denial prevention on 1.2B+ claims, at health system scale',
      useCases: ['Claims Intelligence', 'Research Fraud', 'Denial Prediction', 'Data Recon for Claim Lifecycle'],
      agents: [
        { name: 'Cardiology Claims Houston Agent', status: 'active', location: 'Houston Heart Center', metric: '$2.4M recovered' },
        { name: 'Orthopedic Austin Denial Agent', status: 'active', location: 'Austin Bone & Joint', metric: '94% approval rate' },
        { name: 'Emergency Dallas Revenue Agent', status: 'active', location: 'Dallas Emergency Network', metric: '$1.8M saved' },
        { name: 'Oncology San Antonio Agent', status: 'learning', location: 'San Antonio Cancer Center', metric: 'Analyzing 450K claims' },
        { name: 'Radiology Houston Fraud Agent', status: 'active', location: 'Houston Imaging', metric: '23 fraud cases detected' },
        { name: 'Surgery Dallas Prior-Auth Agent', status: 'active', location: 'Dallas Surgical', metric: '98% auto-approval' },
        { name: 'Pharmacy Austin Billing Agent', status: 'deploying', location: 'Austin Pharmacy Network', metric: 'Initializing...' },
        { name: 'Mental Health Houston Agent', status: 'active', location: 'Houston Behavioral', metric: '$890K recovered' },
      ]
    },
    'population-health': {
      title: 'Population Health Management Agents',
      subtitle: 'Deploy our Population Agent that has been custom trained for population management on 500K+ patient cohorts, at regional scale',
      useCases: ['Patient Outreach', 'Patients Pay More', 'Provider Evaluator', 'Give Visibility'],
      agents: [
        { name: 'Diabetes Houston Population Agent', status: 'active', location: 'Houston Metro', metric: '12,450 managed patients' },
        { name: 'Hypertension Austin Cohort Agent', status: 'active', location: 'Austin Region', metric: '8,900 in care programs' },
        { name: 'Obesity Dallas Intervention Agent', status: 'active', location: 'Dallas County', metric: '15,600 risk assessments' },
        { name: 'Depression San Antonio Agent', status: 'learning', location: 'San Antonio Mental Health', metric: 'Analyzing 67K patients' },
        { name: 'Maternal Houston Care Agent', status: 'active', location: 'Houston Womens Health', metric: '3,400 expecting mothers' },
        { name: 'Pediatric Dallas Wellness Agent', status: 'active', location: 'Dallas Childrens', metric: '9,800 children monitored' },
        { name: 'Senior Austin Care Agent', status: 'deploying', location: 'Austin Senior Health', metric: 'Initializing...' },
        { name: 'Cancer Houston Survivor Agent', status: 'active', location: 'Houston Oncology', metric: '2,100 survivors tracked' },
      ]
    },
    'quality-measures': {
      title: 'Quality Measures Reporting Agents',
      subtitle: 'Deploy our Quality Agent that has been custom trained for HEDIS reporting on 200+ quality measures, at multi-state scale',
      useCases: ['Prediction Stage', 'Submission Stage', 'Processing Stage', 'Data Recon for Lifecycle'],
      agents: [
        { name: 'HEDIS Houston Reporting Agent', status: 'active', location: 'Houston Quality Dept', metric: '47 measures tracked' },
        { name: 'MIPS Austin Scoring Agent', status: 'active', location: 'Austin Provider Network', metric: '94% quality scores' },
        { name: 'CMS Dallas Submission Agent', status: 'active', location: 'Dallas Health System', metric: '100% on-time reports' },
        { name: 'NCQA San Antonio Agent', status: 'learning', location: 'San Antonio Quality', metric: 'Processing 890K records' },
        { name: 'Star Rating Houston Agent', status: 'active', location: 'Houston Medicare Advantage', metric: '4.5 star average' },
        { name: 'Core Measures Dallas Agent', status: 'active', location: 'Dallas Regional', metric: '23 measures automated' },
        { name: 'Patient Safety Austin Agent', status: 'deploying', location: 'Austin Safety Council', metric: 'Initializing...' },
        { name: 'Readmission Houston HRRP Agent', status: 'active', location: 'Houston Network', metric: '12% reduction achieved' },
      ]
    }
  };

  const config = agentConfigs[agentType];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'learning': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'deploying': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="section-padding bg-[var(--cream-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-margin-lg">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur rounded-full mb-6 border thin-border">
            <span className="text-sm font-medium text-[var(--green-dark)]">
              🚀 Agents in Flight
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-[var(--text-primary)] mb-6">
            {config.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-4xl mx-auto mb-8">
            {config.subtitle}
          </p>

          {/* Use Cases */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {config.useCases.map((useCase, index) => (
              <div key={index} className="px-4 py-2 bg-[var(--green-mint)] text-[var(--green-dark)] rounded-full border border-[var(--green-light)]">
                <span className="text-sm font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agents Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-[var(--border-dark)]">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-light)]">
            <h3 className="text-xl font-medium text-[var(--text-primary)]">Live Agent Dashboard</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-[var(--text-secondary)]">Active ({config.agents.filter(a => a.status === 'active').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-[var(--text-secondary)]">Learning ({config.agents.filter(a => a.status === 'learning').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-[var(--text-secondary)]">Deploying ({config.agents.filter(a => a.status === 'deploying').length})</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.agents.map((agent, index) => (
              <div key={index} className="bg-[var(--cream-light)] rounded-xl p-4 card-border group hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <h4 className="font-medium text-[var(--text-primary)] text-sm mb-2 leading-tight">
                  {agent.name}
                </h4>

                <p className="text-xs text-[var(--text-secondary)] mb-3 border-b border-[var(--border-light)] pb-2">
                  {agent.location}
                </p>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[var(--green-dark)]">{agent.metric}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-[var(--green-dark)]">{config.agents.length}</p>
                <p className="text-xs text-[var(--text-secondary)]">Total Agents</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--green-dark)]">{config.agents.filter(a => a.status === 'active').length}</p>
                <p className="text-xs text-[var(--text-secondary)]">Currently Active</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--green-dark)]">24/7</p>
                <p className="text-xs text-[var(--text-secondary)]">Monitoring</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--green-dark)]">Real-time</p>
                <p className="text-xs text-[var(--text-secondary)]">Updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4">
            Deploy Your Agent Fleet Today
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--green-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--green-dark)] transition-colors">
              Start Agent Deployment →
            </button>
            <button className="bg-white text-[var(--green-primary)] px-8 py-3 rounded-full border thin-border-dark font-semibold hover:bg-[var(--cream)] transition-colors">
              See Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}