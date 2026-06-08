interface ClientelePageProps {
  onNavigate?: (page: string, projectId?: string) => void;
}

export function ClientelePage({ onNavigate }: ClientelePageProps) {
  const clients = {
    commercial: [
      'Chess in Slums Africa (CISA)',
      'The Good Thing Company',
      'Daltior',
      'Eko Amore',
      'Synagogue Church',
    ],
    private: [
      'Ace Royal Estates',
      'Padbod',
      'NVO International',
      'Owesse Foods',
      'Hectagon Architects',
    ],
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate?.('contact');
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
            Clientele
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
            Our clients are institutions, developers, and private individuals who recognize
            architecture as both a cultural and economic investment. They value design excellence,
            long-term performance, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Commercial Clients */}
      <section className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-bold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Commercial
              </h2>
            </div>

            <div className="md:col-span-8">
              <ul className="space-y-4">
                {clients.commercial.map((client, index) => (
                  <li
                    key={index}
                    className="pb-4 border-b border-border last:border-0"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.7,
                    }}
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Private Sector Clients */}
      <section className="border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-bold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Private Sector
              </h2>
            </div>

            <div className="md:col-span-8">
              <ul className="space-y-4">
                {clients.private.map((client, index) => (
                  <li
                    key={index}
                    className="pb-4 border-b border-border last:border-0"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.7,
                    }}
                  >
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Philosophy */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="max-w-[900px] mx-auto text-center space-y-8">
            <h2
              style={{
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--text-h2)',
                fontWeight: 'var(--font-weight-medium)',
                fontStyle: 'normal',
                lineHeight: 1.3,
              }}
            >
              Meaningful Partnerships
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
              We work with clients who understand that great architecture requires time, trust, and
              intellectual investment. Our relationships are collaborative, rooted in shared values
              and a commitment to lasting quality.
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
              These are clients with strong economic standing and an acquired taste for fine design
              details—individuals and institutions who recognize architecture as a generational
              asset, not a commodity.
            </p>
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
              Interested in working together?
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
              We are selective about the projects we undertake. If you are considering a project
              that requires serious architectural thinking and sustained design excellence, we would
              like to hear from you.
            </p>

            <a
              href="?page=contact"
              onClick={handleLinkClick}
              className="inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground transition-all duration-500 hover:bg-primary/90 uppercase tracking-widest text-sm font-medium"
              style={{
                fontFamily: 'var(--font-primary)',
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}