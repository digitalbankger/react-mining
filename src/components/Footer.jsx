import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Footer() {
    const location = useLocation();

    return (
        <>
        <div 
            className='h-[50px] xs:h-[50px] flex flex-row justify-center items-center text-black bg-[#383b53] cursor-pointer flare-button'
        >
            <div 
                className='container flex flex-row xs:justify-center justify-between items-center px-5 sm:px-10 py-6'
            >
                <p className='xs:hidden flex sm:flex-row flex-col text-base xs:text-[14px] font-exo leading-snug font-light text-lead tracking-[0.4px] items-center xs:items-start'><div className='flex flex-row'><img src='../assets/svg/col.svg' className='mr-2'/><span className='flex flex-row text-lg xs:text-[16px]'>Подпишитесь на наш <span className='border-b-1 border-white mx-2'>Телеграм канал </span></span></div> — скидки, розыгрыши, акции, актуальные предложения, инсайты экспертов</p>
                <p className='sm:hidden flex flex-row gap-2 text-base xs:text-[12px] font-exo leading-snug font-light text-lead tracking-[0.4px] items-center justify-between'><img src='../assets/svg/col.svg' className='w-[20px] mr-2'/> Актуальные новости и предложения в телеграм канале</p>
            </div>
        </div>

        <div 
            className='flex flex-row justify-center items-center text-black bg-[#27293a]'
        >
            <div 
                className='container flex flex-col sm:flex-row justify-between px-5 sm:px-10 py-6'
            >
                <div className='sm:w-2/4 flex flex-col xs:items-center'>
                    <Link to="/" className='flex flex-row items-center'>
                        <img src="./assets/svg/logo-light.svg" width={180}/>
                    </Link>
                    <p className='xs:mt-2 w-[90%] sm:w-[60%] flex flex-row xs:text-center xs:text-lg text-base font-exo leading-snug font-light text-lead tracking-[0.4px] items-center'> MinSharing — облачный сервис для добычи настоящего биткоина без шума и пыли.</p>
                </div>
                
                <ul className='flex flex-col xs:items-center gap-2 xs:my-10'>
                    <Link to="/" className='sm:mx-2 text-lead font-exo xs:text-center text-base font-light s-tran hover:bg-[#f1f4f733] rounded-md py-2 sm:px-5'>Главная</Link>
                    <Link to="/about" className='sm:mx-2 text-lead font-exo  xs:text-center text-base font-light s-tran hover:bg-[#f1f4f733] rounded-md py-2 sm:px-5'>О компании</Link>
                    <Link to="/about#how-work" className='sm:mx-2 text-lead font-exo xs:text-center text-base font-light s-tran hover:bg-[#f1f4f733] rounded-md py-2 sm:px-5'>Как работает?</Link>
                    <Link to="/contact" className='sm:mx-2 text-lead font-exo xs:text-center text-base font-light s-tran hover:bg-[#f1f4f733] rounded-md py-2 sm:px-5'>Контакты</Link>
                </ul>

                <div className='flex flex-col xs:items-center gap-2'>
                    <div className='flex flex-row sm:mx-5 py-2 mx-3'>
                        <img src="./assets/svg/tel.svg" width={25}/>
                        <div className='flex flex-col items-end ms-2 justify-center '>
                            <p className='text-base font-exo font-normal text-lead tracking-[0.8px]'>+7 (897)-010-26-28</p>
                            <p className='text-xs font-exo font-extralight text-lead tracking-[0.4px]'>Позвонить по телефону</p>
                        </div>
                    </div>
                    <div className='flex flex-row sm:mx-5 py-2 mx-3'>
                        <img src="./assets/svg/tel.svg" width={25}/>
                        <div className='flex flex-col items-end ms-2 justify-center '>
                            <p className='text-base font-exo font-normal text-lead tracking-[0.8px]'>+7 (897)-010-26-28</p>
                            <p className='text-xs font-exo font-extralight text-lead tracking-[0.4px]'>Позвонить по телефону</p>
                        </div>
                    </div>
                    <div className='flex flex-row pr-7 sm:mx-5 py-2 mx-3'>
                        <img src="./assets/svg/telegram.svg" width={25}/>
                        <div className='flex flex-col items-end ms-2 justify-center '>
                            <p className='text-base font-exo font-normal text-lead tracking-[0.8px]'>Telegram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className='flex flex-row justify-center items-center text-black bg-[#27293a]'
        >
            <div 
                className='container flex flex-row justify-between items-center px-5 sm:px-10 pb-6'
            >
                <p className='w-full flex flex-row xs:text-[14px] text-base font-exo xs:text-center leading-snug font-light text-lead tracking-[0.4px] items-center pt-4 border-t-1 border-lead'>MinSharing — облачный майнинг. Все права защищены!</p>
            </div>
        </div>
        </>
    )
}