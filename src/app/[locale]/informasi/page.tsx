import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Button from '../components/Button'

export default function Informasi() {
  const t = useTranslations('')
  return (
    <div className='mt-[100px]'>
      <section className='container py-8'>
        <h1 className='mb-10 text-3xl font-bold'>Sosial Media</h1>
        <div className='flex items-center justify-between text-[24px]'>
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
        <div className='flex space-x-16'>
          <div className='flex flex-col gap-y-6 text-xl'>
            <h4 className='text-2xl font-bold'>Tahun</h4>
            <p className='cursor-pointer'>2024</p>
            <p className='cursor-pointer'>2023</p>
            <p className='cursor-pointer'>2022</p>
            <p className='cursor-pointer'>2021</p>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            {[...new Array(6)].map((_, i) => (
              <div className='flex flex-col gap-y-5' key={i}>
                <img src='/image/pDayat.png' alt='Pak Dayat selfie' />
                <p className='font-light'>21 April 2024</p>
                <p className='text-xl'>
                  Pak Dayat kepencet foto, eh jadi selfie di grup Cartenz Family
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-20 flex justify-center'>
          <Button rounded size='large' variant='outline'>
            Lebih Banyak
          </Button>
        </div>
      </section>
    </div>
  )
}
