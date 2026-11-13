import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_LOGOS } from '../../config/assets';
import { SITE } from '../../config/site';

const headingClass = 'mb-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-zest';
const strongLink = 'inline-flex min-h-[32px] items-center font-semibold text-white hover:text-zest';
const softLink = 'inline-flex min-h-[32px] items-center text-mist hover:text-white';

const Footer = () => {
  return (
    <footer className="nl-pad bg-ink pb-7 pt-16 text-base text-mist">
      <div className="nl-wrap flex flex-col gap-11">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-10">
          <div className="flex max-w-[420px] flex-[1_1_320px] flex-col items-start gap-5">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl bg-white px-[18px] py-3.5">
              <img
                src={SCHOOL_LOGOS.NEW_LEAF_SCHOOL}
                alt="New Leaf School for Quran and English"
                className="h-[58px] w-[180px] object-contain"
              />
              <img
                src={SCHOOL_LOGOS.HEAVENS}
                alt="Heavens Preschool, Up Above the World"
                className="h-[66px] w-[88px] object-contain"
              />
            </div>
            <img
              src={SCHOOL_LOGOS.HUMAN_CARE}
              alt="Run by Human Care Foundation"
              className="h-10 w-[220px] rounded-[10px] bg-white px-2.5 py-1 object-contain"
            />
          </div>

          <div className="flex flex-[1_1_220px] flex-col gap-2.5">
            <h2 className={headingClass}>Visit</h2>
            <p>
              {SITE.addressLines[0]}
              <br />
              {SITE.addressLines[1]}
            </p>
            <p>
              {SITE.officeDays}
              <br />
              {SITE.officeHours}
            </p>
          </div>

          <div className="flex flex-[1_1_220px] flex-col items-start gap-1.5">
            <h2 className={headingClass}>Talk to us</h2>
            <a href={SITE.phoneHref} className={strongLink}>
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className={`${strongLink} [overflow-wrap:anywhere]`}>
              {SITE.email}
            </a>
            <a href={SITE.whatsappHref} className={strongLink}>
              WhatsApp the office
            </a>
            <a href={SITE.instagramHref} className={strongLink}>
              Instagram {SITE.instagramHandle}
            </a>
          </div>

          <div className="flex flex-[1_1_160px] flex-col items-start gap-1.5">
            <h2 className={headingClass}>Explore</h2>
            <Link to="/about" className={softLink}>
              About
            </Link>
            <Link to="/academics" className={softLink}>
              Academics
            </Link>
            <Link to="/school-life" className={softLink}>
              School life
            </Link>
            <Link to="/parents" className={softLink}>
              For parents
            </Link>
            <Link to="/contact" className={softLink}>
              Admissions
            </Link>
            <a href={SITE.parentPortalHref} className={`${strongLink} underline`}>
              Parent portal login
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-leaf-line pt-5 text-sm text-[#A9BEAF]">
          <span>© {new Date().getFullYear()} New Leaf School and Heavens Preschool</span>
          <Link to="/login" className="underline hover:text-white">
            Staff login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
