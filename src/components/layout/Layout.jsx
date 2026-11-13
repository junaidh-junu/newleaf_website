import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="nl flex min-h-screen flex-col bg-white font-body text-[1.0625rem] leading-[1.6] text-ink">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
