import {LOADING_CONTENT} from '@/constants/content';

const Loading = () => {
	return <main
		className='w-full min-h-screen flex items-center justify-center bg-white px-4'
	>
		<div className='flex flex-col items-center gap-3'>
			<span className='w-10 h-10 border-2 border-black/20 border-t-black rounded-full animate-spin' />
			<p className='text-gray-500 text-xs font-semibold uppercase tracking-[1.5px]'>
				{LOADING_CONTENT.label}
			</p>
		</div>
	</main>;
};

export default Loading;
