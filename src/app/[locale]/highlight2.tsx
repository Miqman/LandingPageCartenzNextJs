'use client'

import React from 'react'

const FEATURES = [
  {
    title: 'XXX++',
    description: 'Satuan Kerja Perangkat Daerah'
  },
  {
    title: '30+',
    description: 'Sistem e-Government'
  },
  {
    title: '350+',
    description: 'Proyek Pemerintah Daerah'
  },
  {
    title: '38+',
    description: 'IT partner di Indonesia'
  }
]
const FEATURES2 = [
  {
    title: 'Rp 2 T++',
    description: 'total transaksi termonitoring perbulan'
  },
  {
    title: '10 Jt++',
    description: 'volume transaksi monitoring perbulan'
  },
  {
    title: 'Rp 18 T++',
    description: 'total transaksi PPAT setahun melalui app pelayanan publik'
  },
  {
    title: 'Rp 43 T++',
    description: 'total pelaporan SPTPD setahun melalui app pelayanan publik'
  }
]
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
  return (
    <section className='relative overflow-hidden'>
      <div className='container mx-auto '>
        <h2 className='mb-5 px-8 text-[20px] font-bold leading-6 lg:px-0 lg:text-[32px] lg:leading-10'>
          Cartenz dalam angka
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
            <p className='text-[24px] leading-7'>Pemerintah Daerah</p>
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
        <div className='absolute right-[-130px] top-[50px]'>
          <div className='relative'>
            <img
              src='/image/bintang.png'
              alt='Bintang Besar'
              className='w-[200px] rotate-[15deg] lg:w-[592px]' // Ukuran bintang disesuaikan
            />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
              <h4 className='text-[3rem] font-semibold text-[#000]'>4.5</h4>
              <p className='text-[1.5rem] leading-[2rem] text-[#000]'>
                Kepuasan Pelanggan
              </p>
            </div>
          </div>
        </div>

        <div className='mt-20 text-center md:mt-0 lg:mt-0 lg:w-3/5 lg:text-left'>
          <p className='text-2xl font-bold lg:text-4xl'>
            80% Klien kami memiliki pendapatan diatas rata - rata provinsi dan
            nasional
          </p>
          <p className='text-[#828282} text-lg lg:mt-10 lg:text-2xl'>
            * data tahun 2023
          </p>
        </div>
      </div>
    </section>
  )
}

export default Highlight2
