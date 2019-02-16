import Header from '../components/Header'
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import { Label, List } from 'semantic-ui-react';

const symbols = [
  'AMZN',
  'FB',
  'AAPL',
  'NFLX',
  'GOOGL',
]
// get rid of "seconds" in time
export default () => (
  <div>
    <Head>
      <title>Stock List</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />

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
  </div>
)
