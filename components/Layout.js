import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import MenuLateral from "./MenuLateral/MenuLateral";
import Footer from "./Footer/Footer";
import SeccionContacto from "./PaginaInicio/Contacto/SeccionContacto";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <MenuLateral/>
            <div className="content-whatsapp-desktop">
                <Image
                    src="/whatsapp.svg"
                    width={50}
                    height={50}
                    alt='whatsapp'
                />
            </div>
            <main>{ children }</main>
            <SeccionContacto/>
            <Footer/>
        </>
    )
}

export default Layout;