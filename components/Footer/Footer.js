import { useEffect, useState } from "react";

const Footer = () => {

    const [ year, getYear ] = useState();

    useEffect( e => {
        const today = new Date();
        getYear(today.getFullYear());
    }, [])

  return (
    <div className="container-footer">
        <p>Todos los derechos reservados ©</p>
        <span>Sitio creado por <a href="https://www.rost78.com/" target="_blank" >Rost78</a> 🚀 </span>
    </div>
  )
}

export default Footer;