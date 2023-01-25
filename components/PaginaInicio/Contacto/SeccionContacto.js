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
                <a className="boton" href="https://wa.me/525518100055" target="_blank">
                    <p>55 1810 0055</p>
                    <div className="icon">
                        <Image
                            src="/whatsapp.svg"
                            width={20}
                            height={20}
                            alt='whatsapp'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SeccionContacto;