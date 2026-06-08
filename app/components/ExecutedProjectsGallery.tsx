import image_b05b6934faed3477843e3ad5d0d575c3161bdc6f from 'figma:asset/b05b6934faed3477843e3ad5d0d575c3161bdc6f.png';
import image_7ccb550bf0e0bf42fa811b7940fb8e8062bf2b4a from 'figma:asset/7ccb550bf0e0bf42fa811b7940fb8e8062bf2b4a.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import lalasLoungeImage from 'figma:asset/d4bb55ead3000876d36b3b1490c7ec47daff0e7d.png';
import projectCastleImage from 'figma:asset/e1d6e54fe9809c4d4912d97846dbd88a9ae79236.png';
import projectSathImage from 'figma:asset/bab0f893b2be5ca0375bbb396af762b1ffe0264e.png';
import houseOliviaImage from 'figma:asset/224e8cfa7848c38ddd8a3ed23bae9149f58b9a41.png';

interface GalleryImage {
  id: string;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
  collaboration?: string;
}

const executedProjects: GalleryImage[] = [
  {
    id: '1',
    title: 'Lala\'s Lounge',
    location: 'Ikoyi, Lagos',
    year: '2023',
    imageUrl: lalasLoungeImage,
  },
  {
    id: '2',
    title: 'Project Castle',
    location: 'Yaba, Lagos',
    year: '2024',
    imageUrl: projectCastleImage,
  },
  {
    id: '3',
    title: 'Project SATH',
    location: 'Owerri, Nigeria',
    year: '2025',
    imageUrl: projectSathImage,
    collaboration: 'In collaboration with Zodge Associates',
  },
  {
    id: '4',
    title: 'House Olivia',
    location: 'Lagos, Nigeria',
    year: '2025',
    imageUrl: houseOliviaImage,
    collaboration: 'In partnership with Allied Designers',
  },
  {
    id: '9',
    title: 'Victory Park Residence',
    location: 'Lekki, Phase 1',
    year: '2021',
    imageUrl: image_b05b6934faed3477843e3ad5d0d575c3161bdc6f,
    collaboration: 'In partnership with Hectagon Architects',
  },

];

export function ExecutedProjectsGallery() {
  return (
    <section className="border-t border-border">
      <div className="max-w-[1440px] mx-auto py-16 md:py-24">
        {/* Section Header */}
        <div className="px-6 md:px-12 lg:px-24 mb-12 md:mb-16">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'clamp(1.75rem, 4vw, var(--text-h2))',
              fontWeight: 'var(--font-weight-medium)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            Executed Projects Gallery
          </h2>
          <p
            className="text-muted-foreground max-w-[60ch]"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-body)',
              fontWeight: 'var(--font-weight-normal)',
              lineHeight: 1.7,
            }}
          >
            A curated selection of completed works demonstrating our commitment to architectural
            excellence and sustainable design across Nigeria.
          </p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div className="flex gap-6 md:gap-8 px-6 md:px-12 lg:px-24 pb-4">
            {executedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-muted flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[600px]"
              >
                <div className="aspect-[4/3]">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  {project.collaboration && (
                    <p
                      className="text-white/70 mb-3"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-small)',
                        fontWeight: 'var(--font-weight-normal)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {project.collaboration}
                    </p>
                  )}
                  <p
                    className="text-white/80 mb-1"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-h4)',
                      fontWeight: 'var(--font-weight-normal)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {project.location} — {project.year}
                  </p>
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      fontSize: 'var(--text-h3)',
                      fontWeight: 'var(--font-weight-medium)',
                      fontStyle: 'normal',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}