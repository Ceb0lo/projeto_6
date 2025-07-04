import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  list-style: none;
  padding: 0;
`

export const Card = styled.li`
  position: relative;
  overflow: hidden;
  border: 1px solid #e66767;
  display: block;
  background-color: #fff;
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
  flex-direction: column;
  align-items: end;
  img {
    width: 8px;
    height: 8px;
    margin-left: 8px;
  }
`

export const Texto = styled.p`
  font-size: 14px;
  margin: 8px;
`

export const BotaoSaiba = styled.button`
  text-decoration: none;
  font-size: 14px;
  background-color: #e66767;
  color: #ffebd9;
  width: 82px;
  height: 24px;
  margin: 8px;
`

export const Teg = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #e66767;
  color: #ffebd9;
  font-size: 12px;
  padding: 4px 6px;
  font-weight: bold;
`

export const ImgCard = styled.img`
  width: 472px;
  height: 217px;
`
