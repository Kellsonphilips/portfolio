'use client';

const capabilities = [
  {
    title: 'Web Development',
    description: 'Full-stack web development using modern technologies and best practices.',
    icon: '💻'
  },
  {
    title: 'Data Analysis',
    description: 'Data-driven insights and visualization using various analytical tools.',
    icon: '📊'
  },
  {
    title: 'ICT Solutions',
    description: 'Comprehensive ICT solutions for businesses and organizations.',
    icon: '🔧'
  },
  {
    title: 'Project Management',
    description: 'Agile project management and team collaboration.',
    icon: '📋'
  }
];

export default function Capabilities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Professional Capabilities</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {capabilities.map((capability) => (
          <div key={capability.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">{capability.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{capability.title}</h2>
            <p className="text-gray-600">{capability.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 