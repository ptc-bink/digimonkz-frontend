import React from 'react'
import logo from "../../assets/img/logo/logo1.png"
import openSea from "../../assets/img/icon/openSea.svg"
import discord from "../../assets/img/icon/discord.svg"
import youtube from "../../assets/img/icon/youtube.svg"
import twitter from "../../assets/img/icon/twitter.svg"

interface footerProps {
}

const Footer: React.FC<footerProps> = () => {
  return (
    <footer className="bg-[#0a1a1b] w-full">
      <div className="w-full container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex justify-center items-center mb-4 sm:mb-0">
            <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className='inline-block mr-[30px]'>
              <a href="/" className="hover:underline">
                <img src={openSea} className='w-8 h-8' alt="opensea" />
              </a>
            </li>
            <li className='inline-block mr-[30px]'>
              <a href="/" className="hover:underline">
                <img src={twitter} className='w-8 h-8' alt="twitte" />
              </a>
            </li>
            <li className='inline-block mr-[30px]'>
              <a href="/" className="hover:underline">
                <img src={discord} className='w-8 h-8' alt="discord" />
              </a>
            </li>
            <li className='inline-block'>
              <a href="/" className="hover:underline">
                <img src={youtube} className='w-8 h-8' alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
        <span className="block text-lg text-white font-BubblegumSans">Digimonkznft@gmail.com</span>
      </div>
    </footer>
  )
}

export default Footer;
