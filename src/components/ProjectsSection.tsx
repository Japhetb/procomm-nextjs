'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Resilience Knowledge Fare',
      category: 'resilience',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20241030_134600.jpg-r14OoaZ5W0z6izT0PXKPMh87P20F4C.jpeg',
      description: 'Our team has trained journalists to acquire new skills necessary in their trade and helped county governments, especially in the arid and semi-arid areas to build resilience that will enable them to withstand the shocks and vagaries of weather changes through effective and efficient communication.',
      link: '#'
    },
    {
      id: 2,
      title: 'Sustainable Agriculture Initiatives',
      category: 'agricultural',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250403_161759%280%29.jpg-VRugx4E827pFBohWjSCDBsvtpzDA2b.jpeg',
      description: 'Supporting farmers and communities in sustainable agricultural practices, helping them adapt to changing climate conditions while maintaining food security and economic stability.',
      link: '#'
    },
    {
      id: 3,
      title: 'Livestock Restocking Initiative',
      category: 'resilience',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PICTURE%20%20%2811%29-E2Kvg4v6nMs399OWEWaiSmObAuJW9n.png',
      description: 'Working with National Drought Management Authority to support pastoral communities through livestock restocking programs. The Somali breed camels are more resilient than local breeds, helping communities adapt to climate challenges.',
      link: '#'
    },
    {
      id: 4,
      title: 'Agropastoral Farming Support',
      category: 'agricultural',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PICTURE%20%20%288%29-Dc33NCRYzLASAEj6CWrbKQcQV7KB2f.png',
      description: 'Supporting mixed farmers in diversifying to agropastoral farming with access to water for irrigation. Farmers are growing pawpaw, bananas, cassava, sweet potatoes, and cowpeas among other food crops.',
      link: '#'
    },
    {
      id: 5,
      title: 'Dairy Goat Distribution Program',
      category: 'resilience',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PICTURE%20%20%286%29-zwbo6MCIZOs6YEUbbeosQTyQIQNMOO.png',
      description: 'National Drought Management Authority donated dairy goats to household beneficiaries. With climate change affecting many households, the dairy goats provide an alternative livelihood source and adaptation strategy.',
      link: '#'
    },
    {
      id: 6,
      title: 'Science Week Innovation Showcase',
      category: 'media',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250408_151700.jpg-ZC2rJqq3PpVG7JpMo9l7e0AQWxbWTF.jpeg',
      description: 'ProComm provides training of various tools, techniques, and platforms used in the creation, distribution, and consumption of different types of media content, including phenotyping technologies and agricultural innovations.',
      link: '#'
    },
    {
      id: 7,
      title: 'Livestock Market Development',
      category: 'agricultural',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20241014_115012.jpg-xHI0iscC6W6K6XaptupoSvbHLpmJsn.jpeg',
      description: 'Supporting livestock market infrastructure and connecting pastoral communities to sustainable economic opportunities while building climate-resilient livelihoods.',
      link: '#'
    },
    {
      id: 8,
      title: 'Camel Herding Communities',
      category: 'resilience',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20241023_101815.jpg-u71IN1YwxyNS8v11xnCQ3uSg2OJcU1.jpeg',
      description: 'Working with camel herding communities to document traditional knowledge and support sustainable pastoral practices in arid and semi-arid regions.',
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'agricultural', name: 'Agricultural Insights' },
    { id: 'media', name: 'Media Technologies' },
    { id: 'training', name: 'Journalists Training' },
    { id: 'resilience', name: 'Resilience Knowledge' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our projects and gain a deeper understanding of the intricate interplay between technology, 
            sustainability, policy, and the people who drive the agriculture sector forward. Whether you&apos;re a farmer, 
            industry professional, policymaker, or anyone our projects are designed to inform, inspire, and foster 
            meaningful conversations that shape the future of different sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Overlay Link */}
                {project.link !== '#' && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {project.description}
                </p>
                
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {filters.find(f => f.id === project.category)?.name || 'General'}
                  </span>
                  
                  {project.link !== '#' && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
