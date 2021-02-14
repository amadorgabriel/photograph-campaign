import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Senai Info</title>
      </Head>

      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#212121',
          width: '100%',
          height: '100vh',
        }}
      >

        <div className="main-text">
          <svg version="1.1" width="100%">
            <text className="stroke-text stroke-text-white" x="0%" y="96%">
              EM
            </text>
            <text
              className="fill-stroke-text fill-stroke-text-white"
              x="2%"
              y="90%"
            >
              EM
            </text>
          </svg>

          <svg version="1.1" width="754px" style={{ marginTop: '1em' }}>
            <text className="stroke-text" x="0%" y="96%">
              BREVE...
            </text>
            <text className="fill-stroke-text" x="2%" y="90%">
              BREVE...
            </text>
          </svg>
        </div>
      </main>
    </div>
  )
}

export default Home
