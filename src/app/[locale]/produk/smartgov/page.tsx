'use client'

import Button from '../../components/Button'
import { Section1 } from '../components/section1'
import { useTranslations } from 'next-intl'
import { useProdukSmartgov } from '@/hooks/useProduk'
import { formattedTextEnter } from '@/lib/utils'

export default function Smartgov() {
  const t = useTranslations('')
  const { dataProdukSmartgov, isLoading, isError } = useProdukSmartgov()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }
  const textSmg = {
    image: '/image/smartgovPict1.png',
    logo: '/image/logos/smartgov-svg.svg',
    first: 'Smartgov',
    mid: t(dataProdukSmartgov[0].text1),
    end: t(dataProdukSmartgov[0].text2)
  }
  const urlLogo = [
    '/image/logoSmartgov/jakarta.png',
    '/image/logoSmartgov/bandung.png',
    '/image/logoSmartgov/kabBadung.png',
    '/image/logoSmartgov/kabTangerang.png',
    '/image/logoSmartgov/banjarmasin.png',
    '/image/logoSmartgov/malang.png',
    '/image/logoSmartgov/semarang.png',
    '/image/logoSmartgov/80+.png'
  ]

  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textSmg} />

      <div className='my-20 flex flex-col items-center gap-8 md:flex-row'>
        <div className='h-[400px] w-full flex-shrink-0 rounded-3xl bg-slate-500 md:h-[656px] md:w-[438px]'>
          foto
        </div>
        <div className='misikami w-full md:w-auto'>
          <p className='whitespace-pre-line text-xl md:text-2xl md:leading-9'>
            <span></span>
            {formattedTextEnter(t(dataProdukSmartgov[0].text3))}
          </p>
        </div>
      </div>
      <div className='my-20 flex flex-wrap items-center justify-center gap-x-48 gap-y-10'>
        {urlLogo.map((url, index) => (
          <img src={url} alt={url + index} key={index} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Button className='rounded-3xl !bg-[#0199CB] !px-5 !py-3 hover:!bg-[#01b3ee]'>
          Ajukan Uji Coba
        </Button>
      </div>
    </div>
  )
}
