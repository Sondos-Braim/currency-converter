import React from 'react';
import { connect } from 'react-redux';
import { getAvailableCurrencies, setChosenCurrency, setIsSelectorOpen } from '../store/actions/actions';
import Select from 'react-select';
import { useFormik } from 'formik';
import { Button, Label, Form, ErrorMessage, InputWrapper } from './components.style';
import { selectCurrencies } from '../store/selectors.js/selectors';

function SelectCurrency(props) {
    const handleSubmit = (values) => {
        props.setChosenCurrency(values.currency)
        props.setIsSelectorOpen(false)
    }
    const validate = values => {
        const errors = {};
        if (!values.currency) {
          errors.currency = 'Required';
        }
        return errors;
      };
    const formik = useFormik({
        initialValues: {
          currency: '',
        },
        validate,
        onSubmit: handleSubmit,
      });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Label>Please choose the base currency</Label>
            <InputWrapper>
            <Select
                name='currency'
                options={props.availableCurrencies}
                onChange={(option) => formik.setFieldValue('currency', option.value)}
                getOptionLabel={(e)=>e.label}
                getOptionValue={(e)=>e.value}
            />
            {formik.errors.currency ? <ErrorMessage>{formik.errors.currency}</ErrorMessage> : null}
            </InputWrapper>
            <Button type='submit'>Select</Button>
        </Form>
    )
}
const mapStateToProps = state => {
    return {
      ...state,
      availableCurrencies: selectCurrencies(state)
     }
  }
const mapDispatchToProps = dispatch => ({
  getAvailableCurrencies: () => dispatch(getAvailableCurrencies()),
  setChosenCurrency: (currency) => dispatch(setChosenCurrency(currency)),
  setIsSelectorOpen: (isOpen) => dispatch(setIsSelectorOpen(isOpen)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
