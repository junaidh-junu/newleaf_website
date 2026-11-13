import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../../config/site';

/** Lime highlighter behind a phrase in a headline. */
export const Mark = ({ children }) => (
  <span className="rounded-[0.12em] bg-zest px-[0.12em] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
    {children}
  </span>
);

/** Button-styled link. Pass `to` for a route or `href` for an external link. */
const BUTTON_VARIANTS = {
  green: 'nl-btn-green',
  zest: 'nl-btn-zest',
  white: 'nl-btn-white',
  outline: 'nl-btn-outline',
  'outline-white': 'nl-btn-outline-white',
};

export const Action = ({ to, href, variant = 'green', className = '', children }) => {
  const classes = `nl-btn ${BUTTON_VARIANTS[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};

/** Tinted banner at the top of every inner page. */
export const PageHero = ({ eyebrow, title, children }) => (
  <section className="nl-pad bg-paper py-12 lg:py-24">
    <div className="nl-wrap flex flex-wrap items-end gap-x-20 gap-y-7">
      <div className="flex flex-[1_1_520px] flex-col gap-5">
        <p className="nl-eyebrow text-leaf">{eyebrow}</p>
        <h1 className="nl-h1">{title}</h1>
      </div>
      <div className="flex flex-[1_1_360px] flex-col items-start gap-4">{children}</div>
    </div>
  </section>
);

/** Heading on the left, ruled rows on the right. */
export const SplitSection = ({ title, lead, className = '', children }) => (
  <section className={`nl-sec ${className}`}>
    <div className="nl-wrap flex flex-wrap gap-x-20 gap-y-10">
      <div className="flex max-w-[420px] flex-[1_1_320px] flex-col gap-4">
        <h2 className="nl-h2">{title}</h2>
        {lead && <p className="nl-lead">{lead}</p>}
      </div>
      <div className="min-w-0 flex-[999_1_480px]">{children}</div>
    </div>
  </section>
);

export const Row = ({ title, wide = false, first = false, children }) => (
  <div
    className={`flex flex-wrap gap-x-8 gap-y-2 py-7 ${
      first ? 'border-t-2 border-ink' : 'border-t border-rule'
    }`}
  >
    <h3 className={`nl-h3 ${wide ? 'flex-[0_0_240px]' : 'flex-[0_0_160px]'}`}>{title}</h3>
    <p className="flex-[1_1_300px] text-moss">{children}</p>
  </div>
);

/** Green call-to-action panel that closes most pages. */
export const CtaBand = ({ title, text, children }) => (
  <section className="nl-sec">
    <div className="nl-wrap flex flex-wrap items-center gap-x-16 gap-y-8 rounded-[36px] bg-leaf p-8 text-white sm:p-12 lg:p-[72px]">
      <div className="flex flex-[1_1_420px] flex-col gap-3.5">
        <h2 className="nl-h2">{title}</h2>
        <p className="max-w-[520px] text-[1.1875rem] leading-[1.55] text-[#E3F2E6]">{text}</p>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  </section>
);

export const VisitActions = () => (
  <>
    <Action to="/contact" variant="zest">
      Book a school visit
    </Action>
    <Action href={SITE.whatsappHref} variant="white">
      Chat on WhatsApp
    </Action>
    <Action href={SITE.phoneHref} variant="outline-white">
      Call {SITE.phoneDisplay}
    </Action>
  </>
);
