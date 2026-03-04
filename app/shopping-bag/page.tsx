'use client';
import Link from 'next/link';
import {ShoppingBagItem} from '@/types';
import {useEffect, useState} from 'react';
import {sneakers} from '@/constants/sneakers';
import { FaArrowLeftLong } from 'react-icons/fa6';
import {useDispatch, useSelector} from 'react-redux';
import {changeQuantity, deleteProduct, showDeleteNotification, hideDeleteNotification} from '@/store/shoppingBag';
import { CiSquareMinus } from 'react-icons/ci';

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
		<div className={`fixed top-20 right-6 flex items-center bg-white text-gray-800 border border-gray-200 rounded-md shadow-lg px-5 py-3.5 gap-2.5 z-1100 transition-all duration-300
			${deleteFromBagNotification
			? 'animate-[slideInRight_0.3s_ease-out]'
			: 'opacity-0 translate-x-full pointer-events-none'
			}`
		}>
			<div className='w-2 h-2 bg-red-500 rounded-full' />
			<span className='text-sm font-medium'>
				Odstraněno z košíku
			</span>
		</div>

		<div className='max-w-7xl mx-auto px-4'>
			<div className='flex items-center justify-between mb-5'>
				<Link
					href='/'
					className='inline-flex items-center text-sm font-medium uppercase group gap-2'
				>
					<FaArrowLeftLong className='transition-transform duration-200 group-hover:-translate-x-1 mb-0.5' />
					Zpět
				</Link>

				<h1 className='text-sm font-bold uppercase'>
					Nákupní košík
				</h1>
			</div>

			{!mounted ? (
				<div className='text-center py-12 md:py-20'>
					<p className='text-base md:text-lg text-gray-600'>
						Načítání...
					</p>
				</div>
			) : shoppingBag.length === 0 ? (
				<div className='text-center py-12 md:py-20'>
					<p className='text-base md:text-lg text-gray-600'>
						Váš košík je prázdný
					</p>
				</div>
			) : (
				<div className='space-y-4'>
					{shoppingBag.map((item: ShoppingBagItem, index: number) => {
						const sneaker = sneakers.find((oneSneaker) => oneSneaker.id === Number(item.productId));
						if (!sneaker) return null;

						return (
							<div
								key={index}
								className='h-27 border border-gray-200 rounded-lg p-4 flex gap-4'
							>
								{/* Image */}
								<div className='w-22 h-20 shrink-0'>
									<img
										src={sneaker.image}
										alt={sneaker.fullName}
										width={128}
										height={128}
										className='w-full h-full object-contain'
									/>
								</div>

								{/* Content */}
								<div className='grow flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
									{/* Product info */}
									<div className='grow'>
										<h3 className='font-semibold text-base md:text-lg mb-1'>
											{sneaker.fullName}
										</h3>
										<p className='text-lg md:text-xl font-bold text-gray-900'>
											{sneaker.price.toLocaleString('cs-CZ')} Kč
										</p>
									</div>

									{/* Quantity controls */}

									<div className='flex items-center gap-4'>
										<div className='flex items-center gap-2 border border-gray-300 rounded-lg'>
											<button
												onClick={() => dispatch(changeQuantity({ productId: item.productId, quantity: item.quantity - 1 }))}
												className='p-2 hover:bg-gray-100 transition-colors rounded-l-lg cursor-pointer'
												aria-label='Snížit množství'
											>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
											</button>
											<span className='px-4 font-semibold min-w-8 text-center'>
												{item.quantity}
											</span>
											<button
												onClick={() => dispatch(changeQuantity({ productId: item.productId, quantity: item.quantity + 1 }))}
												className='p-2 hover:bg-gray-100 transition-colors rounded-r-lg cursor-pointer'
												aria-label='Zvýšit množství'
											>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<line x1="5" y1="12" x2="19" y2="12"></line>
												</svg>
											</button>
										</div>

										{/* Delete button */}
										<button
											onClick={() => handleDelete(item.productId)}
											className='p-2 hover:bg-red-50 text-red-600 transition-colors rounded-lg cursor-pointer'
											aria-label='Odstranit produkt'
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<polyline points="3 6 5 6 21 6"></polyline>
												<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
												<line x1="10" y1="11" x2="10" y2="17"></line>
												<line x1="14" y1="11" x2="14" y2="17"></line>
											</svg>
										</button>
									</div>
								</div>
							</div>
						);
					})}

					{/* Total price */}
					<div className='border-t-2 border-gray-300 pt-3 mt-6'>
						<div className='flex justify-between items-center text-xl font-bold'>
							<span>Celková cena:</span>
							<span>{price.toLocaleString('cs-CZ')} Kč</span>
						</div>
					</div>
				</div>
			)}
		</div>
	</div>
};

export default ShoppingBag;
