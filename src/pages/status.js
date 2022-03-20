import Head from 'next/head';
import { useContext } from 'react';
import { AuthContext } from 'src/contexts/AuthContext';
import { Box, CircularProgress, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { auth, getAuthorizationCode } from '../utils/http';
import { useEffect } from 'react';

const Status = () => {
  const router = useRouter();
  const { setToken, setUserInfo } = useContext(AuthContext);

  useEffect(() => {
    const params = router.query;
    if (params.code) {
      getAuthorizationCode()
        .then((resp) => {
          setToken(resp.accessToken);
          setUserInfo(resp.username);
        })
        .catch((error) => {
          router.push('/login');
        });
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Customers | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <CircularProgress />
      </Box>
    </>
  );
};

export default Status;
