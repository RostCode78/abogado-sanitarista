import Layout from "../components/Layout";
import Header from "../components/PaginaInicio/Header/Header";
import Servicios from "../components/PaginaInicio/Servicios/Servicios";

const index = () => {
  return (
    <Layout>
        <div className="container-index">
            <Header/>
            <Servicios/>
        </div>
    </Layout>
  )
}

export default index