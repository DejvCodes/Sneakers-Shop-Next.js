import './globals.css';
import type {Metadata} from 'next';
import Providers from './providers';
import Header from '@/components/Header';
import {Public_Sans} from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Sneakers Store',
  description: 'Your one-stop shop for the latest and greatest sneakers.',
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return <html lang='cz'>
    <head>
      <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
    </head>
    <body className={`${publicSans.className} antialiased bg-black`}>
      <Providers>
        <Header />
        {children}
      </Providers>
    </body>
  </html>
}

export default RootLayout