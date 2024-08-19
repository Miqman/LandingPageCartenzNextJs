'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
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
  href?: string
  isActive: boolean
  isScrolling: boolean
  locale?: string
}

function NavItem({
  children,
  href,
  isActive,
  isScrolling,
  locale
}: NavItemProps) {
  const pathname = usePathname()
  const isHomePage = pathname === '/' + locale

  const borderColor = isHomePage
    ? isScrolling
      ? 'border-yellow-500'
      : 'border-blue-400'
    : 'border-yellow-500'
  return (
    <li>
      <Link
        href={href || '#'}
        className={`cursor-pointer font-medium ${
          isActive ? `rounded-sm border-b-4 ${borderColor}` : ''
        }`}
      >
        {children}
      </Link>
    </li>
  )
}
export const Header: FC<Props> = ({ locale }) => {
  const [open, setOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('')

  const isHomePage = pathname === '/' + locale

  console.log(pathname, 'pathname')

  const handleOpen = () => setOpen(cur => !cur)
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    )
  }, [])

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
  return (
    <div
      className={`fixed top-0 z-50 mx-auto w-full border-0 ${isHomePage && isScrolling ? 'bg-blue-400' : isHomePage ? 'bg-black bg-opacity-25' : 'bg-blue-400'}`}
    >
      <div className='container flex items-center justify-between p-5 text-white'>
        <Link lang={locale} href='/'>
          {isHomePage && isScrolling ? (
            <Image
              src='/image/logo_cartenz_white.png'
              width={150}
              height={0}
              alt='logoCartenz'
            />
          ) : isHomePage ? (
            <Image
              src='/image/logo_cartenz.png'
              width={150}
              height={0}
              alt='logoCartenz'
            />
          ) : (
            <Image
              src='/image/logo_cartenz_white.png'
              width={150}
              height={0}
              alt='logoCartenz'
            />
          )}
        </Link>
        <div className=''>
          <ul className='ml-10 hidden items-center gap-6 lg:flex'>
            <NavItem
              href='/'
              isActive={pathname === `/${locale}`}
              isScrolling={isScrolling}
              locale={locale}
            >
              Beranda
            </NavItem>
            <NavItem
              href='/tentang-kami'
              isActive={pathname === `/${locale}/tentang-kami`}
              isScrolling={isScrolling}
              locale={locale}
            >
              Tentang Kami
            </NavItem>
            <NavItem
              href='/produk'
              isActive={pathname === `/${locale}/produk`}
              isScrolling={isScrolling}
              locale={locale}
            >
              Produk
            </NavItem>
            <NavItem
              href='/informasi'
              isActive={pathname === `/${locale}/informasi`}
              isScrolling={isScrolling}
              locale={locale}
            >
              Informasi
            </NavItem>
            <NavItem
              href='/hubungi-kami'
              isActive={pathname === `/${locale}/hubungi-kami`}
              isScrolling={isScrolling}
              locale={locale}
            >
              Hubungi Kami
            </NavItem>
          </ul>
        </div>
        <div className='flex flex-row items-center gap-3'>
          {/* <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Support')}</a>
          <a href=''>{t('Other')}</a>
        </nav> */}
          <ThemeSwitch />
          <LangSwitcher />
        </div>
      </div>
    </div>
  )
}
