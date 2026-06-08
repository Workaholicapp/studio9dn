import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ExecutedProjectsGallery } from '../components/ExecutedProjectsGallery';
import { YouTubeVideosSection } from '../components/YouTubeVideosSection';
import { projects } from '../data/projects';

interface WorksPageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function WorksPage({ onNavigate }: WorksPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'institutional', label: 'Institutional' },
    { id: 'mixed-use', label: 'Mixed-use' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.typology.toLowerCase().replace(' ', '-') === activeFilter);

  // YouTube Videos - Update these URLs with your actual YouTube video links
  const youtubeVideos = [
    {
      url: 'https://youtu.be/j-BHKDn8_xs',
      title: 'Project Olivia: Interior Showcase in partnership with Allied Designers',
    },
    {
      url: 'https://youtu.be/viQazav9_E0',
      title: 'Bayroack Feature Wall',
    },
    {
      url: 'https://youtu.be/zPjKYjc9gAQ',
      title: 'Tropical House: The animation project in partnership with Allied Designers',
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, projectId?: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(page, projectId);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <h1
            className="mb-8 md:mb-12"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(2.5rem, 6vw, var(--text-h1))',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Works
          </h1>

          <p
            className="text-muted-foreground max-w-[60ch]"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-body-lg)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 1.7,
            }}
          >
            A selection of architectural projects spanning residential and institutional
            developments across Nigeria.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-8">
          <div className="flex flex-wrap gap-4 md:gap-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`transition-all duration-500 px-4 py-2 ${
                  activeFilter === filter.id
                    ? 'text-foreground bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-normal)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                typology={project.typology}
                location={project.location}
                status={project.status}
                imageUrl={project.imageUrl}
                href={`?page=project&id=${project.id}`}
                onClick={(e) => handleLinkClick(e, 'project', project.id)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                }}
              >
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Executed Projects Gallery */}
      <ExecutedProjectsGallery />

      {/* YouTube Videos Section */}
      <YouTubeVideosSection videos={youtubeVideos} />
    </div>
  );
}
