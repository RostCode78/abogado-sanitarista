import Layout from "../components/Layout";
import Head from "next/head";
import SeccionContacto from "../components/PaginaInicio/Contacto/SeccionContacto";

const contactame = () => {
  return (
    <>
      <Head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Contactame | Abogado Sanitarista LS | Miguel A. Rodríguez Corzas</title>
          <meta name="description" content='Asesor y abogado postulante en controversias derivadas de la prestación de servicios de salud en el ámbito público y privado, cofundador de “Grupo Lex Artis Médica”, grupo en donde convergen abogados y profesionales de salud interesados en el desarrollo del derecho sanitario, fundador del Consejo Mexicano de Derecho Sanitario “CMDS”, socio de la agencia de gestoría Regulación Sanitaria del Norte “RESAN”' />
          <link rel="icon" href="/logo.ico" type="image/x-icon" />

          <meta property="og:locale" content="es_ES" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="abogadosanitaristals" />
          <meta property="og:description" content='Abogado egresado del Inter, Centro de Estudios Superiores, actualmente en espera de aprobación de Tesis de Especialidad en Derecho Sanitario en la UNAM, FES ACATLÁN.' />
          <meta property="og:url" content="https://abogadosanitaristals.com/contactame" />
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
      <Layout contacto={ false }>
        <div className="container-contactame">
          <div className="header">
            <h1>¿Quieres ponerte en contacto conmigo?</h1>
            <div className="item">
              <p>Manda un correo a:</p>
              <a href="mailto:juridico@abogadosanitaristals.com" target="_blank"><span>juridico@abogadosanitaristals.com</span></a>
            </div>
            <div className="item">
              <p>Mándame mensaje o márcame al numero:</p>
              <a href="https://wa.me/525518100055" target="_blank"><span>55 1810 0055</span></a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default contactame;