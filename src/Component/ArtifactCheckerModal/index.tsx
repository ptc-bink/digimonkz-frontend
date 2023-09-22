import { useState } from 'react';
import {
  Modal,
  TextInput,
} from 'flowbite-react';

import CustomizeBtn from '../CustomBtn';

export default function DismissableModal() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectNFT, setSelectNFT] = useState<number | null>(0);

  const handleOpenModal = () => setOpenModal(!openModal);
  const updateItems = (nft: number) => setSelectNFT(nft)

  return (
    <div className='mx-auto p-4'>
      <CustomizeBtn onClick={handleOpenModal} text="Artifact Checker" />
      <Modal dismissible show={openModal === true} size="xl" onClose={() => setOpenModal(false)}>
        {/* <Modal.Header>Terms of Service</Modal.Header> */}
        <Modal.Body>
          <div className="space-y-6 items-center justify-center w-full text-center">
            <div className='flex gap-3 justify-center items-center'>
              <div className="flex justify-center items-center mt-[10px]">
                <div
                  className={`${selectNFT === 0
                    ? "border-[rgb(44,52,65)] border-[3px] rounded-[50%] p-1"
                    : ""
                    }`}
                  onClick={() => {
                    updateItems(0);
                  }}
                >
                  <img
                    src="https://i.seadn.io/gcs/files/4bbf53de963f24f668b785607a3726b6.png?w=500&auto=format"
                    alt="First NFT"
                    className={`border-[1px] border-white rounded-[50%] cursor-pointer w-[40px] h-[40px] transition-all duration-500 ${selectNFT === 0 ? "scale-100" : "scale-90"
                      }`}
                  />
                </div>
                <div
                  className={`ml-[10px] ${selectNFT === 1
                    ? "border-[rgb(44,52,65)] border-[3px] rounded-[50%] p-1"
                    : ""
                    }`}
                  onClick={() => {
                    updateItems(1);
                  }}
                >
                  <img
                    src="https://i.seadn.io/gcs/files/08ffec5e847f4803b36c5371498ae4ce.jpg?w=500&auto=format"
                    alt="Second NFT"
                    className={`border-[1px] border-white rounded-[50%] cursor-pointer w-[40px] h-[40px] transition-all duration-500 ${selectNFT === 1 ? "scale-100" : "scale-90"
                      }`}
                  />
                </div>
              </div>
            </div>
            <form className='flex w-full text-center'>
              <TextInput
                id='mintNumber'
                placeholder='Please Input NFT ID'
                required
                type='number'
                value="8"
                min="1"
                className='bg-gray-400 shadow appearance-none border text-black focus:outline-none focus:shadow-inner w-full rounded py-2 px-3 text-center text-2xl'
              />
              <button
                type='submit'
                className='font-BubblegumSans text-black font-normal border-2 rounded-lg uppercase hover:border-[#5c9e90] border-[#0a1a1b] w-[150px] ml-5'
              >
                GET INFO
              </button>
            </form>
            <p className='font-BubblegumSans text-textBlack text-xl'>
              Arlifacts Count: <span className='text-2xl text-textGreen'>0</span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}


