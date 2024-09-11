interface Section1Props {
  logo: string
  textLogo: {
    first: string
    mid: string
    end: string
  }
}

export const Section1: React.FC<Section1Props> = ({ logo, textLogo }) => (
  <section className='rounded-tr-3xl bg-red-200'>
    <div className='flex flex-col gap-6 md:flex-row'>
      {/* Kolom Kiri (66%) */}
      <div className='w-full md:w-2/3'>
        <img src={logo} alt='logo' />
        <p>{textLogo.first}</p>
        <p>{textLogo.mid}</p>
        <p>{textLogo.end}</p>
      </div>

      {/* Kolom Kanan (34%) */}
      <div className='h-full w-full bg-blue-200 md:w-1/3'>gambar</div>
    </div>
  </section>
)
