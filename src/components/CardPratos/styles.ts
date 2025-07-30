import styled from 'styled-components'

export const Lista = styled.ul`
  margin: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  list-style: none;
`

export const Card = styled.li`
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

export const Botao = styled.button`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #ffebd9;
  color: #e66767;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 266.66px;
  height: 24px;
  cursor: pointer;
`

export const ImgCard = styled.img`
  margin: 8px;
  width: 266.66px;
`
