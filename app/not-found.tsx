import Link from 'next/link';
import {NOT_FOUND_CONTENT} from '@/constants/content';

const NotFound = () => {
	return <main
		className='w-full min-h-screen flex items-center justify-center bg-linear-to-br from-white/95 to-white/75 px-4'
	>
		<section className='w-full max-w-xl bg-white/90 border border-black/10 text-center p-8 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.07)]'>
			<p className='text-gray-500 text-xs font-semibold uppercase tracking-[1.5px]'>
				{NOT_FOUND_CONTENT.code}
			</p>
			<h1 className='text-3xl font-semibold uppercase mt-3'>
				{NOT_FOUND_CONTENT.title}
			</h1>
			<p className='text-gray-600 text-sm mt-4'>
				{NOT_FOUND_CONTENT.description}
			</p>

			<div className='flex flex-col sm:flex-row justify-center mt-6 gap-3'>
				<Link
					href='/'
					className='bg-black text-white hover:bg-zinc-800 text-sm font-medium uppercase tracking-wide px-5 py-3 rounded-md transition'
				>
					{NOT_FOUND_CONTENT.backHome}
				</Link>

				<Link
					href='/products'
					className='text-black hover:bg-black hover:text-white text-sm font-medium uppercase tracking-wide border border-black px-5 py-3 rounded-md transition'
				>
					{NOT_FOUND_CONTENT.toProducts}
				</Link>
			</div>
		</section>
	</main>;
};

export default NotFound;
