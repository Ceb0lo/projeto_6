import styled from 'styled-components'

import lixeira from '../../assets/img/lixeira.png'

export const ListaItens = styled.ul`
  flex: 1;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
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
