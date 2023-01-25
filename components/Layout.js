import { useContext } from "react";
import appContext from "../context/appContext";
import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import MenuLateral from "./MenuLateral/MenuLateral";
import Footer from "./Footer/Footer";
import SeccionContacto from "./PaginaInicio/Contacto/SeccionContacto";
import ImageModal from "./ImageModal/ImageModal";

const Layout = ({ children, contacto="true" }) => {

    const ContextApp = useContext(appContext);
    const {
        mostrarmodalzoom
    } = ContextApp;

    return (
        <>
            { mostrarmodalzoom ? <ImageModal/> : null }
            <Navbar/>
            <MenuLateral/>
            <a className="content-whatsapp-desktop" href="https://wa.me/525518100055" target="_blank">
                <Image
                    src="/whatsapp.svg"
                    width={50}
                    height={50}
                    alt='whatsapp'
                />
            </a>
            <main>{ children }</main>
            { contacto ? <SeccionContacto/> : null }
            <Footer/>
        </>
    )
}

export default Layout;