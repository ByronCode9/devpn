import React from 'react'
import dextools from "../../../assets/dextools.svg"
import uniswap from "../../../assets/uniswap-black.svg"
import twitter from "../../../assets/x-black.svg"
import telegram from "../../../assets/telegram-black.svg"
import { Fade } from 'react-awesome-reveal'


const Connect = () => {
  return (
    
    <div className='container mx-auto py-5 pb-5 md:py-20 md:pb-20'>
        <h1 className='text-6xl opacity-20 text-[#181818] text-end pb-20'>
            Connect With Us
        </h1>
        <div className="relative grid grid-cols-2 md:grid-cols-2 gap-5 lg:grid-cols-4 mx-auto justify-between items-center">
            <div className="telegram grid-col mx-auto w-full h-full rounded-xl transition ease-in text-white hover:text-[#181818] p-10 z-50 hover:bg-white hover:shadow">
                <a href="www">
                    <img src={telegram} alt="" className='w-20 mx-auto'/>
                    <div className="text-center pt-5 text-3xl">Telegram</div>
                </a>
            </div>
            <div className="x grid-col mx-auto w-full h-full rounded-xl transition ease-in text-white hover:text-[#181818] p-10 z-50 hover:bg-white hover:shadow">
                <a href="www">
                    <img src={twitter} alt="" className='w-20 mx-auto'/>
                    <div className="text-center pt-5 text-3xl">Twitter / X</div>
                </a>
            </div>
            <div className="dextools grid-col mx-auto w-full h-full rounded-xl transition ease-in text-white hover:text-[#181818] p-10 z-50 hover:bg-white hover:shadow">
                <a href="www">
                    <img src={dextools} alt="" className='w-[4rem] mx-auto'/>
                    <div className="text-center pt-5 text-3xl">Dextools</div>
                </a>
            </div>
            <div className="uniswap grid-col mx-auto w-full h-full rounded-xl transition ease-in text-white hover:text-[#181818] p-10 z-50 hover:bg-white hover:shadow">
                <a href="www">
                    <img src={uniswap} alt="" className='w-[4rem] mx-auto'/>
                    <div className="text-center pt-5 text-3xl">Uniswap</div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Connect