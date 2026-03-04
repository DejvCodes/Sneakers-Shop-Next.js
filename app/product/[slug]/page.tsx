'use client';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {sneakers} from '@/constants/sneakers';
import {ProductPageProps, Sneaker} from '@/types/type';
import {ICONS, PRODUCT_DETAILS_CONTENT} from '@/constants/content';
import {addToShoppingBag, hideNotification, showNotification} from '@/store/shoppingBag';

const ProductDetails = ({ params }: ProductPageProps) => {
	const dispatch = useDispatch();
	const [slug, setSlug] = useState<string>('');
	const [quantity, setQuantity] = useState<number>(1);
	const [productDetails, setProductDetails] = useState<Sneaker | null>(null);

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
		const findProductDetails: Sneaker | undefined = sneakers.find((oneProduct) => {
			return oneProduct.slug === slug;
		})
		if (findProductDetails) {
			setProductDetails(findProductDetails);
		}
	}, [slug]);

	// loading state
	if (!productDetails) {
		return <div className='min-h-screen flex items-center justify-center'>
			<div className='text-xl font-medium animate-pulse'>
				{PRODUCT_DETAILS_CONTENT.loading}
			</div>
		</div>
	}

	// destructuring
	const { id, name, brand, type, price, image, images, season, info, productCode } = productDetails;

	// handle minus quantity
	const handleMinusQuantity = () => {
		setQuantity(quantity - 1 ? quantity - 1 : 1);
	};

	// handle plus quantity
	const handlePlusQuantity = () => {
		setQuantity(quantity + 1);
	};

	const handleAddToBag = () => {
		// dispatch add to shopping bag action
		dispatch(addToShoppingBag({
			productId: id,
			quantity: quantity
		}));
		// reset quantity to 1
		setQuantity(1);
		// dispatch show notification action
		dispatch(showNotification());
		// hide notification
		setTimeout(() => {
			dispatch(hideNotification());
		}, 2000);
	};

	return <section
		id={`product-${id}-${name}`}
		className='w-full min-h-screen flex items-center justify-center bg-linear-to-br py-14 from-gray-50 to-white'
	>
		<div className='w-full max-w-7xl h-full pt-4 px-4 relative'>
			{/* Back Link */}
			<Link
				href='/'
				className='inline-flex items-center text-sm font-medium uppercase mb-4 gap-2 group'
			>
				<ICONS.back className='mb-0.5 transition-transform duration-200 group-hover:-translate-x-1' />
				{PRODUCT_DETAILS_CONTENT.backToProducts}
			</Link>

			{/* Images and Info */}
			<div className='w-full grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 p-6 lg:p-10 lg:gap-16 rounded-xl shadow-xl'>
				<div className='w-full space-y-4'>
					<div className='w-full aspect-3/2 bg-gray-100 relative rounded-lg overflow-hidden shadow-md'>
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
								className='w-full aspect-3/2 bg-gray-100 relative rounded-lg overflow-hidden shadow-md'
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
						<p className='text-gray-600 text-base font-semibold tracking-wider mt-6 sm:mt-0'>
							{brand}
						</p>
						<h1 className='text-gray-900 text-3xl md:text-4xl font-bold tracking-wide'>
							{name}
						</h1>
						<p className='text-gray-500 text-base'>
							{type}
						</p>
					</div>
					<div className='text-gray-900 text-3xl font-bold mb-6'>
						{price.toLocaleString('cs-CZ')} {PRODUCT_DETAILS_CONTENT.currencySuffix}
					</div>
					<p className='text-gray-700 text-sm leading-relaxed normal-case mb-6'>
						{info}
					</p>
					<div className='text-gray-600 text-sm space-y-2 sm:space-y-4 mb-4 sm:mb-8'>
						<div className='flex items-center gap-2'>
							<span className='font-semibold uppercase'>{PRODUCT_DETAILS_CONTENT.seasonLabel}</span>
							<span className='capitalize'>{season?.length ? season.join(', ') : PRODUCT_DETAILS_CONTENT.seasonUnknown}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-semibold uppercase'>{PRODUCT_DETAILS_CONTENT.productCodeLabel}</span>
							<span>{productCode}</span>
						</div>
					</div>

					{/* Add to Bag */}
					<div className='sm:mt-8'>
						<div className='flex items-stretch sm:items-center gap-2 sm:gap-4 rounded-lg'>
							<div className='flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden'>
								<button
									type='button'
									className='hover:bg-gray-200 px-2 py-3 transition-colors cursor-pointer'
									onClick={handleMinusQuantity}
								>
									<ICONS.minus className='text-xl sm:text-2xl' />
								</button>
								<span className='min-w-7 sm:min-w-10 bg-white text-center text-lg font-semibold'>
									{quantity}
								</span>
								<button
									type='button'
									className='hover:bg-gray-200 px-2 py-3 transition-colors cursor-pointer'
									onClick={handlePlusQuantity}
								>
									<ICONS.plus className='text-xl sm:text-2xl' />
								</button>
							</div>
							<button
								type='button'
								className='flex items-center justify-center bg-black text-white text-center text-xs sm:text-sm font-semibold uppercase py-4 px-6 sm:px-8 rounded-lg hover:scale-102 transition-all duration-200 shadow-lg cursor-pointer'
								onClick={handleAddToBag}
							>
								{PRODUCT_DETAILS_CONTENT.addToBag}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
};

export default ProductDetails;
