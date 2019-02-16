import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Label } from 'semantic-ui-react';
import Header from '../components/Header'
import Head from 'next/head';
import Link from 'next/link'

const StockLink = (props) => (
    <Link href={`/stock?symbol=${props.symbol}&companyName=${props.companyName}`}>
    <Button color='green'>
      Trade
    </Button>
    </Link>
)

function StockInfo({
  symbol,
  companyName,
  latestPrice,
  latestSource,
  changePercent,
}){

  return(
    <div style={{ padding: 20 }}>
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 20}}>
      <Label color='green' horizontal size='massive'>
        {symbol}
      </Label>
    <h2 style={{ marginBottom: 25 }}>{ companyName }</h2>
  </div>
  <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
    <h3>${ latestPrice } ({ latestSource}) <b>{changePercent > 0 ? '+' : ''}</b>{changePercent}</h3>
    <StockLink symbol={symbol} companyName={companyName}/>
    </div>
    </div>
  )
}


export default StockInfo;
