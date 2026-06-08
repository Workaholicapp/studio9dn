import image_93108d7160fe791ab12f452cfb6d9af462c94927 from 'figma:asset/93108d7160fe791ab12f452cfb6d9af462c94927.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function StudioPage() {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <h1
            className="mb-12 md:mb-16 max-w-[800px]"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(2.5rem, 6vw, var(--text-h1))',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Independent Practice.
            <br />
            Tropical Grounding.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8">
              <p
                className="text-foreground max-w-[50ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Studio9DN is rooted at 9 degrees north latitude—the geographic coordinate that
                defines Lagos, Nigeria, and positions our practice within the tropical belt. This
                location informs everything we do.
              </p>

              <p
                className="text-muted-foreground max-w-[50ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                We are an independent multidisciplinary design practice committed to producing work
                that is contextually intelligent, environmentally responsive, and architecturally
                rigorous.
              </p>
            </div>

            <div className="space-y-8">
              <p
                className="text-muted-foreground max-w-[50ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Our clients include real estate firms, institutions, and private individuals who
                value design excellence and understand that great architecture is both a cultural
                and economic investment.
              </p>

              <p
                className="text-muted-foreground max-w-[50ch]"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body-lg)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                We approach each project as a unique opportunity to advance our understanding of
                tropical architecture and sustainable building performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="aspect-[16/9] bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/60zXkAimoSU?si=OEqV4FCJRAylNlrz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p
              className="text-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--font-weight-medium)',
              }}
            >
              Eko Amore Development
            </p>
            <p
              className="text-muted-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
              }}
            >
              Collaborative project with NVO International
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontStyle: 'normal',
                  lineHeight: 1.3,
                }}
              >
                Our Approach
              </h2>
            </div>

            <div className="md:col-span-8 space-y-12">
              {[
                {
                  title: 'Tropical Architecture',
                  description:
                    'We design for equatorial climates. Our buildings embrace natural ventilation, daylight optimization, and passive cooling strategies. We work with heat, humidity, and solar geometry—not against them.',
                },
                {
                  title: 'Holistic Building Performance',
                  description:
                    'Architecture is a system. We integrate environmental, structural, social, and economic performance from concept through completion. Every decision is evaluated for its impact on the whole.',
                },
                {
                  title: 'Sustainable Design Excellence',
                  description:
                    'Sustainability is not an add-on; it is fundamental to how we practice. We prioritize durable materials, energy efficiency, water conservation, and long-term building resilience.',
                },
                {
                  title: 'Cultural & Geographic Grounding',
                  description:
                    'Our work is informed by Lagos—its density, its climate, its energy, its contradictions. We believe architecture must be rooted in place to be meaningful.',
                },
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <h3
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-muted-foreground max-w-[60ch]"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--text-h2)',
                  fontWeight: 'var(--font-weight-medium)',
                  fontStyle: 'normal',
                  lineHeight: 1.3,
                }}
              >
                Services
              </h2>
            </div>

            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {[
                  'Architectural Design (Core Service)',
                  'Master Planning',
                  'Interior Architecture',
                  'Environmental Design',
                  'Facade Design',
                  'Building Performance Analysis',
                  'Sustainability Consulting',
                  'Concept Development & Design',
                ].map((service, index) => (
                  <div key={index}>
                    <p
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-body-lg)',
                        fontWeight: 'var(--font-weight-normal)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Statement */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="max-w-[900px] mx-auto text-center space-y-8">
            <p
              className="text-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              We don't produce buildings in isolation. We design through research, collaboration, and critical thinking — delivering architecture that performs culturally, spatially, and technically. From private residences to public and institutional projects, STUDIO9DN works with clients who value clarity of vision, design discipline, and long-term architectural relevance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
