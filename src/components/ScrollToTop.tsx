import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop — scrolls to the top of the page on every route change.
 * If the URL contains a hash fragment (#id), it attempts to scroll to
 * that element. If the target element doesn't exist, it falls back to
 * scrolling to the top of the page gracefully.
 *
 * Place this inside <BrowserRouter> but outside <Routes>.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Give the DOM a tick to render before looking for the element
      const timer = setTimeout(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Broken anchor — scroll to top instead of leaving user stranded
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
