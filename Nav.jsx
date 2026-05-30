/* Nav.jsx — sticky top navigation with theme toggle + mobile menu. */
const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`pf-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="pf-container pf-nav__inner">
        <a className="pf-brand" href="#top">
          <span className="pf-brand__mark">dd</span>
          <span className="pf-brand__name">Diego Delgado</span>
        </a>

        <div className="pf-nav__links">
          {NAV_LINKS.map((l) => (
            <a key={l.href} className="pf-nav__link" href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="pf-nav__right">
          <button className="pf-iconbtn" onClick={onToggleTheme} aria-label="Toggle theme" type="button">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <div style={{ display: 'inline-flex' }} className="pf-nav__links">
            <Button variant="secondary" icon="arrowUpRight" href="#contact">Let's talk</Button>
          </div>
          <button className="pf-iconbtn pf-nav__burger" onClick={() => setOpen((v) => !v)} aria-label="Menu" type="button">
            <Icon name={open ? 'x' : 'menu'} size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="pf-mobile" style={{ position: 'absolute', top: 68, left: 0, right: 0 }}>
          <div className="pf-mobile__inner">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

Object.assign(window, { Nav });
