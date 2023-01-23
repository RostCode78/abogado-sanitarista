import Layout from "../components/Layout";

const jurista = () => {
  return (
    <Layout>
      <div className="container-jurista">
        <div className="header">
          <div className="left">
            <div className="titulo">
              <h1>Lic. en D. Miguel Ángel Rodríguez C.</h1>
              <h2>Especialista en Derecho Sanitario y Derecho Médico.</h2>
            </div>
            <div className="list"></div>
          </div>
          <div className="right">
            <img src="https://i.imgur.com/x0Lag4A.png" alt="Selfie" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default jurista;