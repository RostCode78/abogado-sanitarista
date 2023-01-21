import Image from "next/image";

const SeccionContacto = () => {
    return (
        <div className="container-seccion-contacto">
            <div className="background">
                <div className="overlay"></div>
                <img src="https://i.imgur.com/334nD0c.png" alt="Fondo para seccion contacto" />
            </div>
            <div className="texto">
                <h2>Necesitas ayuda con tu caso?</h2>
                <h3>Yo puedo ayudarte solo necesitas contactarme.</h3>
                <div className="boton">
                    <p>55 1810 0055</p>
                    <div className="icon">
                        <Image
                            src="/whatsapp.svg"
                            width={20}
                            height={20}
                            alt='whatsapp'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionContacto;