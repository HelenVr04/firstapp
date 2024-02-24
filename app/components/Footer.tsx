import styles from "@/styles/index.module.css";
import React from "react";

const Footer = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Aquí va todo tu contenido */}
      </main>
      <footer className="bg-black py-6 absolute bottom-0 w-full text-center">
        <div className="container mx-auto">
          <p className="text-gray-300">
            Copyright &copy; 2024 HELEN Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
