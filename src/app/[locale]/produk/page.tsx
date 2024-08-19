import { useTranslations } from 'next-intl'

export default function Produk() {
  const t = useTranslations('')
  return (
    <div className='mt-[78px]'>
      <section className='flex items-center justify-around bg-[#F7F8FC] px-32 py-10'>
        <div className='text-center'>
          <img src='/image/smartgov.png' alt='smartgov' />
          <p className='mt-4'>Core Sistem Pajak</p>
        </div>
        <div className='text-center'>
          <img src='/image/efd.png' alt='efd' />
          <p className='mt-4'>Monitoring Pajak</p>
        </div>
        <div className='text-center'>
          <img src='/image/citigov.png' alt='citigov' />
          <p className='mt-4'>Pelayanan Publik</p>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Konsultan</h1>
          <p className='mt-4'>Konsultasi Sistem</p>
        </div>
      </section>
    </div>
  )
}
