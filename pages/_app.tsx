/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Card, ConfigProvider, Layout } from 'antd'
import 'antd/dist/reset.css'
import 'styles.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { LineOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { UserProvider } from 'component/context/UserContext'
import { extractFirstName } from 'component/utils/utis'
import { useRouter } from 'next/router'
import ptBR from 'antd/lib/locale/pt_BR'

const { Header, Content } = Layout

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  const [firstName, setFirstName] = useState<string | null | undefined>('')

  useEffect(() => {
    setFirstName(extractFirstName(String(router?.query?.name)))
  }, [router.query])

  return (
    <>
      <ConfigProvider locale={ptBR}>
        <UserProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap"
              rel="stylesheet"
            />
          </Head>

          <Layout className="layout">
            <Content className="content">
              <Header className="header">
                <div>
                  <Image
                    src="/icons/smile.svg"
                    alt="Ícone do header"
                    width={20}
                    height={20}
                    color="white"
                    style={{ marginRight: '5px' }}
                  />
                  <span>SMILE Co.</span>
                </div>
                <div
                  className={
                    firstName !== null &&
                    firstName !== '' &&
                    firstName !== 'undefined' &&
                    firstName !== undefined
                      ? 'header-first-name'
                      : 'header-text'
                  }
                >
                  <strong
                    style={{
                      fontSize: '40px',
                      display: 'inline-block',
                      width: '65%',
                      lineHeight: '1',
                      fontStyle: 'italic',
                    }}
                  >
                    {firstName !== null &&
                    firstName !== '' &&
                    firstName !== 'undefined' &&
                    firstName !== undefined ? (
                      <span style={{ fontSize: 70 }}>Olá, {firstName}!</span>
                    ) : (
                      <>
                        Use uma grana
                        <br /> que já é sua e<br />
                        saia do aperto.
                      </>
                    )}
                  </strong>
                  <div style={{ width: '35%', lineHeight: 2, fontSize: 10 }}>
                    <MoneyCollectOutlined />
                    <strong> SAQUE ANIVERSÁRIO</strong>
                    <br />
                    <span>
                      <LineOutlined style={{ transform: 'rotate(90deg)' }} />
                      <strong>Insira seus dados</strong> e verifique o<br />{' '}
                      quanto você poderá receber
                    </span>
                  </div>
                </div>
              </Header>
              <Card
                style={{
                  margin: '30px auto',
                  width: '80%',
                }}
              >
                <Component {...pageProps} />
              </Card>
            </Content>
          </Layout>
        </UserProvider>
      </ConfigProvider>
    </>
  )
}
