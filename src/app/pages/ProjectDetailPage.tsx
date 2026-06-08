import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ParallaxSection } from '../components/ParallaxSection';
import { ArrowLeft } from 'lucide-react';
import { projectDetails } from '../data/projectDetails';
import { motion } from 'motion/react';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string) => void;
}

export function ProjectDetailPage({ projectId, onNavigate }: ProjectDetailPageProps) {
  const project = projectDetails[projectId];

  if (!project) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24">
      {/* Back Button */}
      <div className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-6">
          <button
            onClick={() => onNavigate('works')}
            className="group inline-flex items-center gap-2 text-muted-foreground transition-all duration-500 hover:text-foreground hover:gap-3"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-normal)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            <ArrowLeft size={14} className="transition-transform duration-500 group-hover:-translate-x-1" />
            Back to Works
          </button>
        </div>
      </div>

      {/* Hero Image - LCP Optimized */}
      <section>
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-muted">
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
        </div>
      </section>

      {/* Project Header */}
      <section className="border-b border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <ParallaxSection speed={0.3} className="md:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'clamp(2rem, 5vw, var(--text-h1))',
                  fontWeight: 'var(--font-weight-medium)',
                  fontStyle: 'normal',
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </motion.h1>
            </ParallaxSection>

            <ParallaxSection speed={0.5} direction="down" className="md:col-span-4 space-y-6">
              {[
                { label: 'Typology', value: project.typology },
                { label: 'Role', value: project.role },
                { label: 'Location', value: project.location },
                { label: 'Status', value: project.status },
                { label: 'Year', value: project.year },
                { label: 'Area', value: project.area },
              ]
                .filter((item) => item.value)
                .map((item) => (
                <div key={item.label} className="space-y-1">
                  <div
                    className="text-muted-foreground"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-semibold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-normal)',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="border-b border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <ParallaxSection speed={0.3} className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Project Overview
              </h2>
            </ParallaxSection>

            <ParallaxSection speed={0.5} direction="down" className="md:col-span-8">
              <p
                className="text-foreground max-w-[65ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Image Gallery - Lazy Loaded */}
      <section className="overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-12">
          <div className="grid grid-cols-1 gap-12 md:gap-24">
            {project.images.map((img, index) => (
              <ParallaxSection key={index} speed={0.4 + (index % 3) * 0.1} direction={index % 2 === 0 ? 'up' : 'down'}>
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} detail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="border-t border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <ParallaxSection speed={0.3} className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Design Approach
              </h2>
            </ParallaxSection>

            <ParallaxSection speed={0.5} direction="down" className="md:col-span-8">
              <p
                className="text-muted-foreground max-w-[65ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                {project.approach}
              </p>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="border-t border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <ParallaxSection speed={0.3} className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Sustainability
              </h2>
            </ParallaxSection>

            <ParallaxSection speed={0.5} direction="down" className="md:col-span-8">
              <p
                className="text-muted-foreground max-w-[65ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                {project.sustainability}
              </p>
            </ParallaxSection>
          </div>
        </div>
      </section>
    </div>
  );
}
