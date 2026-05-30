/* Stack.jsx — capabilities / tech stack grid (fintech / mobile / cloud). */
const STACK = [
  {
    icon: 'scale',
    title: 'Fintech & backend',
    items: ['Double-entry ledgers', 'Idempotency', 'Node.js', 'gRPC', 'PostgreSQL', 'Event sourcing'],
  },
  {
    icon: 'smartphone',
    title: 'Mobile',
    items: ['React Native', 'Expo', 'TypeScript', 'Biometrics', 'Open Banking', 'Offline-first'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & IaaS',
    items: ['AWS', 'Lambda', 'API Gateway', 'DynamoDB', 'EventBridge', 'Terraform'],
  },
  {
    icon: 'code',
    title: 'Languages',
    items: ['TypeScript', 'Go', 'Python', 'Node.js', 'SQL', 'Bash'],
  },
  {
    icon: 'activity',
    title: 'Observability',
    items: ['OpenTelemetry', 'CloudWatch', 'Grafana', 'Structured logs', 'SLOs'],
  },
  {
    icon: 'shield',
    title: 'Practices',
    items: ['PCI-aware design', 'IaC', 'CI/CD', 'Testing', 'Cost optimization'],
  },
];

function Stack() {
  return (
    <Section id="stack" label="Stack" title="What I work with"
      intro="A working toolkit, not a buzzword list. These are the things I reach for in production.">
      <div className="pf-stack">
        {STACK.map((s) => (
          <div className="pf-stack__card" key={s.title}>
            <span className="pf-stack__icon"><Icon name={s.icon} size={20} /></span>
            <h3 className="pf-h3">{s.title}</h3>
            <div className="pf-stack__list">
              {s.items.map((it) => <Tag key={it}>{it}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Stack });
