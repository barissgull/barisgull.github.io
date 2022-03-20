import { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useRouter } from 'next/router';

const RouteGuard = ({ children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authCheck = (url) => {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ['/login', '/status'];
    const path = url.split('?')[0];
    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
      });
    } else {
      setAuthorized(true);
    }
  };

  return authorized && children;
};

export default RouteGuard;
