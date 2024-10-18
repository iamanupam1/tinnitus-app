import React from "react";
import BaseLayoutComponent from "../component/base/base-layout";
import { Navbar } from "../component/base/navbar";
import FooterComponent from "../component/base/footer";
import Image from "next/image";

const TeamMember = ({ name, role, image }) => (
  <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
    <div className="flex flex-col items-center p-6">
      <Image
        src={`/api/placeholder/${image}`}
        alt={name}
        height={100}
        width={100}
        className="w-32 h-32 rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const TeamPage = () => {
  const teamMembers = [
    { name: "Member 1", role: "Lead Audiologist", image: "200/200" },
    { name: "Member 2", role: "Tinnitus Specialist", image: "200/200" },
    { name: "Member 3", role: "Patient Coordinator", image: "200/200" },
    { name: "Member 4", role: "Research Lead", image: "200/200" },
  ];

  return (
    <BaseLayoutComponent>
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">Meet the experts behind Tinnitus Counseling Tool</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* About Our Team */}
      <section className="bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Our Team</h2>
          <p className="text-gray-700 mb-4">
            Our team of dedicated professionals brings together a wealth of
            experience in audiology, tinnitus management, and patient care. We
            are committed to providing the best possible support and guidance to
            both healthcare providers and individuals affected by tinnitus.Kudos for the best team.
          </p>
          <p className="text-gray-700">
            With our combined expertise and passion for improving tinnitus care,
            we strive to empower healthcare professionals with the latest
            evidence-based strategies and resources. Our goal is to enhance the
            quality of life for those living with tinnitus through education,
            innovative treatments, and compassionate care.
          </p>
        </div>
      </section>
      <FooterComponent />
    </BaseLayoutComponent>
  );
};

export default TeamPage;
