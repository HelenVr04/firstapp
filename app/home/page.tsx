import Image from "next/image";

export default function Page(){
    return ( 
<main className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-3xl font-bold mb-4 text-purple-500" style={{ filter: 'brightness(150%)' }}>PÁGINA DE INICIO</h1>
      <div className="mt-16 w-full flex justify-center">
        <div className="w-3/5 flex flex-col items-center">
          <Image
            src="https://i.blogs.es/9690a8/libreria/450_1000.jpeg"
            alt="Libros"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <p className="text-white mt-4">Me gustan los libros</p>
        </div>
      </div>
    </main>
    );
}
/*
<Image
            src="https://i.blogs.es/9690a8/libreria/450_1000.jpeg"
            alt="Auto deportivo"
            width={400}
            height={300}
            className="rounded-lg"
            />
            <p className="text-white mt-4">Me gustan los libros</p>*/