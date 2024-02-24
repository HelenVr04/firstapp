import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="bg-purple-900 p-3 flex justify-end">
      <Link href="/" passHref>
        <div className="text-white mr-4 cursor-pointer transition duration-300 ease-in-out hover:bg-purple-700 hover:rounded-lg p-2">PRINCIPAL</div>
      </Link>
      <Link href="/home" passHref>
        <div className="text-white mr-4 cursor-pointer transition duration-300 ease-in-out hover:bg-purple-700 hover:rounded-lg p-2">HOME</div>
      </Link>
      <Link href="/acerca" passHref>
        <div className="text-white mr-4 cursor-pointer transition duration-300 ease-in-out hover:bg-purple-700 hover:rounded-lg p-2">ACERCA DE</div>
      </Link>
      <Link href="/contacto" passHref>
        <div className="text-white cursor-pointer transition duration-300 ease-in-out hover:bg-purple-700 hover:rounded-lg p-2">CONTACTO</div>
      </Link>
    </div>
  );
}

export default Navigation;
