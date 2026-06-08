import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  typology: string;
  location: string;
  status: string;
  imageUrl: string;
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function ProjectCard({ title, typology, location, status, imageUrl, href, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group w-full text-left relative overflow-hidden block"
    >
      {/* Image Container with Parallax Effect */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-6">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-1000 ease-out"
          style={{
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        
        {/* Animated Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: isHovered 
              ? 'linear-gradient(180deg, rgba(67, 74, 54, 0) 0%, rgba(67, 74, 54, 0.7) 100%)'
              : 'linear-gradient(180deg, rgba(67, 74, 54, 0) 0%, rgba(67, 74, 54, 0) 100%)',
          }}
        />

        {/* Sliding Typology Label */}
        <div
          className="absolute top-4 left-0 bg-primary text-background px-4 py-2 transition-all duration-500 ease-out"
          style={{
            transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '0.75rem',
              fontWeight: 'var(--font-weight-medium)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {typology}
          </span>
        </div>

        {/* Bottom Info Reveal */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ease-out"
          style={{
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div
            className="text-white"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '0.875rem',
              fontWeight: 'var(--font-weight-normal)',
              letterSpacing: '0.02em',
            }}
          >
            {location}
          </div>
          <div
            className="text-white/80 mt-1"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '0.75rem',
              fontWeight: 'var(--font-weight-normal)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {status}
          </div>
        </div>
      </div>

      {/* Title with Staggered Animation */}
      <div className="space-y-2">
        <h3
          className="transition-all duration-500 ease-out"
          style={{
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-medium)',
            fontStyle: 'normal',
            lineHeight: 1.3,
            transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
            color: isHovered ? 'var(--color-primary)' : 'inherit',
          }}
        >
          {title}
        </h3>

        {/* Animated Underline */}
        <div
          className="h-[1px] bg-primary transition-all duration-700 ease-out"
          style={{
            width: isHovered ? '60px' : '0px',
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </a>
  );
}
