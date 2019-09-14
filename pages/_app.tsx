import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import Head from 'next/head';
import React, { Fragment, ReactElement } from 'react';
import Layout from '../src/components/Layout';
import theme from '../src/lib/theme';

export default class MyApp extends App {
  public componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles && jssStyles.parentNode && jssStyles.parentNode.removeChild(jssStyles);
  }

  public render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Fragment>
    );
  }
}
