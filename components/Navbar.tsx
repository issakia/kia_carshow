import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
      <Link href='../pages/signin' className='flex justify-center items-center'>
      <CustomButton
        title='ثبت نام'
        btnType='submit'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      </Link>
      <Link href='../pages/partners' className='flex justify-center items-center'>
      <CustomButton
        title='شرکاء'
        btnType='submit'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      </Link>
      <Link href='../pages/details' className='flex justify-center items-center'>
      <CustomButton
        title='جزییات'
        btnType='submit'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      </Link>
      <Link href='events' className='flex justify-center items-center'>
      <CustomButton
        title='اخبار'
        btnType='submit'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      </Link>
    </nav>
  </header>
);

export default NavBar;
