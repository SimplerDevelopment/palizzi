'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavItem {
  id: number;
  label: string;
  href: string;
  parentId: number | null;
  sortOrder: number;
  openInNewTab: boolean;
  isButton: boolean;
  description?: string;
  icon?: string;
  featuredImage?: string;
  columnGroup?: number;
}

interface Branding {
  logoUrl: string;
  logoAlt: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  navTemplate: string;
  navPosition: string;
  navBackground: string;
  navTextColor: string;
}

interface SiteNavigationProps {
  items: NavItem[];
  branding: Branding;
}

export function SiteNavigation({ items, branding }: SiteNavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const template = branding.navTemplate || 'classic';
  const isMega = template === 'mega';

  const topItems = items.filter(i => !i.parentId);
  const childrenOf = (parentId: number) => items.filter(i => i.parentId === parentId);

  const linkItems = topItems.filter(i => !i.isButton);
  const buttonItems = topItems.filter(i => i.isButton);

  const gold = '#c9a96e';
  const cream = 'rgba(245,230,211,0.7)';
  const dark = '#0d0d0d';

  const logoEl = branding.logoUrl ? (
    <Image src={branding.logoUrl} alt={branding.logoAlt || 'Logo'} width={36} height={36} style={{ opacity: 0.8 }} />
  ) : null;

  const renderMegaDropdown = (item: NavItem) => {
    const columns = childrenOf(item.id);
    if (columns.length === 0) return null;

    return (
      <div
        className="absolute top-full left-0 right-0 z-40 border-b"
        style={{
          backgroundColor: 'rgba(13,13,13,0.98)',
          borderColor: `${gold}20`,
          backdropFilter: 'blur(20px)',
        }}
        onMouseEnter={() => setActiveDropdown(item.id)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${Math.min(columns.length, 4)}, 1fr)` }}>
            {columns.map(column => {
              const megaItems = childrenOf(column.id);
              return (
                <div key={column.id}>
                  {/* Column heading */}
                  <div
                    className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 pb-2 border-b"
                    style={{ color: gold, borderColor: `${gold}30` }}
                  >
                    {column.label}
                  </div>

                  {/* Column featured image */}
                  {column.featuredImage && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img src={column.featuredImage} alt={column.label} className="w-full h-32 object-cover" />
                    </div>
                  )}

                  {/* Mega menu items */}
                  <div className="space-y-3">
                    {megaItems.map(megaItem => (
                      <a
                        key={megaItem.id}
                        href={megaItem.href}
                        className="group flex items-start gap-3 rounded-lg p-2 -mx-2 transition-colors"
                        style={{ color: cream }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        {megaItem.icon && (
                          <span
                            className="material-icons text-lg mt-0.5 shrink-0"
                            style={{ color: gold }}
                          >
                            {megaItem.icon}
                          </span>
                        )}
                        <div className="min-w-0">
                          <div className="text-sm font-medium" style={{ color: '#f5e6d3' }}>
                            {megaItem.label}
                          </div>
                          {megaItem.description && (
                            <div className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(245,230,211,0.4)' }}>
                              {megaItem.description}
                            </div>
                          )}
                        </div>
                        {megaItem.featuredImage && (
                          <img
                            src={megaItem.featuredImage}
                            alt={megaItem.label}
                            className="w-12 h-12 rounded object-cover shrink-0 ml-auto"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderRegularDropdown = (item: NavItem) => {
    const children = childrenOf(item.id);
    if (children.length === 0) return null;

    return (
      <div
        className="absolute top-full left-0 mt-2 min-w-[180px] rounded-lg border shadow-xl py-1 z-40 hidden group-hover:block"
        style={{
          backgroundColor: 'rgba(13,13,13,0.98)',
          borderColor: `${gold}20`,
          backdropFilter: 'blur(20px)',
        }}
      >
        {children.map(child => (
          <a
            key={child.id}
            href={child.href}
            className="block px-4 py-2 text-sm transition-colors"
            style={{ color: cream }}
            onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
            onMouseLeave={(e) => (e.currentTarget.style.color = cream)}
          >
            {child.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        borderColor: scrolled ? `${gold}20` : 'transparent',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          {logoEl}
          <span
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.25rem',
              letterSpacing: '0.1em',
              color: gold,
              textTransform: 'uppercase',
            }}
          >
            {branding.logoAlt || 'Palizzi'}
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {linkItems.map(item => {
            const hasChildren = childrenOf(item.id).length > 0;
            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => isMega && hasChildren ? setActiveDropdown(item.id) : undefined}
                onMouseLeave={() => isMega ? setActiveDropdown(null) : undefined}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 transition-colors"
                  style={{
                    fontSize: '0.875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: cream,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = cream)}
                >
                  {item.label}
                  {hasChildren && <span className="material-icons text-xs">expand_more</span>}
                </a>
                {!isMega && renderRegularDropdown(item)}
              </div>
            );
          })}
          {buttonItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className="px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider transition-colors"
              style={{ backgroundColor: gold, color: dark }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: '#f5e6d3', transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none' }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: '#f5e6d3', opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all duration-300" style={{ backgroundColor: '#f5e6d3', transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none' }} />
        </button>
      </div>

      {/* Mega dropdown (full-width below nav) */}
      {isMega && activeDropdown !== null && (() => {
        const item = topItems.find(i => i.id === activeDropdown);
        return item ? renderMegaDropdown(item) : null;
      })()}

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '24rem' : '0',
          borderBottom: menuOpen ? `1px solid ${gold}20` : 'none',
        }}
      >
        <div className="backdrop-blur-md px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: 'rgba(13,13,13,0.95)' }}>
          {topItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: cream }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
