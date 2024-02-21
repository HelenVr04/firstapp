
import styles from "@/styles/index.module.css"
const Footer = () =>{
    return (
      <div>
        <footer className="bg-black py-6 absolute bottom-0 w-full text-center">
          <div className="container mx-auto flex justify-between items-center">
              <div>
                  <p className="text-gray-300">Copyright &copy; 2024 HELEN Todos los derechos reservados.</p>
              </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer