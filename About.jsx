/* About.jsx — about narrative + quick facts (freelance-oriented). */
const FACTS = [
  { k: 'Based in', v: 'Bogotá, Colombia' },
  { k: 'Focus', v: 'Fintech · Mobile · Cloud' },
  { k: 'Cloud', v: 'AWS · Serverless' },
  { k: 'Languages', v: 'TypeScript · Go · Python' },
  { k: 'Open to', v: 'Freelance · Contract · Remote' },
];

function About() {
  return (
    <Section id="about" label="About">
      <div className="pf-about">
        <div className="pf-about__body">
          <h2 className="pf-h2" style={{ marginTop: 0, marginBottom: 24 }}>
            I build the parts that have to be right.
          </h2>
          <p>
            I'm a software and cloud engineer from Colombia who works with founders and
            teams as a freelancer. My focus is the unforgiving end of software —
            <strong> payments, ledgers, and the infrastructure underneath them</strong> —
            where a rounding error or a dropped write is a real problem.
          </p>
          <p>
            Across three domains — a double-entry <strong>fintech</strong> backend, a
            React Native <strong>mobile</strong> finance app, and a serverless payments
            <strong> platform on AWS</strong> — the through-line is the same: correctness
            first, then observability, then scale. I write code teammates can follow and
            infrastructure that's reproducible from day one.
          </p>
          <p>
            If you have a system that has to handle money or scale without drama,
            I'm a good person to bring in. I work clearly, ship steadily, and reply fast.
          </p>
        </div>
        <aside className="pf-facts">
          {FACTS.map((f) => (
            <div className="pf-fact" key={f.k}>
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}

Object.assign(window, { About });
