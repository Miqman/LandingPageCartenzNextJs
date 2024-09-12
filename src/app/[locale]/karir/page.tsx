export default function Karir() {
  return (
    <div>
      <div className='h-[100px] w-full'></div>
      <section className="relative h-[282px] w-full bg-[url('/image/karirHeader.png')] bg-cover bg-no-repeat">
        <div className='absolute inset-0 h-full w-full bg-black/70' />
        <div className='container relative z-10 mx-auto my-auto flex h-full flex-col justify-center gap-10  text-white'>
          <h1 className='text-[64px] font-bold'>Karir</h1>
          <p className='text-xl'>
            Yuk bergabung bersama kami untuk Pemerintahan Indonesia lebih baik
          </p>
        </div>
      </section>

      <section className='container mx-auto'>
        <div className='flex justify-between gap-10 bg-red-200'>
          <div>search</div>
          <div>select option1</div>
          <div>select option2</div>
        </div>
      </section>
    </div>
  )
}
