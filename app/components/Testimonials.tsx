import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Studio9DN transformed our vision into a reality that exceeded our expectations. Their attention to detail and commitment to sustainable design is unparalleled.",
    author: "Adewale O.",
    role: "Private Residence Client",
    location: "Lekki, Lagos"
  },
  {
    text: "Working with the team was an enlightening experience. They don't just build structures; they craft environments that breathe and interact with their surroundings.",
    author: "Chioma E.",
    role: "Commercial Developer",
    location: "Victoria Island"
  },
  {
    text: "The minimalist approach coupled with the warm tropical modernism created a sanctuary we are proud to call home. A truly timeless design.",
    author: "Mr. & Mrs. Johnson",
    role: "Homeowners",
    location: "Ikoyi"
  }
];

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <section className="py-24 md:py-32 border-t border-border bg-muted/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <h2
          className="mb-16 text-primary"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--text-h3)',
            fontWeight: 'var(--font-weight-medium)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          Client Perspectives
        </h2>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-8">
            {testimonials.map((item, index) => (
              <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-8 min-w-0" key={index}>
                <div className="h-full flex flex-col justify-between space-y-8 p-8 border border-border/50 bg-background hover:border-primary/50 transition-colors duration-300">
                  <Quote className="w-8 h-8 text-primary/40" />
                  <p
                    className="text-foreground"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-body-lg)',
                      fontWeight: 'var(--font-weight-normal)',
                      lineHeight: 1.6,
                    }}
                  >
                    "{item.text}"
                  </p>
                  <div>
                    <p
                      className="text-primary"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-body)',
                        fontWeight: 'var(--font-weight-medium)',
                      }}
                    >
                      {item.author}
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-small)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.role} — {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
