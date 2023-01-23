import Layout from "../components/Layout";
import Servicios from "../components/PaginaInicio/Servicios/Servicios";
import ServicioEspecial from "../components/PaginaInicio/ServicioEspecial/ServicioEspecial";

const servicios = () => {
  return (
    <Layout>
      <div className="container-servicios-juridicos">
            <Servicios/>
            <ServicioEspecial/>
      </div>
    </Layout>
  )
}

export default servicios;