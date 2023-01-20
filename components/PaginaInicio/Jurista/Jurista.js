import Link from "next/link";

const Jurista = () => {
  return (
    <div className="container-seccion-jurista">
        <div className="content">
            <div className="texto">
                <div className="content-text">
                    <h2>Lic. en D. Miguel Ángel Rodríguez C.</h2>
                    <h3>Especialista en Derecho Sanitario y Derecho Médico.</h3>
                    <Link href="/jurista">
                        <p>Conoce mas sobre mi</p>
                    </Link>
                </div>
            </div>
            <div className="imagen">
                <img src="https://i.imgur.com/x0Lag4A.png" alt="Selfie" />
            </div>
        </div>
    </div>
  )
}

export default Jurista;