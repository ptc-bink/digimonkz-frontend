import React from 'react'
import logo from "../../assets/img/logo/logo1.png"

interface navbarProps {

}

const Header: React.FC<navbarProps> = () => {
  return (
    <nav className="w-full top-0 left-0 z-40 fixed lg:before:hidden lg:backdrop-blur-sm transition-all duration-500 bg-[rgba(0,0,0,0.1)]">
      <div className="container w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
        </a>
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="items-center text-base flex font-BubblegumSans flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="/" className="inline-block my-3 text-base lg:text-lg text-white hover:text-[#5c9e90] font-[400] transition-all font-BubblegumSans st-current" aria-current="page">TEAM</a>
            </li>
            <li>
              <a href="/" className="inline-block my-3 text-base lg:text-lg text-white hover:text-[#5c9e90] font-[400] transition-all font-BubblegumSans st-current">COLLECTIONS</a>
            </li>
            <li>
              <a href="/" className="inline-block my-3 text-lg lg:text-lg text-white hover:text-[#5c9e90] font-[400] px-5 py-2 tracking-[.8px] transition-all border-4 rounded-md font-BubblegumSans st-current">PLEASE CONNECT YOUR WALLET</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className="w-full top-0 left-0 z-40 fixed lg:before:hidden lg:backdrop-blur-sm transition-all duration-500 bg-[rgba(0,0,0,0.1)]">
    //   <div className="flex flex-col lg:flex-row lg:min-h-0 lg:container mx-auto ">
    //     <div className="flex justify-center lg:items-center border-b border-transparent transition-all lg:!bg-transparent lg:border-0 !bg-[rgba(0,0,0,0.1)]">
    //       <div className="grow w-14 flex items-center justify-center lg:hidden">
    //       </div>
    //       <div className="grow-0 text-center">
    //         <div aria-current="page" className="router-LinkScroll-active router-LinkScroll-exact-active inline-block w-[138px] mx-1 lg:w-[165px] cursor-pointer">
    //           <a href="/">
    //             <img src="./assets/logo/logo1.png" alt="Digimonkz logo" width="165" height="24" className="inline-block w-full lg:py-5 transition-all py-5" />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="grow w-14 flex justify-end items-center lg:hidden">
    //         <div className="px-3 flex h-full items-center cursor-pointer">
    //           <div className="relative w-6 h-4 transition-all duration-300">
    //             <span className="rounded-full transition-all duration-300 border-b-2 block border-white w-6 absolute top-0 right-0 menu-burger:-rotate-45 menu-burger:top-2">
    //             </span>
    //             <span className="rounded-full transition-all duration-300 border-b-2 block border-white w-4 absolute top-1/2 right-0 menu-burger:opacity-0">
    //             </span>
    //             <span className="rounded-full transition-all duration-300 border-b-2 block border-white w-5 absolute top-full right-0 menu-burger:w-6 menu-burger:rotate-45 menu-burger:top-2">
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="justify-center hidden lg:flex">
    //       </div>
    //     </div>
    //     <div className="grow flex-col justify-evenly animate-fade-in lg:flex-row lg:flex lg:items-center lg:justify-end hidden">
    //       <ul className="lg:flex text-center">
    //         <li className="uppercase text-lg tracking-wider py-5 lg:text-base whitespace-nowrap overflow-hidden relative transition-all after:absolute after:w-full after:h-1 after:left-0 after:bottom-0 after:rounded-t-full after:transition-all group px-2 lg:px-4 after:translate-y-3 cursor-pointer flex items-center justify-center">
    //           <a href='/' className="inline-block my-3 text-2xl lg:text-lg text-white hover:text-[#5c9e90] font-[400] transition-all font-BubblegumSans">
    //             <span>Team</span>
    //           </a>
    //         </li>
    //         <li className="uppercase text-lg tracking-wider py-5 lg:text-base whitespace-nowrap overflow-hidden relative transition-all after:absolute after:w-full after:h-1 after:left-0 after:bottom-0 after:rounded-t-full after:transition-all group px-2 lg:px-4 after:translate-y-3 cursor-pointer flex items-center justify-center">
    //           <a href='/' className="inline-block my-3 text-2xl lg:text-lg text-white hover:text-[#5c9e90] font-[400] transition-all font-BubblegumSans">
    //             <span>Collections</span>
    //           </a>
    //         </li>
    //         <li className="uppercase text-lg tracking-wider py-5 lg:text-base whitespace-nowrap overflow-hidden relative transition-all after:absolute after:w-full after:h-1 after:left-0 after:bottom-0 after:rounded-t-full after:transition-all group px-2 lg:px-4 after:translate-y-3 cursor-pointer flex items-center justify-center">
    //           <div className="inline-block my-3 text-2xl lg:text-lg text-white hover:text-[#5c9e90] font-[400] transition-all font-BubblegumSans border-4 px-5 py-2 rounded-xl">
    //             <div>
    //               <button className="connect-wallet__btn font-BubblegumSans" type="button">
    //                 PLEASE CONNECT YOUR WALLET
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Header;