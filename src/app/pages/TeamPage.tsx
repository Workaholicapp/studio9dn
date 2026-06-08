import image_e7358d9ae873fb1e5917a43afa0a027858850574 from 'figma:asset/e7358d9ae873fb1e5917a43afa0a027858850574.png';
import image_38258001f19c9f876fd1826236fb3ba84d9b1e71 from 'figma:asset/38258001f19c9f876fd1826236fb3ba84d9b1e71.png';
import image_49a257e700460dc0ecc88199a3c1286b8fb11ddb from 'figma:asset/49a257e700460dc0ecc88199a3c1286b8fb11ddb.png';
import image_f607efec064fc1708c947ef5fea13615a10ba099 from 'figma:asset/f607efec064fc1708c947ef5fea13615a10ba099.png';
import image_2d77d17e8992106b71e1ce0015dcbf3344da9e20 from 'figma:asset/2d77d17e8992106b71e1ce0015dcbf3344da9e20.png';
import image_cca6785647c8a0c00158b19e53c90cb8d28e84cc from 'figma:asset/cca6785647c8a0c00158b19e53c90cb8d28e84cc.png';
import image_f9d18776abf45d18c00ac1d32508a41002581c20 from 'figma:asset/f9d18776abf45d18c00ac1d32508a41002581c20.png';
import { useState } from 'react';
import { PortfolioModal } from '../components/PortfolioModal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ParallaxSection } from '../components/ParallaxSection';
import { motion } from 'motion/react';

interface TeamPageProps {
  onNavigate?: (page: string, projectId?: string) => void;
}

export function TeamPage({ onNavigate }: TeamPageProps) {
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  
  const team = [
    {
      name: 'Uwagwu Daniel',
      role: 'Lead Designer & Project Manager (Director)',
      value: 'Daniel leads design development and project coordination at Studio9DN. His process begins with site observation and hand sketching, translating client briefs into considered concepts that prioritize clarity, comfort, and environmental performance',
      image: image_cca6785647c8a0c00158b19e53c90cb8d28e84cc,
    },
    {
      name: 'Elendu Daniel',
      role: 'Project Manager (Director)',
      value: 'Elendu brings an interdisciplinary background spanning architecture and engineering within the oil and gas sector. At Studio9DN, he supports client engagement and business development while contributing to design thinking, bridging technical understanding with architectural intent',
      image: image_e7358d9ae873fb1e5917a43afa0a027858850574,
    },
    {
      name: 'Otevwe Joshua',
      role: 'BIM Specialist (Director)',
      value: 'Joshua supports Studio9DN through BIM coordination and construction-focused analysis. With over ten years of experience across BIM software, he develops and evaluates 3D models at small, medium, and large scales—using digital tools to inform design decisions, coordination, and buildability.',
      image: image_38258001f19c9f876fd1826236fb3ba84d9b1e71,
    },
    {
      name: 'Nsikakabasi Ekanem',
      role: 'Designer & Site Manager (Full Time Staff)',
      value: 'Nsikakabasi supports Studio9DN across design development and on-site coordination. With a keen eye for detail, he ensures design intent is carried through execution, while also contributing to the studio’s branding, visual communication, and project presentations',
      image: image_f607efec064fc1708c947ef5fea13615a10ba099,
    },
    {
      name: 'Medaraobong Eyo',
      role: 'Freelance Designer / 3D Visualizer',
      value: 'Eyo supports Studio9DN through considered design visualization. His work is driven by quality and intentionality, with careful attention to context—ensuring each visual clearly communicates its location, atmosphere, and design intent.',
      image: image_2d77d17e8992106b71e1ce0015dcbf3344da9e20,
    },
    {
      name: 'Aikodion Great',
      role: 'Architect & Presentation Designer',
      value: '[Brief statement about their contribution or philosophy]',
      image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', // Blank placeholder
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate?.('contact');
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="border-b border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 md:mb-12"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(2.5rem, 6vw, var(--text-h1))',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground max-w-[60ch]"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-body-lg)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 1.7,
            }}
          >
            Studio9DN is built on the conviction that architecture is a deliberate, intellectual
            pursuit—one that demands patience, rigor, and a commitment to lasting quality.
          </motion.p>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="border-b border-border overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          {/* Team Introduction */}
          <ParallaxSection speed={0.3}>
            <div className="max-w-[900px] mx-auto text-center space-y-8 mb-20 md:mb-24">
            <h2
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-medium)',
                fontStyle: 'normal',
                lineHeight: 1.3,
              }}
            >
              Meet Our Team
            </h2>

            <p
              className="text-muted-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              Our team of six brings together diverse expertise unified by a shared philosophy:
              design as a cultural and environmental responsibility.
            </p>

            <p
              className="text-muted-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              We approach each project with restraint and curiosity, seeking not to impose form but
              to discover it through deep engagement with context, climate, and the lived experience
              of those who will inhabit our work.
            </p>
            </div>
          </ParallaxSection>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {team.map((member, index) => (
              <ParallaxSection key={index} speed={0.4 + (index % 3) * 0.1} direction={index % 2 === 0 ? 'up' : 'down'}>
                <div className="group space-y-6 cursor-pointer">
                {/* Portrait Image */}
                <div className="aspect-[4/5] overflow-hidden bg-muted/30 relative">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle overlay that fades out on hover */}
                  <div className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none" />
                </div>

                {/* Name */}
                <h3
                  className="group-hover:text-primary transition-colors duration-500"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-h4)',
                    fontWeight: 'var(--font-weight-medium)',
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-medium)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {member.role}
                </p>

                {/* Value Statement - Hidden by default, revealed on hover */}
                <p
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-700 ease-out"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-normal)',
                    lineHeight: 1.7,
                  }}
                >
                  {member.value}
                </p>
                </div>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="border-b border-border bg-muted/30 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            {/* Left Column - Heading */}
            <ParallaxSection speed={0.3} className="md:col-span-5">
              <h2
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontStyle: 'normal',
                  lineHeight: 1.3,
                }}
              >
                Join Our Team
              </h2>
            </ParallaxSection>

            {/* Right Column - Content */}
            <ParallaxSection speed={0.5} direction="down" className="md:col-span-7 space-y-8">
              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                We are always looking for talented individuals who share our commitment to
                architectural excellence and sustainable design thinking. Studio9DN values
                intellectual curiosity, technical rigor, and the ability to work collaboratively on
                complex, culturally significant projects.
              </p>

              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                We seek architects, designers, and technical specialists who understand that
                meaningful work requires patience, restraint, and a long-term perspective. If you
                believe in design as both a cultural and environmental responsibility, we would like
                to hear from you.
              </p>

              <div className="pt-4">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-medium)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  What We Look For
                </h3>
                <ul className="space-y-3">
                  {[
                    'Strong design and technical foundation',
                    'Experience with tropical/climate-responsive architecture',
                    'Proficiency in BIM and digital design tools',
                    'Attention to detail and commitment to craft',
                    'Collaborative mindset and clear communication',
                    'Portfolio demonstrating thoughtful, considered work',
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground flex items-start gap-3"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-body)',
                        fontWeight: 'var(--font-weight-normal)',
                        lineHeight: 1.7,
                      }}
                    >
                      <span className="text-primary mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setPortfolioModalOpen(true)}
                  className="inline-block px-8 py-4 bg-primary text-primary-foreground transition-all duration-500 hover:bg-primary/90 cursor-pointer"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-medium)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  Submit Your Portfolio
                </button>
                <PortfolioModal isOpen={portfolioModalOpen} onClose={() => setPortfolioModalOpen(false)} />
                <p
                  className="text-muted-foreground mt-4 text-sm"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body-sm)',
                    fontWeight: 'var(--font-weight-normal)',
                    lineHeight: 1.6,
                  }}
                >
                  Please include your CV, portfolio, and a brief statement about your approach to
                  architecture.
                </p>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="max-w-[700px] mx-auto text-center space-y-8">
            <h2
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-medium)',
                fontStyle: 'normal',
                lineHeight: 1.3,
              }}
            >
              Want to learn more about our studio?
            </h2>

            <p
              className="text-muted-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              We're always open to conversations about architecture, design thinking, and potential
              collaborations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a
                href="?page=contact"
                onClick={handleLinkClick}
                className="inline-block px-8 py-4 bg-primary text-primary-foreground transition-all duration-500 hover:bg-primary/90 uppercase tracking-widest text-sm font-medium"
                style={{
                  fontFamily: 'var(--font-primary)',
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}