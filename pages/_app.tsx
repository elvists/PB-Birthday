/* eslint-disable react/no-unknown-property */
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Card, ConfigProvider, Layout } from 'antd'
import 'antd/dist/reset.css'
import '../styles/design_tokens.css'
import '../styles/globals.css'
import '../styles/layout.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { LineOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import { UserProvider } from 'component/context/UserContext'
import { extractFirstName } from 'component/utils/utis'
import { useRouter } from 'next/router'
import ptBR from 'antd/lib/locale/pt_BR'
import { Analytics } from '@vercel/analytics/react'

const { Header, Content } = Layout

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  const [firstName, setFirstName] = useState<string | null | undefined>('')

  const checkFirstName = (): boolean =>
    firstName !== null &&
    firstName !== '' &&
    firstName !== 'undefined' &&
    firstName !== undefined

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
                <section className="header_image">
                  <Image
                    src="/icons/smile.svg"
                    alt="Ícone do header"
                    width={20}
                    height={20}
                    color="white"
                    style={{ marginRight: '5px' }}
                  />
                  <span>SMILE Co.</span>
                </section>
                <section
                  className={
                    checkFirstName() ? 'header-first-name' : 'header-text'
                  }
                >
                  <strong className="header-text-strong">
                    {checkFirstName() ? (
                      <span className="header-text-strong-size">
                        Olá, {firstName}!
                      </span>
                    ) : (
                      <>
                        Use uma grana
                        <br /> que já é sua e <br />
                        saia do aperto.
                      </>
                    )}
                  </strong>
                  <div className="header-text-details">
                    <span>
                      <MoneyCollectOutlined />
                      <strong>SAQUE ANIVERSÁRIO</strong>
                    </span>
                    <br />
                    <span>
                      <LineOutlined style={{ transform: 'rotate(90deg)' }} />
                      <strong>Insira seus dados</strong> e verifique o<br />{' '}
                      quanto você poderá receber
                    </span>
                  </div>
                </section>
              </Header>
              <Card className="card-content">
                <Component {...pageProps} />
                <Analytics />
              </Card>
            </Content>
          </Layout>
        </UserProvider>
      </ConfigProvider>
    </>
  )
}
