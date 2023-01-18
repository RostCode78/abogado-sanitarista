import Image from "next/image";

const ServicioEspecial = () => {
    return (
        <div className="container-servicio-especial">
            <div className="left">
                <div className="logo">
                    <img src="https://i.imgur.com/8JcivKD.png" alt="Logo Regulacion" />
                </div>
                <img src="https://i.imgur.com/h60jAgq.jpg" alt="Servicio especial" />
            </div>
            <div className="right">

                <div className="titulo">
                    <h2>Necesitas algo diferente?</h2>
                    <h3>Servicio legal especial</h3>
                </div>

                <div className="content">

                    <div className="item">

                        <div className="titulo-item">
                            <h4>COMPLIANCE LEGAL EN MATERIA SANITARIA</h4>
                        </div>

                        <div className="text-item">
                            <div className="item">
                                <div className="point"></div>
                                <p>Cumplimiento de normas y prevención de riesgos que pueden derivar en conflictos legales.</p>
                            </div>
                        </div>

                    </div>

                    <div className="item">

                        <div className="titulo-item">
                            <h4>PARA TU CLÍNICA O CONSULTORIO</h4>
                        </div>
                        
                        <div className="text-item">
                            <div className="item">
                                <div className="point"></div>
                                <p>Cumplimiento de normas y prevención de riesgos que pueden derivar en conflictos legales.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServicioEspecial;