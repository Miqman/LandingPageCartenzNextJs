// import logoEfd from '@/public/image/efd.png'
import Button from '../../components/Button'
import { Section1 } from './section1'

export default function Smartgov() {
  const textSmg = {
    image: '/image/smartgovPict1.png',
    logo: '/image/logos/smartgov-svg.svg',
    first: 'Smartgov',
    mid: 'Diluncurkan pada tahun 2016/2017.',
    end: 'SmartGov merupakan satu portal aplikasi yang terdiri berbagai jenis pajak seperti PBB-P2, BPHTB, Pajak Hotel, Pajak Restoran, Pajak Parkir, Pajak Hiburan, Pajak Mineral, Pajak Walet, Pajak Air Tanah, Pajak Reklame, HKPD, PBJT, serta Retribusi  menjadi satu kesatuan.'
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
          <p className='text-xl md:text-2xl md:leading-9'>
            <span></span>
            SmartGov bertujuan untuk mempermudah pemerintah daerah yang ada di
            Indonesia dalam pengelolaan berbagai jenis pajak tersebut seperti
            pelaporan, pendataan, pemetaan, penetapan, penerimaan, maupun
            pemberkasaan. Sistem ini juga membantu pemerintah daerah dalam
            mendapatkan data secara real atau actual baik target pencapaian
            maupun realisasi penerimaan yang dapat diintegrasikan dengan pihak
            bank daerah setempat. Lalu sistem ini juga memberikan validitas data
            terkait layanan yang sudah terintegrasi dengan BPN maupun BSRE.{' '}
            <br /> <br /> Untuk capaian SmartGov sampai saat ini berjumlah xxx
            pemerintah daerah kabupaten maupun kota, dengan beragam jenis pajak
            beragam fitur yang digunakan.
          </p>
        </div>
      </div>
      <div className='my-20 flex flex-wrap items-center justify-center gap-20'>
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
