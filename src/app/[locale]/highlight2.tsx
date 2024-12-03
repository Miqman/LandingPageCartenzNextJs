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
    <div className='relative '>
      {/* <div className='absolute right-0 top-0'>
        <img src='/image/arrow-yellow-right-up.svg' alt='icon-arrow-yellow' />
      </div> */}
      <div>
        <h3 className='text-[3rem] font-bold leading-normal'>{title}</h3>
        <p className='mt-2 text-xl leading-normal'>{description}</p>
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
    <div className='max-w-[15rem] md:max-w-[100%]'>
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
    },
    {
      title: 'Rp 36 T++',
      description: t('features5')
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
  const FEATURES2 = [
    {
      title: 'Rp 36 T++',
      description: t('features5')
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
    <section className='relative overflow-hidden py-16'>
      <div className='container'>
        <div className='px-8'>
          <h2 className='mb-5 text-[20px] font-bold leading-normal text-secondary md:px-0 md:text-[32px]'>
            {t('cartenzDalamAngka')}
          </h2>
        </div>
      </div>
      {/* <div className='bg-tertiary'>
        <div className='px-8'>
          <div className='container flex flex-wrap justify-center gap-20 py-10 md:justify-between lg:justify-between'>
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
      </div> */}

      <div className='container relative mt-10 md:mt-20'>
        <div className='px-8'>
          <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20'>
            {FEATURES.map(({ title, description }) => (
              <BoxHighlight
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>

          {/* <div className='mt-20 md:w-3/5'>
            <div className='grid grid-cols-1 justify-items-center gap-14 md:grid-cols-2 md:gap-20 md:justify-self-auto'>
              {FEATURES2.map(({ title, description }) => (
                <BoxHighlight2
                  key={title}
                  title={title}
                  description={description}
                />
              ))}
            </div>
          </div> */}

          {/* Bintang Besar */}
          {/* <div className='absolute right-[-160px] top-[50px] hidden lg:block'>
            <div className='relative'>
              <img
                src='/image/bintang.png'
                alt='Bintang Besar'
                className='w-[200px] rotate-[5deg] lg:h-[690px] lg:w-[680px]' // Ukuran bintang disesuaikan
              />
              <div className='absolute inset-0 z-10 -mt-5 mr-5 flex flex-col items-center justify-center'>
                <h4 className='text-8xl font-bold'>4.5</h4>
                <p
                  className='text-center text-[1.5rem] font-semibold leading-[1.8rem]'
                  dangerouslySetInnerHTML={{ __html: t('kepuasanPelanggan') }}
                ></p>
              </div>
            </div>
          </div> */}

          <div className='mt-16'>
            <p className='text-base font-bold md:text-2xl'>{t('klien')}</p>
            {/* <p className='text-2xl font-bold md:mt-10 md:text-2xl'>
              {t('dataTahun')}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlight2
