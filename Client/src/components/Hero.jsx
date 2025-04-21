import { Award, Search, User } from 'lucide-react'
import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <div className='bg-slate-800 pt-14'>
        <div className='lg:h-[700px] max-w-7xl mx-auto flex md:flex-row flex-col gap-10 items-center'>
            {/* text section */}
            <div className='space-y-7 px-4 md:px-0'>
                <h1 className='text-4xl mt-10 md:mt-0 md:text-6xl font-extrabold text-gray-200'>Kham pha <span className='text-blue-500'> Hơn 14000+ <br /> khoa hoc tai day</span>  </h1>
                <p className='text-gray-300 text-lg'>tat cac khoa hoc danh cho sinh vien nganh cong nghe thong tin va tra cuu tai lieu </p>
                <div className='inline-flex relative'>
                    <input type="text" placeholder='Tim kiem khoa hoc tai day...' className='bg-gray-200 w-[350px] md:w-[450px] text-gray-800 p-4 pr-40 rounded-lg rounded-r-xl placeholder:text-gray-500'/>
                    <button className='px-4 py-[14px] flex gap-1 items-center bg-blue-500 font-semibold absolute right-0 text-white rounded-r-lg text-xl'>Search<Search width={20} height={20}/></button>
                </div>
            </div>
            {/* image section */}
            <div className='flex md:h-[700px] items-end relative px-4 md:px-0'>
                <img src={HeroImg} alt="" className='w-[600px] shadow-blue-500 drop-shadow-lg'/>
                <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[35%] right-0 px-4 py-2'>
                    <div className='rounded-full bg-blue-400 p-2 text-white'>
                        <User/>
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'><CountUp end={4500}/>+</h2>
                        <p className='italic text-sm text-gray-600 leading-none'>So luong sinh vien dang theo hoc</p>
                    </div>
                </div>
                <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[15%] left-0 px-4 py-2'>
                    <div className='rounded-full bg-blue-400 p-2 text-white'>
                        <Award/>
                    </div>
                    <div>
                        <h2 className='font-bold text-2xl'><CountUp end={684}/>+</h2>
                        <p className='italic text-sm text-gray-600 leading-none'>so chung chi ma sinh vien nhan duoc</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero