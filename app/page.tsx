import Image from "next/image";
//import styles from "@/styles/index.module.css"

export default function Home() {
   return (
     <main className="flex flex-col justify-center items-center h-screen">
       <h1 className="text-3xl font-bold mb-4 text-purple-500" style={{ filter: 'brightness(150%)' }}>HELEN VEGA RDZ TI03</h1>
       <nav className="absolute top-5 right-0 z-10">
         <a href="#" className="text-white hover:text-pink-500 px-4 py-2 border-r border-white">HOME</a>
         <a href="#" className="text-white hover:text-pink-500 px-4 py-2">ACERCA DE</a>
       </nav>
       <div className="mt-16 w-full flex justify-center">
         <div className="w-3/5 flex justify-center items-center">
           <Image
             src="https://img.freepik.com/fotos-premium/fondo-pantalla-rosa-carreras-autos-deportivos_63106-730.jpg"
             alt="Auto deportivo"
             width={400}
             height={300}
             className="rounded-lg"
           />
         </div>
       </div>
     </main>
   );
}
