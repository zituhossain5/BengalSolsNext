import Image from "next/image";

export default function Technology({technologyContent}) {
  const imageUrl = "http://127.0.0.1:1337" + technologyContent[0].attributes.image.data.attributes.url;

  return (
    <section className="p-8 pb-0 text-center">
      <h3 className="text-3xl font-extralight mb-4">{technologyContent[0].attributes.title}</h3>
      {imageUrl && (
            <Image
              src={imageUrl}
              alt={technologyContent[0].attributes.image.data.attributes.name}
              width={technologyContent[0].attributes.image.data.attributes.width}
              height={technologyContent[0].attributes.image.data.attributes.height}
            />
          )}
    </section>
  );
}
