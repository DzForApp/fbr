'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BoxIcon, HomeIcon, LogInIcon, MailIcon, User, User2Icon, UserPlusIcon } from 'lucide-react';
import LinkItem from './LinkItem';
 
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className='flex w-full items-center   '>
      <ul className='flex   w-full  space-x-8    items-center justify-around '>
      <LinkItem className={`link ${pathname === '/' ? 'active' : ''} flex`} href={'/'} label={'Acceuil'} icon={HomeIcon} />
      <LinkItem className={`link ${pathname === '/about' ? 'active' : ''}`} href={'/about'} label={' A Propos'} icon={User2Icon} />
      <LinkItem className={`link ${pathname === '/products' ? 'active' : ''}`} href={'/products'} label={'Produits'} icon={BoxIcon} />
      <LinkItem className={`link ${pathname === '/contact' ? 'active' : ''}`} href={'/contact'} label={' Contactez Nous'} icon={MailIcon} />
   </ul>
      
    </nav>
  )
}