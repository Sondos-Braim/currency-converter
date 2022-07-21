import React, { useEffect } from 'react'
import { setExchangeRate } from '../store/actions/actions';
import { connect } from 'react-redux';
import { Container, Content, Heading } from './components.style';

function ExchangeRate(props) {
  useEffect(() => {
    props.setExchangeRate(props.chosenCurrency)
  }, [props.chosenCurrency])
  
  return (
    <Container>
      <Heading>Exchange Rates</Heading>
      <Content> 1 USD = {props.exchangeRate.USD} {props.chosenCurrency} and 1 EUR = {props.exchangeRate.EUR} {props.chosenCurrency}.</Content>
    </Container>
  )
}
const mapStateToProps = state => {
  return {
    ...state,
   }
}
const mapDispatchToProps = dispatch => ({
setExchangeRate: (base) => dispatch(setExchangeRate(base)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);
