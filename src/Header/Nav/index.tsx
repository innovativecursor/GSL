'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ setMenuOpen?: (open: boolean) => void }> = ({ setMenuOpen }) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/Aboutus' },
    { label: 'Projects', url: '/projects' },
    { label: 'Services', url: '/services' },
    { label: 'Contact Us', url: '/contactus' },
  ]

  // const handleScroll = (e: React.MouseEvent, id: string) => {
  //   e.preventDefault()
  //   const element = document.querySelector(id)
  //   if (element) {
  //     const offset = -80
  //     const y = element.getBoundingClientRect().top + window.scrollY + offset
  //     window.scrollTo({ top: y, behavior: 'smooth' })
  //   }
  //   if (setMenuOpen) setMenuOpen(false)
  // }

  return (
    <nav className="flex flex-col md:flex-row gap-5 md:gap-10 items-center text-black">
      {/* {navItems.map(({ label, url }, i) => (
        <a
          key={i}
          href={url}
          onClick={(e) => handleScroll(e, url)}
          className="pb-1 font-medium text-black/70 hover:text-black"
        >
          {label}
        </a>
      ))} */}
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
