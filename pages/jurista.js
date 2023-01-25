import { useContext } from "react";
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
            <div className="item"></div>
          </div>
        </div>

        <div className="certificados">
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
  )
}

export default jurista;