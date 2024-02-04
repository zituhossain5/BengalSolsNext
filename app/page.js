import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Partnership from "@/components/Partnership";

async function fetchHeroSection() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/hero-sections?populate=*", options);
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

async function fetchHeaderSection() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://localhost:1337/api/heading-sections", options);
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

async function fetchPartnership() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch("http://localhost:1337/api/partnerships", options);
    const response = await res.json();
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export default async function Home() {
  const heroContent = await fetchHeroSection();
  const headerContent = await fetchHeaderSection();
  const partnershipContent = await fetchPartnership();
  const { attributes: { title, description, image } } = heroContent[0];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Header headerContent={headerContent} />
      <HeroSection title={title} description={description} image={image} />
      <Partnership partnershipContent={partnershipContent} />
    </main>
  );
}
