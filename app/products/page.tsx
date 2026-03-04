'use client';
import {useState} from 'react';
import {Sneaker} from '@/types/type';
import {sneakers} from '@/constants/sneakers';
import ProductCard from '@/components/ProductCard';
import {ICONS, PRODUCTS_PAGE_CONTENT} from '@/constants/content';

const Products = () => {
	const [searchingProduct, setSearchingProduct] = useState('');

	// filter products based on searching product
	const filteredProducts: Sneaker[] = sneakers.filter((oneSneaker) => {
		return oneSneaker.fullName.toLowerCase().includes(searchingProduct.toLowerCase());
	});

	return <section
		className='w-full max-w-7xl flex items-center justify-center my-20 mx-auto px-4'
	>
		<div className='flex flex-col items-center justify-center'>
			<div className='w-125 max-w-[calc(100vw-24px)] flex items-center text-xl border border-black/15 mb-6 p-2.5'>
				<input
					type='text'
					placeholder={PRODUCTS_PAGE_CONTENT.searchPlaceholder}
					value={searchingProduct}
					onChange={(e) => setSearchingProduct(e.target.value)}
					className='w-full text-sm outline-none'
				/>
				<ICONS.search />
			</div>
			<div
				className='grid grid-cols-4 justify-items-center max-[1150px]:grid-cols-3 max-[770px]:grid-cols-2 max-[370px]:grid-cols-1 mr-2.25 ml-0.5 max-[1150px]:mx-1.25 max-[550px]:mx-0 gap-6.25 max-[1150px]:gap-3.75 max-[770px]:gap-5 max-[550px]:gap-1.75'
			>
				{filteredProducts.map((oneSneaker) => {
					return <ProductCard key={oneSneaker.id} {...oneSneaker} />;
				})}
			</div>
		</div>
	</section>
};

export default Products;
