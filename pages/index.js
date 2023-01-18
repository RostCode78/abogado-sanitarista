import Layout from "../components/Layout";
import Header from "../components/PaginaInicio/Header/Header";
import Servicios from "../components/PaginaInicio/Servicios/Servicios";
import ServicioEspecial from "../components/PaginaInicio/ServicioEspecial/ServicioEspecial";

const index = () => {
  return (
    <Layout>
        <div className="container-index">
            <Header/>
            <Servicios/>
            <ServicioEspecial/>
        </div>
    </Layout>
  )
}

export default index