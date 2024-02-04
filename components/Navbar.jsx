import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center lg:px-24 px-4 nav_head">
      <div className="p-2 px-4 my-4 logo">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" height={59} width={224} />
        </Link>
      </div>
      <ul className="flex flex-row space-x-4 font-medium p-4 menu">
        <li className="bg-menu-color p-4">
          <Link href="/" className="">Home</Link>
        </li>
        <li className="p-4 bg-red-400">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
