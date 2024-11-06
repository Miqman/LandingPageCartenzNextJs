'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  locale: string
}
interface NavItemProps {
  children: React.ReactNode
  href:
    | '/'
    | '/hubungi-kami'
    | '/informasi'
    | '/produk'
    | '/tentang-kami'
    | '/karir'
    | '/hubungan-investor'
  isActive: boolean
  isScrolling: boolean
  isOpen: boolean
  locale?: string
  onClick?: () => void
}

function NavItem({
  children,
  href,
  isActive,
  isScrolling,
  isOpen,
  locale,
  onClick
}: NavItemProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/' + locale
  const isSpecialPage = [
    `/${locale}/karir`,
    `/${locale}/hubungan-investor`,
    `/${locale}/hubungi-kami`,
    `/${locale}/informasi`
  ].includes(pathname)

  const borderColor =
    isSpecialPage || isHomePage
      ? isScrolling || isOpen
        ? 'border-yellow-500'
        : 'border-[#0199cb]'
      : 'border-yellow-500'

  const hoverBorderColor =
    isSpecialPage || isHomePage
      ? isScrolling || isOpen
        ? 'hover:border-yellow-500'
        : 'hover:border-[#0199cb]'
      : 'hover:border-yellow-500'
  return (
    <li>
      <Link
        href={href as any}
        onClick={onClick}
        className={`cursor-pointer hover:rounded-sm hover:py-2 ${hoverBorderColor} font-medium hover:border-b-4 ${
          isActive ? `rounded-sm border-b-4 py-2 ${borderColor}` : ''
        }`}
      >
        {children}
      </Link>
    </li>
  )
}
export const Header: FC<Props> = ({ locale }) => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('')

  const isHomePage = pathname === '/' + locale
  const isSpecialPage = [
    `/${locale}/karir`,
    `/${locale}/hubungan-investor`,
    `/${locale}/hubungi-kami`,
    `/${locale}/informasi`
  ].includes(pathname)

  // console.log(
  //   [`/${locale}/karir`, `/${locale}/hubungan-investor`].includes(pathname),
  //   'pathname'
  // )

  const handleOpen = () => setOpen(cur => !cur)
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 768 && setOpen(false)
    )
  }, [])

  const isActivePage = (path: string) =>
    pathname.startsWith(`/${locale}${path}`)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    // Cek ukuran jendela ketika komponen pertama kali dipasang
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768) // Tentukan ukuran mobile di sini
    }

    // Menambahkan event listener untuk resize jendela
    checkWindowSize() // cek sekali di awal
    window.addEventListener('resize', checkWindowSize)

    // Bersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('resize', checkWindowSize)
    }
  }, [])
  return (
    <div
      className={`fixed top-0 z-50 mx-auto w-full border-0 md:h-[100px] ${(isSpecialPage || isHomePage) && (isScrolling || open) ? 'bg-secondary' : isHomePage ? 'bg-black bg-opacity-25' : isSpecialPage ? 'bg-transparent' : 'bg-secondary'}`}
    >
      <div className='container mx-auto h-full items-center gap-6 py-5 text-white md:flex md:justify-between'>
        <div className='flex w-full items-center justify-between md:w-auto'>
          <Link
            lang={locale}
            href='/'
            className='flex flex-1 items-center px-2 py-3 text-white'
          >
            {(isSpecialPage || isHomePage) && (isScrolling || open) ? (
              <img
                src='/image/logo_cartenz_white.png'
                style={{ width: '150px', height: 'auto' }}
                alt='logoCartenz'
              />
            ) : isSpecialPage || isHomePage ? (
              <img
                src='/image/logo_cartenz.png'
                style={{ width: '150px', height: 'auto' }}
                alt='logoCartenz'
              />
            ) : (
              <img
                src='/image/logo_cartenz_white.png'
                style={{ width: '150px', height: 'auto' }}
                alt='logoCartenz'
              />
            )}
          </Link>
          {/* Mobile Menu Button */}
          <div className='flex items-center md:hidden'>
            <button className='mobile-menu-button' onClick={handleOpen}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <title>bars-3-bottom-left</title>
                <g fill='none'>
                  <path
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        {(open || !isMobile) && (
          <div className='md:flex'>
            <ul
              className={`flex flex-col items-center justify-start gap-6 transition-all duration-100 ease-in-out md:flex-row md:gap-6 md:space-x-1 md:pb-0 ${
                open
                  ? 'max-h-[500px] scale-100 opacity-100'
                  : 'max-h-0 scale-95 opacity-0'
              } md:max-h-full md:scale-100 md:opacity-100`}
            >
              <NavItem
                href='/'
                isActive={pathname === `/${locale}`}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Beranda
              </NavItem>
              <NavItem
                href='/tentang-kami'
                isActive={pathname === `/${locale}/tentang-kami`}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Tentang Kami
              </NavItem>
              <NavItem
                href='/produk'
                isActive={isActivePage('/produk')}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Produk
              </NavItem>
              <NavItem
                href='/hubungan-investor'
                isActive={pathname === `/${locale}/hubungan-investor`}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Hubungan Investor
              </NavItem>
              <NavItem
                href='/informasi'
                isActive={pathname === `/${locale}/informasi`}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Informasi
              </NavItem>
              <NavItem
                href='/karir'
                isActive={pathname === `/${locale}/karir`}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Karir
              </NavItem>
              <NavItem
                href='/hubungi-kami'
                isActive={pathname === `/${locale}/hubungi-kami`}
                isScrolling={isScrolling}
                isOpen={open}
                locale={locale}
                onClick={handleOpen}
              >
                Hubungi Kami
              </NavItem>

              <div className='flex items-center'>
                <LangSwitcher />
                <ThemeSwitch />
              </div>
            </ul>
          </div>
        )}
        {/* <div className='hidden items-center gap-3 md:flex'> */}
        {/* <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Support')}</a>
          <a href=''>{t('Other')}</a>
        </nav> */}
        {/* <ThemeSwitch />
          <LangSwitcher />
        </div> */}
      </div>
    </div>
  )
}
