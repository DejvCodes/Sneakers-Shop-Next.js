import './globals.css';
import type {Metadata} from 'next';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {Public_Sans} from 'next/font/google';
import {RootLayoutProps} from '@/types/type';
import {APP_META_CONTENT} from '@/constants/content';

const publicSans = Public_Sans({
	subsets: ['latin'],
	variable: '--font-public-sans',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: APP_META_CONTENT.title,
	description: APP_META_CONTENT.description,
	icons: '/favicon.png',
};

const RootLayout = ({children}: RootLayoutProps) => {
	return <html
		lang={APP_META_CONTENT.lang}
		data-scroll-behavior='smooth'
	>
		<body className={`${publicSans.className} bg-black antialiased`}>
			<Providers>
				<Header />
				{children}
				<Footer />
			</Providers>
		</body>
	</html>
};

export default RootLayout;
