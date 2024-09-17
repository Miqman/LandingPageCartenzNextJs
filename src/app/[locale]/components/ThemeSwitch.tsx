'use client'
import { capitalize } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useOnClickOutside } from 'usehooks-ts'
import Button from './Button'

export default function ThemeSwitch() {
  const t = useTranslations('')
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // New state to control dropdown visibility
  const { setTheme, resolvedTheme, themes, theme } = useTheme()

  const ref = useRef(null)
  useEffect(() => setMounted(true), [])
  useOnClickOutside(ref, () => setIsOpen(false))
  if (!mounted)
    return (
      <Button
        size='small'
        type='button'
        variant='flat'
        className='text-destructive inline-flex w-fit items-center justify-between gap-3'
        id='options-menu'
        aria-expanded={isOpen}
        onClick={() => {}}
      >
        {theme != 'dark' ? <FiSun /> : <FiMoon />}
      </Button>
    )

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={ref} className='relative inline-block text-left'>
      <Button
        size='small'
        type='button'
        variant='flat'
        className='text-destructive inline-flex w-fit items-center justify-between gap-3'
        id='options-menu'
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {theme != 'dark' ? <FiSun /> : <FiMoon />}
      </Button>
      {isOpen && (
        <div className='dark:highlight-white/5 absolute right-0 top-full z-50 mt-8 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            {themes.map(themeItem => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem)
                    setIsOpen(false)
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-dropdownHover ${
                    themeItem === theme
                      ? 'bg-selected text-primary hover:bg-selected'
                      : 'text-secondary'
                  }`}
                >
                  {capitalize(themeItem)}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
