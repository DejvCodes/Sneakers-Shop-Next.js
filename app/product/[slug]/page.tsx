'use client';
import Link from 'next/link';
import {Sneaker} from '@/types';
import {useState, useEffect} from 'react';
import {sneakers} from '@/constants/sneakers';
import {FaArrowLeftLong} from 'react-icons/fa6';
import formatPrice from '@/components/FormatPrice';
import {CiSquareMinus, CiSquarePlus} from 'react-icons/ci';

const ProductDetails = ({ params }: { params: { slug: string } }) => {
	const [slug, setSlug] = useState<string>('');
	const [productDetails, setProductDetails] = useState<Sneaker|null>(null);

	const quantity = 1; // Placeholder for quantity state

	useEffect(() => {
		// get slug from params
		const getParams = async () => {
			const resolvedParams = await params;
			setSlug(resolvedParams.slug);
		}
		getParams();
	}, [params]);

	useEffect(() => {
		if (!slug) return;
		// find product by slug
		const findProductDetails: Sneaker|undefined = sneakers.find((oneProduct) => {
			return oneProduct.slug === slug
		})
		if (findProductDetails) {
			setProductDetails(findProductDetails);
		}
	}, [slug]);

	// loading state
	if (!productDetails) {
		return <div className='min-h-screen flex items-center justify-center'>
			<div className='text-xl font-medium animate-pulse'>
				Načítání...
			</div>
		</div>
	}

	// destructuring
	const {id, name, brand, type, price, image, images, season, info, productCode} = productDetails;

	return <section
		id={`product-${id}-${name}`}
		className='w-full min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white py-14'
	>
		<div className='relative w-full max-w-7xl h-full pt-4 px-4'>
			{/* Back Link */}
			<Link
				href='/'
				className='inline-flex items-center text-sm font-medium uppercase group gap-2 mb-4'
			>
				<FaArrowLeftLong className='transition-transform duration-200 group-hover:-translate-x-1 mb-0.5' />
				Zpět na produkty
			</Link>

			{/* Images and Info */}
			<div className='w-full grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 rounded-xl shadow-xl lg:gap-16 p-6 lg:p-10'>
				<div className='w-full space-y-4'>
					<div className='relative w-full aspect-3/2 bg-gray-100 rounded-lg overflow-hidden shadow-md'>
						<img
							src={image}
							alt={slug}
							className='w-full object-cover hover:scale-102 transition-transform duration-300 shadow-md'
						/>
					</div>
					<div className='grid grid-cols-3 gap-4'>
						{images.map((oneImage, index) => (
							<div
								key={index}
								className='relative w-full aspect-3/2 bg-gray-100 rounded-lg overflow-hidden shadow-md'
							>
								<img
									src={oneImage}
									alt={`${slug}-image-${index + 1}`}
									className='w-full object-cover hover:scale-105 transition-transform duration-300'
								/>
							</div>
						))}
					</div>
				</div>

				{/* Info */}
				<div className='flex flex-col justify-center'>
					<div className='uppercase space-y-3 mb-4'>
						<p className='text-sm font-semibold tracking-wider text-gray-600 mt-6 sm:mt-0'>
							{brand}
						</p>
						<h1 className='text-3xl md:text-4xl font-bold tracking-wide text-gray-900'>
							{name}
						</h1>
						<p className='text-base text-gray-500'>
							{type}
						</p>
					</div>
					<div className='text-3xl font-bold text-gray-900 mb-6'>
						{formatPrice(price)}
					</div>
					<p className='text-sm leading-relaxed text-gray-700 normal-case mb-6'>
						{info}
					</p>
					<div className='text-sm text-gray-600 space-y-2 sm:space-y-4 mb-4 sm:mb-8'>
						<div className='flex items-center gap-2'>
							<span className='font-semibold uppercase'>Sezóna:</span>
							<span className='capitalize'>{season?.length ? season.join(', ') : 'Neznámá informace'}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-semibold uppercase'>Kód produktu:</span>
							<span>{productCode}</span>
						</div>
					</div>

					{/* Add to Bag */}
					<div className='sm:mt-8'>
						<div className='flex items-stretch sm:items-center rounded-lg gap-2 sm:gap-4'>
							<div className='flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden'>
								<button
									type='button'
									className='hover:bg-gray-200 transition-colors px-2 py-3 cursor-pointer'
									// onClick
								>
									<CiSquareMinus className='text-xl sm:text-2xl' />
								</button>
								<span className='min-w-7 sm:min-w-10 text-center bg-white text-lg font-semibold'>
									{quantity}
								</span>
								<button
									type='button'
									className='hover:bg-gray-200 transition-colors px-2 py-3 cursor-pointer'
									// onClick
								>
									<CiSquarePlus className='text-xl sm:text-2xl' />
								</button>
							</div>
							<button
								type='button'
								className='flex items-center justify-center bg-black text-white text-center text-xs sm:text-sm font-semibold uppercase rounded-lg hover:scale-102 transition-all duration-200 shadow-lg py-4 px-6 sm:px-8 cursor-pointer'
							>
								Přidat do košíku
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
};

export default ProductDetails;
