import React, { Component } from 'react';
import StockInfo from '../components/StockInfo';
import { loadQuoteForStock } from '../api/iex';
import 'semantic-ui-css/semantic.min.css';
import { Button, Input } from 'semantic-ui-react';
import Header from '../components/Header'
import Head from 'next/head';
import Link from 'next/link'



class stockList extends Component {
  state = {
    symbol: 'AAPL',
    quote: null
  }

  componentDidMount(){
    this.loadQuote()
  }

  loadQuote() {
    loadQuoteForStock(this.state.symbol)
    .then((quote)=> {
      console.log(quote)
      this.setState({quote: quote})
    })
    .catch((err)=> {console.log(err)})
  }

  handleSymbolChange =(event)=>{
    const target = event.target;
    const symbol = target.value;
    this.setState({symbol: symbol });
    console.log(event);
  }

  handleButtonClick = (event) => {
    console.log(event.target);
    this.loadQuote();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Stock List</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Header />
      <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
      <StockInfo {...this.state.quote}/>
      </div>
      </div>
    )
  }
}

export default stockList;
