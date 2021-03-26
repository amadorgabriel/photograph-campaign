import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import bannerStyles from '../styles/sections/Banner.module.css'
import campaingStyles from '../styles/sections/Campaing.module.css'
import instituteStyles from '../styles/sections/Institute.module.css'

const Home: React.FC = () => {
  const TitleSenai = useRef(null)
  const [scrolY, setScrollY] = useState(0)

  const TitleLookAtMouse = event => {
    setScrollY(window.scrollY)

    var element = TitleSenai.current
    var horizontalPercentage = (2 * event.clientX) / window.innerWidth + '%'
    var verticalPercentage = (2 * event.clientY) / window.innerHeight + '%'

    element.style.right = horizontalPercentage
    element.style.top = verticalPercentage
  }

  useEffect(() => {
    if (scrolY <= 900) {
      window.addEventListener('mousemove', TitleLookAtMouse)
    } else {
      window.addEventListener('scroll', () => setScrollY(window.scrollY))
    }

    return () => window.removeEventListener('mousemove', TitleLookAtMouse)
  }, [scrolY, setScrollY])

  return (
    <div>
      <Head>
        <title>Senai Info</title>
      </Head>

      <section className={bannerStyles.banner}>
        <header className={bannerStyles.header}>
          <Image
            src="/images/logo-senai.svg"
            alt="Logo Senai em preto com fundo branco"
            width="1"
            height="1"
          />

          <ul>
            <li>
              <Link href="#campanha">A CAMPANHA</Link>
            </li>
            <li>
              <Link href="#senai">SENAI</Link>
            </li>
            <li>
              <Link href="#courses">18 ANOS</Link>
            </li>
            <li>
              <Link href="#galeria">GALERIA</Link>
            </li>
            <li>
              <Link href="#making">MAKING OF</Link>
            </li>
            <li>
              <Link href="#time">SOBRE NÓS</Link>
            </li>
          </ul>

          <span></span>
        </header>

        <div className={bannerStyles.mainContainer}>
          <div
            className={bannerStyles.mainText}
            ref={TitleSenai}
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
              <text
                className={`${bannerStyles.strokeText} ${bannerStyles.strokeTextWhite}`}
                x="0%"
                y="96%"
              >
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
              <text className={bannerStyles.strokeText} x="0%" y="96%">
                INFO
              </text>
              <text className={bannerStyles.fillStrokeText} x="2%" y="90%">
                INFO
              </text>
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
              src="./images/ping-hand.svg"
              className={bannerStyles.pingImage}
              alt="Ping Pong"
              data-tilt
              data-tilt-max="5"
              data-tilt-speed="400"
              data-tilt-perspective="300"
            />

            <img
              src="./images/bg/purple-grid-1.png"
              className={bannerStyles.gridImage}
              alt="Grade Roxa"
            />
          </div>
        </div>
      </section>

      <section id={campaingStyles.campanha}>
        <svg
          height="30%"
          version="1.1"
          xmlns="//www.w3.org/2000/svg"
          xmlnsXlink="//www.w3.org/1999/xlink"
          width="100%"
        >
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor="#ED0140" />
            <stop offset="95%" stopColor="#BA01EA" />
          </linearGradient>

          <text className={campaingStyles.strokeText} x="10%" y="98%">
            A CAMPANHA
          </text>
          <text className={campaingStyles.fillStrokeText} x="11%" y="92%">
            A CAMPANHA
          </text>
        </svg>

        <div className={campaingStyles.campanhaContent}>
          <div className={campaingStyles.contentSup}>
            <div>
              <img
                src="/images/filter-image.png "
                alt="Imagem Ilustrativa"
                className={campaingStyles.imageFilter1}
              />

              <img
                src="/images/campanha-img-3.png"
                alt="Imagem Ilustrativa"
                className={campaingStyles.imageCampanha1}
              />
            </div>

            <p>
              O SENAI completou 18 anos e pensando nisso, nossa campanha busca
              promover a criatividade, humanidade e conhecimento dentro da
              escola, apresentando ao público os ambientes únicos e
              descontraídos, os ensinamentos dentro e fora de sala de aula e as
              oportunidades oferecidas aos alunos.
            </p>
          </div>

          <div className={campaingStyles.contentInf}>
            <div className={campaingStyles.infImages}>
              <div>
                <img
                  src="/images/filter-image.png"
                  alt="Imagem Ilustrativa"
                  className={campaingStyles.imageFilter1}
                />

                <img
                  src="/images/campanha-img-2.png"
                  alt="Imagem Ilustrativa"
                  className={campaingStyles.imageCampanha2}
                />
              </div>

              <div>
                <img
                  src="/images/filter-image.png"
                  alt="Imagem Ilustrativa"
                  className={campaingStyles.imageFilter1}
                />

                <img
                  src="/images/campanha-img-1.png"
                  alt="Imagem Ilustrativa"
                  className={campaingStyles.imageCampanha3}
                />
              </div>
            </div>

            <img
              src="/images/white-statue.svg"
              alt="Imagem Ilustrativa"
              className={campaingStyles.statueImg}
            />
          </div>
        </div>
      </section>

      <section id={instituteStyles.senai}>
        <div className={instituteStyles.mainTitle}>
          <svg
            height="60%"
            version="1.1"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
            width="500px"
          >
            <text className={instituteStyles.strokeText} x="10%" y="95%">
              O SENAI
            </text>
          </svg>
        </div>

        <div>
          <div className={instituteStyles.popup}>
            <div className={instituteStyles.topbar}>
              <div className={instituteStyles.options}>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className={instituteStyles.searchBar}></div>
            </div>

            <iframe
              className={instituteStyles.videoFrame}
              src="https://www.youtube.com/embed/bnTiyZ78SFw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // frameborder="0"
              // allowfullscreen
            ></iframe>
          </div>

          <div className={instituteStyles.bottomMaking}>
            <p>Venha saber como foi feito!</p>

            <a href="#making" className={instituteStyles.btnMaking}>
              {' '}
              Making Of{' '}
            </a>
          </div>
        </div>

        <img
          className={instituteStyles.purpleGrid}
          src="/images/bg/purple-grid-2.png"
          alt="Grade roxa"
        />
      </section>

      <footer>
        <p>Todos os direitos reservados - SENAI 2021</p>
      </footer>
    </div>
  )
}

export default Home
