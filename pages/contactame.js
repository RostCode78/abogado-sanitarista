import Layout from "../components/Layout";
import SeccionContacto from "../components/PaginaInicio/Contacto/SeccionContacto";

const contactame = () => {
  return (
    <Layout contacto={ false }>
      <div className="container-contactame">
        <div className="header">
          <h1>Quieres ponerte en contacto conmigo?</h1>
          <div className="item">
            <p>Manda un correo a:</p>
            <span>correo@momentaneo.com</span>
          </div>
          <div className="item">
            <p>Mandame mensaje o marcame al numero:</p>
            <span>55 1810 0055</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contactame;