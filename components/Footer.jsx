import Image from "next/image";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";

function Footer({ footerTopData, footerBottomData }) {
  if (!footerTopData && !footerBottomData) return null;
  const { FooterTop } = footerTopData.attributes;
  const { FooterBottom } = footerBottomData.attributes;

  return (
    <div className="">
      <div className="flex bg-slate-800 text-gray-300 p-8 lg:px-24 px-4 text-sm">
        {/* First Column */}
        <section className="w-1/4 mr-8 text-center text-sm">
          {/* <h4 className="m-show">Contact</h4> */}
          <address
            itemScope=""
            itemType="http://schema.org/Organization"
            className="txt-c"
          >
            <ul>
              {FooterTop.map((item, index) => (
                <li key={index} className="text-lg font-medium not-italic mb-1">
                  {item.company_name && (
                    <p className="text-2xl font-medium not-italic mb-1">
                      {item.company_name}
                    </p>
                  )}

                  {item.address && (
                    <p>
                      <i className="fa-solid fa-location-dot mr-1"></i>
                      Phone: {item.address}
                    </p>
                  )}
                  {item.phone && (
                    <p>
                      <i className="fa-solid fa-mobile-screen-button mr-1"></i>
                      {item.phone}
                    </p>
                  )}
                  {item.email && (
                    <p>
                      <i className="fa-regular fa-envelope mr-1"></i> E-mail:
                      {item.email}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </address>
        </section>

        {/* Second Column */}
        <div className="w-1/2 mr-8 flex text-sm">
          {/* <h4 className="m-show">Testimonials</h4> */}
          <blockquote className="w-3/4 flex-grow">
            <i class="fa-solid fa-quote-left text-4xl"></i>&nbsp;
            {FooterTop.map((item, index) => (
              <p key={index}>{item.comments}</p>
            ))}
          </blockquote>
          <div className="w-1/4 flex-shrink-0">
            <Image
              className="lazy loaded border-2 border-gray-300 rounded-full overflow-hidden"
              src="/images/bill.jpg"
              width={100}
              height={100}
              alt="Bill"
              data-was-processed="true"
            />
          </div>
        </div>

        {/* Third Column */}
        <div className="w-1/4">
          <h4 className="block md:hidden">Social</h4>
          <ul className="flex flex-row space-x-5">
            {FooterTop.map((item, index) => (
              <li key={index} className="flex space-x-2">
                {item.facebook_url && (
                  <a
                    href={item.facebook_url}
                    target="_blank"
                    title="Facebook Page"
                    className="border border-gray-300 p-2 rounded w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
                  >
                    <i className={item.facebook_icon_class}></i>
                  </a>
                )}
                {item.twitter_url && (
                  <a
                    href={item.twitter_url}
                    target="_blank"
                    title="Twitter Page"
                    className="border border-gray-300 p-2 rounded w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
                  >
                    <i className={item.twitter_icon_class}></i>
                  </a>
                )}
                {item.linkdin_url && (
                  <a
                    href={item.linkdin_url}
                    target="_blank"
                    title="Linkdin Page"
                    className="border border-gray-300 p-2 rounded w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
                  >
                    <i className={item.linkdin_icon_class}></i>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        id="footer-2"
        className="bg-gray-900 text-gray-300 p-8 lg:px-24 px-4 text-center"
      >
        <div className="">
          <ul
            id="menu-footer-navigation"
            className="footer-nav flex flex-wrap justify-center text-sm"
          >
            {FooterBottom &&
              FooterBottom.map((item, index) => (
                <li key={index} className="mb-4 space-x-8 text-base">
                  {item.Link &&
                    item.Link.map((link, idx) => (
                      <Link
                        href={link.LinkUrl ? link.LinkUrl : "/"}
                        key={idx}
                        className=""
                      >
                        {link.LinkText}
                      </Link>
                    ))}
                </li>
              ))}
          </ul>
        </div>
        <div className="">
          {FooterBottom &&
            FooterBottom.map((item, index) => (
              <p key={index}>{item.copyrightText}</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
