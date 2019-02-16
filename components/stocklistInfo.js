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

const symbols = [
  'AMZN',
  'FB',
  'AAPL',
  'NFLX',
  'GOOGL',
]

function StockInfo({
  symbol,
  companyName,
  latestPrice,
  latestSource,
  changePercent,
}){

  return(
    <div style={{ padding: 20 }}>
      <div style={{ marginLeft: '10%', marginTop: '10%' }}>
        <h2>StocksList</h2>
        <p>Stock Prices as of {new Date().toLocaleTimeString()}.</p>

        <div>
          <List divided selection>
          {symbols.map(symbol => (

            <List.Item>
              <Label color='green' horizontal key={symbol}>
                {symbol}
              </Label>
              {symbol}, Inc.
            </List.Item>
          ))}
          </List>
        </div>
      </div>
  <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
    <h3>${ latestPrice } ({ latestSource}) <b>{changePercent > 0 ? '+' : ''}</b>{changePercent}</h3>
    <StockLink symbol={symbol} companyName={companyName}/>
    </div>
    </div>
  )
}


export default StockInfo;
