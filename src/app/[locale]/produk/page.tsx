'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

// Import komponen dengan nama yang sesuai
import Smartgov from './components/smartgov'
import Efd from './components/efd'
import Citigov from './components/citigov'
import Konsultan from './components/konsultan'

export default function Produk() {
  const t = useTranslations('')
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const [fadeIn, setFadeIn] = useState(false)

  // const handleClick = (index: number) => {
  //   setActiveIndex(index)
  // }

  const handleClick = (index: number) => {
    setFadeIn(false) // Reset the fade-in before switching components
    setTimeout(() => {
      setActiveIndex(index)
      setFadeIn(true) // Start fade-in effect for the new component
    }, 500) // Small delay to allow fade out first
  }

  useEffect(() => {
    setFadeIn(true) // Trigger fade-in when component mounts
  }, [activeIndex])

  const items = [
    {
      src: '/image/smartgov.png',
      alt: 'smartgov',
      text: 'Core Sistem Pajak',
      component: Smartgov
    },
    {
      src: '/image/efd.png',
      alt: 'efd',
      text: 'Monitoring Pajak',
      component: Efd
    },
    {
      src: '/image/citigov.png',
      alt: 'citigov',
      text: 'Pelayanan Publik',
      component: Citigov
    },
    {
      text: 'Konsultan',
      isHeader: true,
      subtext: 'Konsultasi Sistem',
      component: Konsultan
    }
  ]

  const ActiveComponent = items[activeIndex!]?.component

  return (
    <div className='mt-[100px]'>
      <section className='flex flex-wrap items-center justify-center bg-tertiary px-8 py-10 md:justify-around md:px-32'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`mb-6 w-full transform cursor-pointer text-center transition-all duration-200 ease-in-out sm:w-1/2 md:mb-0 md:w-1/4 ${
              activeIndex === index
                ? 'scale-105 opacity-100'
                : 'scale-95 opacity-50 grayscale filter'
            }`}
            onClick={() => handleClick(index)}
          >
            {item.isHeader ? (
              <div>
                <h1 className='text-4xl font-bold'>{item.text}</h1>
                <p className='mt-4'>{item.subtext}</p>
              </div>
            ) : (
              <div className=''>
                <img src={item.src} alt={item.alt} className='mx-auto w-1/2' />
                <p className='mt-4'>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Render komponen aktif */}
      {ActiveComponent && (
        <div
          className={`mt-10 transform transition-opacity duration-500 ease-in-out ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
          key={activeIndex}
        >
          <ActiveComponent />
        </div>
      )}
    </div>
  )
}
