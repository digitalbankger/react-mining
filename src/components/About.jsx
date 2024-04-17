import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export function About() {

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
                                        Майнинг на MinShar<span className='text-bluegen'>ing</span>
                                    </h2>
                                    <div className='flex flex-row gap-4 items-center'>
                                        <div className='sm:w-1/3 flex flex-row gap-4 mb-4'>
                                            <img src='../assets/svg/icon.svg' className='w-[20%]'/>
                                            <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo !leading-[1.3em] text-lg sm:text-lg font-light'>
                                                Легальная компания
                                            </p>
                                        </div>
                                        <div className='sm:w-1/3 flex flex-row gap-4 mb-4'>
                                            <img src='../assets/svg/icon.svg' className='w-[20%]'/>
                                            <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo !leading-[1.3em] text-lg sm:text-lg font-light'>
                                                Легальная компания
                                            </p>
                                        </div>
                                    </div>
                                    <p className='w-[100%] sm:w-[100%] text-left text-dark-lead tracking-[1px] font-exo text-base sm:text-lg font-light leading-normal'>
                                        Нет необходимости развертывать майнинг-машину самостоятельно. Просто купите продукт онлайн, и вы сможете пользоваться профессиональными услугами, предоставляемыми MinSharING. Следуйте стратегиям инвестирования в криптовалюту MinSharING и получайте положительную прибыль от майнинга криптовалюты.
                                    </p>
                                    <button className='animate__animated animate__fadeIn animate__slower animate__duration-200ms btn-effect w-[250px] rounded-xl py-4 px-4 mt-8 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base'><span className='z-1'>Выбрать тариф</span></button>
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

            {/* Секция пятая */}
            <div className='section flex justify-center items-center xs:py-16 py-20 bg-[#eaf5ff]'>
                <div className='sm:w-[1320px] flex justify-center border-l-1 border-r-1 border-sec-500 relative'>
                    <div className='container flex flex-col gap-6 w-[100%] p-5 sm:px-10 sm:pt-4 sm:pb-10 relative'>
                        <h2 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-center mb-6 font-exo text-[28px] font-semibold sm:text-5xl leading-[1.1em] fadeInUp sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                            Схема работы компании
                        </h2>
                        <TransitionGroup>
                            <CSSTransition classNames="items" timeout={500}>
                                <img src='../assets/img/min-schema1.png' className='animate__animated animate__fadeIn animate__slower animate__duration-700ms w-full'/>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>
            </div>

        </>
    );
}
