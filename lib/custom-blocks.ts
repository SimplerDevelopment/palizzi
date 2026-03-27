import type { CustomBlockDefinition } from '@/lib/visual-editor/registry';
import { PalizziNav } from '@/components/custom/PalizziNav';
import { PalizziHero } from '@/components/custom/PalizziHero';
import { PalizziWelcome } from '@/components/custom/PalizziWelcome';
import { PalizziHistory } from '@/components/custom/PalizziHistory';
import { PalizziMenu } from '@/components/custom/PalizziMenu';
import { PalizziRules } from '@/components/custom/PalizziRules';
import { PalizziMembership } from '@/components/custom/PalizziMembership';
import { PalizziFooter } from '@/components/custom/PalizziFooter';

export const customBlocks: CustomBlockDefinition[] = [
  {
    manifest: {
      type: 'palizzi-nav',
      label: 'Palizzi Navigation',
      icon: 'menu',
      category: 'Palizzi',
      description: 'Sticky navigation bar with gold accents and mobile hamburger menu',
      inputs: [
        { name: 'logoUrl', label: 'Logo URL', type: 'image', defaultValue: '/images/nav-header.png' },
        { name: 'brandName', label: 'Brand Name', type: 'string', defaultValue: 'Palizzi' },
      ],
      defaultProps: {
        logoUrl: '/images/nav-header.png',
        brandName: 'Palizzi',
        links: [
          { label: 'History', href: '#history' },
          { label: 'Menu', href: '#menu' },
          { label: 'House Rules', href: '#rules' },
          { label: 'Membership', href: '#membership' },
        ],
      },
    },
    component: PalizziNav,
  },
  {
    manifest: {
      type: 'palizzi-hero',
      label: 'Palizzi Hero',
      icon: 'view_carousel',
      category: 'Palizzi',
      description: 'Full-screen hero with neon sign, crest, and scroll indicator',
      inputs: [
        { name: 'address', label: 'Address', type: 'string', defaultValue: '1408 South 12th Street \u00b7 Philadelphia' },
        { name: 'crestUrl', label: 'Crest Image', type: 'image', defaultValue: '/images/nav-header.png' },
        { name: 'neonUrl', label: 'Neon Sign Image', type: 'image', defaultValue: '/images/neon-red.png' },
        { name: 'tagline', label: 'Tagline', type: 'string', defaultValue: "if the neon is on, we\u2019re open" },
        { name: 'established', label: 'Established', type: 'string', defaultValue: 'Est. 1918' },
        { name: 'scrollTarget', label: 'Scroll Target', type: 'string', defaultValue: '#welcome' },
      ],
      defaultProps: {
        address: '1408 South 12th Street \u00b7 Philadelphia',
        crestUrl: '/images/nav-header.png',
        neonUrl: '/images/neon-red.png',
        tagline: "if the neon is on, we\u2019re open",
        established: 'Est. 1918',
        scrollTarget: '#welcome',
      },
    },
    component: PalizziHero,
  },
  {
    manifest: {
      type: 'palizzi-welcome',
      label: 'Palizzi Welcome',
      icon: 'celebration',
      category: 'Palizzi',
      description: 'Welcome section with ornamental divider and book feature',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Benvenuti' },
        { name: 'title', label: 'Title', type: 'string', defaultValue: 'Welcome to' },
        { name: 'titleAccent', label: 'Title Accent', type: 'string', defaultValue: 'Palizzi Social Club' },
        { name: 'bookImage', label: 'Book Image', type: 'image', defaultValue: '/images/dinner-at-the-club.jpg' },
        { name: 'bookTitle', label: 'Book Title', type: 'string', defaultValue: 'Dinner at the Club' },
      ],
      defaultProps: {
        overline: 'Benvenuti',
        title: 'Welcome to',
        titleAccent: 'Palizzi Social Club',
        paragraphs: [],
        bookImage: '/images/dinner-at-the-club.jpg',
        bookTitle: 'Dinner at the Club',
        bookSubtitle: '',
        bookAuthors: '',
        bookLabel: 'Now Available',
      },
    },
    component: PalizziWelcome,
  },
  {
    manifest: {
      type: 'palizzi-history',
      label: 'Palizzi History',
      icon: 'history_edu',
      category: 'Palizzi',
      description: 'History section with background image and marquee divider',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Since 1918' },
        { name: 'backgroundImage', label: 'Background Image', type: 'image', defaultValue: '/images/palizziclub-header.jpg' },
        { name: 'marqueeImage', label: 'Marquee Image', type: 'image', defaultValue: '/images/palizziclub-marquee.png' },
      ],
      defaultProps: {
        overline: 'Since 1918',
        title: 'History of',
        titleAccent: 'Palizzi',
        backgroundImage: '/images/palizziclub-header.jpg',
        marqueeImage: '/images/palizziclub-marquee.png',
        paragraphs: [],
      },
    },
    component: PalizziHistory,
  },
  {
    manifest: {
      type: 'palizzi-menu',
      label: 'Palizzi Menu',
      icon: 'restaurant_menu',
      category: 'Palizzi',
      description: 'Food & Cocktails menu with toggle between categories',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Our Offerings' },
        { name: 'title', label: 'Title (HTML)', type: 'string', defaultValue: 'Food & Cocktails' },
        { name: 'subtitle', label: 'Subtitle', type: 'string', defaultValue: '' },
      ],
      defaultProps: {
        overline: 'Our Offerings',
        title: 'Food & Cocktails',
        subtitle: '',
        foodSections: [],
        cocktails: [],
      },
    },
    component: PalizziMenu,
  },
  {
    manifest: {
      type: 'palizzi-rules',
      label: 'Palizzi House Rules',
      icon: 'gavel',
      category: 'Palizzi',
      description: 'House rules section with hours box and numbered rules',
      inputs: [
        { name: 'hoursTitle', label: 'Hours Title', type: 'string', defaultValue: 'Thursday through Sunday' },
        { name: 'hoursSubtitle', label: 'Hours Subtitle', type: 'string', defaultValue: '6 p.m. until late night' },
      ],
      defaultProps: {
        overline: 'Please Observe',
        title: 'House',
        titleAccent: 'Rules',
        hoursTitle: 'Thursday through Sunday',
        hoursSubtitle: '6 p.m. until late night',
        badges: ['Members Only', 'Cash Only'],
        rules: [],
        disclaimer: '',
      },
    },
    component: PalizziRules,
  },
  {
    manifest: {
      type: 'palizzi-membership',
      label: 'Palizzi Membership',
      icon: 'card_membership',
      category: 'Palizzi',
      description: 'Membership information section',
      inputs: [
        { name: 'highlight', label: 'Highlight Text', type: 'string', defaultValue: '' },
      ],
      defaultProps: {
        overline: 'Join Us',
        title: 'Become a',
        titleAccent: 'Member',
        paragraphs: [],
        highlight: '',
        closingNote: '',
        signature: '',
        footnote: '',
      },
    },
    component: PalizziMembership,
  },
  {
    manifest: {
      type: 'palizzi-footer',
      label: 'Palizzi Footer',
      icon: 'call_to_action',
      category: 'Palizzi',
      description: 'Footer with marquee, location, hours, and navigation links',
      inputs: [
        { name: 'marqueeImage', label: 'Marquee Image', type: 'image', defaultValue: '/images/palizziclub-marquee.png' },
        { name: 'bottomText', label: 'Bottom Text', type: 'string', defaultValue: 'Palizzi Social Club \u00b7 Est. 1918' },
      ],
      defaultProps: {
        marqueeImage: '/images/palizziclub-marquee.png',
        columns: [],
        bottomText: 'Palizzi Social Club \u00b7 Est. 1918',
      },
    },
    component: PalizziFooter,
  },
];
