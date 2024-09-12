'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'
import { init } from 'next/dist/compiled/webpack/webpack'

export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/hubungi-kami': '/hubungi-kami',
  '/informasi': '/informasi',
  '/produk': '/produk',
  '/tentang-kami': '/tentang-kami',
  '/karir': '/karir'
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
