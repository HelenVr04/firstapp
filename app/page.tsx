import Image from "next/image";
//import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-3xl font-bold mb-4 text-purple-500" style={{ filter: 'brightness(150%)' }}>HELEN VEGA RDZ TI03</h1>
      <div className="mt-16 w-full flex justify-center">
        <div className="w-3/5 flex flex-col items-center">
          <Image
            src="https://img.freepik.com/fotos-premium/fondo-pantalla-rosa-carreras-autos-deportivos_63106-730.jpg"
            alt="Auto deportivo"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <p className="text-white mt-4">Me gustan los autos</p>
        </div>
      </div>
    </main>
  );
}
