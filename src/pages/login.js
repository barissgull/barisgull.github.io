import Head from 'next/head';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container , Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';

const Login = () => {
  const router = useRouter();
  // const { login } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>Login | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ py: 2 }}>
            <Link
              href="https://www.instagram.com/oauth/authorize?client_id=314427167338489&redirect_uri=https://barissgull.github.io/instagram-auth&scope=user_profile,user_media&response_type=code"
              passHref={true}
            >
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Şimdi entegre ol
              </Button>
            </Link>
          </Box>
          <Typography color="textSecondary" variant="body2">
            Don&apos;t have an account?{' '}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Login;
