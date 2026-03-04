import OneBenefit from '@/components/OneBenefit';
import {MEMBER_CONTENT} from '@/constants/content';

const Membership = () => {
	return <>
		<section className='w-full flex items-center justify-center mt-24 px-4'>
			<div className='w-full max-w-7xl text-center'>
				<h2 className='text-xl sm:text-2xl font-medium uppercase max-[670px]:text-xl mb-10 max-[670px]:mb-4'>
					{MEMBER_CONTENT.page.clubTitle}
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-12.5 gap-y-10 max-[670px]:gap-y-7.5'>
					{MEMBER_CONTENT.benefitsClub.map((item) => {
						return <OneBenefit key={item.title} {...item} />
					})}
				</div>
			</div>
		</section>

		<section className='w-full flex items-center justify-center bg-black mt-27.5 px-4 max-[670px]:mt-17.5'>
			<div className='w-full max-w-7xl text-center my-20'>
				<h2 className='text-white text-xl sm:text-2xl font-medium uppercase max-[670px]:text-xl mb-2.5'>
					{MEMBER_CONTENT.page.vipTitle}
				</h2>
				<h3 className='text-gray-500 text-sm font-medium mb-7.5'>
					{MEMBER_CONTENT.page.vipSubtitle}
				</h3>
				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-12.5 gap-y-10 max-[670px]:gap-y-7.5'>
					{MEMBER_CONTENT.benefitsVip.map((item) => {
						return <OneBenefit key={item.title} {...item} isVip />
					})}
				</div>
				<button
					type='button'
					className='text-white hover:bg-white hover:text-black text-sm font-medium tracking-[1px] uppercase border border-white mt-10 px-10 py-2.5 rounded-md transition-all duration-200 cursor-pointer'
				>
					{MEMBER_CONTENT.page.registerButton}
				</button>
			</div>
		</section>
	</>
};

export default Membership;
