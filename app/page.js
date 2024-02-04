import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import Partnership from "@/component/Partnership";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header/>
      <HeroSection/>
      <Partnership/>
    </main>
  );
}
