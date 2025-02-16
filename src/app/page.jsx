"use client";
import Image from "next/image";
import React from "react";
import { ClipboardList, BookOpen, Stethoscope, ArrowRight } from "lucide-react";
import BaseLayoutComponent from "./component/base/base-layout";
import { Navbar } from "./component/base/navbar";
import { HeroSection } from "./component/home/hero-section";
import ExploreSection from "./component/home/explore-section";
import FooterComponent from "./component/base/footer";
import ContactForm from "./component/home/contact-form";
import Link from "next/link";

const FlexBlogSection = () => {
  return (
    <section className="relative bg-gray-500 bg-opacity-10 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full h-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9 bg-gray-500 bg-opacity-20 rounded-lg overflow-hidden shadow-lg">
            <Image
              width={1500}
              height={1500}
              src="/images/Auditory Pathways.jpg"
              className="w-full h-full object-cover"
              alt="hero"
            />
          </div>
        </div>
        <div className="w-full h-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const CategoryBox = ({ icon: Icon, title, description, link }) => (
  <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:shadow-xl border border-[#502888]">
    <Link href={link} className="text-center">
      <Icon
        size={48}
        className="mb-4 text-[#2E847C] transition-colors duration-300 group-hover:text-[#3F5682] mx-auto"
      />
      <h4 className="text-xl font-semibold mb-2 text-[#502888] transition-colors duration-300">
        {title}
      </h4>
      <p className="text-center text-[#000000] transition-colors duration-300">
        {description}
      </p>
    </Link>
  </div>
);

const Homepage = () => {
  return (
    <BaseLayoutComponent>
      <Navbar />
      <HeroSection />

      <section className="relative bg-[#502888] bg-opacity-10 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:-mx-8">
          <div className="w-fulllg:px-8">
            <h2 className="text-3xl leading-tight font-bold mt-4 text-[#502888]">
              Why Tinnitus Support?
            </h2>
            <p className="mt-2 leading-relaxed text-[#000000] text-justify">
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
          {/* <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
            <div className="bg-gradient-to-br from-[#502888] to-[#2E847C] w-full h-72 rounded-lg shadow-lg" />
            <p className="italic text-sm mt-2 text-center text-[#000000]">Logo Goes Here</p>
          </div> */}
        </div>
      </section>

      <ExploreSection />

      <FlexBlogSection />
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default Homepage;
