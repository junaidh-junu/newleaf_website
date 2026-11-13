import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    // Use setTimeout to ensure the route has fully changed
    setTimeout(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView();
        return;
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use instant for immediate scroll
      });
    }, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;