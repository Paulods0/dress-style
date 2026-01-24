export default function CartProduct({ image, title }: { image: string; title: string }) {
  return (
    <div className='flex flex-col w-full h-full'>
      <h3 className='uppercase text-zinc-300'>produto</h3>
      <div className='flex h-full w-[115px] gap-8 p-2'>
        <img src={image} className='h-[133px] w-full object-cover' alt='' />
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold'>{title}</h3>
          <div className='flex items-center gap-4'>
            <p className='uppercase flex items-center gap-2 border-r pr-4'>
              tamanho <span>34</span>
            </p>
            <p className='uppercase flex items-center gap-2'>
              cor <div className='size-4 bg-black' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
