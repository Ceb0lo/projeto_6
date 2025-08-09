import styled from 'styled-components'

import lixeira from '../../assets/img/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`
export const CardContainer = styled.div`
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
export const BarraLateral = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 32px 8px 0 8px;
  width: 360px;
  height: 100%;
`
export const ValorTotal = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #ffebd9;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`
export const Card = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  background-color: #ffebd9;

  button {
    border: none;
    background-color: transparent;
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 8px;
    cursor: pointer;
  }

  div {
    h3 {
      margin-top: 8px;
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }
`
export const ImgPrato = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 8px;
`
export const BotaoCompra = styled.button`
  text-decoration: none;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #ffebd9;
  color: #e66767;
  width: 100%;
  height: 24px;
  padding: 4px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
