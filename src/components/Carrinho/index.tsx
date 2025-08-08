import lixeira from '../../assets/img/lixeira.png'

import * as S from './styles'

const Carrinho = () => {
  return (
    <S.CardContainer>
      <S.Overlay />
      <S.BarraLateral>
        <ul>
          <S.Card>
            <S.ImgPrato src={lixeira} alt="" />
            <div>
              <h3>nome do prato</h3>
              <p>Valor</p>
            </div>
            <button type="button" />
          </S.Card>
        </ul>
        <S.ValorTotal>
          <span>Valor total</span>
          <span>1000</span>
        </S.ValorTotal>
        <S.BotaoCompra>Continuar com a entrega</S.BotaoCompra>
      </S.BarraLateral>
    </S.CardContainer>
  )
}

export default Carrinho
