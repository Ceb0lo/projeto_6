import styled from 'styled-components'

export const Banner = styled.div<{ capa: string }>`
  background-image: url(${(props) => props.capa});
  height: 280px;
  width: 100%;
  object-fit: cover;
  font-size: 36px;
  padding: 24px 170px;
  color: #fff;
  p {
    font-weight: lighter;
    margin-bottom: 150px;
  }
`
