import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const BitcoinMiningCalculator = () => {
    const [depositAmount, setDepositAmount] = useState(0);
    const [months, setMonths] = useState(1);
    const [device, setDevice] = useState('Default Device');
    const [electricityPrice, setElectricityPrice] = useState(0);
    const [bitcoinPrice, setBitcoinPrice] = useState(0);
    const [UsdtPrice, setUsdtPrice] = useState(0);
    const [bitcoinAmount, setBitcoinAmount] = useState(0);

    useEffect(() => {
        fetchBitcoinPrice();
    }, []);

    const fetchBitcoinPrice = async () => {
        try {
            const response = await fetch('https://api.criptamat.ru/rate/get');
            const data = await response.json();
            
            const btcObject = data.find(item => item.currency === 'btc');
            const usdtObject = data.find(item => item.currency === 'usdt');
    
            const btcPrice = btcObject ? btcObject.value : 0;
            const usdtPrice = usdtObject ? usdtObject.value : 0;
    
            setBitcoinPrice(Math.floor(btcPrice));
            setUsdtPrice(Math.floor(usdtPrice));
        } catch (error) {
            console.error('Failed to fetch Bitcoin price', error);
        }
    };
    
    const handleMonthsChange = (event) => {
        setMonths(parseInt(event.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const bitcoinAmount = depositAmount / bitcoinPrice;
        setBitcoinAmount(bitcoinAmount);
    };

    return (
        <>
        <div className='section flex justify-center' id='calc'>
                <div className='sm:w-[1320px] flex justify-center border-l-1 border-r-1 border-sec-500 relative'>
                    <div className='container flex flex-col gap-6 w-[100%] p-5 sm:px-10 xs:py-10 sm:pt-4 sm:pb-20 relative'>
                        <h2 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-left xs:text-center mb-6 font-exo text-[28px] font-semibold sm:text-5xl leadinfadeInUp sm:leading-[1.2em] tracking-[0.6px] text-lead-dark'>
                            Калькулятор майнинга
                        </h2>
                        <TransitionGroup>
                        <div className='flex flex-col sm:flex-row gap-8'>
                            <CSSTransition classNames="item" timeout={500}>
                                <div className='animate__animated animate__fadeInUp animate__slower animate__duration-700ms xs:mb-4 w-[100%] sm:w-1/2 flex flex-col items-start'>
                                     <form onSubmit={handleSubmit} id="myForm" className='w-full flex flex-col gap-6'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="depositAmount" className='text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-normal leading-normal'>Размер вклада: (Руб)</label>
                                            <input type="number" id="depositAmount" className='w-full border-gray-100 rounded-xl px-3 py-4 shadow-l-shad text-dark-lead tracking-[1px] font-exo text-lg sm:text-lg font-light leading-normal' value={depositAmount} onChange={(e) => setDepositAmount(parseFloat(e.target.value))} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="device" className='text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-normal leading-normal'>Устройство:</label>
                                            <div className='flex flex-row gap-6 bg-[#f4f6fa] p-3 rounded-xl shadow-l-shad'>
                                                <img src='../assets/img/asic.png' className='xs:w-[20%] w-[25%]'/>
                                                <div className='flex flex-col gap-2 justify-center'>
                                                    <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo xs:text-[15px] text-lg sm:text-lg font-light leading-normal'>
                                                        По умолчанию MinSharing
                                                    </p>
                                                    <p className='w-[100%] sm:w-[100%] text-left text-dark-lead tracking-[1px] font-exo xs:text-[15px] text-lg sm:text-lg font-light leading-normal'>
                                                        Asic Antminer 6.00.4 200Вт
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                        <label htmlFor="depositAmount" className='text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-normal leading-normal'>Цена электроэнергии:</label>
                                            <input className='w-full border-gray-100 rounded-xl px-3 py-4 shadow-l-shad text-dark-lead tracking-[1px] font-exo text-lg sm:text-lg font-light leading-normal' type="text" id="electricityPrice" readOnly value={'Базовая стоимость'} onChange={(e) => setElectricityPrice(parseFloat(e.target.value))}/>
                                        </div>
                                        <div className="flex sm:flex-row items-start sm:items-center space-x-0 sm:space-x-6 gap-6 sm:space-y-0">
                                            <div className='flex flex-col gap-4'>
                                                <label className='font-exo font-light text-lead-dark'>
                                                <input type="radio" name="boxSize" value="1" className="mr-3 text-lead-dark" onChange={handleMonthsChange}/>
                                                    На 1 месяц
                                                </label>
                                                <label className='font-exo font-light text-lead-dark'>
                                                <input type="radio" name="boxSize" value="3" className="mr-3 text-lead-dark" onChange={handleMonthsChange}/>
                                                    На 3 месяца
                                                </label>
                                            </div>
                                            <div className='flex flex-col gap-4'>
                                                <label className='font-exo font-light text-lead-dark'>
                                                <input type="radio" name="boxSize" value="6" className="mr-3 text-lead-dark" onChange={handleMonthsChange}/>
                                                    На 6 месяцев
                                                </label>
                                                <label className='font-exo font-light text-lead-dark'>
                                                <input type="radio" name="boxSize" value="12" className="mr-3 text-lead-dark" onChange={handleMonthsChange}/>
                                                    На 12 месяцев
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" form="myForm" className='xs:block hidden animate__animated animate__fadeIn animate__slower animate__duration-200ms btn-effect w-full sm:w-full rounded-xl py-4 px-4 mt-1 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base mt-4'><span className='z-1'>Рассчитать количество</span></button>
                                    </form>
                                </div>
                            </CSSTransition>
                            <CSSTransition classNames="item" timeout={500}>
                                <div className='w-[100%] sm:w-1/2 '>
                                    <div className='flex flex-row gap-4 items-center'>
                                        <div className='flex flex-row gap-2 mb-4'>
                                            <img src='../assets/svg/btc2.svg' className='w-[30%]'/>
                                            <p className='w-[100%] sm:w-[100%] text-left text-dark-lead tracking-[1px] font-exo text-lg sm:text-lg font-light leading-normal'>
                                                {bitcoinPrice}
                                            </p>
                                        </div>
                                        <div className='flex flex-row gap-2 mb-4'>
                                            <img src='../assets/svg/buks.svg' className='w-[30%]'/>
                                            <p className='w-[100%] sm:w-[100%] text-left text-dark-lead tracking-[1px] font-exo text-lg sm:text-lg font-light leading-normal'>
                                                {UsdtPrice}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='animate__animated animate__fadeInUp animate__slower animate__duration-500ms w-[100%] flex flex-col items-start bg-[#e5eaf2] rounded-xl p-8'>
                                        <h3 className='animate__animated animate__fadeIn sm:w-[100%] w-[100%] text-left mb-4 font-exo text-2xl font-semibold sm:text-2xl leading-[2.4rem] sm:leading-[1.2em] tracking-[0.6px] pb-8 border-b-1 border-gray-300 text-lead-dark mb-8'>
                                            Результаты расчета
                                        </h3>
                                        <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal '>
                                            Количество биткоинов всего: <span className='text-dark-lead font-normal'>— {bitcoinAmount.toFixed(5)} <span className='text-bluegen'>₿</span></span>
                                        </p>
                                        <p className='w-[100%] sm:w-[100%] text-left text-lead-dark tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal mt-4 mb-11'>
                                            Количество биткоинов в месяц: <span className='text-dark-lead font-normal'>— {(bitcoinAmount / months).toFixed(5)} <span className='text-bluegen'>₿</span></span>
                                        </p>
                                    </div>
                                    <button type="submit" form="myForm" className='xs:hidden animate__animated animate__fadeIn animate__slower animate__duration-200ms btn-effect w-full sm:w-full rounded-xl py-4 px-4 mt-1 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base mt-4'><span className='z-1'>Рассчитать количество</span></button>
                                </div>
                            </CSSTransition>
                        </div>
                        </TransitionGroup>
                    </div>
                </div>
        </div>
        </>
    );
};

export default BitcoinMiningCalculator;
