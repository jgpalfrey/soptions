import React from 'react';
import {View} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from '../components/Header';
import Head from 'next/head';
import { Button, Divider } from 'semantic-ui-react';
import Link from 'next/link';

export default () => (
  <div>
    <Head>
      <title>Simple Options</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />

    <div style={{ display: 'flex'}}>
    <div style={{ marginLeft: '10%', marginTop: '7%' }}>
      <h1 style={{ fontSize: 60}}>Invest<br/>in options.</h1>
      <Link href="/stocks">
      <Button inverted color='green'>
        Get Started
      </Button>
    </Link>
    </div>

    <div style={{ width: 1, height: 100, backgroundColor:"#dededf", margin: 100, marginLeft: 300 }}>

    </div>

    </div>
    <Divider section/>
  </div>
)
