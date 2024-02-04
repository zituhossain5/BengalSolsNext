import Image from "next/image";

export default function Technology() {
  return (
    <section className="p-8 pb-0 text-center">
      <h3 className="text-3xl font-extralight mb-4">Technology we do speak</h3>
      <Image
        className="lazy loaded"
        src="/images/working-area.jpg"
        alt="working area"
        width={1500}
        height={100}
        data-was-processed="true"
      />
    </section>
  );
}
