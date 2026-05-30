/* Primitives.jsx — shared building blocks for the portfolio kit. */

function Eyebrow({ children, style = {} }) {
  return <span className="pf-eyebrow" style={style}>{children}</span>;
}

function Button({ children, variant = 'primary', icon, href = '#', onClick, type, target, rel }) {
  const cls = `pf-btn pf-btn--${variant}`;
  const content = (
    <React.Fragment>
      <span>{children}</span>
      {icon && <Icon name={icon} size={16} />}
    </React.Fragment>
  );
  if (type === 'button') {
    return <button className={cls} onClick={onClick} type="button">{content}</button>;
  }
  return <a className={cls} href={href} onClick={onClick} target={target} rel={rel}>{content}</a>;
}

function Tag({ children, active = false }) {
  return <span className={`pf-tag${active ? ' is-active' : ''}`}>{children}</span>;
}

function Section({ id, label, title, intro, children, narrow = false }) {
  return (
    <section className="pf-section" id={id} data-screen-label={label || id}>
      <div className={`pf-container${narrow ? ' pf-container--narrow' : ''}`}>
        {(label || title) && (
          <div className="pf-section__head">
            {label && <Eyebrow>{label}</Eyebrow>}
            {title && <h2 className="pf-h2">{title}</h2>}
            {intro && <p className="pf-section__intro">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/* Shared real contact + identity data */
const DD = {
  name: 'Diego Delgado',
  role: 'Software Engineer · Cloud Engineer',
  location: 'Bogotá, Colombia',
  email: 'diego.delgado.developer@gmail.com',
  github: 'https://github.com/diego-delgado-dev',
  linkedin: 'https://www.linkedin.com/in/diego-delgado-292089411/',
  upwork: 'https://www.upwork.com/freelancers/~0181ce7e71797f8058?mp_source=share',
};

Object.assign(window, { Eyebrow, Button, Tag, Section, DD });
