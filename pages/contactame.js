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
            <a href="mailto:correo@momentaneo.mx" target="_blank"><span>correo@momentaneo.com</span></a>
          </div>
          <div className="item">
            <p>Mandame mensaje o marcame al numero:</p>
            <a href="https://wa.me/525518100055" target="_blank"><span>55 1810 0055</span></a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contactame;