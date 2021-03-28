import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import db from '../../db.json'

import bannerStyles from '../styles/sections/Banner.module.css'
import campaingStyles from '../styles/sections/Campaing.module.css'
import instituteStyles from '../styles/sections/Institute.module.css'
import coursesStyles from '../styles/sections/Courses.module.css'
import galeryStyles from '../styles/sections/Gallery.module.css'
import makingStyles from '../styles/sections/Making.module.css'
import teamStyles from '../styles/sections/Team.module.css'
import sliderStyles from '../styles/sections/Slider.module.css'

const Home: React.FC = () => {
  const TitleSenaiRef = useRef(null)
  const SectionModalRef = useRef(null)
  const ImageModalRef = useRef(null)

  const [posScrollY, setPosScrollY] = useState(0)
  const [imageSectionVisibility, setImageSectionVisibility] = useState(false)

  const imagesArr1 = db.gallery.images1
  const imagesArr2 = db.gallery.images2

  const TitleLookAtMouse = event => {
    setPosScrollY(window.scrollY)

    var element = TitleSenaiRef.current
    var horizontalPercentage = (2 * event.clientX) / window.innerWidth + '%'
    var verticalPercentage = (2 * event.clientY) / window.innerHeight + '%'

    element.style.right = horizontalPercentage
    element.style.top = verticalPercentage
  }

  const handleClickImage = (indexImage, formatImage) => {
    setImageSectionVisibility(!imageSectionVisibility)
  }

  useEffect(() => {
    if (posScrollY <= 900) {
      window.addEventListener('mousemove', TitleLookAtMouse)
    } else {
      window.addEventListener('scroll', () => setPosScrollY(window.scrollY))
    }

    return () => window.removeEventListener('mousemove', TitleLookAtMouse)
  }, [posScrollY, setPosScrollY])

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
              <Link href={`#${campaingStyles.campanha}`}>A CAMPANHA</Link>
            </li>
            <li>
              <Link href={`#${instituteStyles.senai}`}>SENAI</Link>
            </li>
            <li>
              <Link href={`#${coursesStyles.courses}`}>18 ANOS</Link>
            </li>
            <li>
              <Link href={`#${galeryStyles.galeria}`}>GALERIA</Link>
            </li>
            <li>
              <Link href={`#${makingStyles.making}`}>MAKING OF</Link>
            </li>
            <li>
              <Link href={`#${teamStyles.time}`}>SOBRE NÓS</Link>
            </li>
          </ul>

          <span></span>
        </header>

        <div className={bannerStyles.mainContainer}>
          <div
            className={bannerStyles.mainText}
            ref={TitleSenaiRef}
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
              src="https://www.youtube.com/embed/G2So_vOfrgE"
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

      <section id={coursesStyles.courses}>
        <div className={coursesStyles.mainTitle}>
          <svg
            height="30%"
            version="1.1"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
          >
            <linearGradient id="MyGradient">
              <stop offset="5%" stopColor="#ED0140" />
              <stop offset="95%" stopColor="#BA01EA" />
            </linearGradient>

            <text className={coursesStyles.strokeText} x="0%" y="90%">
              18 ANOS
            </text>
            <text className={coursesStyles.fillStrokeText} x="2%" y="84%">
              18 ANOS
            </text>
          </svg>

          <img src="/images/bg/dotted-background.png" alt="Fundo Pontilhado" />
        </div>

        <div className={coursesStyles.cardSections}>
          <div className={coursesStyles.cardCourse}>
            <img src="/images/post-tecnologia.png" />

            <div>
              <svg
                version="1.1"
                xmlns="//www.w3.org/2000/svg"
                xmlnsXlink="//www.w3.org/1999/xlink"
              >
                <text className={coursesStyles.strokeText} x="0%" y="80%">
                  Tecnologia
                </text>
              </svg>

              <p>
                O curso técnico de Desenvolvimento de Sistemas capacita
                profissionais para analisar requisitos de sistemas, desenvolver
                aplicações web e mobile e testá-las. Para isso, fazemos uso de
                diversas tecnologias como também metodologias ágeis para gestão
                de projetos.
              </p>
            </div>
          </div>

          <div className={coursesStyles.cardCourse}>
            <div>
              <svg
                version="1.1"
                xmlns="//www.w3.org/2000/svg"
                xmlnsXlink="//www.w3.org/1999/xlink"
              >
                <text className={coursesStyles.strokeText} x="0%" y="80%">
                  Criatividade
                </text>
              </svg>

              <p>
                O curso técnico de Multimidia tem como objetivo formar
                profissionais que saibam desenvolver produtos de design digital,
                com conhecimentos em arquitetura da informação, edição
                audiovisual, design de interfaces, tipografia digital e animação
                2D, jogos digitais.
              </p>
            </div>

            <img src="/images/post-criatividade.png" />
          </div>

          <div className={coursesStyles.cardCourse}>
            <img src="/images/post-conexao.png" />

            <div>
              <svg
                version="1.1"
                xmlns="//www.w3.org/2000/svg"
                xmlnsXlink="//www.w3.org/1999/xlink"
              >
                <text className={coursesStyles.strokeText} x="0%" y="80%">
                  Conexão
                </text>
              </svg>

              <p>
                O curso técnico de Redes tem como objetivo formar profissionais
                que saibam configurar e administrar serviços de redes, prover a
                infraestrutura necessária para ambientes físicos, virtuais e
                disponibilizados na nuvem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id={galeryStyles.galeria}>
        <div className={galeryStyles.mainTitle}>
          <img
            src="/images/gallery/camera-element.png "
            alt="Camera Fotográfica Retro"
            className={galeryStyles.cameraRetro}
          />
          <svg
            version="1.1"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
          >
            <linearGradient id="MyGradient">
              <stop offset="5%" stopColor="#ED0140" />
              <stop offset="95%" stopColor="#BA01EA" />
            </linearGradient>

            <text className={galeryStyles.strokeText} x="0%" y="90%">
              GALERIA
            </text>
            <text className={galeryStyles.fillStrokeText} x="2%" y="94%">
              GALERIA
            </text>
          </svg>
        </div>

        <div className={galeryStyles.mainFotos}>
          <div className={galeryStyles.filme}>
            {imagesArr1.map((formatImage, index) => {
              index += 1
              const indexPhoto = '0' + index
              let imageNumber = index.toString()
              imageNumber =
                parseInt(imageNumber) <= 9 ? indexPhoto : index.toString()

              const source = `/images/gallery/${imageNumber}.${formatImage}`

              return (
                <img
                  key={index}
                  src={source}
                  onClick={() => {
                    handleClickImage(indexPhoto, formatImage)
                  }}
                />
              )
            })}
          </div>
          <div className={galeryStyles.filme}>
            {imagesArr2.map((formatImage, index) => {
              index += 12
              const source = `/images/gallery/${index.toString()}.${formatImage}`

              return (
                <img
                  key={index}
                  src={source}
                  onClick={() => {
                    handleClickImage(index, formatImage)
                  }}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section id={makingStyles.making}>
        <div className={`${instituteStyles.popup} ${makingStyles.popup}`}>
          <div className={`${instituteStyles.topbar} ${makingStyles.topbar}`}>
            <div className={instituteStyles.options}>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className={instituteStyles.searchBar}></div>
          </div>

          <iframe
            className={instituteStyles.videoFrame}
            src="https://www.youtube.com/embed/rEyROZw3gp8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // frameborder="0"
            // allowfullscreen
          ></iframe>
        </div>
      </section>

      <section id={teamStyles.time}>
        <div className={teamStyles.mainTitle}>
          <svg
            height="30%"
            version="1.1"
            xmlns="//www.w3.org/2000/svg"
            xmlnsXlink="//www.w3.org/1999/xlink"
          >
            <linearGradient id="MyGradient">
              <stop offset="5%" stopColor="#ED0140" />
              <stop offset="95%" stopColor="#BA01EA" />
            </linearGradient>

            <text className={teamStyles.strokeText} x="0%" y="90%">
              TIME
            </text>
            <text className={teamStyles.fillStrokeText} x="2%" y="84%">
              TIME
            </text>
          </svg>
        </div>

        <div className={`${teamStyles.slide} ${sliderStyles.hiSlide}`}>
          <div className={sliderStyles.hiPrev}></div>
          <div className={sliderStyles.hiNext}></div>
          <ul>
            <li>
              <div className={teamStyles.card}>
                <div
                  className={teamStyles.textContent}
                  style={{ backgroundColor: '#d41665' }}
                >
                  <div>
                    <h2>Nicole</h2>
                    <h2>Helen</h2>
                  </div>
                  <p>
                    Olá, trabalho na área de Design Gráfico da campanha. Tenho
                    gostos muito variados desde de literatura a música, sou uma
                    pessoa muito envolvida e dedicada. Sempre que vou fazer
                    alguma coisa gosto de inovar.
                  </p>
                </div>

                <div
                  className={teamStyles.imgContent}
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, #b92c90 0%, #d41665 80.73%',
                  }}
                >
                  <img
                    src="/images/team/nicole-team.png"
                    alt="Foto de frente integrante do time"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className={teamStyles.card}>
                <div
                  className={teamStyles.textContent}
                  style={{ backgroundColor: '#ef0039' }}
                >
                  <div>
                    <h2>Suiany</h2>
                    <h2>Racheti</h2>
                  </div>
                  <p>
                    Exerço na área do Web Design e Fotografia da nossa campanha.
                    Sou uma pessoa que gosta de trabalhar em conjunto e procuro
                    sempre estabelecer produtividade e confiança entre os
                    membros da equipe.
                  </p>
                </div>

                <div
                  className={teamStyles.imgContent}
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg,#d41665 0%,#ef0039 78.65%)',
                  }}
                >
                  <img
                    src="/images/team/suiany-team.png"
                    alt="Foto de frente integrante do time"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className={teamStyles.card}>
                <div
                  className={teamStyles.textContent}
                  style={{ backgroundColor: '#8257e6' }}
                >
                  <div>
                    <h2>Gabriel</h2>
                    <h2>Amador</h2>
                  </div>
                  <p>
                    Participei do web design e desenvolvimento do site da
                    campanha. Costumo sempre imergir em novos desafios e me
                    envolver em diferentes etapas desde o processo criativo à
                    execução, gosto de pensar que as idéias devem sair do papel
                    e serem transformadas em realidade.
                  </p>
                </div>

                <div
                  className={teamStyles.imgContent}
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg,rgba(186, 1, 234, 0.5) 0%,rgba(130, 87, 230, 0.5) 100%)',
                  }}
                >
                  <img
                    src="/images/team/amador-team.png"
                    alt="Foto de frente integrante do time"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className={teamStyles.card}>
                <div
                  className={teamStyles.textContent}
                  style={{ backgroundColor: '#9e42bb' }}
                >
                  <div>
                    <h2>Lucas</h2>
                    <h2>Oliveira</h2>
                  </div>
                  <p>
                    Faço parte do Web Design e Fotografia da campanha. Tenho
                    paixão por imaginar coisas que ainda não existem, gosto de
                    pensar como seriam e qual a proporção que elas podem tomar.
                    Pois, eu penso que tudo que não existe pode ser criado e
                    tudo que já existe deve ser mudado.
                  </p>
                </div>

                <div
                  className={teamStyles.imgContent}
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg,#8257e6 0%,#9e42bb 92.19%)',
                  }}
                >
                  <img
                    src="/images/team/lucas-team.png"
                    alt="Foto de frente integrante do time"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className={teamStyles.card}>
                <div
                  className={teamStyles.textContent}
                  style={{ backgroundColor: '#892c90' }}
                >
                  <div>
                    <h2>Luiza</h2>
                    <h2>Sampaio</h2>
                  </div>
                  <p>
                    Atuo na área de Design Gráfico da campanha. Sou apaixonada
                    por todas as formas de arte e busco trazer criatividade para
                    tudo que faço, desde as coisas mais simples até as mais
                    complexas. Acredito que com imaginação, podemos trazer
                    outras cores ao nosso dia-a-dia.
                  </p>
                </div>

                <div
                  className={teamStyles.imgContent}
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg,#9e42bb 0%,#b92c90 86.46%)',
                  }}
                >
                  <img
                    src="/images/team/luiza-team.png"
                    alt="Foto de frente integrante do time"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="galery-image"
        className={teamStyles.none}
        ref={SectionModalRef}
      >
        <a
          href="#galeria"
          onClick={() => {
            setImageSectionVisibility(!imageSectionVisibility)
          }}
        >
          Fechar
        </a>

        <img ref={ImageModalRef} src="/images/gallery/09.jpg" />
      </section>

      <footer>
        <p>Todos os direitos reservados - SENAI 2021</p>
      </footer>
    </div>
  )
}

export default Home
