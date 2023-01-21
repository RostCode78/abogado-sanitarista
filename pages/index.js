import Layout from "../components/Layout";
import Header from "../components/PaginaInicio/Header/Header";
import Servicios from "../components/PaginaInicio/Servicios/Servicios";
import ServicioEspecial from "../components/PaginaInicio/ServicioEspecial/ServicioEspecial";
import Comunidad from "../components/PaginaInicio/Comunidad/Comunidad";
import Jurista from "../components/PaginaInicio/Jurista/Jurista";

const index = () => {
  return (
    <Layout>
        <div className="container-index">
            <Header/>
            <Servicios/>
            <ServicioEspecial/>
            <Comunidad/>
            <Jurista/>
        </div>
    </Layout>
  )
}

export default index