'use client';
import {Sneaker} from '@/types';
import {LuSearch} from 'react-icons/lu';
import {useEffect, useState} from 'react';
import {sneakers} from '@/constants/sneakers';
import ProductCard from '@/components/ProductCard';

const Products = () => {
  const [searchingProduct, setSearchingProduct] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Sneaker[]>(sneakers);

  useEffect(() => {
    const productsAfterFilter = sneakers.filter((oneSneaker) => {
      return oneSneaker.fullName.toLowerCase().includes(searchingProduct.toLowerCase());
    })
    setFilteredProducts(productsAfterFilter);
  }, [searchingProduct]);

  return <section 
    className='w-full max-w-7xl flex items-center justify-center my-20 mx-auto px-4'
  >
    <div className='flex flex-col items-center justify-center'>
      <div className='w-125 max-w-[calc(100vw-24px)] text-xl border border-black/15 flex items-center mb-6 md:mb-8 p-2.5'>
        <input
          type='text' 
          placeholder='Vyhledat produkt ...'
          value={searchingProduct}
          onChange={(e) => setSearchingProduct(e.target.value)}
          className='w-full text-sm outline-none'
        />
        <LuSearch />
      </div>
      <div className='
        grid grid-cols-4 justify-items-center mr-2.25 ml-0.5 gap-6.25
        max-[1150px]:grid-cols-3 max-[1150px]:mx-1.25 max-[1150px]:gap-3.75
        max-[770px]:grid-cols-2 max-[770px]:gap-5
        max-[550px]:gap-1.75 max-[550px]:mx-0
        max-[370px]:grid-cols-1
      '>
        {filteredProducts.map((oneSneaker) => {
          return <ProductCard key={oneSneaker.id} {...oneSneaker} />
        })}
      </div>
    </div>
  </section>
}

export default Products