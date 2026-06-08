import image_7f763ba339e360b684b85a5976b4b9f714ece5bb from 'figma:asset/7f763ba339e360b684b85a5976b4b9f714ece5bb.png';
import image_faff59420755602f7dd77048a85cc4dd1ce2ecfb from 'figma:asset/faff59420755602f7dd77048a85cc4dd1ce2ecfb.png';
import image_189ba02c6f715d11a8d2374ec323b346ec6d6b9a from 'figma:asset/189ba02c6f715d11a8d2374ec323b346ec6d6b9a.png';
import image_b33773afc5f296ac2a0c2800c8692bf4fe50c5d8 from 'figma:asset/b33773afc5f296ac2a0c2800c8692bf4fe50c5d8.png';
import image_7a759fbaa8e10d0d279ad910c776f8a780bd03fd from 'figma:asset/7a759fbaa8e10d0d279ad910c776f8a780bd03fd.png';
import image_408ac5365463dcc857f9f6446a70a30ddbbbbb24 from 'figma:asset/408ac5365463dcc857f9f6446a70a30ddbbbbb24.png';
import image_91be65325d487852591193da5e251003913ef795 from 'figma:asset/91be65325d487852591193da5e251003913ef795.png';
import image_24936a76d9772e28faae72faf76af6a7fc461e41 from 'figma:asset/24936a76d9772e28faae72faf76af6a7fc461e41.png';
import image_712d826382a49bec9a0f13ad9e7edd347c9fc47b from 'figma:asset/712d826382a49bec9a0f13ad9e7edd347c9fc47b.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProjectCard } from '../components/ProjectCard';
import { ParallaxSection } from '../components/ParallaxSection';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProjects = [
    {
      id: 'house-olivia',
      title: 'House Olivia',
      typology: 'Residential',
      location: 'Lagos, Nigeria',
      status: 'Completed, 2025',
      imageUrl: image_408ac5365463dcc857f9f6446a70a30ddbbbbb24,
    },
    {
      id: 'performing-arts-center',
      title: 'Performing Arts Center',
      typology: 'Institutional',
      location: 'Ogun, Nigeria',
      status: 'Designed, 2023',
      imageUrl: image_24936a76d9772e28faae72faf76af6a7fc461e41,
    },
    {
      id: 'education-campus',
      title: 'Agodi Hotels',
      typology: 'Commercial',
      location: 'Oyo, Nigeria',
      status: 'In Progress',
      imageUrl: image_712d826382a49bec9a0f13ad9e7edd347c9fc47b,
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, projectId?: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate(page, projectId);
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-[900px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 md:mb-16"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(2.5rem, 6vw, var(--text-h1))',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Relevant Architecture.
              <br />
              Holistic Performance.
              <br />
              Sustainable Excellence.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-8 md:gap-12"
            >
              <p
                className="text-muted-foreground max-w-[45ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Studio9DN is an independent multidisciplinary design practice based in Lagos,
                Nigeria. We are rooted in the principles of tropical architecture, committed to
                holistic building performance and sustainable design excellence.
              </p>

              <p
                className="text-muted-foreground max-w-[45ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Our work serves real estate firms, institutions, and private clients with strong
                economic standing and an acquired taste for fine design details.
              </p>
            </motion.div>

            <a
              href="?page=studio"
              onClick={(e) => handleLinkClick(e, 'studio')}
              className="mt-12 md:mt-16 group inline-flex items-center gap-3 text-primary transition-all duration-500 hover:gap-5"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              About the Studio
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <ParallaxSection speed={0.3} className="md:col-span-4">
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontStyle: 'normal',
                  lineHeight: 1.3,
                }}
              >
                Design Philosophy
              </h2>
            </ParallaxSection>

            <ParallaxSection speed={0.5} direction="down" className="md:col-span-8 space-y-8">
              <p
                className="text-foreground max-w-[65ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                We design spaces that respond to climate, culture, and context. Our approach
                integrates passive environmental strategies with contemporary aesthetics, creating
                buildings that are both beautiful and performant.
              </p>

              <p
                className="text-muted-foreground max-w-[65ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Every project is an opportunity to advance sustainable practices while honoring the
                unique character of tropical environments. We believe in architecture that is
                confident, restrained, and timeless.
              </p>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="border-t border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <ParallaxSection speed={0.2}>
            <div className="flex items-end justify-between mb-12 md:mb-16">
            <h2
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-medium)',
                fontStyle: 'normal',
                lineHeight: 1.3,
              }}
            >
              Selected Works
            </h2>

            <a
              href="?page=works"
              onClick={(e) => handleLinkClick(e, 'works')}
              className="group inline-flex items-center gap-2 text-primary transition-all duration-500 hover:gap-4"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              View All
              <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            </div>
          </ParallaxSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
            {featuredProjects.map((project, index) => (
              <ParallaxSection key={project.id} speed={0.4 + index * 0.1} direction={index % 2 === 0 ? 'up' : 'down'}>
                <ProjectCard
                  title={project.title}
                  typology={project.typology}
                  location={project.location}
                  status={project.status}
                  imageUrl={project.imageUrl}
                  href={`?page=project&id=${project.id}`}
                  onClick={(e) => handleLinkClick(e, 'project', project.id)}
                />
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: 'Tropical Focus',
                description:
                  'Architecture designed for equatorial climates, embracing natural ventilation, shading strategies, and climate-responsive materials.',
              },
              {
                title: 'Holistic Performance',
                description:
                  'Integrated approach to environmental, structural, and social performance, ensuring buildings function as complete systems.',
              },
              {
                title: 'Sustainable Excellence',
                description:
                  'Commitment to environmental stewardship through thoughtful material selection, energy efficiency, and long-term building resilience.',
              },
            ].map((value, index) => (
              <ParallaxSection key={index} speed={0.3 + index * 0.15} direction={index === 1 ? 'down' : 'up'}>
                <div className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-muted-foreground max-w-[45ch]"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.7,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}