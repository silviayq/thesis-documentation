import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pet-player-thesis.epic-acorn-4026.chatgpt.site'),
  title: 'Thesis Documentation — PET PLAYER',
  description:
    'Weekly documentation for PET PLAYER, a cooperative game designed for a human and a dog.',
  openGraph: {
    title: 'Thesis Documentation — PET PLAYER',
    description: 'Weekly paper prototype documentation for PET PLAYER.',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thesis Documentation — PET PLAYER',
    description: 'Weekly paper prototype documentation for PET PLAYER.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
