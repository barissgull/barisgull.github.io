import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setUserInfo(localStorage.getItem('userInfo'));
  }, []);


   const logout = () => {
    setToken(null);
    removeTokenFromCookie();
    router.reload();
  }; 

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        setToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultToken: PropTypes.string,
};
AuthProvider.defaultProps = {
  defaultToken: null,
};

export default AuthProvider;
