import Router from 'next/router';
import Link from 'next/link'

export default () => (
  <div style={{ marginLeft: '7%',marginTop: '2%', display: 'flex'}}>
    <Link href='/'><p style={{ marginRight: '3%', fontSize: 20, cursor: 'pointer' }}>Home</p></Link>
    <Link href='/stocks'><p style={{ marginRight: '3%', fontSize: 20, cursor: 'pointer' }}>Stocks</p></Link>
    <Link href='/app'><p style={{ marginRight: '3%', fontSize: 20, cursor: 'pointer' }}>Quotes</p></Link>
    <Link href='/portfolio'><p style={{ marginRight: '75%', fontSize: 20, cursor: 'pointer' }}>Portfolio</p></Link>
    <Link href='/login'><p style={{ fontSize: 20, cursor: 'pointer' }}>Login</p></Link>
  </div>
)

// change to next/link for this stuff^^^
