import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

interface YouTubeVideo {
  url: string;
  title: string;
}

interface YouTubeVideosSectionProps {
  videos: YouTubeVideo[];
}

// Extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function YouTubeVideosSection({ videos }: YouTubeVideosSectionProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

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
            Video Showcase
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
            Explore our architectural projects in motion—project walkthroughs, design narratives,
            and behind-the-scenes insights.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {videos.map((video, index) => {
              const videoId = getYouTubeVideoId(video.url);
              if (!videoId) return null;

              const thumbnailUrl = getYouTubeThumbnail(videoId);

              return (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-muted">
                    <div className="aspect-video">
                      <ImageWithFallback
                        src={thumbnailUrl}
                        alt={video.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-500">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
                        <Play
                          size={28}
                          className="text-primary fill-primary ml-1 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Video Title */}
                  <h3
                    className="mt-4 text-foreground group-hover:text-primary transition-colors duration-500"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {video.title}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
