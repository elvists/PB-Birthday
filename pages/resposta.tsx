import React from 'react'
import { Card } from 'antd'
import type { NextPage } from 'next'
import { LineOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import useCalculation from '../libs/hooks/useCalculation'

const Resposta: NextPage = (props: any) => {
  const router = useRouter()

  const value = useCalculation(router)

  return (
    <Card
      style={{
        margin: '30px auto',
        width: '80%',
      }}
    >
      <div className="resposta-container">
        <div
          style={{
            textAlign: 'center',
            margin: 'auto',
            fontSize: '18px',
            color: '#00BBC3',
          }}
        >
          <span style={{ fontSize: '18px', fontWeight: 650 }}>
            Você pode receber até
          </span>
          <br />
          <span style={{ lineHeight: 1 }}>
            <span style={{ color: '#000', fontWeight: 700 }}>R$</span>{' '}
            <span className="integers">{value}</span>,
            <span className="decimals">27</span>
          </span>
        </div>
        <LineOutlined
          style={{
            transform: 'rotate(90deg)',
            fontSize: '80px',
            color: 'lightgray',
            opacity: 0.09,
            fontWeight: 'lighter',
          }}
        />
        <div
          style={{
            textAlign: 'left',
            margin: 'auto',
            fontSize: 10,
            fontWeight: 650,
          }}
        >
          <span className="resposta-cor">
            Esta simulação traz valores aproximados.
          </span>{' '}
          Para <br />
          calcular o valor exato,{' '}
          <span className="resposta-cor">entre em contato com o</span> <br />
          <span className="resposta-cor">
            Smile. Co a consultar seu saldo no app do FGTS.
          </span>
        </div>
      </div>
    </Card>
  )
}

export default Resposta
