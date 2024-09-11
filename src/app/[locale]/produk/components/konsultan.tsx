import { Section1 } from './section1'

export default function Konsultan() {
  const textEfd = {
    image: '/image/consultanPict1.png',
    logo: '/image/logos/consultan-svg.svg',
    first: 'Layanan Konsultasi & Project',
    mid: 'Cartenz mulai secara aktif mengikuti kegiatan project sebagai salah satu layanan utama pada tahun 2022.',
    end: 'Project Consultant bertujuan untuk memberikan layanan konsultasi dan rekomendasi, khususnya di bidang teknologi informasi, kepada  seluruh tingkat instansi pemerintahan.'
  }
  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textEfd} />
    </div>
  )
}
