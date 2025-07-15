import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.li`
  position: relative;
  overflow: hidden;
  display: block;
  background-color: #e66767;
  color: #ffebd9;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Texto = styled.p`
  font-size: 14px;
  margin: 8px;
`

export const Botao = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #ffebd9;
  color: #e66767;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImgCard = styled.img`
  margin: 8px;
`
