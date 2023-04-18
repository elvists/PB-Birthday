import React from 'react'
import { Card } from 'antd'
import Submission from '../components/Submission/Submission'

const Home = () => {
  return (
    <Card
      style={{
        marginTop: 30,
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Submission></Submission>
    </Card>
  )
}

export default Home
