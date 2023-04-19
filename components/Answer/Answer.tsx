/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import type { NextPage } from 'next'
import { LineOutlined, LeftCircleOutlined } from '@ant-design/icons'
import useCalculation from '../../libs/hooks/useCalculation'
import { useUser } from 'component/context/UserContext'
import Router from 'next/router'
import { Button, Tooltip } from 'antd'
import style from '../../styles/answer.module.css'

const Answer: NextPage = () => {
  const { user } = useUser()

  const value = useCalculation(user)

  return (
    <>
      <section className={style.answer_container}>
        <section className={style.value_details}>
          <span className={style.text_money_response}>
            Você pode receber até
          </span>
          <br />
          <span style={{ lineHeight: 1 }}>
            <span className={style.money_symbol}>R$</span>{' '}
            <span className={style.integers}>{isNaN(value) ? '0' : value}</span>
            ,<span className={style.decimals}>00</span>
          </span>
        </section>
        <LineOutlined className={style.line_details} />
        <section className={style.text_details}>
          <span className={style.answer_cor}>
            Esta simulação traz valores aproximados.
          </span>{' '}
          Para <br />
          calcular o valor exato,{' '}
          <span className={style.answer_cor}>entre em contato com o</span>{' '}
          <br />
          <span className={style.answer_cor}>
            Smile. Co a consultar seu saldo no app do FGTS.
          </span>
        </section>
      </section>
      <section className={style.back_button_container}>
        <Tooltip placement="bottom" title={'Voltar para a tela inicial'}>
          <Button
            className={style.back_button}
            icon={<LeftCircleOutlined style={{ fontSize: '30px' }} />}
            type="link"
            onClick={async () => await Router.push('/')}
            size="large"
          />
        </Tooltip>
      </section>
    </>
  )
}

export default Answer
