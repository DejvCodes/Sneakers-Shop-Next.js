'use client';
import Link from 'next/link';
import Image from 'next/image';
import {BagItemProps} from '@/types/type';
import {BAG_ITEM_CONTENT, ICONS} from '@/constants/content';


const BagItem = ({ item, sneaker, onDecrease, onIncrease, onDelete }: BagItemProps) => {
	return <div
		className='flex items-start sm:items-center justify-between border border-gray-200 p-3 sm:p-4 gap-3 sm:gap-4 rounded-lg'
	>
		<div className='min-w-0 grow flex items-center gap-2 sm:gap-4'>
			<div className='w-16 h-16 sm:w-22 sm:h-20 shrink-0'>
				<Link
					href={`/product/${sneaker.slug}`}
					className='w-full h-full block'
				>
					<Image
						src={sneaker.image}
						alt={sneaker.fullName}
						width={128}
						height={128}
						className='w-full h-full object-contain'
					/>
				</Link>
			</div>
			<div className='grow pr-1'>
				<h3 className='font-semibold text-sm sm:text-lg leading-tight mb-1'>
					{sneaker.fullName}
				</h3>
				<p className='text-gray-900 text-base sm:text-xl font-bold'>
					{sneaker.price.toLocaleString('cs-CZ')} {BAG_ITEM_CONTENT.currencySuffix}
				</p>
			</div>
		</div>

		<div className='shrink-0 flex flex-col-reverse items-end sm:flex-row sm:items-center gap-2 sm:gap-4'>
			<div className='flex items-center justify-center border-2 border-gray-300 rounded-lg overflow-hidden'>
				<button
					onClick={onDecrease}
					className='hover:bg-gray-200 px-1.5 py-2 sm:px-1.5 sm:py-2 transition-colors cursor-pointer'
					aria-label={BAG_ITEM_CONTENT.decreaseAria}
				>
					<ICONS.minus className='text-lg sm:text-xl' />
				</button>
				<span className='min-w-6 sm:min-w-9 bg-white text-center text-base sm:text-base font-semibold'>
					{item.quantity}
				</span>
				<button
					onClick={onIncrease}
					className='hover:bg-gray-200 px-1.5 py-2 sm:px-1.5 sm:py-2 transition-colors cursor-pointer'
					aria-label={BAG_ITEM_CONTENT.increaseAria}
				>
					<ICONS.plus className='text-lg sm:text-xl' />
				</button>
			</div>

			<button
				onClick={onDelete}
				className='hover:bg-red-50 text-red-600 p-1.5 sm:p-1.5 transition-colors rounded-lg cursor-pointer'
				aria-label={BAG_ITEM_CONTENT.deleteAria}
			>
				<ICONS.trash className='text-lg sm:text-xl' />
			</button>
		</div>
	</div>
};

export default BagItem;
