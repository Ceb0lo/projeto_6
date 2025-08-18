import styled from 'styled-components'

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  color: #ffebd9;
  font-size: 14px;
  font-weight: bold;
  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }
  input {
    margin-bottom: 8px;
    margin-top: 8px;
    height: 32px;
    border: none;
    background-color: #ffebd9;
    color: #000;
  }
  div {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`
