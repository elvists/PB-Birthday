/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react'
import { Button, DatePicker, Form, Input, InputNumber } from 'antd'
// import locale from 'antd/es/locale/pt_BR'
import type { User } from 'component/types/user'
import type { AxiosError } from 'axios'
import axios from 'axios'
import { useRouter } from 'next/router'

const Submission = () => {
  const [form] = Form.useForm()
  const dateFormat = 'MM/YYYY'
  const router = useRouter()

  const onFinish = async (values: User) => {
    await form.validateFields()
    await router.push({
      pathname: '/resposta',
      query: { ...values, birthday: values.birthday.format('DD/MM/YYYY') },
    })
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

  return (
    <Form
      layout={'vertical'}
      form={form}
      style={{ margin: 'auto' }}
      onFinish={onFinish}
    >
      <div className="formDivider">
        <Form.Item
          style={{
            width: '50%',
          }}
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
            style={{ width: '97.5%', marginRight: '2.5%' }}
            placeholder="ex.: Guilherme Neves"
          />
        </Form.Item>
        <Form.Item
          style={{
            width: '50%',
          }}
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
            style={{ width: '97.5%', marginLeft: '2.5%' }}
            inputMode="tel"
            placeholder="ex.: (21) 98765-9087"
          />
        </Form.Item>
      </div>
      <div className="formDivider">
        <Form.Item
          style={{
            width: '50%',
          }}
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
            style={{ width: '97.5%', marginRight: '2.5%' }}
            placeholder="ex.: R$ 5.000,00"
            controls={false}
            formatter={(value: any) =>
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
            parser={(value: any) => value?.replace(/\D/g, '')}
          />
        </Form.Item>
        <Form.Item
          style={{
            width: '50%',
          }}
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
            style={{ width: '97.5%', marginLeft: '2.5%' }}
            format={dateFormat}
            // locale={locale}
            picker="month"
            placeholder="Selecione..."
          />
        </Form.Item>
      </div>
      <Form.Item className="button-container">
        <Button type="primary" className="button" htmlType="submit">
          Ver Proposta
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Submission
