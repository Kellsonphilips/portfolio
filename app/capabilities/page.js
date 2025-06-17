'use client';

import Image from 'next/image';

const capabilities = [
  {
    title: 'Web Development',
    description: 'Full-stack web development using modern technologies and best practices.',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000'
  },
  {
    title: 'Data Analysis',
    description: 'Data-driven insights and visualization using various analytical tools.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
  },
  {
    title: 'ICT Solutions',
    description: 'Comprehensive ICT solutions for businesses and organizations.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000'
  },
  {
    title: 'Project Management',
    description: 'Agile project management and team collaboration.',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000'
  }
];

export default function Capabilities() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-8">Professional Capabilities</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h2 className="text-xl font-semibold mb-2">
                  {capability.title}
                </h2>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 