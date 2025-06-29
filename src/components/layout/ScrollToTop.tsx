// src/components/layout/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // instant jump with no animation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
