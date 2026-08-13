import type { Metadata, Viewport } from 'next';
import { SITE_URL } from '@/lib/links';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Snapt — Book a vetted photographer or videographer in Saint Lucia',
  description:
    'Snapt connects you with vetted local photographers and videographers in northern Saint Lucia. Sessions from $60. Remote edits from $25. Standard pricing, no haggling.',
  icons: { icon: '/assets/snapt-icon.png' },
  // This link spreads on WhatsApp in Saint Lucia, so the share preview matters.
  openGraph: {
    title: "Snapt — Be in the moment. We've got the rest.",
    description:
      'Book a vetted local photographer or videographer, or send us your footage for professional editing. Sessions from $60 · Edits from $25 · Northern Saint Lucia.',
    type: 'website',
    url: SITE_URL,
    images: ['/assets/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Snapt — Be in the moment. We've got the rest.",
    description:
      'Vetted photographers and videographers in northern Saint Lucia. Sessions from $60, edits from $25.',
    images: ['/assets/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* TODO(launch): paste the GA4 gtag.js snippet here (Measurement ID G-XXXXXXXXXX). */}
      <body>{children}</body>
    </html>
  );
}
