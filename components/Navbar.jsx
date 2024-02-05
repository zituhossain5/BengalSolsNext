import Image from "next/image";
import Link from "next/link";

const NavBar = ({ navSectionData }) => {
  if (!navSectionData || !navSectionData.attributes) {
    // Handle the case where navSectionData is undefined or doesn't have attributes
    return null; // or return a loading state or default content
  }

  const { logo, navbar } = navSectionData.attributes;

  return (
    <nav className="flex flex-row justify-between items-center lg:px-24 px-4 nav_head">
      <div className="p-2 px-4 my-4 logo">
        <Link href="/">
          <Image
            src={process.env.NEXT_PUBLIC_STRAPI_API_URL + logo.data.attributes.url}
            alt={logo.data.attributes.name}
            height={logo.data.attributes.height}
            width={logo.data.attributes.width}
          />
        </Link>
      </div>
      <ul className="flex flex-row space-x-4 font-medium p-4 menu">
        {navbar.map((menuItem) => (
          <li key={menuItem.id} className="bg-menu-color p-4">
            <Link href={`${menuItem.url}`}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

