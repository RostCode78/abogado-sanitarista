import { useState, useEffect, useContext } from 'react';
import appContext from '../../context/appContext';
import Image from "next/image";
import Link from 'next/link';

const Navbar = () => {

  const ContextApp = useContext(appContext);
  const {
    opciones_menu,
    menu_abierto,
    SwitchParaMenu
  } = ContextApp;

  return (
    <div className="container-navbar">
      <div className="content-desktop">

        <div className="content-logo">
            <Image
              src="/logo.svg"
              width={50}
              height={60}
              alt='LS'
            />
        </div>

        <div className="content-opciones">

            { opciones_menu.map( e => (
              <Link href={e.url} as={e.url} key={e.id}>
                <div className="content-href">
                  <p>{e.nombre}</p>
                </div>
              </Link>
            ))}

        </div>

      </div>
      <div className="content-mobile">

        <div className="content-whatsapp"></div>

        <div className="content-logo">
            <Image
              src="/logo-mobile.svg"
              width={200}
              height={46}
              alt='LS'
            />
        </div>

        <div className="content-menu" onClick={ () => SwitchParaMenu(!menu_abierto) }>
            <Image
              src={ menu_abierto ? "/x.svg" : "/menu.svg" }
              width={32}
              height={32}
              alt='menu'
            />
        </div>

      </div>
    </div>
  )
}

export default Navbar;