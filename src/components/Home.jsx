import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BitcoinMiningCalculator from './CalcBtc'
import Testimonials from './Testimonials';

export function Home() {

    return (
        <>
            <div className='section h-auto sm:h-[550px] flex justify-center bg-[#eaf5ff]'>
                <div className='sm:w-[1320px] flex justify-center border-l-1 border-r-1 border-sec-500 relative'>
                    <div className='vertical-line'></div>
                    <div className='container flex flex-col w-[100%] xs:py-12 p-5 sm:px-10 sm:pt-5 sm:pb-12 sm:flex-row items-start sm:items-center justijy-center relative'>
                        <div className='w-[100%] sm:w-[50%] flex flex-col'>
                            <h1 className='animate__animated animate__fadeIn sm:w-[80%] w-[100%] mb-8 font-exo text-[34px] font-semibold sm:text-5xl leading-[2.4rem] sm:leading-[1.1em] text-lead-dark'>
                                Облачный майнинг без шума и пыли
                            </h1>
                            {/* <p className='w-[100%] sm:w-[80%] text-lead-dark tracking-[1px] font-exo text-xl sm:text-xl font-extralight leading-normal mt-4 mb-11'>
                                Арендуйте мощности и майните биткоин выгодно без пыли шума и проблем, пока он на дне
                            </p> */}
                            <p className='sm:hidden animate__animated animate__fadeIn animate__slower animate__duration-300ms w-[84%] sm:w-[58%] text-lead-sec tracking-[1px] font-exo text-md font-light leading-normal pb-2 border-bluegen border-b-1'>
                                Арендуйте мощности и майните биткоин выгодно без пыли шума и проблем
                            </p>
                            <div className='flex flex-row justify-between items-center sm:mb-14 mt-16 sm:mt-0 gap-10'>
                                <button className='animate__animated animate__fadeIn animate__slower animate__duration-200ms btn-effect w-full sm:w-1/2 rounded-xl py-4 px-4 mt-1 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base'><span className='z-1'>Выбрать тариф</span></button>
                                <p className='xs:hidden animate__animated animate__fadeIn animate__slower animate__duration-300ms w-[100%] sm:w-[58%] text-lead-sec tracking-[1px] font-exo text-md font-light leading-normal pb-2 border-bluegen border-b-1'>
                                    Арендуйте мощности и майните биткоин выгодно без пыли шума и проблем
                                </p>
                            </div>
                            <p className='animate__animated animate__fadeIn animate__slower animate__duration-300ms w-[100%] sm:w-[54%] text-lead-sec tracking-[0.2px] font-exo text-base sm:text-lg font-light leading-normal xs:mt-4'>
                                Тарифы от 1 месяца и от 10 тыс. руб
                            </p>
                        </div>
                        <div className='w-[100%] sm:w-[50%] sm:pt-0 pt-3'>
                            <img src='../assets/img/asic.png' className='xs:w-[65%] w-[50%] m-auto'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Вторая секция */}
            <div className='section h-auto sm:h-[400px] flex justify-center'>
                <div className='sm:w-[1320px] flex justify-center border-l-1 border-r-1 border-sec-500 relative'>
                <TransitionGroup>
                    <div className='container flex flex-col gap-6 w-[100%] p-5 sm:px-10 sm:pt-4 sm:pb-10 sm:flex-row items-start sm:items-center justijy-center relative'>
                        <CSSTransition classNames="item" timeout={700}>
                            <div className='animate__animated animate__fadeInUp animate__slower animate__duration-700ms h-[350px] w-[100%] sm:w-[33%] flex flex-col items-start bg-white rounded-xl p-8 shadow-md shadow-my-shad-lg sm:-mt-20'>
                                <img src='../assets/svg/start.svg' className='xs:w-[22%] w-[16%] mb-5'/>
                                <h1 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-left mb-2 font-exo text-[22px] font-semibold sm:text-2xl leading-[1.3em] sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                                    Начните зарабатывать просто пополнив счет
                                </h1>
                                <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo text-lg xs:text-base sm:text-lg font-extralight leading-normal mt-4 mb-11'>
                                    При выборе тарифа за вами сразу закрепляются мощности и начинается процесс майнинга
                                </p>
                            </div>
                        </CSSTransition>
                        
                        <CSSTransition classNames="item" timeout={600}>
                            <div className='animate__animated animate__fadeInUp animate__slower animate__duration-500ms h-[350px] w-[100%] sm:w-[33%] flex flex-col items-start bg-white rounded-xl p-8 shadow-md shadow-my-shad-lg sm:-mt-20'>
                                <img src='../assets/svg/min.svg' className='xs:w-[22%] w-[16%] mb-5'/>
                                <h1 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-left mb-2 font-exo text-[22px] font-semibold sm:text-2xl leading-[1.3em] sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                                    Майните биткоины без ресурсов процессора
                                </h1>
                                <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo text-lg xs:text-base sm:text-lg font-extralight leading-normal mt-4 mb-11'>
                                    Облачный майнинг в MinSharing не использует вычислительные мощности вашего устройства
                                </p>
                            </div>
                        </CSSTransition>

                        <CSSTransition classNames="item" timeout={500}>
                            <div className='animate__animated animate__fadeInUp animate__slower animate__duration-300ms h-[350px] w-[100%] sm:w-[33%] flex flex-col items-start bg-white rounded-xl p-8 shadow-md shadow-my-shad-lg sm:-mt-20'>
                                <img src='../assets/svg/btc.svg' className='xs:w-[22%] w-[16%] mb-5'/>
                                <h1 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-left mb-2 font-exo text-[22px] font-semibold sm:text-2xl leading-[1.3em] sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                                    Зарабатывайте настоящие биткоины
                                </h1>
                                <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo text-lg xs:text-base sm:text-lg font-extralight leading-normal mt-4 mb-11'>
                                    Подход MinSharing основан на майнинге настоящих биткоинов, которые вам будут выплачены на ваш личный кошелеу
                                </p>
                            </div>
                        </CSSTransition>
                    </div>
                </TransitionGroup>

                </div>
            </div>

            {/* Калькулятор секция */}
            <BitcoinMiningCalculator />

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
                                    <button className='animate__animated animate__fadeIn animate__slower animate__duration-200ms btn-effect sm:w-[250px]  rounded-xl py-4 px-4 mt-8 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base'><span className='z-1'>Выбрать тариф</span></button>
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
            <div id='how-work' className='section flex justify-center items-center xs:py-16 py-20 bg-[#eaf5ff]'>
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

            {/* Отзывы секция */}
            <div className='section flex justify-center items-center py-10'>
                <div className='sm:w-[1320px] flex justify-center border-l-1 border-r-1 border-sec-500 relative'>
                    <div className='container p-5 sm:px-10 sm:pt-4 sm:pb-10 '>
                        <h2 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-center mb-10 font-exo text-[28px] font-semibold sm:text-5xl leading-[1.1em] fadeInUp sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                            Отзывы наших клиентов
                        </h2>
                        <Testimonials />
                    </div>
                </div>
            </div>
        </>
    );
}
