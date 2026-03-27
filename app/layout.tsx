import type { Metadata } from 'next';
import { EditorModeProvider } from '@/components/visual-editor/EditorModeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Palizzi Social Club | Est. 1918 | South Philadelphia',
    template: '%s | Palizzi Social Club',
  },
  description:
    'Since opening our doors in 1918, we have been a place for members to relax over a cocktail and delicious Italian food among friends, nestled in a typical South Philly rowhome.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased min-h-screen"
        style={{
          backgroundColor: '#0d0d0d',
          color: '#f5e6d3',
          fontFamily: '"Inter", system-ui, sans-serif',
        }}
      >
        <EditorModeProvider>
          <main>{children}</main>
        </EditorModeProvider>
      </body>
    </html>
  );
}
