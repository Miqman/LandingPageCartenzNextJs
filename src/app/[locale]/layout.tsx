import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import Head from 'next/head'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Roboto, Montserrat } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/Header'
import './globals.css'
import Footer from './components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto'
})
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Landing Page Cartenz',
  description: 'Landing Page by Cartenz'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className={`${roboto.variable} ${montserrat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <Head>
        <link rel='icon' href='/image/favicon.ico' />
      </Head>
      <body
        style={{
          backgroundImage: "url('/image/terxtureBg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={['light', 'dark']}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
