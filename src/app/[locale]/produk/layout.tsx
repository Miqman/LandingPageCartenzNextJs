'use client'

// src/app/[locale]/produk/layout.tsx
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface ProductLayoutProps {
  children: ReactNode
}
const menuItems = [
  { href: 'smartgov', label: 'SmartGov', imgSrc: '/image/smartgov.png' },
  { href: 'efd', label: 'EFD', imgSrc: '/image/efd.png' },
  { href: 'citigov', label: 'CitiGov', imgSrc: '/image/citigov.png' },
  { href: 'konsultan', label: 'Konsultan', imgSrc: '/image/konsultan.png' }
]

export default function ProductLayout({ children }: ProductLayoutProps) {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  return (
    <div className='mt-[100px] flex min-h-screen flex-col'>
      <nav className='bg-tertiary'>
        <ul className='hidden flex-wrap items-center justify-center px-4 py-4 md:flex md:justify-around md:px-16 lg:px-32'>
          {menuItems.map(({ href, label, imgSrc }) => {
            const isActive = pathname.includes(href)
            return (
              <li key={href} className=''>
                <Link
                  href={href}
                  className={`flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className='relative h-4 w-10 md:h-10 md:w-28 lg:h-20 lg:w-36'>
                    <Image
                      src={imgSrc}
                      alt={`${label} icon`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className={
                        isActive ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                      }
                    />
                  </div>
                  <span className='text-xs md:text-base'>{label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        {/* Mobile Dropdown Menu */}
        <div className='px-4 py-4 md:hidden'>
          <button
            className='w-full rounded-lg bg-gray-100 px-4 py-2 text-left shadow-md'
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <ul className='mt-2 space-y-2 rounded-lg bg-white py-4 shadow-lg'>
              {menuItems.map(({ href, label, imgSrc }) => {
                const isActive = pathname.includes(href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-100 ${
                        isActive
                          ? 'text-primary'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <div className='relative mr-2 h-5 w-5'>
                        <Image
                          src={imgSrc}
                          alt={`${label} icon`}
                          fill
                          style={{ objectFit: 'contain' }}
                          className={
                            isActive
                              ? 'opacity-100'
                              : 'opacity-50 hover:opacity-75'
                          }
                        />
                      </div>
                      <span className='text-base'>{label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </nav>
      <main className='flex-grow p-4'>{children}</main>
    </div>
  )
}
