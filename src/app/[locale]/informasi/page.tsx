'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Button from '../components/Button'
import * as React from 'react'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ContentData {
  image: string
  title: string
  description: string
}

interface DataType {
  image: string
  title: string
  description: string
}

// Tipe untuk mapping tahun ke data konten
const contentData: Record<string, ContentData> = {
  '2024': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2024',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2024'
  },
  '2023': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2023',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2023'
  },
  '2022': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2022',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2022'
  },
  '2021': {
    image: '/image/pDayat.png',
    title: 'Judul untuk Tahun 2021',
    description:
      'Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family 2021'
  }
}
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const BASE_ID = process.env.NEXT_PUBLIC_BASE_ID

export default function Informasi() {
  const t = useTranslations('')
  const yearsArray = []
  for (let i = 0; i < 4; i++) {
    yearsArray.push(moment().subtract(i, 'years').format('YYYY'))
  }
  const [activeTab, setActiveTab] = React.useState(yearsArray[0])

  const [data, setData] = React.useState<DataType[]>([])
  const [itemsToShow, setItemsToShow] = React.useState(6) // jumlah awal data yang akan ditampilkan
  const [isLoading, setIsLoading] = React.useState(false)
  const [totalItems, setTotalItems] = React.useState(0) // total data dari API
  const fetchData = async (year: string, limit: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `${BASE_URL}/${BASE_ID}/informasi_${year}?perPage=${limit}`
      )
      const result = await response.json()
      setData(result.data) // asumsi data ada di 'items'
      setTotalItems(result.pagination.totalItems) // asumsi total data ada di 'total'
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch data on initial load or when activeTab changes
  React.useEffect(() => {
    fetchData(activeTab, `${itemsToShow}`)
  }, [activeTab, itemsToShow])

  const handleLoadMore = () => {
    setItemsToShow(prevItems => prevItems + 6) // tambahkan jumlah data yang akan diambil
  }
  return (
    <div className='mt-[100px]'>
      <section className='container py-8'>
        <h1 className='mb-10 text-3xl font-bold'>Sosial Media</h1>
        <div className='flex flex-wrap items-center justify-center gap-6 text-[24px] md:justify-between'>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/tiktok.png' alt='tiktok' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/instagram.png' alt='isntagram' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/youtube.png' alt='youtube' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/twitterX.png' alt='twitterX' className='' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
          <Link
            href='https://www.instagram.com/cartenztechnology'
            target='_blank'
            className='flex flex-col justify-center'
          >
            <img src='/image/facebook.png' alt='facebook' />
            <p className='mt-4 font-bold'>@cartenz</p>
          </Link>
        </div>
      </section>
      <section className='container mt-8 py-8'>
        <h1 className='text-uppercase mb-10 text-3xl font-bold'>
          Berita Terakhir
        </h1>
        {/* <div className='md:flex'>
          <ul className='flex-column text-sm font-medium text-gray-500 md:me-10 md:w-[126px]'>
            {yearsArray.map(year => (
              <li key={year}>
                <a
                  href='#'
                  onClick={e => {
                    e.preventDefault()
                    setActiveTab(year)
                  }}
                  className={`inline-flex w-full items-center px-4 py-4 ${
                    activeTab === year
                      ? 'border-b-2 border-l-8 border-b-gray-300 border-l-[#0199CB] font-bold hover:bg-gray-100'
                      : 'border-b-2 border-b-gray-300 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {year}
                </a>
              </li>
            ))}
          </ul>
          <div className='text-medium w-full'>
            {contentData[activeTab] && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {[...new Array(6)].map((_, i) => (
                  <div className='flex flex-col gap-y-5' key={i}>
                    <img
                      src={contentData[activeTab].image}
                      alt={contentData[activeTab].title}
                      className='h-[405px] object-cover'
                    />
                    <p className='font-light'>{contentData[activeTab].title}</p>
                    <p className='font-xl'>
                      {contentData[activeTab].description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='mt-20 flex justify-center'>
          <Button rounded size='large' variant='outline'>
            Lebih Banyak
          </Button>
        </div> */}
        <div>
          <div className='md:flex'>
            <ul className='flex-column text-sm font-medium text-gray-500 md:me-10 md:w-[126px]'>
              {yearsArray.map(year => (
                <li key={year}>
                  <a
                    href='#'
                    onClick={e => {
                      e.preventDefault()
                      setActiveTab(year)
                      setItemsToShow(6) // reset jumlah data saat tab berubah
                    }}
                    className={`inline-flex w-full items-center px-4 py-4 ${
                      activeTab === year
                        ? 'border-b-2 border-l-8 border-b-gray-300 border-l-[#0199CB] font-bold hover:bg-gray-100'
                        : 'border-b-2 border-b-gray-300 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {year}
                  </a>
                </li>
              ))}
            </ul>
            {isLoading && (
              <div className='text-medium w-full'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                  {[...new Array(6)].map((_, i) => (
                    <div className='flex flex-col gap-y-5' key={i}>
                      <Skeleton width={380} height={300} />
                      <p className='font-light'>
                        <Skeleton count={1} />
                      </p>
                      <p className='font-xl'>
                        <Skeleton count={3} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!isLoading && (
              <div className='text-medium w-full'>
                {data.length > 0 && (
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {data.map((item, i) => (
                      <div className='flex flex-col gap-y-5' key={i}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='h-[405px] object-cover'
                        />
                        <p className='font-light'>{item.title}</p>
                        <p className='font-xl'>{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className='mt-20 flex justify-center'>
            {/* Tombol akan hilang jika semua data sudah ditampilkan */}
            {itemsToShow < totalItems && (
              <Button
                rounded
                size='large'
                variant='outline'
                onClick={handleLoadMore}
              >
                Lebih Banyak
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
