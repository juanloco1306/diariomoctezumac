import Image from "next/image";
import Link from "next/link";

function Header()  {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <Image 
                className="rounded-full"
                src="https://letraslibres.com/wp-content/uploads/2022/06/dosier-achim-1900-1160x774.jpeg"
                width={150}
                height={150}
                alt="logo"
                />
            </Link>
            {/*<h1 className="text-6xl">Diario Moctezuma</h1>*/}
        </div>

        <div></div>
    </header>
  )
}

export default Header