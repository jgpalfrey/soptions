import 'semantic-ui-css/semantic.min.css';
import { Label, List } from 'semantic-ui-react';



export default () => (
  <div>
    <Head>
      <title>Stocks</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <div style={{ marginLeft: '10%', marginTop: '10%' }}>
      <p>StocksList</p>
      <List divided selection>
        <List.Item>
          <Label color='green' horizontal>
            AAPL
          </Label>
          Apple, Inc.
        </List.Item>
        <List.Item>
          <Label color='green' horizontal>
            MSFT
          </Label>
          Microsoft, Inc.
        </List.Item>
        <List.Item>
          <Label color='green' horizontal>
            NKE
          </Label>
          Nike
        </List.Item>
      </List>
    </div>
  </div>
)
