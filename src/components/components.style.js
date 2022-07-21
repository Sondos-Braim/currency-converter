import styled from 'styled-components'

export const Label = styled.label`
    color: teal;
    font-weight: 600;
`
export const Button = styled.button`
    background-color: teal;
    border: none;
    padding: 10px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
`
export const Form = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;

`
export const Header = styled.header`
    padding: 0 15px;
    display: flex;
    width: 100%;
    height: 50px;
    background-color: teal;
    justify-content: space-between;
    align-items: center;
    color: white;
    a {
        text-decoration: none;
        color: white;
        margin: 7px;
    }
`
export const CurrencyButton = styled.span`
    border-radius: 50%;
    background-color: DodgerBlue;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: RoyalBlue;
    }
`
export const TextInput = styled.input`
    background-color: hsl(0, 0%, 100%);
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 4px;
    cursor: default;
    min-height: 38px;
`
export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const modalStyles = {
    content: {
      top: '35%',
      left: '20%',
      right: 'auto',
      bottom: 'auto',
      overflow: 'visible',
      width: '60%',
      height: 'fit-content',
    },
  };
export const Heading = styled.div`
    font-family: 'Pacifico', cursive;
    font-size: 35px;
    color: teal;
    margin: 30px;
`
export const Content = styled.p`
    font-size: 25px;
`
export const ErrorMessage = styled.p`
    color: red;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
