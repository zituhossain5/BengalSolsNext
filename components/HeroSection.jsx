import Image from "next/image";

const HeroSection = ({ title, description, image }) => {
    const imageUrl = "http://127.0.0.1:1337" + image.data.attributes.url;  return (
    <div className="hero-section">
      <div className="hero-content md:w-1/2 flex flex-col space-y-4 justify-end py-8">
        <h1 className="capitalize text-3xl md:text-4xl font-semibold text-heading-color">
        {title}
        </h1>
        <p className="">{description}</p>
      </div>
      <div className="hero-image md:w-1/2 flex justify-center">
      {imageUrl && (
            <Image
              src={imageUrl}
              alt={image.data.attributes.name}
              width={image.data.attributes.width}
              height={image.data.attributes.height}
            />
          )}
      </div>
    </div>
  );
};

export default HeroSection;
