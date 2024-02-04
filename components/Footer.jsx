import Image from "next/image";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
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
              <li
                className="text-lg font-medium not-italic mb-1"
                itemProp="name"
              >
                Bengal Solutions Ltd
              </li>
              <li
                itemProp="address"
                itemScope=""
                itemType="http://schema.org/PostalAddress"
              >
                <span itemProp="streetAddress">
                  <i class="fa-solid fa-location-dot"></i> House 193, Road 1,
                  DOHS
                </span>
                <br />
                <span itemProp="addressLocality">Mohakhali</span>
                <br />
                <span itemProp="addressRegion">Dhaka</span>-
                <span itemProp="postalCode">1206</span>
                <br />
                <span itemProp="addressCountry">Bangladesh</span>
              </li>
              <li itemProp="telephone">
                <span>
                  <i class="fa-solid fa-mobile-screen-button"></i> Phone:
                  +88-02-8872391
                </span>
              </li>
              <li itemProp="email">
                <span>
                  <i class="fa-regular fa-envelope"></i> E-mail:
                  info@bengalsols.com
                </span>
              </li>
            </ul>
          </address>
        </section>

        {/* Second Column */}
        <div className="w-1/2 mr-8 flex text-sm">
          {/* <h4 className="m-show">Testimonials</h4> */}
          <blockquote className="w-3/4 flex-grow">
            <i class="fa-solid fa-quote-left text-4xl"></i>
            Bengal Solutions has created and executed many pieces of our web
            presence, they are very talented, creative web designer and we
            whole-heartedly recommend them.
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
            <li>
              <a
                href="https://www.facebook.com/BengalSolutionsLimited"
                target="_blank"
                title="Facebook Page"
                className="border border-gray-300 p-2 rounded w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com/bengalsols"
                target="_blank"
                title="Twitter Page"
                className="border border-gray-300 p-2 rounded w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/bengal-solutions-ltd."
                target="_blank"
                title="Linkedin Page"
                className="border border-gray-300 p-2 rounded w-10 h-10 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-500"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-2" className="bg-gray-900 text-gray-300 p-8 lg:px-24 px-4 text-center">
  <div className="">
    <ul id="menu-footer-navigation" className="footer-nav flex flex-wrap justify-center text-sm">
      <li className="mb-2 pr-4">
        <a href="https://www.bengalsols.com/" aria-current="page">Home</a>
      </li>
      <li className="mb-2 pr-4">
        <a href="https://www.bengalsols.com/contact/">Contact</a>
      </li>
      <li className="mb-2 pr-4">
        <a href="https://www.bengalsols.com/terms-of-use/">Terms of Use</a>
      </li>
      <li className="mb-2 pr-4">
        <a href="https://www.bengalsols.com/privacy-policy/">Privacy Policy</a>
      </li>
      <li className="mb-2 pr-4">
        <a href="https://www.bengalsols.com/dmca/">DMCA</a>
      </li>
      <li className="mb-2">
        <a href="https://www.bengalsols.com/terms-and-conditions/">Terms And Conditions</a>
      </li>
    </ul>
  </div>
  <div>© All rights reserved. Bengalsols.com 2024</div>
</div>

    </div>
  );
}

export default Footer;
