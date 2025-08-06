import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;

  .visevel {
    display: flex;
  }

  .destaque {
    position: relative;
    z-index: 1;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`
export const CardCompra = styled.div`
  padding: 32px;
  display: flex;
  background-color: #e66767;
  color: #fff;
  gap: 24px;
`
export const ImgCompra = styled.img`
  width: 280px;
  height: 280px;
  display: block;
  object-fit: cover;
`
export const ImgClose = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export const ContainerTexto = styled.div`
  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    margin-bottom: 16px;
  }
`
export const Botao = styled.button`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #ffebd9;
  border-style: none;
  color: #e66767;
  padding: 4px;
  cursor: poiner;
`
