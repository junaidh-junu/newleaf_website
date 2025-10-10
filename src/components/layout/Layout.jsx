import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      <Header />
      <main className="flex-grow pt-20 bg-noise">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;