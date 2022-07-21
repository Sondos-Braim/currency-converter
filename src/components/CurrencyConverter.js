import React from 'react'
import Select from 'react-select';
import { Button, Container, Form, Heading, Label, TextInput, ErrorMessage, InputWrapper } from './components.style';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { selectCurrencies } from '../store/selectors.js/selectors';
import { setConvertResult } from '../store/actions/actions';

function CurrencyConverter(props) {

const validate = values => {
  const errors = {};
  if (!values.amount) {
    errors.amount = 'Required';
  }
  if (!values.from) {
    errors.from = 'Required';
  }
  if (!values.to) {
    errors.to = 'Required';
  }

  return errors;
};

const convert = (values) => {
  props.setConvertResult(values)
}

const formik = useFormik({
  initialValues: {
    amount: '',
    from: '',
    to: ''
  },
  validate,
  onSubmit: convert,
});

return (
  <Container>
  <Heading>Currency Converter</Heading>
  <Form onSubmit={formik.handleSubmit}>
    <Label>Amount</Label>
    <InputWrapper>
    <TextInput
      name="amount"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.amount}
      />
    {formik.errors.amount ? <ErrorMessage>{formik.errors.amount}</ErrorMessage> : null}
    </InputWrapper>
    <Label>from</Label>
    <InputWrapper>
    <Select
      name="from"
      options={props.availableCurrencies}
      getOptionValue={(option)=> option.value}
      getOptionLabel={(option)=> option.label}
      onChange={(option) => formik.setFieldValue('from', option.value)}
      />
    {formik.errors.from ? <ErrorMessage>{formik.errors.from}</ErrorMessage> : null}
    </InputWrapper>
    <Label>to</Label>
    <InputWrapper>
    <Select
      name="to"
      options={props.availableCurrencies}
      getOptionValue={(option)=> option.value}
      getOptionLabel={(option)=> option.label }
      onChange={(option) => formik.setFieldValue('to', option.value)}
      />
    {formik.errors.to ? <ErrorMessage>{formik.errors.to}</ErrorMessage> : null}
    </InputWrapper>
    <Button type="submit">Convert</Button>
  </Form>
    <p>{props.convertCurrency}</p>
    </Container>
    );
}
const mapStateToProps = state => {
  return {
    ...state,
    availableCurrencies: selectCurrencies(state)
   }
}
const mapDispatchToProps = dispatch => ({
  setConvertResult: (values) => dispatch(setConvertResult(values)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);
