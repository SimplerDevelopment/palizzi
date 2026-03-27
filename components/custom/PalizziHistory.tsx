'use client';

import Image from 'next/image';

interface PalizziHistoryProps {
  block: {
    overline?: string;
    title?: string;
    titleAccent?: string;
    backgroundImage?: string;
    marqueeImage?: string;
    paragraphs?: string[];
  };
}

export function PalizziHistory({ block }: PalizziHistoryProps) {
  const {
    overline = 'Since 1918',
    title = 'History of',
    titleAccent = 'Palizzi',
    backgroundImage = '/images/palizziclub-header.jpg',
    marqueeImage = '/images/palizziclub-marquee.png',
    paragraphs = [],
  } = block;

  return (
    <section id="history" className="relative overflow-hidden" style={{ padding: 'clamp(4rem, 8vw, 8rem) 1.5rem', backgroundColor: '#0d0d0d' }}>
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt="" fill className="object-cover" style={{ opacity: 0.15 }} sizes="100vw" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0d0d0d, rgba(13,13,13,0.7), #0d0d0d)' }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', marginBottom: '1rem' }}>{overline}</p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.875rem, 5vw, 3rem)', color: '#f5e6d3' }}>
            {title} <span style={{ color: '#c9a96e', fontStyle: 'italic' }}>{titleAccent}</span>
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <Image src={marqueeImage} alt="" width={400} height={70} className="h-auto" style={{ opacity: 0.4, width: 'clamp(250px, 40vw, 400px)' }} />
        </div>

        <div className="space-y-8">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <p style={{ color: 'rgba(245,230,211,0.7)', lineHeight: 1.75, fontSize: 'clamp(1rem, 2vw, 1.125rem)' }} dangerouslySetInnerHTML={{ __html: p }} />
              {i < paragraphs.length - 1 && (
                <div className="mx-auto" style={{ width: '4rem', height: '1px', backgroundColor: 'rgba(201,169,110,0.3)', marginTop: '2rem' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
