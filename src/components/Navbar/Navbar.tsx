import Link from 'next/link'
import Container from '../Container'

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-slate-200 w-full z-30 shadow-sm'>
      <div className='py-4 border-b'>
        <Container>
          <div className='flex items-center justify-between gap-3 md:gap-10'>
            <Link href={'/'} className='font-bold text-3xl'>
              <span className='text-red-500'>E</span>-Commerce
            </Link>
            <div className='hidden md:block'>Search</div>
            <div className='flex items-center gap-8 md:gap-12'>
              <div>Cart Count</div>
              <div>User Menu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
