/* Contact.jsx — dark contact panel with working (fake) form + footer. */
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <Section id="contact" label="Contact">
      <div className="pf-contact">
        <div className="pf-contact__grid" />
        <div className="pf-contact__inner">
          <div>
            <span className="pf-eyebrow eb">Let's build something</span>
            <h2 className="pf-h2" style={{ marginTop: 12 }}>Have a system to build?</h2>
            <p>
              Tell me what you're working on — a payments backend, a finance app, a
              migration to serverless. I usually reply within a day.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28 }}>
              <a href={`mailto:${DD.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#cfe0f0', fontSize: 14, textDecoration: 'none' }}>
                <Icon name="mail" size={17} style={{ color: 'var(--blue-300)' }} /> {DD.email}
              </a>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#9fb2c6', fontSize: 14 }}>
                <Icon name="pin" size={17} style={{ color: 'var(--blue-300)' }} /> Bogotá, Colombia · GMT−5
              </span>
              <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
                <a className="pf-btn pf-btn--secondary" href={DD.upwork} target="_blank" rel="noopener" style={{ background: 'transparent', color: '#eaf1f8', borderColor: 'rgba(255,255,255,.18)' }}>
                  <span>Upwork</span><Icon name="arrowUpRight" size={15} />
                </a>
                <a className="pf-btn pf-btn--secondary" href={DD.github} target="_blank" rel="noopener" style={{ background: 'transparent', color: '#eaf1f8', borderColor: 'rgba(255,255,255,.18)' }}>
                  <span>GitHub</span><Icon name="arrowUpRight" size={15} />
                </a>
                <a className="pf-btn pf-btn--secondary" href={DD.linkedin} target="_blank" rel="noopener" style={{ background: 'transparent', color: '#eaf1f8', borderColor: 'rgba(255,255,255,.18)' }}>
                  <span>LinkedIn</span><Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="pf-form__ok">
                <Icon name="check" size={18} /> Thanks — I'll be in touch shortly.
              </div>
            ) : (
              <form className="pf-form" onSubmit={submit}>
                <div className="pf-field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" className="pf-input" value={form.name} onChange={update('name')} placeholder="Your name" required />
                </div>
                <div className="pf-field">
                  <label htmlFor="cf-email">Email</label>
                  <input id="cf-email" type="email" className="pf-input" value={form.email} onChange={update('email')} placeholder="you@company.com" required />
                </div>
                <div className="pf-field">
                  <label htmlFor="cf-msg">Message</label>
                  <textarea id="cf-msg" className="pf-textarea" value={form.message} onChange={update('message')} placeholder="What are you building?" required />
                </div>
                <button className="pf-btn pf-btn--primary" type="submit">
                  <span>Send message</span><Icon name="send" size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="pf-footer">
      <div className="pf-container pf-footer__inner">
        <span className="pf-footer__copy">© 2026 {DD.name} · Freelance software &amp; cloud engineer · Bogotá</span>
        <div className="pf-footer__social">
          <a className="pf-iconbtn" href={DD.github} target="_blank" rel="noopener" aria-label="GitHub"><Icon name="github" size={18} /></a>
          <a className="pf-iconbtn" href={DD.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
          <a className="pf-iconbtn" href={DD.upwork} target="_blank" rel="noopener" aria-label="Upwork"><Icon name="briefcase" size={18} /></a>
          <a className="pf-iconbtn" href={`mailto:${DD.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
