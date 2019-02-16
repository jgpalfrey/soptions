import {withRouter} from 'next/router'
import React, { Component } from 'react';
import StockInfo from '../components/StockInfo';
import 'semantic-ui-css/semantic.min.css';
import { Button, Input } from 'semantic-ui-react';
import Header from '../components/Header';
import Head from 'next/head';

const Page = withRouter((props) => (

    <div>
      <Head>
        <title>{props.router.query.symbol}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
       <h1>{props.router.query.symbol}</h1>
       <p>stock info</p>
       <h1>{props.router.query.companyName}</h1>
     </div>
    </div>
))

export default Page
