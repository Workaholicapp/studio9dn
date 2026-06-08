export function CollaborationsPage() {
  const collaborators = [
    {
      name: 'Allied Designers',
      role: 'INTERIOR DESIGN & VISUALIZATION',
      description: 'Interior design and visualization services',
    },
    {
      name: 'E-Jay\'s Projects Ltd',
      role: 'Structural Engineering',
      description: 'A structural design firm renowned for its expertise in robust and detailed structural analysis.',
    },
    {
      name: 'Hectagon Architects',
      role: 'Architecture / Real Estate',
      description: 'An architecture and real estate practice specializing in the design and delivery of mid-scale residential and commercial projects.',
    },
    {
      name: 'Conclave Ltd',
      role: 'Architecture',
      description: 'An architecture firm distinguished by its expertise in large-scale typologies, including hospitality, sports facilities, religious auditoriums, and aviation infrastructure.',
    },
  ];

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
            Collaborations
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
            At STUDIO9DN, collaboration is not an add-on to our process — it is the foundation. We believe the most meaningful architecture emerges when diverse minds, disciplines, and lived experiences converge with clarity of purpose. Our work thrives at the intersection of design intelligence, cultural context, and technical excellence, and this can only be achieved through intentional partnerships.
          </p>
        </div>
      </section>

      {/* Collaborators List */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="space-y-16 md:space-y-20">
            {collaborators.map((collab, index) => (
              <div
                key={index}
                className="grid md:grid-cols-12 gap-8 md:gap-16 pb-16 md:pb-20 border-b border-border last:border-0"
              >
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
                    {collab.name}
                  </h2>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div
                    className="text-primary"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-medium)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {collab.role}
                  </div>

                  <p
                    className="text-muted-foreground max-w-[60ch]"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.7,
                    }}
                  >
                    {collab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="border-t border-border bg-muted/30">
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
              Collaboration as Practice
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
              At STUDIO9DN, collaboration is a way of working — practiced, not assumed.
              We design through shared thinking, where ideas are shaped by dialogue, tested by expertise, and strengthened through collective responsibility.
            </p>

            <p
              className="text-muted-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              Architecture does not emerge in isolation. It is formed at the intersection of people, place, craft, and context. By working closely with clients, consultants, builders, and cultural contributors, we allow each project to grow beyond a single voice while maintaining clarity of intent.
            </p>

            <p
              className="text-muted-foreground"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body-lg)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              We value openness, critical exchange, and respect across disciplines. In a fragmented built environment, collaboration becomes an act of precision — aligning vision, restoring trust, and producing work that performs with purpose.
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
              For us, collaboration is not just working together.
              It is how architecture finds its depth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}