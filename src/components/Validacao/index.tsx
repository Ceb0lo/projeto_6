import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useState } from 'react'

import { useComprarMutation } from '../../services/api'
import { RootReducer } from '../../store'
import * as GS from '../../styles' //Global Style

import * as S from './styles' //Style

const Validacao = () => {
  const { validacaoEstaAberto } = useSelector(
    (state: RootReducer) => state.validacao
  )
  const [step, setStep] = useState<'endereco' | 'pagamento'>('endereco')
  const [comprar] = useComprarMutation()
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
      cep: Yup.number()
        .min(8, 'O CEP precisa ter 8 caracteres')
        .required('O campo e obrigatorio'),
      numero: Yup.number()
        .min(1, 'O número precisa ter no pelo menos 1 caracteres')
        .required('O campo e obrigatorio'),
      complemento: Yup.string().min(
        2,
        'O nome precisa ter no pelo menos 2 caracteres'
      ),
      nomeCartao: Yup.string()
        .min(5, 'O nome no cartão precisa ter no pelo menos 5 caracteres')
        .required('O campo e obrigatorio'),
      numeroCartao: Yup.number()
        .min(16, 'O número do cartão precisa ter 16 caracteres')
        .max(19, 'O número do cartão precisa ter 19 caracteres')
        .required('O campo e obrigatorio'),
      cvv: Yup.number()
        .min(3, 'O CVV precisa ter 3 caracteres')
        .max(3, 'O CVV precisa ter 3 caracteres')
        .required('O campo e obrigatorio'),
      mesV: Yup.number()
        .min(2, 'O mês de vencimento precisa ter 2 caracteres')
        .max(2, 'O mês de vencimento precisa ter 2 caracteres')
        .required('O campo e obrigatorio'),
      anoV: Yup.number()
        .min(2, 'O ano de vencimento precisa ter 2 caracteres')
        .max(2, 'O mês de vencimento precisa ter 2 caracteres')
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
            type="button"
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
        <GS.Botao>Voltar para o carrinho</GS.Botao>
      </GS.BarraLateral>
      <GS.BarraLateral className={step === 'pagamento' ? '' : 'esta-fechado'}>
        <S.Formulario onSubmit={form.handleSubmit}>
          <h3>Pagamento - Valor a pagar xxxx</h3>
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
                {getMensagemErro('numeroCartao}', form.errors.numeroCartao)}
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
          <GS.Botao>Finalizar pagamento</GS.Botao>
        </S.Formulario>
        <GS.Botao type="button" onClick={() => setStep('endereco')}>
          Voltar para a edição de endereço
        </GS.Botao>
      </GS.BarraLateral>
    </GS.BarraLateralContainer>
  )
}

export default Validacao
