'use client';

import { FaGithub, FaExternalLink } from 'react-icons/fa';

const LABEL_GITHUB = "GitHub";
const LABEL_LIVE_DEMO = "Live Demo";

export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }) {
  return (
    <div className="card-3d-glow bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-900"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub className="w-5 h-5 mr-1" />
              {LABEL_GITHUB}
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-900"
              aria-label={`View live demo of ${title}`}
            >
              <FaExternalLink className="w-5 h-5 mr-1" />
              {LABEL_LIVE_DEMO}
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 