import { Accordion } from 'flowbite-react';

interface MultiDropDownProps {
    data: object[]
}

const MultiDropDown: React.FC<MultiDropDownProps> = ({ data }) => {
    const outPut = data.map((item: any, index) => {
        return (
            <Accordion.Panel >
                <Accordion.Title className='flex justify-between items-center w-full py-4 border-b-blue-gray-100 antialiased text-xl text-left font-semibold leading-snug select-none transition-colors border-b-0 text-gray-600 hover:bg-transparent hover:text-white font-BubblegumSans tracking-[2px]'>
                    {item.title}
                </Accordion.Title>
                <Accordion.Content className=''>
                    <p className="block w-full py-4 antialiased text-xl text-white text-start font-BubblegumSans font-normal pt-0 tracking-[1px]">
                        {item.text}
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        )
    })


    return (
        <div className='justify-center items-center'>
            <Accordion collapseAll>
                {outPut}
            </Accordion>
        </div>
    )
}

export default MultiDropDown;