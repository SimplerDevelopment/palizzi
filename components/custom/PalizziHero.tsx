'use client';

import Image from 'next/image';

interface PalizziHeroProps {
  block: {
    address?: string;
    crestUrl?: string;
    neonUrl?: string;
    tagline?: string;
    established?: string;
    scrollTarget?: string;
  };
}

export function PalizziHero({ block }: PalizziHeroProps) {
  const {
    address = '1408 South 12th Street \u00b7 Philadelphia',
    crestUrl = '',
    neonUrl = '',
    tagline = "if the neon is on, we\u2019re open",
    established = 'Est. 1918',
    scrollTarget = '#welcome',
  } = block;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0d0d0d, rgba(26,26,26,0.5), #0d0d0d)' }} />
      <div className="absolute top-1/2 left-1/2 rounded-full blur-3xl" style={{ transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: 'rgba(255,59,59,0.05)' }} />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(245,230,211,0.4)' }}>{address}</p>
        {crestUrl && <Image src={crestUrl} alt="Club crest" width={120} height={120} style={{ opacity: 0.6 }} priority />}
        {neonUrl && (
          <div className="relative">
            <Image src={neonUrl} alt="Neon sign" width={443} height={143} className="h-auto neon-text" style={{ width: 'clamp(280px, 50vw, 443px)' }} priority />
          </div>
        )}
        <div style={{ width: '6rem', height: '1px', background: 'linear-gradient(to right, transparent, #c9a96e, transparent)' }} />
        <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(245,230,211,0.6)' }}>{tagline}</p>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', marginTop: '1rem' }}>{established}</p>
        <a href={scrollTarget} className="flex flex-col items-center gap-2 transition-colors" style={{ marginTop: '3rem', color: 'rgba(245,230,211,0.3)' }} aria-label="Scroll down">
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
