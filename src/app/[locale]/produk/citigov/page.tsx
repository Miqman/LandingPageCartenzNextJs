'use client'

import { Section1 } from '../components/section1'
import Button from '../../components/Button'
import { useProdukCitigov } from '@/hooks/useProduk'
import { useTranslations } from 'next-intl'
import { formattedTextEnter } from '@/lib/utils'

export default function Citigov() {
  const t = useTranslations('')
  const { dataProdukCitigov, isLoading, isError } = useProdukCitigov()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  const textEfd = {
    image: '/image/citigovPict1.png',
    logo: '/image/logos/citigov-svg.svg',
    first: 'Mendekatkan layanan pemerintah',
    mid: t(dataProdukCitigov[0].text1),
    end: t(dataProdukCitigov[0].text2)
  }
  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textEfd} />

      <div className='my-20 flex flex-col items-center gap-8 md:flex-row'>
        <div className='h-[400px] w-full flex-shrink-0 rounded-3xl bg-slate-500 md:h-[656px] md:w-[438px]'>
          foto
        </div>
        <div className='misikami w-full md:w-auto'>
          <p className='whitespace-pre-line text-xl md:text-2xl md:leading-9'>
            <span></span>
            {formattedTextEnter(t(dataProdukCitigov[0].text3))}
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button className='rounded-3xl !bg-[#0199CB] !px-5 !py-3 hover:!bg-[#01b3ee]'>
          Ajukan Uji Coba
        </Button>
      </div>
    </div>
  )
}
