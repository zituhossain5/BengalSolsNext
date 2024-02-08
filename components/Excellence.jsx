import Image from "next/image";
import React from "react";

const Excellence = () => {
  return (
    <div className="mt-10">
      <h1 className="text-center py-2 text-4xl lg:text-4xl font-bold text-heading-color">
        Excellence in Innovations
      </h1>
      <aside className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 py-8 lg:py-12">
        <div className="flex lg:col-span-1 p-4">
          <div className="md:block bg-block-one-color text-white text-center py-4 flex-none w-1/4">
            <i className="fa-regular fa-comments text-[4em]"></i>
            <p className="mt-2">FAQ</p>
          </div>
          <div className="flex-grow">
            <div className="grid grid-cols-4 gap-2 md:grid-cols-1 md:gap-4 lg:gap-8">
              <div className="col-span-3 md:col-span-1 bg-block-one-background p-4">
                <h3 className="text-3xl lg:text-3xl">Concerns or questions?</h3>
                <p className="mt-2">
                  You can check our FAQ page it might fulfill your needs. If you
                  want to learn more about our services, you can directly
                  contact us.
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                  See support area
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 p-4">
          <h3 className="text-3xl lg:text-3xl">From our Blog</h3>

          <section className="mt-4">
            <div className="flex items-start">
              <h4 className="flex-grow text-xl lg:text-xl font-bold text-sky-600">
                <a
                  href="agreement-between-rootaxis-and-bengal-solutions-ltd/index.html"
                  target="_blank"
                  className="hover:underline"
                  title="Agreement between ROOTAXIS and Bengal solutions Ltd"
                >
                  Agreement between ROOTAXIS and Bengal solutions Ltd..
                </a>
              </h4>
            </div>
            <p className="mt-2">
              Root Axis, a UK based website and web application development firm
              on a mission to create brilliant websites.
            </p>
            <div className="flex flex-row-reverse">
              <a
                href="agreement-between-rootaxis-and-bengal-solutions-ltd/index.html"
                className="text-blue-500 hover:underline"
              >
                Read More <i className="fa fa-arrow-circle-right ml-1"></i>
              </a>
            </div>
          </section>
        </div>
      </aside>
      <Image
        src={"/images/shadow-top.png"}
        width={2001}
        height={42}
        alt="shadow"
        className="bg-no-repeat"
      />
    </div>
  );
};

export default Excellence;
