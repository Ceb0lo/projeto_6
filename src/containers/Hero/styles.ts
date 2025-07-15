import styled from 'styled-components'

import fundo from '../../assets/img/fundo.png'
import fundoItaliana from '../../assets/img/fundoItaliana.png'

export const Fundo = styled.div`
  background-image: url(${fundo});
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
export const Banner = styled.div`
  background-image: url(${fundoItaliana});
  font-size: 36px;
  padding: 24px 170px;
  color: #fff;
  p {
    font-weight: lighter;
    margin-bottom: 150px;
  }
`
