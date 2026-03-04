import Link from 'next/link';
import {HOME_CONTENT, ICONS} from '@/constants/content';

const HomePage = () => {
	return <main
		className='w-full bg-linear-to-br from-white/95 to-white/75 relative isolate overflow-hidden'
	>
		<div className='pointer-events-none absolute inset-0 -z-10'>
			<div className='bg-[linear-gradient(125deg,rgba(255,255,255,0.9)_0%,rgba(245,248,248,0.95)_45%,rgba(232,241,241,0.9)_100%),radial-gradient(circle_at_12%_12%,rgba(25,223,217,0.22),transparent_40%),radial-gradient(circle_at_88%_18%,rgba(0,0,0,0.1),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(25,223,217,0.16),transparent_45%)] absolute inset-0' />
			<div className='h-72 w-72 bg-turquoise/30 absolute -left-24 top-24 rounded-full blur-3xl' />
			<div className='h-80 w-80 bg-black/10 absolute -right-24 -top-10 rounded-full blur-3xl' />
			<div className='h-80 w-80 bg-turquoise/20 absolute -bottom-37.5 left-1/2 -translate-x-1/2 rounded-full blur-3xl' />
			<div
				className='absolute inset-0 opacity-20'
				style={{
					backgroundImage: 'repeating-linear-gradient(115deg, rgba(0,0,0,0.055) 0 1px, transparent 1px 30px), repeating-linear-gradient(25deg, rgba(255,255,255,0.85) 0 2px, transparent 2px 36px)',
					backgroundSize: '100% 100%, 100% 100%',
				}}
			/>
		</div>
		<section className='max-w-7xl mx-auto mt-16 px-4 py-5'>
			<div className='grid lg:grid-cols-[1.25fr_0.75fr] gap-4'>
				<div className='bg-linear-to-br border border-black/15 p-6 sm:p-10 relative overflow-hidden rounded-2xl from-white/95 to-white/75 shadow-[0_20px_45px_rgba(0,0,0,0.08)] backdrop-blur-sm'>
					<div className='h-44 w-44 bg-turquoise/20 pointer-events-none absolute -right-10 -top-10 rounded-full blur-2xl' />
					<div className='h-40 w-40 bg-black/5 pointer-events-none absolute -left-10 -bottom-10 rounded-full blur-2xl' />
					<div className='inline-flex items-center bg-white/90 text-gray-600 text-xs font-semibold uppercase tracking-[1.5px] border border-black/10 mb-3 px-3 py-1 gap-2 rounded-full'>
						<ICONS.fire className='text-turquoise text-base' />
						{HOME_CONTENT.heroBadge}
					</div>
					<h1 className='max-w-3xl text-3xl font-semibold uppercase leading-tight sm:text-5xl'>
						{HOME_CONTENT.heroTitle}
					</h1>
					<p className='max-w-2xl text-gray-600 text-sm leading-6 sm:text-base mt-5'>
						{HOME_CONTENT.heroDescription}
					</p>
					<div className='flex flex-wrap mt-6 gap-3'>
						<Link
							href='/products'
							className='w-full sm:w-56 bg-black text-white hover:bg-zinc-800 text-center text-sm font-medium uppercase tracking-wide px-6 py-3 rounded-md transition'
						>
							{HOME_CONTENT.heroProductsButton}
						</Link>
						<Link
							href='/membership'
							className='w-full sm:w-56 text-black hover:bg-black hover:text-white text-center text-sm font-medium uppercase tracking-wide border border-black px-6 py-3 rounded-md transition'
						>
							{HOME_CONTENT.heroMembershipButton}
						</Link>
					</div>
					<div className='max-w-3xl grid grid-cols-1 sm:grid-cols-3 mt-6 gap-2.5'>
						{HOME_CONTENT.stats.map((stat) => (
							<div
								key={stat.label}
								className='bg-white/80 border border-black/10 px-3 py-2.5 rounded-lg'
							>
								<p className='text-xl font-semibold'>{stat.value}</p>
								<p className='text-gray-500 text-xs uppercase tracking-wide'>{stat.label}</p>
							</div>
						))}
					</div>
				</div>

				<div className='bg-linear-to-br text-white border border-white/10 p-6 sm:p-8 rounded-2xl from-black to-zinc-900 shadow-[0_20px_45px_rgba(0,0,0,0.22)]'>
					<div className='inline-flex items-center bg-white/10 text-white/90 text-xs uppercase tracking-[1.5px] mb-4 px-3 py-1 gap-2 rounded-full'>
						<ICONS.star className='text-turquoise text-sm' />
						{HOME_CONTENT.dropBadge}
					</div>
					<h2 className='text-2xl font-semibold uppercase leading-tight'>
						{HOME_CONTENT.dropTitle}
					</h2>
					<p className='text-white/75 text-sm leading-6 mt-4'>
						{HOME_CONTENT.dropDescription}
					</p>
					<div className='bg-white/5 border border-white/15 mt-6 p-4 rounded-xl'>
						<p className='text-white/60 text-xs uppercase tracking-[1.5px]'>{HOME_CONTENT.mostWantedLabel}</p>
						<p className='text-lg font-semibold mt-1'>{HOME_CONTENT.mostWantedBrands}</p>
					</div>
					<Link
						href='/products'
						className='w-full inline-flex items-center justify-center bg-turquoise text-black text-sm font-semibold uppercase tracking-wide mt-6 px-4 py-3 rounded-md transition hover:brightness-95'
					>
						{HOME_CONTENT.topModelsButton}
					</Link>
				</div>
			</div>
		</section>

		<section className='max-w-7xl mx-auto mb-5 px-4'>
			<div className='bg-white/90 border border-black/10 p-6 sm:p-8 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.07)] backdrop-blur-sm'>
				<p className='text-gray-500 text-xs font-semibold uppercase tracking-[1.5px]'>
					{HOME_CONTENT.whyUsTitle}
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4'>
					{HOME_CONTENT.featureCards.map((card) => {
						const Icon = card.icon;
						return (
							<div
								key={card.title}
								className='bg-white border border-black/10 p-5 rounded-xl transition hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]'
							>
								<div className='inline-flex bg-turquoise/70 mb-3 p-2 rounded-full'>
									<Icon className='text-xl' />
								</div>
								<h3 className='text-sm font-semibold uppercase mb-2'>{card.title}</h3>
								<p className='text-gray-600 text-sm leading-6'>{card.text}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>

		<section className='max-w-7xl mx-auto mb-14 px-4'>
			<div className='bg-linear-to-r border border-black/10 p-6 sm:p-8 relative overflow-hidden rounded-2xl from-black to-zinc-900 shadow-[0_20px_40px_rgba(0,0,0,0.25)]'>
				<div className='h-40 w-40 bg-turquoise/25 pointer-events-none absolute -right-10 -top-12 rounded-full blur-3xl' />
				<div className='flex flex-col items-start justify-between sm:flex-row sm:items-center gap-4'>
					<div>
						<p className='text-white/60 text-xs font-semibold uppercase tracking-[1.5px]'>{HOME_CONTENT.membershipLabel}</p>
						<h2 className='text-white text-2xl font-semibold uppercase mt-1'>{HOME_CONTENT.membershipTitle}</h2>
					</div>
					<Link
						href='/membership'
						className='text-white hover:bg-white hover:text-black text-sm font-medium uppercase tracking-wide border border-white px-5 py-3 rounded-md transition'
					>
						{HOME_CONTENT.membershipButton}
					</Link>
				</div>
			</div>
		</section>
	</main>
};

export default HomePage;
