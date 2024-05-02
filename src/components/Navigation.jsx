import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
    const location = useLocation();
    const coloredRoutes = ['/about', '/contact', ];
    const isColoredRoute = coloredRoutes.includes(location.pathname);
    const [isSticky, setSticky] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isCallOpen, setCallOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    const toggleCall = () => {
        setCallOpen(!isCallOpen);
      };
      
    const handleCloseMenu = () => {
        const menu = document.getElementById('menu');
        menu.classList.add('animate__fadeOutRight');
        menu.addEventListener('animationend', () => {
          setMenuOpen(false);
          menu.classList.remove('animate__fadeOutRight');
        }, { once: true });
      };
      

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const headerStyle = {
        backgroundColor: isSticky || isColoredRoute ? '#fff' : '#fff',

    };
    
    function modal(){
        throw new Error('Function not implemented.');
    }

    return (
        <>
        <div 
            className='h-[50px] xs:h-[50px] flex flex-row justify-center items-center text-black bg-[#27293a] cursor-pointer flare-button'
        >
            <div 
                className='container flex flex-row justify-between items-center px-5 sm:px-10 py-6'
            >
                <p className='xs:hidden flex sm:flex-row flex-col text-base xs:text-[14px] font-exo leading-snug font-light text-lead tracking-[0.4px] items-center xs:items-start'><div className='flex flex-row'><img src='../assets/svg/col.svg' className='mr-2'/><span className='flex flex-row text-lg xs:text-[16px]'>Подпишитесь на наш <span className='border-b-1 border-white mx-2'>Телеграм канал </span></span></div> — скидки, розыгрыши, акции, актуальные предложения, инсайты экспертов</p>
                <p className='sm:hidden flex flex-row gap-2 text-base xs:text-[12px] font-exo leading-snug font-light text-lead tracking-[0.4px] items-center justify-between'><img src='../assets/svg/col.svg' className='w-[20px] mr-2'/> Актуальные новости и предложения в телеграм канале</p>
            </div>
        </div>

        <div 
            className='h-[80px] flex flex-row justify-center items-center text-black header shadow-md shadow-my-shad bg-[#fbfdff]'
        >
            <div 
                className='container flex flex-row justify-between items-center px-5 sm:px-10 py-6 mt-1'
            >
                <Link to="/" className='flex flex-row items-center'>
                    <img src="./assets/svg/logo-new.svg" className='w-[200px] xs:w-[180px]'/>
                </Link>

                <div className='flex flex-row'>

                    <a href='#calc' className='hidden sm:flex flex-row items-center sm:mx-5 mx-3'>
                        <img src="./assets/svg/calc.svg" width={28} />
                        <p className='text-base font-exo leading-snug font-normal text-lead-dark tracking-[0.4px] ms-3'>Калькулятор майнинга</p>
                    </a>

                    <div className='hidden sm:flex flex-row pr-7 sm:mx-5 mx-3'>
                        <img src="./assets/svg/tel.svg" width={25}/>
                        <div className='flex flex-col items-end ms-2 justify-center '>
                            <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px]'>+7 (897)-010-26-28</p>
                            <p className='text-xs font-exo font-extralight text-lead-dark tracking-[0.4px]'>Позвонить по телефону</p>
                        </div>
                    </div>

                    <div className='hidden sm:flex flex-row items-center'>
                        <button 
                            className='btn-effect w-full rounded-xl py-3 px-4 mt-1 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base'
                            onClick={toggleCall}
                        >
                            <span className='z-1'>Заказать звонок</span>
                        </button>
                    </div>

                    {isCallOpen && (
                        <div 
                            className="fixed bg-bordo/50 top-0 right-0 left-0 bottom-0 z-50"
                            onClick={toggleCall}
                        >
                            <div 
                                id="menu"
                                className={`animate__animated ${isCallOpen ? 'animate__fadeIn' : ''} absolute ml-2 bg-white shadow-md w-2/3 sm:w-[300px] h-[400px] inset-0 flex justify-center items-center p-8`}
                            >
                              <span 
                                className='absolute text-white top-3 z-10 right-5 cursor-pointer'
                                onClick={toggleCall}
                              >
                                  <div className="w-6 h-6 relative">
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-bluegen rotate-45"></div>
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-bluegen rotate-45"></div>
                                  </div>
                              </span>
                              <ul className='flex flex-col'>
                                  <span className='text-lg tracking-[0.6px] text-lead-dark font-medium my-3'>МЕНЮ</span>

                                  <Link to="/" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>Главная</Link>
                                  <Link to="/about" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>О компании</Link>
                                  <Link to="/about#how-work" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>Как работает?</Link>
                                  <Link to="/contact" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>Контакты</Link>
                              </ul>
                              <div className='flex flex-row items-center my-6'>
                                  <img src="./assets/svg/telegram.svg" width={22} />
                                  <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px] ms-2'>Telegram</p>
                              </div>

                              <div className='flex flex-row my-6'>
                                  <img src="./assets/svg/tel.svg" width={22}/>
                                  <div className='flex flex-col items-end ms-2'>
                                      <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px]'>+7 (903) 777-19-98</p>
                                      <p className='text-xs font-exo font-extralight text-lead-dark tracking-[0.4px]'>Позвонить по телефону</p>
                                  </div>
                              </div>
                            </div>
                        </div>
                    )}

                    <div className='hidden xs:flex flex-row gap-2 items-center ms-2 justify-end'>
                        <p className='text-lg font-exo font-normal text-lead-dark tracking-[0.8px]'>Меню</p>
                        <img src="./assets/svg/menu-dark.svg" 
                            width={28} 
                            onClick={toggleMenu}
                        />
                    </div>
                    

                    {isMenuOpen && (
                        <div 
                            className="fixed bg-bordo/50 top-0 right-0 left-0 bottom-0 z-50"
                            onClick={toggleMenu}
                        >
                            <div 
                                id="menu"
                                className={`animate__animated ${isMenuOpen ? 'animate__fadeInRight' : ''} absolute ml-2 bg-white shadow-md w-2/3 sm:w-[300px] h-[100vh] right-0 top-0 p-8`}
                            >
                              <span 
                                className='absolute text-white top-3 z-10 right-5 cursor-pointer'
                                onClick={handleCloseMenu}
                              >
                                  <div className="w-6 h-6 relative">
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-bluegen rotate-45"></div>
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-bluegen rotate-45"></div>
                                  </div>
                              </span>
                              <ul className='flex flex-col'>
                                  <span className='text-lg tracking-[0.6px] text-lead-dark font-medium my-3'>МЕНЮ</span>

                                  <Link to="/" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>Главная</Link>
                                  <Link to="/about" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>О компании</Link>
                                  <Link to="/about#how-work" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>Как работает?</Link>
                                  <Link to="/contact" className='text-lg tracking-[0.6px] text-lead-dark font-light my-3'>Контакты</Link>
                              </ul>
                              <div className='flex flex-row items-center my-6'>
                                  <img src="./assets/svg/telegram.svg" width={22} />
                                  <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px] ms-2'>Telegram</p>
                              </div>

                              <div className='flex flex-row my-6'>
                                  <img src="./assets/svg/tel.svg" width={22}/>
                                  <div className='flex flex-col items-end ms-2'>
                                      <p className='text-base font-exo font-normal text-lead-dark tracking-[0.8px]'>+7 (903) 777-19-98</p>
                                      <p className='text-xs font-exo font-extralight text-lead-dark tracking-[0.4px]'>Позвонить по телефону</p>
                                  </div>
                              </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>

        <div 
            className={`xs:hidden h-[60px] flex flex-row justify-center items-center text-black header shadow-lg ${!isColoredRoute ? 'shadow-black' : 'shadow-black-400'}`}
            style={headerStyle}
        >
            <div 
                className='container flex flex-row justify-between items-center px-5 sm:px-10 py-2 '
            >
                <div className='hidden sm:flex flex-row items-center'>
                    <button 
                        className='btn-effect w-full rounded-xl py-2 px-4 border-[0.5px] border-btnsec flex flex-row items-center justify-center bg-bluegen text-lead font-exo tracking-[0.5] text-base'
                        onClick={toggleCall}
                    >
                        <img src="./assets/svg/menu.svg" className='z-1 mr-2' width={20}/>
                        <span className='z-1'>Выбрать тариф</span>
                    </button>
                </div>

                <ul className='sm:flex hidden space-x-6'>
                    <Link to="/" className='mx-2 text-lead-dark font-exo text-base font-medium s-tran hover:bg-[#f1f4f7] rounded-md py-2 px-5'>Главная</Link>
                    <Link to="/about" className='mx-2 text-lead-dark font-exo text-base font-medium s-tran hover:bg-[#f1f4f7] rounded-md py-2 px-5'>О компании</Link>
                    <Link to="/about#how-work" className='mx-2 text-lead-dark font-exo text-base font-medium s-tran hover:bg-[#f1f4f7] rounded-md py-2 px-5'>Как работает?</Link>
                    <Link to="/contact" className='mx-2 text-lead-dark font-exo text-base font-medium s-tran hover:bg-[#f1f4f7] rounded-md py-2 px-5'>Контакты</Link>
                </ul>
            </div>
        </div>
        </>
    )
}