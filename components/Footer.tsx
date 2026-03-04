import Link from 'next/link';
import {FOOTER_CONTENT} from '@/constants/content';

const Footer = () => {
	return <footer
		className='w-full bg-white border-t border-black/10'
	>
		<div className='max-w-7xl flex flex-col items-center justify-between text-gray-500 text-xs uppercase tracking-[1px] mx-auto px-4 py-4 gap-2 sm:flex-row'>
			<p>© {new Date().getFullYear()} {FOOTER_CONTENT.copyrightLabel}</p>
			<div className='flex items-center gap-4'>
				<Link
					href='/products'
					className='hover:text-black transition'
				>
						{FOOTER_CONTENT.productsLink}
				</Link>
				<Link
					href='/membership'
					className='hover:text-black transition'>
						{FOOTER_CONTENT.membershipLink}
				</Link>
			</div>
		</div>
	</footer>;
};

export default Footer;
