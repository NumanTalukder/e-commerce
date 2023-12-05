import Link from 'next/link'
import Container from '../Container'
import FooterList from './FooterList'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Shop Categories</h3>
            <Link href='#'>Phone</Link>
            <Link href='#'>Laptop</Link>
            <Link href='#'>Desktop</Link>
            <Link href='#'>Watch</Link>
            <Link href='#'>TV</Link>
            <Link href='#'>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Customer Service</h3>
            <Link href='#'>Contact Us</Link>
            <Link href='#'>Shipping Policies</Link>
            <Link href='#'>Returns & Exchange</Link>
            <Link href='#'>FAQs</Link>
          </FooterList>

          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-base font-bold mb-2'>About Us</h3>
            <p className='mb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              officia ad voluptate facere consequuntur ipsa expedita veniam?
              Dolore, est a. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Delectus, autem.
            </p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          <FooterList>
            <h3 className='text-base font-bold mb-2'>Follow Us</h3>
            <div className='flex gap-2'>
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaTwitter size={24} />
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  )
}

export default Footer
