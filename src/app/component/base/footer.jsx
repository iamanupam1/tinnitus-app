import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <h3 className="font-bold text-2xl">Tinnitus Support</h3>
            <p className="text-gray-400">
              Empowering Providers with Tailored, Evidence-Based Tinnitus
              Counseling Strategies for Improved Patient Care
            </p>
            <form className="flex items-center mt-6">
              <div className="w-full">
                <label
                  className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Subscribe for our Newsletter
                </label>
                <div className="relative">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    placeholder="Enter Your Email Address"
                  />
                  <button
                    type="submit"
                    className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
            <h5 className="uppercase tracking-wider font-semibold text-gray-500">
              Contact Details
            </h5>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <MapPin />
                  </span>
                  <span className="ml-3">Vermillion, South Dakota, USA</span>
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <Clock />
                  </span>
                  <span className="ml-3">
                    Mon - Fri: 9:00 - 19:00
                    <br />
                    Closed on Weekends
                  </span>
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <Phone />
                  </span>
                  <span className="ml-3">+1 XXX-XXX-XXXX</span>
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#"
                  title=""
                  className="block flex items-center opacity-75 hover:opacity-100"
                >
                  <span>
                    <Mail />
                  </span>
                  <span className="ml-3">test@example.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="uppercase tracking-wider font-semibold text-gray-500">
              Were Social
            </h5>
            <ul className="mt-4 flex">
              <li>
                <a href="#" target="_blank" title="">
                  <Facebook />
                </a>
              </li>
              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <Twitter />
                </a>
              </li>
              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <Instagram />
                </a>
              </li>
              <li className="ml-6">
                <a href="#" target="_blank" title="">
                  <Youtube />
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-400 mt-12">
              © {new Date().getFullYear()} Tinnitus Support.{" "}
              <br className="hidden lg:block" />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default FooterComponent
