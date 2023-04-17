import Head from 'next/head'
import React from 'react'
import { Layout } from 'antd'
import 'antd/dist/reset.css'
import 'styles.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { LineOutlined, MoneyCollectOutlined } from '@ant-design/icons'

const { Header, Content } = Layout

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
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
              style={{ width: '100%', display: 'flex', alignItems: 'flex-end' }}
            >
              {/* <div> */}
              {/* #00BBC3 - Cor padrao */}
              <strong
                style={{
                  fontSize: '40px',
                  display: 'inline-block',
                  width: '65%',
                  lineHeight: '1',
                  fontStyle: 'italic',
                }}
              >
                Use uma grana
                <br /> que já é sua e<br /> saia do aperto.
              </strong>
              <div style={{ width: '35%', lineHeight: 2, fontSize: 10 }}>
                <MoneyCollectOutlined />
                <strong> SAQUE ANIVERSÁRIO</strong>
                <br />
                <span>
                  <LineOutlined style={{ transform: 'rotate(90deg)' }} />
                  <strong>Insira seus dados</strong> e verifique o<br /> quanto
                  você poderá receber
                </span>
              </div>
            </div>
            {/* </div> */}
          </Header>
          <Component styles={{ background: 'green' }} {...pageProps} />
        </Content>
      </Layout>
    </>
  )
}
