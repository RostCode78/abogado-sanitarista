import Layout from "../components/Layout";

const jurista = () => {

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
  ]

  return (
    <Layout>
      <div className="container-jurista">

        <div className="header">

          <div className="left">

            <div className="titulo">
              <h1>Lic. en D. Miguel Ángel Rodríguez C.</h1>
              <h2>Especialista en Derecho Sanitario y Derecho Médico.</h2>
            </div>

            <div className="imagen">
              <img src="https://i.imgur.com/x0Lag4A.png" alt="Selfie" />
            </div>

            <div className="list">
              <h2>Porque soy tu mejor opcion?</h2>

              { Opciones.map( e => (
                <>
                  <div className="item" key={ e.id }>
                    <div className="circle"></div>
                    <p>{ e.texto }</p>
                  </div>
                  <div className="line-item"></div>
                </>
              ))}

            </div>

          </div>

          <div className="right">
            <img src="https://i.imgur.com/x0Lag4A.png" alt="Selfie" />
          </div>

        </div>

        <div className="certificados"></div>

      </div>
    </Layout>
  )
}

export default jurista;