'use client'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
    text: string
    url: string
}

const NavLink = ({text, url}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url || (pathname === '/home' && url === '/');
  return (
    <a className={`${isActive && 'underline'} flex p-8`} href={url}>{text}</a>
  )
}

export default NavLink