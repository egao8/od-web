import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const siteUrl = 'https://egalpha.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EGAlpha — Quantitative Trading Research & Execution',
    template: '%s',
  },
  description: 'Independent quantitative trading research and execution. Systematic intraday strategies focused on US megacap equities.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'EGAlpha',
    title: 'EGAlpha — Quantitative Trading Research & Execution',
    description: 'Independent quantitative trading research and execution. Systematic intraday strategies focused on US megacap equities.',
  },
  twitter: {
    card: 'summary',
    title: 'EGAlpha — Quantitative Trading Research & Execution',
    description: 'Independent quantitative trading research and execution. Systematic intraday strategies focused on US megacap equities.',
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:text-sm focus:border focus:border-border">
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
