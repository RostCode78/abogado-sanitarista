import Image from "next/image";

const Header = () => {
  return (
    <div className="container-header">
        <div className="content-left">
            <h1>Soluciones legales efectivas</h1>
            <h2>Lic. en D. Miguel Ángel Rodríguez C.</h2>
            <button>
                <p>Haz una consulta</p>
                <Image
                    src="./cheveron-right.svg"
                    width={24}
                    height={24}
                    alt='>'
                />
            </button>
        </div>
        <div className="content-right">
            <Image
                src="./lex&sa.svg"
                width={625}
                height={150}
                alt='Lex & Sa'
            />
        </div>
        <div className="content-right-responsive">
            <Image
                src="./logo.svg"
                width={280}
                height={350}
                alt='Lex & Sa'
            />
        </div>
    </div>
  )
}

export default Header;