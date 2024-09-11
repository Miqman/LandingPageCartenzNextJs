'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

// Import komponen dengan nama yang sesuai
import Smartgov from './components/smartgov'
import Efd from './components/efd'
import Citigov from './components/citigov'
import Konsultan from './components/konsultan'

export default function Produk() {
  const t = useTranslations('')
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

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
      <section className='flex items-center justify-around bg-tertiary px-32 py-10'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`text-center ${activeIndex === index ? '' : 'grayscale filter'} cursor-pointer`}
            onClick={() => handleClick(index)}
          >
            {item.isHeader ? (
              <>
                <h1 className='text-4xl font-bold'>{item.text}</h1>
                <p className='mt-4'>{item.subtext}</p>
              </>
            ) : (
              <>
                <img src={item.src} alt={item.alt} />
                <p className='mt-4'>{item.text}</p>
              </>
            )}
          </div>
        ))}
      </section>

      {/* Render komponen aktif */}
      {ActiveComponent && (
        <div className='mt-10'>
          <ActiveComponent />
        </div>
      )}
    </div>
  )
}
