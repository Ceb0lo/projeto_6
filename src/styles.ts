import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body{
    background-color: #FFF8F1;
    color: #E66767;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`
export const BarraLateral = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 32px 8px;
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &.esta-fechado {
    display: none;
  }
`
export const BarraLateralContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.esta-aberto {
    display: flex;
  }
`
export const Botao = styled.button`
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #ffebd9;
  color: #e66767;
  width: 100%;
  height: 24px;
  padding: 4px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
