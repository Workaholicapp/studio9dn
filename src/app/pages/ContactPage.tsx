import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
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
            Contact
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
            For serious project inquiries, collaboration opportunities, or general questions about
            our practice, please reach out via email.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* General Inquiries */}
            <div className="space-y-6">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                General Inquiries
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:info@studio9dn.com"
                  className="block text-primary transition-opacity duration-500 hover:opacity-60"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body-lg)',
                    fontWeight: 'var(--font-weight-normal)',
                  }}
                >
                  info@studio9dn.com
                </a>

                <p
                  className="text-muted-foreground"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-normal)',
                    lineHeight: 1.7,
                  }}
                >
                  For project inquiries, please include:
                  <br />
                  • Project type and scope
                  <br />
                  • Location
                  <br />
                  • Approximate timeline
                  <br />• Budget considerations
                </p>
              </div>
            </div>

            {/* Studio Location */}
            <div className="space-y-6">
              <h2
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                Studio Location
              </h2>

              <div className="space-y-2">
                <p
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body-lg)',
                    fontWeight: 'var(--font-weight-normal)',
                    lineHeight: 1.7,
                  }}
                >
                  Studio9DN
                  <br />
                  Lagos, Nigeria
                  <br />
                  9° North
                </p>

                <p
                  className="text-muted-foreground pt-4"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-body)',
                    fontWeight: 'var(--font-weight-normal)',
                    lineHeight: 1.7,
                  }}
                >
                  Studio visits by appointment only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="max-w-[800px]">
            <h2
              className="mb-12"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-h3)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Start a Project
            </h2>
            <ContactForm />
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
              Working Together
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
              We are selective about the projects we undertake. Each commission is an opportunity to
              advance our understanding of tropical architecture and sustainable building
              performance.
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
              If you are considering a project that requires serious architectural thinking,
              sustained design excellence, and a commitment to environmental responsibility, we
              would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Response Expectations */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
          <div className="max-w-[700px] mx-auto">
            <p
              className="text-muted-foreground text-center"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              We review all inquiries carefully and respond within 3–5 business days. Thank you for
              your interest in Studio9DN.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}