import Logo from '@/components/Logo'
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Footer() {
  const client  = createClient();
  const settings = await client.getSingle("settings");
  
  return (
    
    <footer className='bg-[#ffa600] text-white'>
      <div className='flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row'>
        <Link href="/">
          <Logo width={60} height={60} />
          <span className='sr-only'>S&A Trade Home Page</span>
        </Link>
        <nav aria-label='Footer'>
          <ul className='flex gap-6'>
            {settings.data.navigation.map(( item ) => (
              <li key={item.label}>
                <PrismicNextLink field={item.link}
                className='inline-flex min-h-11 items-center'>{item.label}</PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className='w-full border-t border-slate-600 pt-4 mt-6 mx-auto justify-center text-center md:mt-0 mb-4 bg-white'>
        <p className='text-sm text-slate-500'>
          &copy; {new Date().getFullYear()} S&A Trade LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
