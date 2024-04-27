import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom'


export function Contact() {

    return (
        <>
            {/* Секция четвертая */}
            <div className='section flex justify-center items-center py-20'>
                <div className='sm:w-[1320px] flex justify-center border-l-1 border-r-1 border-sec-500 relative'>
                    <div className='container flex flex-col gap-6 w-[100%] p-5 sm:px-10 sm:pt-4 sm:pb-10 relative'>
                        <TransitionGroup>
                        <div className='flex flex-col sm:flex-row items-center gap-12'>
                            <CSSTransition classNames="item" timeout={500}>
                                <div className='animate__animated animate__fadeInUp animate__slower animate__duration-700ms w-[100%] sm:w-[60%] flex flex-col justify-center'>
                                    <h2 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-left mb-6 font-exo text-[28px] font-semibold sm:text-5xl leadinfadeInUp sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                                        Как с нами связаться
                                    </h2>
                                    <p className='w-[100%] sm:w-[100%] text-left text-dark-lead tracking-[1px] font-exo text-base sm:text-lg font-light leading-normal'>
                                        Свяжитесь с нами удобным способом
                                    </p>
                                    <div className='flex flex-row gap-8 items-start py-5'>
                                        <div className='flex flex-row py-2'>
                                            <img src="./assets/svg/tel.svg" width={25}/>
                                            <div className='flex flex-col items-end ms-2 justify-center'>
                                                <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px]'>+7 (897)-010-26-28</p>
                                                <p className='text-xs font-exo font-light text-lead-dark tracking-[0.4px]'>Позвонить по телефону</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row py-2'>
                                            <img src="./assets/svg/telegram.svg" width={25}/>
                                            <div className='flex flex-col items-end ms-2 justify-center'>
                                                <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px]'>Telegram</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/about"><button className='animate__animated animate__fadeIn animate__slower animate__duration-200ms btn-effect w-[250px] rounded-xl py-4 px-4 mt-8 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base'><span className='z-1'>О компании</span></button></Link>
                                </div>
                            </CSSTransition>
                            <CSSTransition classNames="item" timeout={500}>
                                <div className='w-[100%] sm:w-1/2 '>
                                    <div className='animate__animated animate__fadeInUp animate__slower animate__duration-500ms w-[100%] flex flex-col items-start rounded-xl'>
                                        <img src='../assets/img/min-farm.jpg' className='w-full rounded-xl'/>
                                    </div>
                                 </div>
                            </CSSTransition>
                        </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>

        </>
    );
}
