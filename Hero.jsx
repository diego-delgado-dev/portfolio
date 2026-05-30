/* Hero.jsx — intro / above-the-fold, with layout variants. */

function HeroStatusBar() {
  return (
    <span className="pf-hero__status">
      <span className="dot" />
      Available for freelance &amp; contract work
    </span>
  );
}

function HeroHeadline() {
  return (
    <h1 className="pf-h1">
      I build fintech systems<br />
      that <span className="pf-hero__accent">handle real money.</span>
    </h1>
  );
}

function HeroLead() {
  return (
    <p className="pf-hero__lead">
      I'm Diego — a software and cloud engineer from Bogotá. I design and ship
      payment backends, finance apps, and serverless infrastructure that stay
      correct, observable, and calm in production.
    </p>
  );
}

function HeroCTAs() {
  return (
    <div className="pf-hero__cta">
      <Button variant="primary" icon="arrowRight" href="#work">View selected work</Button>
      <Button variant="secondary" icon="briefcase" href={DD.upwork} target="_blank" rel="noopener">Hire me on Upwork</Button>
    </div>
  );
}

function HeroMeta() {
  return (
    <div className="pf-hero__meta">
      <span className="item"><Icon name="pin" size={17} /> Bogotá, Colombia</span>
      <span className="item"><Icon name="cloud" size={17} /> AWS · Serverless</span>
      <span className="item"><Icon name="clock" size={17} /> Replies within a day</span>
    </div>
  );
}

function HeroTerminal() {
  return (
    <div className="pf-terminal" aria-hidden="true">
      <div className="pf-terminal__bar">
        <span className="pf-terminal__dot" />
        <span className="pf-terminal__dot" />
        <span className="pf-terminal__dot" />
        <span className="pf-terminal__name">diego@bogota ~ whoami</span>
      </div>
      <div className="pf-terminal__body">
        <span className="ln"><span className="c"># role</span></span>
        <span className="ln"><span className="k">role</span>: <span className="s">"Software / Cloud Engineer"</span></span>
        <span className="ln"><span className="k">focus</span>: [<span className="s">"fintech"</span>, <span className="s">"mobile"</span>, <span className="s">"iaas"</span>]</span>
        <span className="ln"><span className="k">stack</span>: [<span className="s">"TypeScript"</span>, <span className="s">"AWS"</span>, <span className="s">"Terraform"</span>]</span>
        <span className="ln"><span className="k">based</span>: <span className="s">"Bogotá, CO"</span> <span className="c">// GMT−5</span></span>
        <span className="ln"><span className="k">status</span>: <span className="s">"available"</span> <span className="c">// open to freelance</span></span>
      </div>
    </div>
  );
}

function HeroStats() {
  return (
    <div className="pf-hero__stats">
      <div className="pf-hero__stat"><div className="num">3</div><div className="cap">domains shipped</div></div>
      <div className="pf-hero__stat"><div className="num">99.99%</div><div className="cap">platform uptime</div></div>
      <div className="pf-hero__stat"><div className="num">100%</div><div className="cap">ledger correctness</div></div>
    </div>
  );
}

function Hero({ layout = 'statement', showMetrics = true }) {
  return (
    <header className={`pf-hero pf-hero--${layout}`} id="top">
      <div className="pf-hero__grid" />
      <div className="pf-container">
        {layout === 'split' ? (
          <div className="pf-hero__inner pf-reveal">
            <div className="pf-hero__split">
              <div>
                <HeroStatusBar />
                <div><Eyebrow>{DD.role} · {DD.location}</Eyebrow></div>
                <HeroHeadline />
                <HeroLead />
                <HeroCTAs />
              </div>
              <HeroTerminal />
            </div>
            <HeroMeta />
          </div>
        ) : (
          <div className="pf-hero__inner pf-reveal">
            <HeroStatusBar />
            <div><Eyebrow>{DD.role} · {DD.location}</Eyebrow></div>
            <HeroHeadline />
            <HeroLead />
            <HeroCTAs />
            {layout === 'stats' && showMetrics ? <HeroStats /> : <HeroMeta />}
          </div>
        )}
      </div>
    </header>
  );
}

Object.assign(window, { Hero });
