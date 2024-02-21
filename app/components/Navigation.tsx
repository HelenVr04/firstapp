
import styles from "@/styles/index.module.css"
const Navigation = () =>{
    return (
      <div>
       <nav className="absolute top-5 right-0 z-10">
       <a href="./" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">PRINCIPAL</a>
      <a href="./home" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">HOME</a>
      <a href="./acerca" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">ACERCA DE</a>
      <a href="./contacto" className="text-white hover:text-pink-500 px-4 py-2">CONTACTO</a>
      </nav>
      </div>
    );
}

export default Navigation