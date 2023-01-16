import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import appContext from "../../context/appContext";

const MenuLateral = () => {

    const ContextApp = useContext(appContext);
    const {
      opciones_menu,
      menu_abierto,
      SwitchParaMenu
    } = ContextApp;

  return (
    <div className={ menu_abierto ? "container-menu-lateral open" : "container-menu-lateral" }>

        { opciones_menu.map( e => (
              <Link 
                href={e.url} 
                as={e.url} 
                key={e.id}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onClick={
                  () => {
                    SwitchParaMenu(false);
                  }
                }
            >
                <div className="content-href" >
                    <p>{ e.nombre }</p>
                    <div className="line"></div>
                </div>
            </Link>
        ))}

    </div>
  )
}

export default MenuLateral;