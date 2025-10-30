'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ setMenuOpen?: (open: boolean) => void }> = ({ setMenuOpen }) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/Aboutus' },
    { label: 'Projects', url: '/Projects' },
    { label: 'Services', url: '/Services' },
    { label: 'Contact Us', url: '/Contactus' },
  ]

  return (
    <nav className="flex flex-col md:flex-row gap-5 md:gap-10 items-center text-black">
      {navItems.map(({ label, url }, i) => (
        <Link
          key={i}
          href={url}
          onClick={() => setMenuOpen && setMenuOpen(false)}
          className={`pb-1 font-medium ${
            pathname === url ? 'text-black' : 'text-black/70 hover:text-black'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
