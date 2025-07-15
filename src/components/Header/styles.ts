import { Link } from 'react-router-dom'
import styled from 'styled-components'

import fundo from '../../assets/img/fundo.png'

export const Fundo = styled.div`
  background-image: url(${fundo});
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  padding: 60px 170px;
`
export const Volta = styled(Link)`
  text-decoration: none;
  color: #e66767;
`
