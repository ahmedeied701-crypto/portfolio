import Image from 'next/image'
import React from 'react'
import { Project } from '../types'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const handleCardClick = () => {
        if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <div
            onClick={handleCardClick}
            className={`block rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer`}
        >
            <div className="border-b-2 border-opacity-25 border-black">
                <Image
                    className="w-full"
                    width="600"
                    height="400"
                    layout="responsive"
                    src={`/images/${project.media}.png`}
                    alt="project"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">{project.description}</p>
            </div>
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
          <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-white font-semibold mr-1 mb-2 hover:bg-green-900">
            Link
          </span>
                </a>
            )}
            {project.source && (
                <a href={project.source} target="_blank" rel="noopener noreferrer">
          <span className="inline-block bg-indigo-600 rounded-full px-3 py-1 font-semibold text-white mr-1 mb-2 hover:bg-indigo-900">
            Source
          </span>
                </a>
            )}
            {project.documentation && (
                <a href={project.documentation} target="_blank" rel="noopener noreferrer">
          <span className="inline-block bg-pink-600 rounded-full px-3 py-1 font-semibold text-white mr-1 mb-2 hover:bg-pink-900">
            Documentation
          </span>
                </a>
            )}
            <div className="px-6 pt-4 pb-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
            {technology}
          </span>
                ))}
            </div>
        </div>
    );
}
