import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Partnership from "@/components/Partnership";
import Technology from "@/components/Technology";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header />
      <HeroSection />
      <Partnership />
      <Technology />
    </main>
  );
}
