import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content md:w-1/2 flex flex-col space-y-4 justify-end py-8">
        <h1 className="capitalize text-3xl md:text-4xl font-semibold text-heading-color">
          Your Business Automation Expert
        </h1>
        <p className="">
          We use the finest state of art technology to automate your business. Cloud computing, cloud storage, secure infrastructure, and enrich technological platform will make your business shine. Our automation mechanism will provide you ease and, at the same time, it will provide flexibility and transparency to your stakeholders.
        </p>
      </div>
      <div className="hero-image md:w-1/2 flex justify-center">
        <Image
          src="/images/business-automation-expert.png"
          alt="automation"
          width={672}
          height={271}
        />
      </div>
    </div>
  );
};

export default HeroSection;
