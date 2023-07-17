import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const FavoritePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>FavoritePage</>;
};

export default FavoritePage;
