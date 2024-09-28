'use client'
import React, { useState } from "react";
import {
  Home,
  Users,
  Info,
  Mail,
  ClipboardList,
  BookOpen,
  Stethoscope,
  FileText,Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";
const NavItem = ({ href, icon: Icon, children }) => (
  <li>
    <a
      href={href}
      className="flex items-center px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-700 hover:text-blue-400"
    >
      <Icon className="mr-2" size={18} />
      {children}
    </a>
  </li>
);
const FooterLink = ({ href, children }) => (
  <a href={href} className="hover:text-blue-400 transition duration-300">
    {children}
  </a>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <a href={href} className="text-gray-400 hover:text-blue-400 transition duration-300">
    <Icon size={24} />
  </a>
);
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, such as sending to an API
    console.log("Form Submitted: ", formData);
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-12">
      <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none focus:border-blue-400"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-400 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
const CategoryBox = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer hover:bg-gray-700 hover:shadow-xl">
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
const Homepage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-20">
      <header className="mb-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <span className="text-xl font-bold">Tinnitus Support</span>
          </div>
          <ul className="flex space-x-2">
            <NavItem href="#" icon={Home}>
              Home
            </NavItem>
            <NavItem href="#" icon={Users}>
              Team
            </NavItem>
            <NavItem href="#" icon={Info}>
              About
            </NavItem>
            <NavItem href="#" icon={Mail}>
              Contact
            </NavItem>
          </ul>
        </nav>
      </header>

      <main className="my-5">
        <h1 className="text-4xl font-bold mb-8">THE Tinnitus</h1>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-2/3">
            <img
              src="/images/Woman_Holding_Ear.jpg"
              alt="Auditory pathway diagram"
              className="w-full h-auto rounded-lg shadow-lg h-[550px]"
            />
          </div>

          <div className="w-full md:w-1/3">
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>The middle ear serves entirely sound</li>
              <li>Continue each word by frequency</li>
              <li>Nerve centers signal the cochlea to brain stem</li>
              <li>Sound moves through the auditory cortex filling the way</li>
              <li>Auditory cortex processes sound</li>
            </ol>

            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                <span>Medial geniculate</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <span>Inferior colliculus</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                <span>Superior olive</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span>Cochlear nuclei</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Why Tinnitus Support?</h2>
          <p className="text-gray-300">
            This tinnitus counseling app aims to provide evidence-based
            recommendations for providers managing patients with tinnitus. It
            offers a comprehensive approach to tinnitus management, including
            strategies and instructional counseling materials to mitigate
            functional and emotional health effects. By focusing on education,
            reaction, and improved overall quality of life, counseling
            intervention may promote more adaptive responses for tinnitus
            patients. This information is a work in progress and not meant to be
            considered definitive for all tinnitus patients. It is a work in
            progress and not meant to be considered complete. Treating tinnitus
            patients is not a "one size fits all" approach. The content found in
            this tool may be helpful in developing treatment plans or strategies
            that can be customized for individual patients.
          </p>
        </section>

        <section className="mt-12">
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

        {/* Full Image Section */}
        <section className="relative w-full my-12">
          <img
            src="/images/Auditory Pathways.jpg"
            alt="Tinnitus Support Banner"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h2 className="text-4xl font-bold text-white">Supporting Your Journey to Relief</h2>
          </div> */}
        </section>

        <section id="contact-us">
          <ContactForm />
        </section>
      </main>
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">About Us</h5>
              <p className="text-gray-400">Tinnitus Support provides evidence-based recommendations and resources for managing tinnitus.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><FooterLink href="#">Home</FooterLink></li>
                <li><FooterLink href="#">About</FooterLink></li>
                <li><FooterLink href="#">Services</FooterLink></li>
                <li><FooterLink href="#">Contact</FooterLink></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h5 className="text-lg font-semibold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><FooterLink href="#">FAQs</FooterLink></li>
                <li><FooterLink href="#">Blog</FooterLink></li>
                <li><FooterLink href="#">Support</FooterLink></li>
                <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h5 className="text-lg font-semibold mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <SocialIcon href="#" icon={Facebook} />
                <SocialIcon href="#" icon={Twitter} />
                <SocialIcon href="#" icon={Instagram} />
                <SocialIcon href="#" icon={Linkedin} />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tinnitus Support. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
