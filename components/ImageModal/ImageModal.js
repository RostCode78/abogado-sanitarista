import { useContext, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from "@pronestor/react-zoom-pan-pinch";
import appContext from '../../context/appContext';
import Image from 'next/image';

const ImageModal = () => {

    const ContextApp = useContext(appContext);
    const {
        // =============
        MostrarModalZoom,
        // =============
        guardarimagenzoom
        // =============
    } = ContextApp;

    useEffect( () => {

    }, [guardarimagenzoom, ])

    return (
        <div className="container-modal-zoom">
            <div className="boton-cerrar" onClick={ () => { MostrarModalZoom(false); console.log("HOLA AMIGO")} }>
                <Image
                    src="/x.svg"
                    width={20}
                    height={20}
                />
            </div>
            <div className="overlay" onClick={ () => { MostrarModalZoom(false); console.log("HOLA AMIGO")} }></div>
            <TransformWrapper>
                <TransformComponent>
                    <div className="content-imagen">
                        <img src={guardarimagenzoom} alt="Un juguete bien bonito" />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default ImageModal;