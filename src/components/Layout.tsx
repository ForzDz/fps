import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet htmlAttributes={{ lang: 'fr' }} />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
