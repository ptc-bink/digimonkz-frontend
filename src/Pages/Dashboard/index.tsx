import React from 'react'
import Slider from "react-slick"


import ArtifactCheckerModal from '../../Component/ArtifactCheckerModal'
import MultiDropDown from '../../Component/MultiDropDown'
import Collections from '../../Component/Collections';

import { dreamTeamData, aboutUs } from "../../Database/data"
import YGPZ from "../../assets/img/partners/YGPZ.jpg"
import keungz from "../../assets/img/partners/keungz.jpg"
import ExpeditionLabs from "../../assets/img/partners/ExpeditionLabs.jpg"
import FusionXYZ from "../../assets/img/partners/FusionXYZ.jpg"
import INPEAKLOGO from "../../assets/img/partners/INPEAKLOGO.jpg"
import MOON from "../../assets/img/partners/MOON.jpg"
import OrderOfTheEgonauts from "../../assets/img/partners/OrderOfTheEgonauts.jpg"
import TheMEO from "../../assets/img/partners/TheMEO.jpg"
import Xplorius from "../../assets/img/partners/Xplorius.svg"

import DreamTeam1 from "../../assets/img/dreamTeam/1.png"
import DreamTeam2 from "../../assets/img/dreamTeam/2.png"
import DreamTeam3 from "../../assets/img/dreamTeam/3.png"
import DreamTeam4 from "../../assets/img/dreamTeam/4.png"
import DreamTeam5 from "../../assets/img/dreamTeam/5.png"
import DreamTeam6 from "../../assets/img/dreamTeam/6.png"
import DreamTeam7 from "../../assets/img/dreamTeam/7.png"
import DreamTeam8 from "../../assets/img/dreamTeam/8.png"
import DreamTeam9 from "../../assets/img/dreamTeam/9.png"
import DreamTeam10 from "../../assets/img/dreamTeam/10.png"
import DreamTeam11 from "../../assets/img/dreamTeam/11.png"

interface dashboardProps {
  // title : string;
}

const Dashboard: React.FC<dashboardProps> = () => {

  const dreamTeamImg = [DreamTeam1, DreamTeam2, DreamTeam3, DreamTeam4, DreamTeam5, DreamTeam6, DreamTeam7, DreamTeam8, DreamTeam9, DreamTeam10, DreamTeam11];

  let memberSettings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className=''>
      <div className="header_background-image h-[100vh] flex justify-center items-end">
        <video className='w-[80%] md:w-[70%] lg:w-[50%] mb-[70px]' controls>
          <source src="/assets/video/Dream.mov" type="video/mp4" />
        </video>
      </div>
      <div className=' flex flex-col items-center linear-background'>
        <div className='container pt-[50px]'>
          <ArtifactCheckerModal />
          <div className='mx-auto mt-[20px] mb-[76px] p-4'>
            <p className='font-BubblegumSans pt-10 pb-5 text-5xl  text-white'>About US</p>
            <MultiDropDown data={aboutUs} />
          </div>
          <div className=' text-center overflow-hidden'>
            <p className='text-white font-BubblegumSans text-3xl md:text-5xl tracking-[2px] mt-[10px]'>Collections</p>
            <Collections />
          </div>
          <div className='mt-20 font-BubblegumSans text-center text-white tracking-[2px] w-full mb-[76px]'>
            <p>Please Connect your wallet</p>
          </div>
          <div>
            <p className='text-white text-center font-bold font-BubblegumSans text-3xl md:text-5xl tracking-[2px] mt-[10px]'>Collab Partners</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-[50px] p-4'>
              <div className='mx-auto shine'>
                <img src={YGPZ} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={keungz} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={ExpeditionLabs} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={FusionXYZ} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={INPEAKLOGO} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={MOON} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={OrderOfTheEgonauts} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={TheMEO} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
              <div className='mx-auto shine'>
                <img src={Xplorius} alt="collab partners" className='w-[300px] h-[300px] object-contain' />
              </div>
            </div>
          </div>
          <div className='mx-16 mb-[76px]'>
            <Slider {...memberSettings}>
              {dreamTeamData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mr-[20px] border-0"
                  // onClick={() => {
                  //   setSelectedMember(index);
                  // }}
                  >
                    <img
                      src={dreamTeamImg[index]}
                      alt={item.info}
                      className="w-[300px] h-[300px] object-cover rounded-2xl"
                    />
                    <p className="font-BubblegumSans text-white font-bold">
                      {item.info}
                    </p>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;