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
  // ── Navigation ──
  {
    manifest: {
      type: 'palizzi-nav',
      label: 'Palizzi Navigation',
      icon: 'menu',
      category: 'Palizzi',
      description: 'Sticky navigation bar with gold accents and mobile hamburger menu',
      inputs: [
        { name: 'logoUrl', label: 'Logo', type: 'image', defaultValue: '' },
        { name: 'brandName', label: 'Brand Name', type: 'string', defaultValue: 'Palizzi' },
        {
          name: 'links', label: 'Navigation Links', type: 'list',
          listItemSchema: [
            { name: 'label', label: 'Label', type: 'string' },
            { name: 'href', label: 'URL / Anchor', type: 'string' },
          ],
        },
      ],
      defaultProps: {
        logoUrl: '',
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

  // ── Hero ──
  {
    manifest: {
      type: 'palizzi-hero',
      label: 'Palizzi Hero',
      icon: 'view_carousel',
      category: 'Palizzi',
      description: 'Full-screen hero with neon sign, crest, and scroll indicator',
      inputs: [
        { name: 'address', label: 'Address Line', type: 'string', defaultValue: '' },
        { name: 'crestUrl', label: 'Crest Image', type: 'image', defaultValue: '' },
        { name: 'neonUrl', label: 'Neon Sign Image', type: 'image', defaultValue: '' },
        { name: 'tagline', label: 'Tagline', type: 'string', defaultValue: '' },
        { name: 'established', label: 'Established Text', type: 'string', defaultValue: '' },
        { name: 'scrollTarget', label: 'Scroll Target Anchor', type: 'string', defaultValue: '#welcome' },
      ],
      defaultProps: {
        address: '',
        crestUrl: '',
        neonUrl: '',
        tagline: '',
        established: '',
        scrollTarget: '#welcome',
      },
    },
    component: PalizziHero,
  },

  // ── Welcome ──
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
        {
          name: 'paragraphs', label: 'Paragraphs', type: 'list',
          listItemSchema: [
            { name: 'text', label: 'Paragraph Text', type: 'string' },
          ],
        },
        { name: 'bookImage', label: 'Book Cover Image', type: 'image', defaultValue: '' },
        { name: 'bookLabel', label: 'Book Badge Label', type: 'string', defaultValue: 'Now Available' },
        { name: 'bookTitle', label: 'Book Title', type: 'string', defaultValue: '' },
        { name: 'bookSubtitle', label: 'Book Subtitle', type: 'string', defaultValue: '' },
        { name: 'bookAuthors', label: 'Book Authors', type: 'string', defaultValue: '' },
      ],
      defaultProps: {
        overline: 'Benvenuti',
        title: 'Welcome to',
        titleAccent: 'Palizzi Social Club',
        paragraphs: [],
        bookImage: '',
        bookLabel: 'Now Available',
        bookTitle: '',
        bookSubtitle: '',
        bookAuthors: '',
      },
    },
    component: PalizziWelcome,
  },

  // ── History ──
  {
    manifest: {
      type: 'palizzi-history',
      label: 'Palizzi History',
      icon: 'history_edu',
      category: 'Palizzi',
      description: 'History section with background image and marquee divider',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Since 1918' },
        { name: 'title', label: 'Title', type: 'string', defaultValue: 'History of' },
        { name: 'titleAccent', label: 'Title Accent', type: 'string', defaultValue: 'Palizzi' },
        { name: 'backgroundImage', label: 'Background Image', type: 'image', defaultValue: '' },
        { name: 'marqueeImage', label: 'Marquee Divider Image', type: 'image', defaultValue: '' },
        {
          name: 'paragraphs', label: 'Paragraphs (HTML supported)', type: 'list',
          listItemSchema: [
            { name: 'text', label: 'Paragraph Text', type: 'richtext' },
          ],
        },
      ],
      defaultProps: {
        overline: 'Since 1918',
        title: 'History of',
        titleAccent: 'Palizzi',
        backgroundImage: '',
        marqueeImage: '',
        paragraphs: [],
      },
    },
    component: PalizziHistory,
  },

  // ── Menu ──
  {
    manifest: {
      type: 'palizzi-menu',
      label: 'Palizzi Menu',
      icon: 'restaurant_menu',
      category: 'Palizzi',
      description: 'Food & Cocktails menu with toggle between categories',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Our Offerings' },
        { name: 'title', label: 'Title', type: 'string', defaultValue: 'Food & Cocktails' },
        { name: 'subtitle', label: 'Subtitle', type: 'string', defaultValue: '' },
        { name: 'foodLabel', label: 'Food Tab Label', type: 'string', defaultValue: 'Food' },
        { name: 'cocktailsLabel', label: 'Cocktails Tab Label', type: 'string', defaultValue: 'Cocktails' },
        {
          name: 'foodSections', label: 'Food Sections', type: 'list',
          listItemSchema: [
            { name: 'title', label: 'Section Title', type: 'string' },
            {
              name: 'items', label: 'Menu Items', type: 'list',
              listItemSchema: [
                { name: 'name', label: 'Item Name', type: 'string' },
                { name: 'desc', label: 'Description', type: 'string' },
              ],
            },
          ],
        },
        {
          name: 'cocktails', label: 'Cocktails', type: 'list',
          listItemSchema: [
            { name: 'name', label: 'Cocktail Name', type: 'string' },
            { name: 'desc', label: 'Description', type: 'string' },
          ],
        },
      ],
      defaultProps: {
        overline: 'Our Offerings',
        title: 'Food & Cocktails',
        subtitle: '',
        foodLabel: 'Food',
        cocktailsLabel: 'Cocktails',
        foodSections: [],
        cocktails: [],
      },
    },
    component: PalizziMenu,
  },

  // ── House Rules ──
  {
    manifest: {
      type: 'palizzi-rules',
      label: 'Palizzi House Rules',
      icon: 'gavel',
      category: 'Palizzi',
      description: 'House rules section with hours box and numbered rules',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Please Observe' },
        { name: 'title', label: 'Title', type: 'string', defaultValue: 'House' },
        { name: 'titleAccent', label: 'Title Accent', type: 'string', defaultValue: 'Rules' },
        { name: 'hoursTitle', label: 'Hours Title', type: 'string', defaultValue: '' },
        { name: 'hoursSubtitle', label: 'Hours Subtitle', type: 'string', defaultValue: '' },
        {
          name: 'badges', label: 'Info Badges', type: 'list',
          listItemSchema: [
            { name: 'text', label: 'Badge Text', type: 'string' },
          ],
        },
        {
          name: 'rules', label: 'House Rules', type: 'list',
          listItemSchema: [
            { name: 'text', label: 'Rule Text', type: 'string' },
          ],
        },
        { name: 'disclaimer', label: 'Disclaimer', type: 'string', defaultValue: '' },
      ],
      defaultProps: {
        overline: 'Please Observe',
        title: 'House',
        titleAccent: 'Rules',
        hoursTitle: '',
        hoursSubtitle: '',
        badges: [],
        rules: [],
        disclaimer: '',
      },
    },
    component: PalizziRules,
  },

  // ── Membership ──
  {
    manifest: {
      type: 'palizzi-membership',
      label: 'Palizzi Membership',
      icon: 'card_membership',
      category: 'Palizzi',
      description: 'Membership information section',
      inputs: [
        { name: 'overline', label: 'Overline', type: 'string', defaultValue: 'Join Us' },
        { name: 'title', label: 'Title', type: 'string', defaultValue: 'Become a' },
        { name: 'titleAccent', label: 'Title Accent', type: 'string', defaultValue: 'Member' },
        {
          name: 'paragraphs', label: 'Paragraphs', type: 'list',
          listItemSchema: [
            { name: 'text', label: 'Paragraph Text', type: 'string' },
          ],
        },
        { name: 'highlight', label: 'Highlight Text', type: 'string', defaultValue: '' },
        { name: 'closingNote', label: 'Closing Note', type: 'string', defaultValue: '' },
        { name: 'signature', label: 'Signature', type: 'string', defaultValue: '' },
        { name: 'footnote', label: 'Footnote', type: 'string', defaultValue: '' },
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

  // ── Footer ──
  {
    manifest: {
      type: 'palizzi-footer',
      label: 'Palizzi Footer',
      icon: 'call_to_action',
      category: 'Palizzi',
      description: 'Footer with marquee, location, hours, and navigation links',
      inputs: [
        { name: 'marqueeImage', label: 'Marquee Image', type: 'image', defaultValue: '' },
        {
          name: 'columns', label: 'Footer Columns', type: 'list',
          listItemSchema: [
            { name: 'label', label: 'Column Label', type: 'string' },
            { name: 'content', label: 'Content (HTML)', type: 'richtext' },
            {
              name: 'links', label: 'Links', type: 'list',
              listItemSchema: [
                { name: 'label', label: 'Link Label', type: 'string' },
                { name: 'href', label: 'URL / Anchor', type: 'string' },
              ],
            },
          ],
        },
        { name: 'bottomText', label: 'Bottom Text', type: 'string', defaultValue: '' },
      ],
      defaultProps: {
        marqueeImage: '',
        columns: [],
        bottomText: '',
      },
    },
    component: PalizziFooter,
  },
];
