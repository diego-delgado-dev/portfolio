/* Work.jsx — selected work with 3 real projects + layout variants + case study modal. */
const PROJECTS = [
  {
    icon: 'scale',
    cat: 'Fintech · Backend',
    title: 'Ledger Microservice',
    desc: 'A double-entry accounting ledger built for financial correctness — immutable journal, always-balanced invariants, and idempotent postings that survive retries.',
    metrics: [{ num: '100%', cap: 'balanced invariant' }, { num: '2,400', cap: 'postings / sec' }],
    metricsFull: [{ num: '100%', cap: 'balanced invariant' }, { num: '2,400', cap: 'postings / sec' }, { num: '0', cap: 'reconciliation breaks' }],
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'gRPC', 'Docker'],
    detail: 'Money systems can\u2019t afford rounding drift or lost writes. I built a double-entry ledger service where every transaction posts balanced debits and credits inside a single database transaction, so the books are correct by construction. Postings are idempotent on a client key, the journal is append-only for a clean audit trail, and balances are derived from immutable entries rather than mutated in place. Reads are served from materialised account balances kept in sync transactionally.',
  },
  {
    icon: 'smartphone',
    cat: 'Mobile · React Native',
    title: 'FinFlow Mobile',
    desc: 'A personal-finance app that aggregates bank accounts over open banking, with biometric login and an offline-first ledger that syncs when you reconnect.',
    metrics: [{ num: '4.8\u2605', cap: 'app store rating' }, { num: '<2s', cap: 'cold start' }],
    metricsFull: [{ num: '4.8\u2605', cap: 'app store rating' }, { num: '<2s', cap: 'cold start' }, { num: '12k', cap: 'monthly users' }],
    tags: ['React Native', 'TypeScript', 'Expo', 'Open Banking', 'Biometrics'],
    detail: 'FinFlow gives people one calm view of money spread across many banks. It connects accounts through an open-banking aggregator, secures sessions behind Face ID / fingerprint, and keeps a local offline-first store so the app is instant and usable on a subway. Transactions are categorised on-device, balances reconcile in the background, and sync is conflict-aware so nothing is lost when the network comes back. Shipped to both App Store and Play Store from one TypeScript codebase.',
  },
  {
    icon: 'cloud',
    cat: 'Cloud · IaaS',
    title: 'PayGate API',
    desc: 'A multi-tenant payments orchestration API on serverless AWS — idempotent, PCI-aware, and architected to scale to zero between bursts without losing a transaction.',
    metrics: [{ num: '99.99%', cap: 'uptime' }, { num: '120ms', cap: 'p99 latency' }],
    metricsFull: [{ num: '99.99%', cap: 'uptime' }, { num: '120ms', cap: 'p99 latency' }, { num: '40+', cap: 'tenants' }],
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'EventBridge', 'Terraform'],
    detail: 'PayGate routes payments for many tenants through one hardened API without anyone\u2019s traffic touching anyone else\u2019s data. It runs fully serverless \u2014 API Gateway, Lambda, DynamoDB, and an EventBridge backbone \u2014 so cost tracks usage and the platform scales to zero between bursts. Every request is idempotent, sensitive data is tokenised so the system stays out of PCI scope, and the whole environment is reproducible from Terraform across regions. Webhooks retry with backoff and a dead-letter queue, so a flaky downstream never drops a payment.',
  },
];

function CaseStudyModal({ project, showMetrics, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div className="pf-modal__scrim" onClick={onClose}>
      <div className="pf-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="pf-modal__head">
          <div>
            <Eyebrow>{project.cat}</Eyebrow>
            <h3 className="pf-h2" style={{ fontSize: '1.7rem', marginTop: 8 }}>{project.title}</h3>
          </div>
          <button className="pf-iconbtn pf-modal__close" onClick={onClose} aria-label="Close" type="button">
            <Icon name="x" size={18} />
          </button>
        </div>
        <div className="pf-modal__body">
          {showMetrics && (
            <div className="pf-modal__metrics">
              {project.metricsFull.map((m, i) => (
                <div className="pf-modal__metric" key={i}>
                  <div className="num">{m.num}</div>
                  <div className="cap">{m.cap}</div>
                </div>
              ))}
            </div>
          )}
          <p>{project.detail}</p>
          <div className="pf-modal__tags">
            {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- card variant ---- */
function ProjectCard({ project, showMetrics, onOpen }) {
  return (
    <button className="pf-project" onClick={onOpen} type="button">
      <div className="pf-project__top">
        <span className="pf-project__icon"><Icon name={project.icon} size={22} /></span>
        <span className="pf-project__arrow"><Icon name="arrowUpRight" size={20} /></span>
      </div>
      <div className="pf-project__head">
        <span className="pf-project__cat">{project.cat}</span>
        <h3 className="pf-h3">{project.title}</h3>
      </div>
      <p className="pf-project__desc">{project.desc}</p>
      {showMetrics && (
        <div className="pf-project__metrics">
          {project.metrics.map((m, i) => (
            <div className="pf-project__metric" key={i}>
              <div className="num">{m.num}</div>
              <div className="cap">{m.cap}</div>
            </div>
          ))}
        </div>
      )}
      <div className="pf-project__tags">
        {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </button>
  );
}

/* ---- list variant ---- */
function ProjectRow({ project, showMetrics, onOpen }) {
  return (
    <button className="pf-row" onClick={onOpen} type="button">
      <span className="pf-row__icon"><Icon name={project.icon} size={22} /></span>
      <span className="pf-row__main">
        <span className="pf-project__cat">{project.cat}</span>
        <span className="pf-row__title">{project.title}</span>
        <span className="pf-row__desc">{project.desc}</span>
      </span>
      {showMetrics ? (
        <span className="pf-row__metrics">
          {project.metrics.map((m, i) => (
            <span className="pf-row__metric" key={i}>
              <div className="num">{m.num}</div>
              <div className="cap">{m.cap}</div>
            </span>
          ))}
        </span>
      ) : <span />}
      <span className="pf-row__arrow"><Icon name="arrowUpRight" size={22} /></span>
    </button>
  );
}

/* ---- index variant ---- */
function ProjectIndex({ project, n, showMetrics, onOpen }) {
  return (
    <button className="pf-idx" onClick={onOpen} type="button">
      <span className="pf-idx__num">{String(n).padStart(2, '0')}</span>
      <span className="pf-idx__body">
        <span className="pf-idx__top">
          <span className="pf-idx__title">{project.title}</span>
          <span className="pf-project__cat">{project.cat}</span>
        </span>
        <span className="pf-idx__desc">{project.desc}</span>
        {showMetrics && (
          <span className="pf-idx__metrics">
            {project.metrics.map((m, i) => (
              <span className="pf-idx__metric" key={i}>
                <div className="num">{m.num}</div>
                <div className="cap">{m.cap}</div>
              </span>
            ))}
          </span>
        )}
        <span className="pf-idx__tags">
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </span>
      </span>
    </button>
  );
}

function Work({ cardLayout = 'cards', showMetrics = true }) {
  const [active, setActive] = React.useState(null);
  return (
    <Section id="work" label="Selected work" title="Three systems I've shipped"
      intro="Each one is built around the same idea: get the money right, keep it observable, and let it scale without drama. Tap any project for the story.">
      {cardLayout === 'cards' && (
        <div className="pf-work__grid pf-work__grid--cards">
          {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} showMetrics={showMetrics} onOpen={() => setActive(p)} />)}
        </div>
      )}
      {cardLayout === 'list' && (
        <div className="pf-work__list">
          {PROJECTS.map((p, i) => <ProjectRow key={i} project={p} showMetrics={showMetrics} onOpen={() => setActive(p)} />)}
        </div>
      )}
      {cardLayout === 'index' && (
        <div className="pf-work__index">
          {PROJECTS.map((p, i) => <ProjectIndex key={i} n={i + 1} project={p} showMetrics={showMetrics} onOpen={() => setActive(p)} />)}
        </div>
      )}
      {active && <CaseStudyModal project={active} showMetrics={showMetrics} onClose={() => setActive(null)} />}
    </Section>
  );
}

Object.assign(window, { Work });
