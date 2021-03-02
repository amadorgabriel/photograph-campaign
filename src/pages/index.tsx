import Head from 'next/head'
import React from 'react'
import {
  Main,
  MainText,
  StrokeText,
  FillStrokeText,
  FillStrokeTextWhite,
  StrokeTextWhite,
} from '../styles/pages/comming'

import OutlinedTitle from '../components/Title/Outlined'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Senai Info</title>
      </Head>

      <Main>
        <OutlinedTitle
          fontSize="small"
          height="10%"
          width="950px"
          strokeColor="primary"
          x="10%"
          y="80%"
        >
          Hey, Em Breve...
        </OutlinedTitle>
        {/* <MainText>
          <svg version="1.1" width="100%">
            <StrokeTextWhite x="0%" y="96%">
              EM
            </StrokeTextWhite>
            <FillStrokeTextWhite
              x="2%"
              y="90%"
            >
              EM
            </FillStrokeTextWhite>
          </svg>

          <svg version="1.1" width="754px" style={{ marginTop: '1em' }}>
            <StrokeText x="0%" y="96%">
              BREVE...
            </StrokeText>
            <FillStrokeText x="2%" y="90%">
              BREVE...
            </FillStrokeText>
          </svg>
        </MainText> */}
      </Main>
    </div>
  )
}

export default Home
