/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { Button, DatePicker, Form, Input, InputNumber } from 'antd'
import type { User } from 'component/types/user'
import type { AxiosError } from 'axios'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useUser } from 'component/context/UserContext'
import style from '../../styles/submission.module.css'

const Submission = () => {
  const [form] = Form.useForm()
  const { setUser } = useUser()
  const router = useRouter()

  const dateFormat = 'MM/YYYY'

  const onFinish = async (values: User) => {
    setUser({ ...values, birthday: values.birthday.format('DD/MM/YYYY') })

    await form.validateFields()
    await router.push({ pathname: '/resposta', query: { name: values?.name } })
  }

  const phoneValidator = async (_: any, value: any): Promise<any> => {
    try {
      await axios.get(
        `${process.env.URL_API_PHONE_VALIDATION}${
          process.env.API_KEY_PHONE_VALIDATION
        }&phone=${String(value)}`
      )

      return await Promise.resolve()
    } catch (error: AxiosError | any | unknown) {
      if (error.response.status === 400)
        return await Promise.reject('Telefone inválido')

      return await Promise.resolve()
    }
  }

  const moneyFormatter = (value: any) =>
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  return (
    <Form
      layout={'vertical'}
      form={form}
      style={{ margin: 'auto' }}
      onFinish={onFinish}
    >
      <div className={style.formDivider}>
        <Form.Item
          className={style.form_item_width}
          label="Qual seu nome?"
          rules={[
            {
              required: true,
              message: 'O nome é obrigatório.',
            },
          ]}
          name="name"
        >
          <Input
            className={style.input_size_right}
            placeholder="ex.: Guilherme Neves"
          />
        </Form.Item>
        <Form.Item
          className={style.form_item_width}
          name="phone"
          label="Qual seu telefone?"
          rules={[
            {
              required: true,
              message: 'O telefone é obrigatório.',
            },
            {
              message: 'Telefone inválido',
              validator: phoneValidator,
            },
          ]}
        >
          <Input
            className={style.input_size_left}
            inputMode="tel"
            placeholder="ex.: (21) 98765-9087"
          />
        </Form.Item>
      </div>
      <div className={style.formDivider}>
        <Form.Item
          className={style.form_item_width}
          name="balance"
          label="Qual seu saldo?"
          rules={[
            {
              required: true,
              message: 'O saldo é obrigatório.',
            },
          ]}
        >
          <InputNumber
            className={style.input_size_right}
            placeholder="ex.: R$ 5.000,00"
            controls={false}
            formatter={moneyFormatter}
            parser={(value: any) => value?.replace(/\D/g, '')}
          />
        </Form.Item>
        <Form.Item
          className={style.form_item_width}
          rules={[
            {
              required: true,
              message: 'O aniversário é obrigatório.',
            },
          ]}
          name="birthday"
          label="Qual seu mês de aniversário?"
        >
          <DatePicker
            className={style.input_size_left}
            format={dateFormat}
            picker="month"
            placeholder="Selecione..."
          />
        </Form.Item>
      </div>
      <Form.Item className={style.button_container}>
        <Button type="primary" className={style.button} htmlType="submit">
          Ver Proposta
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Submission
