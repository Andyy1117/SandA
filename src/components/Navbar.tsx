"use client"
import {useState} from 'react';

import Logo from "@/components/Logo";
import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import ButtonOrange from "@/components/ButtonOrange";
import { MdMenu, MdClose } from 'react-icons/md'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';


type NavbarProps = {
    settings: Content.SettingsDocument
}
export default function Navbar({settings}:NavbarProps) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <nav className='px-4 py-4 md:px-2 md-:py-2 shadow-b shadow-sm shadow-slate-300' aria-label='Main'>
        <div className="mx-auto flex max-w-7xl flex-col justify-between py-1 font-medium md:flex-row md:items-center ">

        <div className="flex items-center justify-between">

            <Link href="/" className='z-50'>
                <Logo width={60} height={60} />
                <span className='sr-only'>S&A Trade Home Page</span>
            </Link>
            <button 
                type="button" 
                className="block p-2 text-3xl md:hidden"
                aria-expanded={open}
                onClick={() => setOpen(true)}
            >
                <MdMenu />
                <span className="sr-only">Open Menu</span>

            </button>


        </div>

        {/* Mobile Nav */}

        <div className={clsx("fixed bottom-0 right-0 left-0 top-0 z-40 flex flex-col items-end ga-4 pr-4 pt-14 transition-transform bg-white duration-300 ease-in-out motion-reduce:transition-none md:hidden", open ? "translate-x-0" : "translate-x-[100%]")}>
        <button 
                type="button" 
                className="fixed right-4 top-4 block p-2 text-3xl md:hidden"
                aria-expanded={open}
                onClick={() => setOpen(false)}
            >
                <MdClose />
                <span className="sr-only">Close Menu</span>

            </button>

            <div className='grid justify-items-end gap-8'>
                {settings.data.navigation.map((item)=> {
                    if (item.cta_button) { 
                        return (
                            <ButtonOrange 
                            key={item.label} 
                            field={item.link} 
                            onClick={() => setOpen(false)}
                            aria-current={
                                    pathname.includes(asLink(item.link) as string) ? "page" : undefined
                                }>
                                {item.label}
                            </ButtonOrange>
                        )
                    }
                    return (
                        <PrismicNextLink 
                        key={item.label} 
                        field={item.link} 
                        onClick={() => setOpen(false)} 
                        className='block px-3 text-3x first:mt-8'
                        aria-current={
                            pathname.includes(asLink(item.link) as string) ? "page" : undefined
                        }>
                            {item.label}
                        </PrismicNextLink>
                    )
                })}
            </div>
        </div>

        {/* Desktop */}

            <ul className='gap-6 hidden md:flex'>
                {settings.data.navigation.map(( item ) => {
                    if ( item.cta_button) {
                        return (
                            <li key={item.label}>
                                <ButtonOrange key={item.label} field={item.link}>{item.label}</ButtonOrange>
                            </li>
                    )
                }

                return(
                <li key={item.label}>
                    <PrismicNextLink field={item.link}
                    className='inline-flex min-h-11 items-center'>{item.label}</PrismicNextLink>
                </li>
            )})}
            </ul>
        </div>
      </nav>
    </header>
  )
}