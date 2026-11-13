import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { SCHOOL_LOGOS } from '../../config/assets';
import { NAV_ITEMS } from '../../config/site';

const linkClass = ({ isActive }) =>
  `inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[0.97rem] font-semibold transition-colors ${
    isActive ? 'bg-zest-soft text-ink' : 'text-moss hover:bg-paper hover:text-ink'
  }`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="nl-pad sticky top-0 z-40 border-b border-rule-soft bg-white py-3">
      <div className="nl-wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <Link to="/" className="flex min-h-[56px] items-center gap-3 text-ink">
          <img
            src={SCHOOL_LOGOS.EMBLEM}
            alt="New Leaf School crest"
            className="h-14 w-[49px] object-contain"
          />
          <span className="flex flex-col leading-[1.1]">
            <span className="font-heading text-xl font-extrabold tracking-[-0.01em]">
              New Leaf School
            </span>
            <span className="text-[0.78rem] font-semibold tracking-[0.04em] text-moss-light">
              For Quran and English
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink text-ink lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {isMenuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } w-full flex-col gap-1 pb-3 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:pb-0`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
          {user && (
            <>
              <NavLink to="/admin" className={linkClass}>
                Admin
              </NavLink>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex min-h-[44px] items-center rounded-full px-3.5 text-left text-[0.97rem] font-semibold text-moss hover:bg-paper hover:text-ink"
              >
                Log out
              </button>
            </>
          )}
          <Link
            to="/contact"
            className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full bg-leaf px-5 text-[0.97rem] font-bold text-white transition-colors hover:bg-ink lg:ml-2 lg:mt-0"
          >
            Book a visit
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
