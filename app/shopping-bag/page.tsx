'use client';
import {useSelector} from 'react-redux';
import {ShoppingBagItem} from '@/types';

const ShoppingBag = () => {
	const shoppingBag = useSelector((store: any) => store.shoppingBag.items);

	return <div className='min-h-screen pt-20 lg:px-20 pb-10'>
		<div className='max-w-7xl mx-auto px-4'>
			<h1 className='text-2xl md:text-3xl font-bold uppercase mb-6 md:mb-8'>
				Nákupní košík
			</h1>

			{shoppingBag.length === 0 ? (
				<div className='text-center py-12 md:py-20'>
					<p className='text-base md:text-lg text-gray-600'>
						Váš košík je prázdný
					</p>
				</div>
			) : (
				<div className='space-y-4'>
					{shoppingBag.map((item: ShoppingBagItem, index: number) => (
						<div key={index} className='border border-gray-200 rounded-lg p-4 md:p-6'>
							<p className='text-sm md:text-base'>
								Produkt ID: {item.productId} - Množství: {item.quantity}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	</div>
};

export default ShoppingBag;
