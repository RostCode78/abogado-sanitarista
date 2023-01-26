import { useContext } from "react";
import Head from "next/head";
import appContext from "../context/appContext";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

const jurista = () => {

  const ContextApp = useContext(appContext);
  const {
    MostrarModalZoom,
    GuardarImagenZoom
  } = ContextApp;

  const Opciones = [
    {
      id: 1,
      texto: "Seminario en Sistema Penal Acusatorio, Adversarial y Oral."
    },
    {
      id: 2,
      texto: "Seminario en Juicios Orales en Materia Familiar."
    },
    {
      id: 3,
      texto: "Seminario en Derecho Procesal Laboral."
    },
    {
      id: 4,
      texto: "Seminario en Juicio de Amparo Directo e Indirecto."
    },
    {
      id: 5,
      texto: "Seminario en Juicios Orales en Materia Mercantil y Civil."
    },
    {
      id: 6,
      texto: "Curso Despido Injustificado."
    },
    {
      id: 7,
      texto: "Diplomado “Medidas de Protección ante el Conflicto Médico – Legal”."
    },
    {
      id: 8,
      texto: "Curso Responsabilidad Médica."
    },
    {
      id: 9,
      texto: "Diplomado Mala Praxis y Responsabilidad Médica."
    },
    {
      id: 10,
      texto: "Curso Prevención del Conflicto Contra los Profesionales de la Salud."
    },
    {
      id: 11,
      texto: "Especialidad en Derecho Sanitario (en trámite de titulación)."
    },
    {
      id: 12,
      texto: "Diplomado en Derecho Médico."
    },
  ];

  const Diplomas = [
    {
      id: 1,
      url_img: 'https://i.imgur.com/RpFMR9Q.jpg',
      alt: "Prevención del conflicto contra los profesionales de la salud."
    },
    {
      id: 2,
      url_img: 'https://i.imgur.com/eEzNRMv.jpg',
      alt: "Malpraxis y responsabilidad médica"
    },
    {
      id: 3,
      url_img: 'https://i.imgur.com/a1HFJl8.jpg',
      alt: "Diploma - Universidad La Salle Nezahualcóyotl"
    },
    {
      id: 4,
      url_img: 'https://i.imgur.com/1OaeDpz.jpg',
      alt: "Diplomado Especializado en Derecho Médico"
    },
  ];

  const ImageSlider = [
    {
      id: 1,
      url_img: "https://i.imgur.com/y1OXuyf.jpg"
    },
    {
      id: 2,
      url_img: "https://i.imgur.com/pCjCu3f.jpg"
    },
    {
      id: 3,
      url_img: "https://i.imgur.com/JNvzYQN.jpg"
    },
    {
      id: 4,
      url_img: "https://i.imgur.com/aclHMWi.jpg"
    },
  ]

  const OnClickOpenZoom = (e) => {
      GuardarImagenZoom(e);
      MostrarModalZoom(true);
  }

  return (
    <>
      <Head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Jurista | Abogado Sanitarista LS | Miguel A. Rodríguez Corzas</title>
          <meta name="description" content='Asesor y abogado postulante en controversias derivadas de la prestación de servicios de salud en el ámbito público y privado, cofundador de “Grupo Lex Artis Médica”, grupo en donde convergen abogados y profesionales de salud interesados en el desarrollo del derecho sanitario, fundador del Consejo Mexicano de Derecho Sanitario “CMDS”, socio de la agencia de gestoría Regulación Sanitaria del Norte “RESAN”' />
          <link rel="icon" href="/logo.ico" type="image/x-icon" />

          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="abogadosanitaristals" />
          <meta property="og:description" content='Abogado egresado del Inter, Centro de Estudios Superiores, actualmente en espera de aprobación de Tesis de Especialidad en Derecho Sanitario en la UNAM, FES ACATLÁN.' />
          <meta property="og:url" content="https://abogadosanitaristals.com/jurista" />
          <meta property="og:site_name" content="abogadosanitaristals" />

          {/* <!-- Para facebook, SMS --> */}
          <meta property="og:image" content="/mini.png" />
          <meta property="og:image:secure_url" content="/mini.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Abogado egresado del Inter, Centro de Estudios Superiores, actualmente en espera de aprobación de Tesis de Especialidad en Derecho Sanitario en la UNAM, FES ACATLÁN." />

          {/* <!-- Para twitter --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="Abogado egresado del Inter, Centro de Estudios Superiores, actualmente en espera de aprobación de Tesis de Especialidad en Derecho Sanitario en la UNAM, FES ACATLÁN." />
          <meta name="twitter:title" content="Abogado Sanitarista LS | Miguel A. Rodríguez Corzas" />
          <meta name="twitter:image" content="/mini.png" />

          {/* <!-- Para whatsapp --> */}
          <meta property="og:image" content="/mini.png" />
          <meta property="og:image:secure_url" content="/mini.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

      </Head>
      <Layout>
        <div className="container-jurista">

          <div className="header">

            <div className="content-texto">
              <h1>Licenciado Miguel Ángel Rodríguez Corzas.</h1>
              <h2>Abogado.</h2>
              <h3>Especialista en Derecho Sanitario y Derecho Médico.</h3>
            </div>

            <div className="content-imagen">
              <img src="https://i.imgur.com/03NNUSz.png" alt="Selfie" />
            </div>
          
          </div>

          <div className="informacion">

            <div className="left">
              <div className="content-titulo">
                  <h2>Diplomas y constancias</h2>
              </div>
              <div className="content-images">
                  { Diplomas.map( e => (
                    <div className="item" key={ e.id } onClick={ () => OnClickOpenZoom( e.url_img ) }>
                      <img src={ e.url_img } alt={ e.alt } />
                    </div>
                  ))}
              </div>
            </div>

            <div className="right">

              <div className="item">
                <p>Abogado egresado del Inter, Centro de Estudios Superiores, actualmente en espera de aprobación de <span className="negritas negro">Tesis de Especialidad</span> en <span className="negritas negro" >Derecho Sanitario</span> en la <span className="negritas negro" >UNAM</span>, <span className="negritas negro">FES ACATLÁN</span>.</p>
              </div>

              <div className="item">
                <p>Asesor y abogado postulante en controversias derivadas de la prestación de servicios de salud en el ámbito público y privado, <span className="negritas negro">cofundador de “Grupo Lex Artis Médica”</span>, grupo en donde convergen abogados y profesionales de salud interesados en el desarrollo del derecho sanitario, <span className="negritas negro">fundador del Consejo Mexicano de Derecho Sanitario “CMDS”</span>, <span className="negritas negro">socio de la agencia de gestoría Regulación Sanitaria del Norte “RESAN”</span>.</p>
              </div>

              <div className="item">
                <p>Dentro de las <span className="negritas negro">actividades recientes más relevantes</span> en materia sanitaria, están la <span className="negritas negro">interposición de juicios amparos para obtener equipo de protección personal, vacunas contra el Covid-19, insumos y atención médica.</span></p>
              </div>

              <div className="item">
                <p>También ha sido <span className="negritas negro">abogado postulante en diversos despachos Jurídicos.</span>.</p>
              </div>

              <div className="item">
                <p>Para sostener una debida praxis legal en materia sanitaria, el Licenciado tiene la siguiente <span className="negritas negro">formación académica</span>:</p>
              </div>

              <div className="item-list">

                <div className="titulo">
                  <div className="line"/>
                  <p>Especialidad en Derecho Sanitario (en trámite de titulación).</p>
                </div>

              </div>

              <div className="item-list">

                <div className="titulo">
                  <div className="line"/>
                  <p>Diplomados:</p>
                </div>

                <div className="list">

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Medidas de Protección ante el Conflicto Médico Paciente.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Diplomado Mala Praxis y Responsabilidad Médica.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Diplomado en Derecho Médico.</p>
                  </div>

                </div>

              </div>

              <div className="item-list">

                <div className="titulo">
                  <div className="line"/>
                  <p>Cursos:</p>
                </div>

                <div className="list">

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Prevención del Conflicto Contra los Profesionales de la Salud.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Responsabilidad Médica.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Derecho Penal Médico.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Despido Injustificado..</p>
                  </div>

                </div>

              </div>

              <div className="item-list">

                <div className="titulo">
                  <div className="line"/>
                  <p>Seminarios:</p>
                </div>

                <div className="list">

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Sistema Penal Acusatorio, Adversarial y Oral.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Juicios Orales en Materia Mercantil y Civil.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Derecho Procesal Laboral.</p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Juicio de Amparo Directo e Indirecto. </p>
                  </div>

                  <div className="item-list">
                    <div className="circle"/>
                    <p>Juicios Orales en Materia Familiar.</p>
                  </div>

                </div>

              </div>

            </div>
            
          </div>

          <div className="slider">
              <div className="content-titulo">
                  <h2>Iustitia est constants et perpetua voluntas ius suum cuique tribuere.</h2>
              </div>
              <div className="content">
              <Swiper
                loop
                autoplay={{ 
                    delay: 8000,
                    disableOnInteraction: false 
                }}
                speed={500}
                pagination={true} 
                modules={[Pagination]} 
                className="mySwiper"
              >
                { ImageSlider.map( e => (
                  <SwiperSlide key={ e.id }>
                    <div className="content-slide-swiper" onClick={ () => OnClickOpenZoom( e.url_img ) }>
                        <img loading="lazy" src={ e.url_img } alt={`Imagen-${ e.id }`} />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
              </div>
          </div>

        </div>
      </Layout>
    </>
  )
}

export default jurista;