'use client';

import { useEffect, useState } from 'react';
import { SiteNavigation } from '@/components/SiteNavigation';
import { isValidOrigin, isVisualEditorMessage } from '@/lib/visual-editor/protocol';

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

const NAV_MESSAGES = {
  NAV_INIT: 'NAV_INIT',
  NAV_UPDATE: 'NAV_UPDATE',
  BRANDING_UPDATE: 'BRANDING_UPDATE',
  NAV_PREVIEW_READY: 'NAV_PREVIEW_READY',
};

export default function NavPreviewPage() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [branding, setBranding] = useState<Branding | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (!isValidOrigin(event.origin)) return;
      if (!isVisualEditorMessage(event.data)) return;
      if (event.data.source !== 'sd-editor-parent') return;

      switch (event.data.type) {
        case NAV_MESSAGES.NAV_INIT:
        case NAV_MESSAGES.NAV_UPDATE: {
          const payload = event.data.payload as { items: NavItem[]; branding: Branding };
          setItems(payload.items);
          setBranding(payload.branding);
          break;
        }
        case NAV_MESSAGES.BRANDING_UPDATE: {
          const payload = event.data.payload as Branding;
          setBranding(payload);
          break;
        }
      }
    }

    window.addEventListener('message', handleMessage);

    // Signal ready to parent
    if (window.parent !== window) {
      window.parent.postMessage(
        { source: 'sd-editor-iframe', type: NAV_MESSAGES.NAV_PREVIEW_READY, payload: {}, timestamp: Date.now() },
        '*',
      );
    }
    setReady(true);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!ready || !branding) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="text-sm" style={{ color: 'rgba(245,230,211,0.5)' }}>Waiting for navigation data...</div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: branding.backgroundColor || '#0d0d0d', color: branding.textColor || '#f5e6d3', minHeight: '100vh' }}>
      <SiteNavigation items={items} branding={branding} />

      {/* Page body placeholder */}
      <div className="pt-24 px-8">
        <div className="max-w-4xl mx-auto text-center py-16 space-y-6">
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: branding.textColor || '#f5e6d3' }}
          >
            Navigation Preview
          </h1>
          <p className="text-lg opacity-50 max-w-xl mx-auto">
            Changes to your navigation and branding are reflected here in real time.
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <div className="px-6 py-2.5 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: branding.primaryColor }}>
              Primary Action
            </div>
            <div
              className="px-6 py-2.5 rounded-lg text-sm font-medium border-2"
              style={{ borderColor: branding.primaryColor, color: branding.primaryColor }}
            >
              Secondary
            </div>
          </div>
        </div>

        {/* Content placeholder cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 pb-16">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-lg border p-5 space-y-3" style={{ borderColor: 'rgba(201,169,110,0.15)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(201,169,110,0.1)' }}>
                <span className="material-icons text-lg" style={{ color: branding.accentColor || '#c9a96e' }}>star</span>
              </div>
              <div className="h-3 rounded w-2/3" style={{ backgroundColor: 'rgba(245,230,211,0.1)' }} />
              <div className="h-2 rounded w-full" style={{ backgroundColor: 'rgba(245,230,211,0.05)' }} />
              <div className="h-2 rounded w-4/5" style={{ backgroundColor: 'rgba(245,230,211,0.05)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
