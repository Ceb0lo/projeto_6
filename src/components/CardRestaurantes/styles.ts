import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.li`
  border: 1px solid #e66767;
  display: block;
  background-color: #fff;
`
export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Nota = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: flex;
`

export const Estrela = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
  margin-right: 8px;
`

export const Texto = styled.p`
  font-size: 14px;
  margin: 8px;
`

export const BotaoSaiba = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #e66767;
  color: #ffebd9;
  width: 82px;
  height: 24px;
  padding: 6px;
  margin: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Teg = styled.span`
  width: 60px;
  height: 20px;
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`

export const ImgCard = styled.img`
  width: 472px;
  height: 217px;
`
