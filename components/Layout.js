import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import MenuLateral from "./MenuLateral/MenuLateral";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <MenuLateral/>
            <div className="content-whatsapp-desktop">
                <Image
                src="./whatsapp.svg"
                width={32}
                height={32}
                alt='whatsapp'
                />
            </div>
            <main>{ children }</main>
        </>
    )
}

export default Layout;