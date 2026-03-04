'use client';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import BagItem from '@/components/BagItem';
import {ShoppingBagItem} from '@/types/type';
import {sneakers} from '@/constants/sneakers';
import {useDispatch, useSelector} from 'react-redux';
import {ICONS, SHOPPING_BAG_CONTENT} from '@/constants/content';
import {changeQuantity, deleteProduct, showDeleteNotification, hideDeleteNotification} from '@/store/shoppingBag';

const ShoppingBag = () => {
	const dispatch = useDispatch();
	const [price, setPrice] = useState<number>(0);
	const [mounted, setMounted] = useState(false);
	const shoppingBag = useSelector((store: any) => store.shoppingBag.items);
	const deleteFromBagNotification = useSelector((store: any) => store.shoppingBag.deleteFromBagNotification);

	const handleDelete = (productId: string) => {
		dispatch(deleteProduct({ productId }));
		dispatch(showDeleteNotification());
		setTimeout(() => {
			dispatch(hideDeleteNotification());
		}, 3000);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const totalPrice = shoppingBag.reduce((acc: number, item: ShoppingBagItem) => {
			const sneaker = sneakers.find((oneSneaker) => {
				return oneSneaker.id === Number(item.productId);
			});
			if (sneaker) {
				return acc + sneaker.price * item.quantity;
			}
			return acc;
		}, 0);
		setPrice(totalPrice);
	}, [shoppingBag]);

	return <div className='min-h-screen pt-20 lg:px-20 pb-10'>
		{/* Delete Notification */}
		<div className={`flex items-center bg-white text-gray-800 border border-gray-200 px-5 py-3.5 gap-2.5 fixed top-20 right-6 rounded-md shadow-lg transition-all duration-300 z-1100
			${deleteFromBagNotification
				? 'animate-[slideInRight_0.3s_ease-out]'
				: 'opacity-0 translate-x-full pointer-events-none'
			}`
		}>
			<div className='w-1.5 h-1.5 bg-red-500 rounded-full' />
			<span className='text-sm font-medium'>
				{SHOPPING_BAG_CONTENT.deleteFromBagNotification}
			</span>
		</div>

		<div className='max-w-7xl mx-auto px-4'>
			<div className='flex items-center justify-between mb-5'>
				<Link
					href='/'
					className='inline-flex items-center text-base font-medium uppercase gap-2 group'
				>
					<ICONS.back className='mb-0.5 transition-transform duration-200 group-hover:-translate-x-1' />
					{SHOPPING_BAG_CONTENT.back}
				</Link>

				<h1 className='text-base font-bold uppercase'>
					{SHOPPING_BAG_CONTENT.title}
				</h1>
			</div>

			{!mounted ? (
				<div className='text-center py-12 md:py-20'>
					<p className='text-gray-600 text-base md:text-lg'>
						{SHOPPING_BAG_CONTENT.loading}
					</p>
				</div>
			) : shoppingBag.length === 0 ? (
				<div className='text-center py-12 md:py-20'>
					<p className='text-gray-600 text-base md:text-lg'>
						{SHOPPING_BAG_CONTENT.empty}
					</p>
				</div>
			) : (
				<div className='space-y-4'>
					{shoppingBag.map((item: ShoppingBagItem) => {
						const sneaker = sneakers.find((oneSneaker) => oneSneaker.id === Number(item.productId));
						if (!sneaker) return null;

						return (
							<BagItem
								key={item.productId}
								item={item}
								sneaker={sneaker}
								onDecrease={() => dispatch(changeQuantity({ productId: item.productId, quantity: item.quantity - 1 }))}
								onIncrease={() => dispatch(changeQuantity({ productId: item.productId, quantity: item.quantity + 1 }))}
								onDelete={() => handleDelete(item.productId)}
							/>
						);
					})}

					{/* Total price */}
					<div className='border-t-2 border-gray-500 pt-3 mt-6'>
						<div className='flex items-center justify-end text-lg font-medium uppercase'>
							<span>{SHOPPING_BAG_CONTENT.totalPrice} {price.toLocaleString('cs-CZ')} {SHOPPING_BAG_CONTENT.currencySuffix}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	</div>
};

export default ShoppingBag;
