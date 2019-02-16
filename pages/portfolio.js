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
      <title>My Holdings</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />

    <div style={{ display: 'flex'}}>

      <div style={{ marginLeft: '2%', marginTop: '7%' }}>

        <h2 style={{ fontSize: 30}}>Invest!</h2>
        
        <Link href="/stocks">

          <Button inverted color='green'>
            Invest!
          </Button>

        </Link>

      </div>

      <div style={{ width: '.05%', height: 100, backgroundColor:"#dededf", margin: '5%', marginLeft: '4%', marginRight: '4%'}}>

      </div>

      <div style={{ marginLeft: '2%', marginTop: '7%' }}>

        <h2 style={{ fontSize: 30}}>Invest!</h2>

        <Link href="/stocks">

          <Button inverted color='green'>
            Invest!
          </Button>

        </Link>

      </div>

    </div>
    <Divider section/>
  </div>
)
