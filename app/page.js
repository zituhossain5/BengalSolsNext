import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Partnership from "@/components/Partnership";
import Technology from "@/components/Technology";
import {
  fetchHeaderSection,
  fetchHeroSection,
  fetchPartnership,
  fetchTechnology,
} from "@/utils/api";

export default async function Home() {
  const headerContent = await fetchHeaderSection();
  const heroContent = await fetchHeroSection();
  const partnershipContent = await fetchPartnership();
  const technologyContent = await fetchTechnology();
  const {
    attributes: { title, description, image },
  } = heroContent[0];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header headerContent={headerContent} />
      <HeroSection title={title} description={description} image={image} />
      <Partnership partnershipContent={partnershipContent} />
      <Technology technologyContent={technologyContent} />
    </main>
  );
}
