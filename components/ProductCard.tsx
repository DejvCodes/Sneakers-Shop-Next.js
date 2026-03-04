'use client';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import type {ProductCard} from '@/types/type';
import {ICONS, PRODUCT_CARD_CONTENT} from '@/constants/content';
import {addToShoppingBag, hideNotification, showNotification} from '@/store/shoppingBag';

const ProductCard = ({id, fullName, price, image, slug}: ProductCard) => {
	const dispatch = useDispatch();

	// add function + notif
	const handleAddToBag = () => {
		// dispatching action to add item to shopping bag
		dispatch(
			addToShoppingBag({
				productId: id,
				quantity: 1,
			}),
		);
		// notification
		dispatch(showNotification());
		setTimeout(() => {
			dispatch(hideNotification());
		}, 2000);
	};

	return <div
		className='w-full h-fit uppercase border border-black/10 hover:border-black/15 p-3 md:p-6 rounded-xl transition-all duration-200 ease-linear hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]'
	>
		<Link href={`/product/${slug}`}>
			<img
				src={image}
				alt={fullName}
				className='w-full h-50 max-[1250px]:h-45 max-[520px]:h-[65%] object-cover rounded-lg cursor-pointer'
			/>
		</Link>
		<h2 className='h-6 md:h-8 text-black leading-3 md:leading-none text-[11px] md:text-sm font-semibold tracking-none md:tracking-wide mb-3 md:mb-5'>
			{fullName}
		</h2>
		<div className='flex flex-row items-center justify-between'>
			<p className='text-sm'>{price.toLocaleString('cs-CZ')} {PRODUCT_CARD_CONTENT.currencySuffix}</p>
			<button
				onClick={handleAddToBag}
				className='hover:text-turquoise text-xl transition-all duration-200 ease-linear hover:-translate-y-1 cursor-pointer'
			>
				<ICONS.bag className='hover:text-turquoise text-[20px] max-[520px]:text-[17px] transition-all duration-200 ease-linear cursor-pointer hover:-translate-y-0.5'
				/>
			</button>
		</div>
	</div>
};

export default ProductCard;
