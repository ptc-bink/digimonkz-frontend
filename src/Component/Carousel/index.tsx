interface carouselProps {
    data: object[]
}

const ImgNewCarousel: React.FC<carouselProps> = ({ data }) => {

    const outPut = data.map((item: any, index) => {
        return (
            <div key={index}>
                <div className=' h-full justify-center items-start rounded-lg w-full'>
                    <img src={`./assets/img/dreamTeam/${item.img}.png`} alt="carousel item " className='!visible object-cover rounded-2xl h-[300px] w-full' />
                    <p className='font-BubblegumSans text-white text-center'>
                        {item.info}
                    </p>
                </div>
            </div>
        )
    });

    return (
        <div className='text-center'>
            <p className="text-white font-bold font-BubblegumSans text-3xl md:text-5xl tracking-[2px] mt-[10px]">
                Dream Team
            </p>
            <div className="mt-[50px] lg:flex lg:justify-center lg:items-center hidden md:block">
                <div className="w-full mb-[50px]">
                    {/* <button type="button"></button> */}
                </div>
            </div>
        </div>
    )
}

export default ImgNewCarousel;