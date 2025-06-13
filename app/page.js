"use client"

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import profilePic from '../public/Images/profile.jpg';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-6 mt-10">
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m John Doe</h1>
          <p className="text-xl mb-4">ICT Solution Provider, Software Engineer & Data Analyst</p>
          <p className="text-md text-gray-600 mb-6">
            Welcome to my portfolio where I showcase projects, skills, and capabilities.
            I help businesses transform their ideas into digital reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/projects"
              className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full w-40 h-40 object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in software development and data analysis,
              I specialize in creating efficient, scalable solutions that drive business growth.
              My expertise spans across web development, data analytics, and ICT solutions.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link 
              href="/projects"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured project cards will be dynamically loaded here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to bring your ideas to life. Whether you need a website,
            data analysis, or ICT solutions, I&apos;m here to help.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
