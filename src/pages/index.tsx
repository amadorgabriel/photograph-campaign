import Head from 'next/head'
import React from 'react'

import bannerStyles from '../styles/sections/Banner.module.css'


import LogoSenaiImage from '../assets/images/logo-senai.svg'
import GridImage from '../assets/images/logo-senai.svg'


const Home: React.FC = () => {
 
  return (
    <div>
      <Head>
        <title>Senai Info</title>
      </Head>

      <section className={bannerStyles.banner}>
        <header className={bannerStyles.header}>
          <LogoSenaiImage/>

          <ul>
            <li><a href="#campanha">A CAMPANHA</a></li>
            <li><a href="#senai">SENAI</a></li>
            <li><a href="#courses">18 ANOS</a></li>
            <li><a href="#galeria">GALERIA</a></li>
            <li><a href="#making">MAKING OF</a></li>
            <li><a href="#time">SOBRE NÓS</a></li>
          </ul>

          <span></span>

          <nav>
            <img src="../../assets/images/logo-senai.svg" alt="Logo Senai" />

            <div className={bannerStyles.container}>
              {/* <div className="container" onClick={myFunction(this)}> */}
              <div className={bannerStyles.bar1}></div>
              <div className={bannerStyles.bar2}></div>
              <div className={bannerStyles.bar3r}></div>
            </div>
          </nav>
        </header>

        <div className={bannerStyles.mainContainer}>
          <div
            className={bannerStyles.mainText}
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="200"
            data-tilt-perspective="500"
            transform-style="preserve-3d"
          // transform="perspective(1000px)"
          >
            <svg
              version="1.1"
              xmlns="//www.w3.org/2000/svg"
              xmlnsXlink="//www.w3.org/1999/xlink"
              width="100%"
              className={bannerStyles.senaiH1}
            >
              <text className={`${bannerStyles.strokeText} ${bannerStyles.strokeTextWhite}`} x="0%" y="96%">
                SENAI
            </text>
              <text
                className={`${bannerStyles.fillStrokeText} ${bannerStyles.fillStrokeTextWhite}`}
                x="2%"
                y="90%"
              >
                SENAI
            </text>
            </svg>

            <svg
              version="1.1"
              xmlns="//www.w3.org/2000/svg"
              xmlnsXlink="//www.w3.org/1999/xlink"
              width="100%"
              className={bannerStyles.infoH1}
            // style={"margin-top: 1em"}
            >
              <text className={bannerStyles.strokeText} x="0%" y="96%">INFO</text>
              <text className={bannerStyles.fillStrokeText} x="2%" y="90%">INFO</text>
            </svg>
          </div>

          <div
            className={bannerStyles.mainImage}
            data-tilt
            data-tilt-max="5"
            data-tilt-speed="200"
            data-tilt-perspective="500"
            transform-style="preserve-3d"
          // transform="perspective(1000px)"
          >
            <img
              src="./assets/images/ping-hand.svg"
              className={bannerStyles.pingImage}
              alt="Ping Pong"
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="400"
              data-tilt-perspective="300"
            />

            <img
              src="./assets/images/bg/purple-grid-1.png"
              className={bannerStyles.gridImage}
              alt="Grade Roxa"
            />
          </div>
        </div>
      </section>

      <footer>
        <p>Todos os direitos reservados - SENAI 2021</p>
      </footer>

    </div>
  )
}

export default Home
