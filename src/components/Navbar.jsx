export function Navbar() {
  return (
    <div className='py-1 sm:py-5'>
      <div className='container mx-auto max-w-[820px]'>
        <div className='flex justify-between items-center'>
          <span className='text-white text-3xl font-black bg-opaque h-[45px] w-[45px] flex items-center justify-center rounded-sm cursor-pointer'>
            N<span className='text-brand ml-[1px]'>.</span>
          </span>
          <div className='text-neutral-400   flex gap-10'>
            <a href='/' className='hover:text-white transition tracking-wider'>
              Home
            </a>
            <a href='/' className='hover:text-white transition tracking-wider'>
              Categories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
