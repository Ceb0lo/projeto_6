import styled from 'styled-components'

import img from '../../assets/img/fundo.png'

export const Fundo = styled.div`
  background-image: url(${img});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-top: 40px;
  margin-bottom: 138px;
`

export const Chamada = styled.h1`
  font-weight: bold;
  font-size: 36px;
`
