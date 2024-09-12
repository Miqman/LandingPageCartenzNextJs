// import logoEfd from '@/public/image/efd.png'
import Button from '../../components/Button'
import { Section1 } from './section1'

export default function Efd() {
  const textEfd = {
    image: '/image/efdPict1.png',
    logo: '/image/logos/efd-svg.svg',
    first: 'Electronic Fiscal devices',
    mid: 'Diluncurkan pada tahun 2017',
    end: 'EFD diciptakan sebagai solusi komprehensif bagi pemerintah daerah dalam meningkatkan penerimaan pajak daerah.'
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
            EFD (Electronic Fiscal Device) adalah sistem yang digunakan oleh
            pemerintah daerah untuk memantau pendapatan para wajib pajak. Tujuan
            utama dari penggunaan EFD adalah memastikan bahwa setiap transaksi
            terekam secara akurat untuk mengurangi kemungkinan terjadinya
            ketidaksesuaian antara pendapatan yang dilaporkan oleh wajib pajak
            dan penerimaan pajak daerah yang sebenarnya. EFD dapat diterapkan
            pada berbagai jenis usaha yang termasuk dalam kategori wajib pajak,
            seperti restoran, tempat hiburan, hotel, dan parkir. <br /> <br />{' '}
            EFD dapat digunakan untuk lebih dari 100 jenis POS, lebih dari 100
            jenis tipe database, dan dapat digunakan untuk monitoring online
            platform <br /> <br /> Saat ini sudah ada sekitar 13000 lebih wajib
            pajak dari 80 lebih kota/kabupaten yang pernah terinstall di cartenz
            dengan total transaksi perbulan mencapai 23jt transaksi dan 4.1T
            rupiah untuk total pendapatan wajib pajak.
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
