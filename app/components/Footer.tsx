import { ImageWithFallback } from './figma/ImageWithFallback';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate?.(page);
  };

  return (
    <footer className="border-t border-border mt-32 md:mt-48">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Studio Info */}
          <div className="space-y-4">
            <div
              className="mb-6"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Studio9DN
            </div>
            <p
              className="text-muted-foreground max-w-[45ch]"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              An independent multidisciplinary design practice rooted in tropical architecture,
              holistic building performance, and sustainable design excellence.
            </p>
            
            <a
              href="?page=admin"
              onClick={(e) => handleLinkClick(e, 'admin')}
              className="text-xs text-muted-foreground/50 hover:text-primary transition-colors mt-4 inline-block"
            >
              Admin Access
            </a>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <div
              className="mb-6"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Location
            </div>
            <div
              className="text-muted-foreground space-y-2"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              <p>Lagos, Nigeria</p>
              <p>Studio Nine Degrees North</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <div
              className="mb-6"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Inquiries
            </div>
            <div
              className="text-muted-foreground space-y-2"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-normal)',
                lineHeight: 1.7,
              }}
            >
              <p>info@studio9dn.com</p>
            </div>

            <div>
              <p className="font-medium mb-2">Phone</p>
              <p
                className="text-muted-foreground"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                +234 812 917 9436
              </p>
              <a
                href="https://wa.me/2348129179436"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors block"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '12px',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <div
              className="mb-6"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-body)',
                fontWeight: 'var(--font-weight-medium)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Follow
            </div>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/studio9dn?igsh=YTRpY3BzbXcxeXY4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-primary/80 transition-colors"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@studio9dn?si=HkNooYNgjfQiCpyG"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-primary/80 transition-colors"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/104365399/admin/inbox?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_feed_following%3Be4448548-3ae8-4bd9-bf20-9c43fa3bdfb7"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary hover:text-primary/80 transition-colors"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-body)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: 1.7,
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
