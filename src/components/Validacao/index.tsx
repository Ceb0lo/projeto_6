import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { useComprarMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { validacaoFechado } from '../../store/reducers/validacao'
import { carrinhoAberto } from '../../store/reducers/carrinho'
import { selectTotalCarrinho } from '../Carrinho'
import * as GS from '../../styles' //Global Style

import * as S from './styles' //Style

const Validacao = () => {
  const { validacaoEstaAberto } = useSelector(
    (state: RootReducer) => state.validacao
  )
  const dispatch = useDispatch()
  const total = useSelector(selectTotalCarrinho)

  const volta = () => {
    dispatch(validacaoFechado())
    dispatch(carrinhoAberto())
  }
  const sair = () => {
    dispatch(validacaoFechado())
  }
  const [step, setStep] = useState<'endereco' | 'pagamento' | 'confirmacao'>(
    'endereco'
  )
  const [comprar, { data }] = useComprarMutation()
  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mesV: '',
      anoV: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(3, 'O nome precisa ter no pelo menos 3 caracteres')
        .required('O campo e obrigatorio'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ter no pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      cidade: Yup.string()
        .min(5, 'A cidade precisa ter no pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      cep: Yup.string()
        .matches(
          /^\d{5}-?\d{3}$/,
          'Digite um CEP válido (ex: 12345678 ou 12345-678)'
        )
        .required('O campo é obrigatório'),
      numero: Yup.number()
        .min(1, 'O número precisa ter no pelo menos 1 dígitos')
        .required('O campo e obrigatorio'),
      complemento: Yup.string().min(
        2,
        'O nome precisa ter no pelo menos 2 caracteres'
      ),
      nomeCartao: Yup.string()
        .min(5, 'O nome no cartão precisa ter no pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      numeroCartao: Yup.string()
        .matches(
          /^(?:\d{4}[- ]?){3}\d{4}$/,
          'Digite um número de cartão válido (16 dígitos)'
        )
        .required('O campo e obrigatorio'),
      cvv: Yup.string()
        .matches(/^\d{3}$/, 'O CVV deve ter exatamente 3 dígitos')
        .required('O campo e obrigatorio'),
      mesV: Yup.number()
        .min(12, 'Temos somente 12 meses ')
        .required('O campo e obrigatorio'),
      anoV: Yup.number()
        .max(99, 'O ano de vencimento precisa ter 2 caracteres')
        .required('O campo e obrigatorio')
    }),
    onSubmit: (values) => {
      comprar({
        delivery: {
          receiver: values.nome,
          address: {
            description: values.endereco,
            city: values.cidade,
            zipCode: values.cep,
            number: Number(values.numero),
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.nomeCartao,
            number: values.numeroCartao,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesV),
              year: Number(values.anoV)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })
  const getMensagemErro = (nomeCampo: string, mensagem?: string) => {
    const estaAlterado = nomeCampo in form.touched
    const estaInvalido = nomeCampo in form.errors

    if (estaAlterado && estaInvalido) return mensagem
    return ''
  }
  return (
    <GS.BarraLateralContainer
      className={validacaoEstaAberto ? 'esta-aberto' : ''}
    >
      <GS.Overlay />
      <GS.BarraLateral className={step === 'endereco' ? '' : 'esta-fechado'}>
        <S.Formulario onSubmit={form.handleSubmit}>
          <h3>Entrega</h3>
          <label htmlFor="nome">Quem irá receber</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={form.values.nome}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getMensagemErro('nome', form.errors.nome)}</small>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={form.values.endereco}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getMensagemErro('endereco', form.errors.endereco)}</small>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            value={form.values.cidade}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getMensagemErro('cidade', form.errors.cidade)}</small>
          <div>
            <div className="meio">
              <label htmlFor="cep">CEP</label>
              <input
                type="number"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getMensagemErro('cep', form.errors.cep)}</small>
            </div>
            <div className="meio">
              <label htmlFor="numero">Número</label>
              <input
                type="number"
                id="numero"
                name="numero"
                value={form.values.numero}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getMensagemErro('numero', form.errors.numero)}</small>
            </div>
          </div>
          <label htmlFor="complemento">Complemento (opicional)</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            value={form.values.complemento}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <GS.Botao
            type="submit"
            onClick={async () => {
              const errors = await form.validateForm()
              if (
                !errors.nome &&
                !errors.endereco &&
                !errors.cidade &&
                !errors.cep &&
                !errors.numero
              ) {
                setStep('pagamento')
              }
            }}
          >
            Continuar com o pagamento
          </GS.Botao>
        </S.Formulario>
        <GS.Botao onClick={volta}>Voltar para o carrinho</GS.Botao>
      </GS.BarraLateral>
      <GS.BarraLateral className={step === 'pagamento' ? '' : 'esta-fechado'}>
        <S.Formulario onSubmit={form.handleSubmit}>
          <h3>
            Pagamento - Valor a pagar{' '}
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </h3>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input
            type="text"
            id="nomeCartao"
            name="nomeCartao"
            value={form.values.nomeCartao}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>{getMensagemErro('nomeCartao', form.errors.nomeCartao)}</small>
          <div>
            <div className="numeroC">
              <label htmlFor="numeroCartao">Número do cartão</label>
              <input
                type="number"
                name="numeroCartao"
                id="numeroCartao"
                value={form.values.numeroCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getMensagemErro('numeroCartao', form.errors.numeroCartao)}
              </small>
            </div>
            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id="cvv"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getMensagemErro('cvv', form.errors.cvv)}</small>
            </div>
          </div>
          <div>
            <div className="meio">
              <label htmlFor="mesV">Mês de vencimento</label>
              <input
                type="number"
                id="mesV"
                name="mesV"
                value={form.values.mesV}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getMensagemErro('mesV', form.errors.mesV)}</small>
            </div>
            <div className="meio">
              <label htmlFor="anoV">Ano do vencimento</label>
              <input
                type="number"
                id="anoV"
                name="anoV"
                value={form.values.anoV}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getMensagemErro('anoV', form.errors.anoV)}</small>
            </div>
          </div>
          <GS.Botao
            type="submit"
            onClick={async () => {
              const errors = await form.validateForm()
              if (
                !errors.nomeCartao &&
                !errors.numeroCartao &&
                !errors.cvv &&
                !errors.mesV &&
                !errors.anoV
              ) {
                setStep('confirmacao')
              }
            }}
          >
            Finalizar pagamento
          </GS.Botao>
        </S.Formulario>
        <GS.Botao type="button" onClick={() => setStep('endereco')}>
          Voltar para a edição de endereço
        </GS.Botao>
      </GS.BarraLateral>
      <GS.BarraLateral className={step === 'confirmacao' ? '' : 'esta-fechado'}>
        <S.Texto>
          <h3>Pedido realizado - {data?.orderId ?? 'Carregando...'}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <GS.Botao onClick={sair}>Concluir</GS.Botao>
        </S.Texto>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Validacao
