'use client';

const skills = {
  'Frontend Development': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  'Backend Development': ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB'],
  'Data Analytics': ['Python', 'R', 'SQL', 'Tableau', 'Power BI'],
  'DevOps & Tools': ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
};

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Technical Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 