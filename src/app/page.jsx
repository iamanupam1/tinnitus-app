import Image from "next/image";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  MapPin,
  Clock,
  Mail,
  Menu,
  ClipboardList,
  BookOpen,
  Stethoscope,
  FileText,
  ArrowRight,
} from "lucide-react";
import BaseLayoutComponent from "./component/base/base-layout";
import withPermission from "./hocs/withPermission";
import { Navbar } from "./component/base/navbar";
import { HeroSection } from "./component/home/hero-section";

const BlogPostCard = ({ title, excerpt }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <button className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
        Read more <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const FlexBlogSection = () => {
  return (
    <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left column with image */}
        <div className="w-full h-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              width={1500}
              height={1500}
              src="/images/Auditory Pathways.jpg"
              className="w-full h-full object-cover"
              alt="hero"
            />
          </div>
        </div>

        {/* Right column with blog section */}
        <div className="w-full h-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-8">Latest Blog Posts</h3>
          <div className="space-y-8">
            <BlogPostCard
              title="Understanding Tinnitus: Causes and Effects"
              excerpt="Explore the various factors that can lead to tinnitus and how it impacts daily life."
            />
            <BlogPostCard
              title="Innovative Treatments for Tinnitus Management"
              excerpt="Discover the latest approaches in managing tinnitus symptoms and improving quality of life."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryBox = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-lg shadow-md flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:shadow-xl">
    <Icon
      size={48}
      className="mb-4 text-blue-400 transition-colors duration-300 group-hover:text-blue-300"
    />
    <h4 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
      {title}
    </h4>
    <p className="text-center text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
      {description}
    </p>
  </div>
);

const user = {
  _id: "454654",
  fullName: "Anupam Dhakal",
  userRoles: ["admin", "normal"],
  createdDate: "2024/02/14",
};
const Homepage = () => {
  return (
    <BaseLayoutComponent>
      <Navbar />
      <HeroSection />

      {/* start testimonials */}
      <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:-mx-8">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-3xl leading-tight font-bold mt-4">
              Why Tinnitus Support?
            </h2>
            <p className="mt-2 leading-relaxed text-justify">
              This tinnitus counseling app aims to provide evidence-based
              recommendations for providers managing patients with tinnitus. It
              offers a comprehensive approach to tinnitus management, including
              strategies and instructional counseling materials to mitigate
              functional and emotional health effects. By focusing on education,
              reaction, and improved overall quality of life, counseling
              intervention may promote more adaptive responses for tinnitus
              patients. This information is a work in progress and not meant to
              be considered definitive for all tinnitus patients. It is a work
              in progress and not meant to be considered complete. Treating
              tinnitus patients is not a one size fits all approach. The content
              found in this tool may be helpful in developing treatment plans or
              strategies that can be customized for individual patients.
            </p>
          </div>
          <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
            <div className="bg-gray-400 w-full h-72 rounded-lg" />
            <p className="italic text-sm mt-2 text-center">Logo Goes Here</p>
          </div>
        </div>
      </section>
      {/* end testimonials */}

      {/* start category */}
      <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
        <h3 className="text-2xl font-bold mb-6">Explore our Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <CategoryBox
            icon={ClipboardList}
            title="Questionnaires and Assessments"
            description="Evaluate tinnitus impact and track progress"
          />
          <CategoryBox
            icon={BookOpen}
            title="Educational Information"
            description="Learn about tinnitus causes, effects, and management"
          />
          <CategoryBox
            icon={Stethoscope}
            title="Tinnitus Treatment & Counseling"
            description="Explore treatment options and counseling techniques"
          />
          <CategoryBox
            icon={FileText}
            title="Resource Acknowledgement"
            description="Credits and references for our information sources"
          />
        </div>
      </section>
      {/* end category */}
      {/* start flex */}
      <FlexBlogSection />
      {/* end flex */}
      <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-center">
          <h2 className="text-xl font-bold text-white">
            Get in touch with us today! <br className="block md:hidden" />
            Call us on: +1 XXX-XXX-XXXX
          </h2>
        </div>
      </section>
      {/* start footer */}
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
    </BaseLayoutComponent>
  );
};

export default withPermission(Homepage, user);
