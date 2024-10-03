'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

function BoxHighlight({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className='relative max-w-[15rem]'>
      <div className='absolute right-0 top-0'>
        <img src='/image/arrow-yellow-right-up.svg' alt='icon-arrow-yellow' />
      </div>
      <div>
        <h3 className='text-[3rem] font-semibold leading-[3.657rem] text-[#0199CB]'>
          {title}
        </h3>
        <p className='text-[24px] leading-7'>{description}</p>
      </div>
    </div>
  )
}
function BoxHighlight2({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className='max-w-[15rem] md:mb-20 lg:mb-20 lg:max-w-[21.25rem]'>
      <div>
        <h3 className='text-[3rem] font-semibold leading-[3.657rem] text-[#0199CB]'>
          {title}
        </h3>
        <p className='text-[24px] leading-7'>{description}</p>
      </div>
    </div>
  )
}

export function Highlight2() {
  const t = useTranslations('')

  const FEATURES = [
    {
      title: 'XXX++',
      description: t('features1')
    },
    {
      title: '30+',
      description: t('features2')
    },
    {
      title: '350+',
      description: t('features3')
    },
    {
      title: '38+',
      description: t('features4')
    }
  ]
  const FEATURES2 = [
    {
      title: 'Rp 2 T++',
      description: t('features5')
    },
    {
      title: '10 Jt++',
      description: t('features6')
    },
    {
      title: 'Rp 18 T++',
      description: t('features7')
    },
    {
      title: 'Rp 43 T++',
      description: t('features8')
    }
  ]
  return (
    <section className='relative overflow-hidden'>
      <div className='container mx-auto '>
        <h2 className='mb-5 px-8 text-[20px] font-bold leading-6 lg:px-0 lg:text-[32px] lg:leading-10'>
          {t('cartenzDalamAngka')}
        </h2>
      </div>
      <div className='bg-tertiary'>
        <div className='container mx-auto flex flex-wrap justify-center gap-20 py-10 md:justify-between lg:justify-between'>
          <div className=''>
            <img src='/image/logos/1Daerah.svg' alt='1daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/2Daerah.svg' alt='2daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/3Daerah.svg' alt='3daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/5Daerah.svg' alt='4daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/5Daerah.svg' alt='5daerah' />
          </div>
          <div className='text-center '>
            <h3 className='text-[3rem] font-semibold leading-[3.657rem] text-[#0199CB]'>
              100++
            </h3>
            <p className='text-[24px] leading-7'>{t('pemerintahDaerah')}</p>
          </div>
        </div>
      </div>

      <div className='container relative mx-auto mt-10 lg:mt-20'>
        <div className='flex flex-wrap justify-center gap-24 md:justify-between md:gap-0 lg:justify-between lg:gap-0'>
          {FEATURES.map(({ title, description }) => (
            <BoxHighlight key={title} title={title} description={description} />
          ))}
        </div>

        <div className='mt-20 md:w-3/5 lg:w-3/5'>
          <div className='flex flex-wrap justify-center gap-20 md:justify-between md:gap-0 lg:justify-between lg:gap-0'>
            {FEATURES2.map(({ title, description }) => (
              <BoxHighlight2
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        {/* Bintang Besar */}
        <div className='absolute right-[-160px] top-[50px]'>
          <div className='relative'>
            <img
              src='/image/bintang.png'
              alt='Bintang Besar'
              className='w-[200px] rotate-[5deg] lg:h-[690px] lg:w-[680px]' // Ukuran bintang disesuaikan
            />
            <div className='absolute inset-0 z-10 -mt-5 mr-5 flex flex-col items-center justify-center'>
              <h4 className='text-8xl font-bold'>4.5</h4>
              {/* <div>
                <p>Kepuasan</p>
                <p>Pelanggan</p>
              </div> */}
              <p className='text-center text-[1.5rem] font-semibold leading-[1.8rem]'>
                <pre>{t('kepuasanPelanggan')}</pre>
              </p>
            </div>
          </div>
        </div>

        <div className='mt-20 text-center md:mt-0 lg:mt-0 lg:w-3/5 lg:text-left'>
          <p className='text-2xl font-bold lg:text-4xl'>{t('klien')}</p>
          <p className='text-[#828282} text-lg lg:mt-10 lg:text-2xl'>
            {t('dataTahun')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Highlight2
