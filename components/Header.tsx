'use client';
import Link from 'next/link';
import type {RootState} from '@/store';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {LuShoppingBag} from 'react-icons/lu';
import {NAV_LINKS} from '@/constants/content';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const shoppingBag = useSelector((store: RootState) => store.shoppingBag.items)
  const currentSection = usePathname().replace('/', '');

  useEffect(() => {
    // count total quantity of items in the shopping bag
    const quantity = shoppingBag.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(quantity);
  }, [shoppingBag]);

  return <header
    className='fixed left-0 top-0 w-full h-15 flex items-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)] z-1000'
  >
    <div className='mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4'>
      {/* Logo */}
      <div className='mb-1.25'>
        <Link
          href='/'
          onClick={() => setOpenMenu(false)}
          className='text-[20px] font-semibold uppercase'
        >
          sneakers<span className='font-serif text-[30px] text-turquoise'>.</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-4'>
          {NAV_LINKS.map((oneLink, index) => {
            return <li key={index}>
              <Link
                href={oneLink.path}
                className={`
                  relative group text-[12px] font-medium text-black uppercase tracking-[1px] transition hover:text-foreground px-1.25
                  ${currentSection === oneLink.path.replace('/', '') ? 'text-black' : 'text-gray-500'}
                `}
              >
                {oneLink.text}
                <span className={`
                  absolute -bottom-1.25 left-1/2 w-0 h-[1.5px] -translate-x-1/2 bg-black transition-all duration-200 group-hover:w-full
                  ${currentSection === oneLink.path.replace('/', '') ? 'w-[90%]' : ''}
                `}/>
              </Link>
            </li>
          })}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={`
        fixed right-0 top-0 w-[70%] min-h-screen flex items-center justify-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)] transition-transform duration-300 pb-20 z-1000
        ${openMenu ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <ul className='flex flex-col items-center justify-center gap-6'>
          {NAV_LINKS.map((oneLink, index) => {
            return <li key={index}>
              <Link
                href={oneLink.path}
                onClick={() => setOpenMenu(false)}
                className={`
                  relative group text-[12.5px] font-medium text-black uppercase tracking-[1px] transition hover:text-foreground px-1.25
                  ${currentSection === oneLink.path.replace('/', '') ? 'text-black' : 'text-gray-500'}
                `}
              >
                {oneLink.text}
                <span className={`
                  absolute -bottom-1.25 left-1/2 w-0 h-[1.5px] -translate-x-1/2 bg-black transition-all duration-200 group-hover:w-full
                  ${currentSection === oneLink.path.replace('/', '') ? 'w-[90%]' : ''}
                `}/>
              </Link>
            </li>
          })}
        </ul>
      </nav>

      {/* Right Side (Bag + Burger) */}
      <div className='w-29.25 flex items-center justify-end gap-1'>
        {/* Bag */}
        <Link
          href='/shopping-bag'
          className='relative inline-flex items-center'
        >
          <LuShoppingBag className='text-[22px] text-black transition hover:text-foreground' />
          <span
            className='absolute -right-2 -top-2 w-4.25 h-4.25 flex justify-center items-center text-black text-[11px] bg-turquoise rounded-full'
          >
            {totalQuantity}
          </span>
        </Link>

        {/* Burger */}
        <button
          type='button'
          onClick={() => setOpenMenu((e) => !e)}
          className='relative w-10 h-10 inline-flex items-center justify-center md:hidden z-1100'
          aria-label='Otevřít menu'
          aria-expanded={openMenu}
        >
          <div className='flex flex-col gap-[4.5px] -mr-4'>
            <span 
              className={`
                w-5.5 h-[2.5px] bg-zinc-800 transition-transform duration-300
                ${openMenu ? 'translate-y-1.75 -rotate-45' : ''}
              `}
            />
            <span 
              className={`
                w-5.5 h-[2.5px] bg-zinc-800 transition-transform duration-300
                ${openMenu ? 'opacity-0' : ''}
              `} 
            />
            <span 
              className={`
                w-5.5 h-[2.5px] bg-zinc-800 transition-transform duration-300
                ${openMenu ? '-translate-y-1.75 rotate-45' : ''}
              `} 
            />
          </div>
        </button>  
      </div>
    </div>

    {/* Mobile Overlay */}
    <div
      className={`
        fixed md:hidden inset-0 bg-black/40 transition-opacity z-900
        ${openMenu ? 'opacity-100' : 'pointer-events-none opacity-0'}
      `}
      onClick={() => setOpenMenu(false)}
    />
  </header>
}

export default Header