import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchNavbar } from "@/utils/api";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bengal Solutions Ltd.",
  description: "A proud IT firm from Bangladesh",
};

export default async function RootLayout({ children }) {
  const navSectionData = await fetchNavbar();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-box">
          <NavBar navSectionData={navSectionData} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
