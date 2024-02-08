import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchNavbar, fetchFooterTop, fetchFooterBottom } from "@/utils/api";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata = {
  title: "Bengal Solutions Ltd.",
  description: "A proud IT firm from Bangladesh",
};

export default async function RootLayout({ children }) {
  const navSectionData = await fetchNavbar();
  const footerTopData = await fetchFooterTop();
  const footerBottomData = await fetchFooterBottom();

  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="page-box flex flex-col min-h-screen">
          <main className="flex-grow">
          <NavBar navSectionData={navSectionData} />
          {children}
          <Footer
            footerTopData={footerTopData}
            footerBottomData={footerBottomData}
          />
          </main>
          
        </div>
      </body>
    </html>
  );
}
