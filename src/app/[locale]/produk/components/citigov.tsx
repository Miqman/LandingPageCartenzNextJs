import { Section1 } from './section1'
import Button from '../../components/Button'

export default function Citigov() {
  const textEfd = {
    image: '/image/citigovPict1.png',
    logo: '/image/logos/citigov-svg.svg',
    first: 'Mendekatkan layanan pemerintah',
    mid: 'Diluncurkan pada tahun 2021',
    end: 'Citigov bertujuan untuk membuat proses layanan instansi pemerintah menjadi lebih efektif, efisien, praktis serta mendekatkan layanan pemerintah ke masyarakat dalam satu sistem'
  }
  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textEfd} />

      <div className='my-20 flex flex-col items-center gap-8 md:flex-row'>
        <div className='h-[400px] w-full flex-shrink-0 rounded-3xl bg-slate-500 md:h-[656px] md:w-[438px]'>
          foto
        </div>
        <div className='misikami w-full md:w-auto'>
          <p className='text-xl md:text-2xl md:leading-9'>
            <span></span>
            Citigov adalah platform tumbuh mandiri terintegrasi yang
            memungkinkan pemerintah membuat layanan digital dengan mudah tanpa
            memerlukan keahlian pemrograman. Dirancang untuk mempermudah
            digitalisasi di berbagai instansi pemerintahan, Citigov mendukung
            berbagai kebutuhan SKPD, seperti informasi, pelayanan, dan antrian,
            serta dapat diintegrasikan dengan sistem yang sudah ada. Dengan
            Citigov, pemerintah diharapkan dapat bekerja lebih cepat, efisien,
            dan efektif dalam melayani masyarakat dan berkoordinasi antar dinas.{' '}
            <br /> <br /> Platform ini juga mudah diakses oleh semua lapisan
            masyarakat, baik yang paham teknologi maupun yang tidak, sehingga
            inklusivitas layanan tetap terjaga. Dengan menyediakan semua layanan
            dalam satu platform, Citigov menyederhanakan akses dan interaksi
            antara masyarakat dan pemerintah, menciptakan pengalaman layanan
            publik yang lebih terintegrasi dan efisien.
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
