import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem, CarouselRef } from "react-round-carousel";

import "react-round-carousel/src/index.css";

const Collections = () => {
    const carouselRef = createRef<CarouselRef>();

    const items1: CarouselItem[] = [
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/1.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/12"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #12</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/2.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/10"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>Phoenix #10</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/3.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/6"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>Raiden #6</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/4.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/51"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #51</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/5.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/34"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz #34</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/6.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/28"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz #28</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/7.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/86"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #86</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/8.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/69"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #69</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/9.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/85"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #85</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/10.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/31"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #31</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/11.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/29"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #29</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/12.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/23"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #23</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/1.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/12"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #12</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/2.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/10"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>Phoenix #10</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/3.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/6"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>Raiden #6</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/4.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/51"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #51</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/5.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/34"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz #34</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/6.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/28"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz #28</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/7.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/86"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #86</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/8.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/69"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #69</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/9.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/85"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #85</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/10.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/31"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #31</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/11.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/29"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #29</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Genesis 111",
            image: `./assets/img/collections/Gen1/12.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0xf39e4fc07405e408befd2a5f138810e90f0a837c/23"
                    target="_blank"
                >
                    <strong>DigiMonkz Genesis 111</strong>
                    <span>DigiMonkz Genesis #23</span>
                </Link>
            ),
        },
    ];

    const items2: CarouselItem[] = [
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/1.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/248"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #248</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/2.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/177"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #177</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/3.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/222"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #222</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/4.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/15"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #15</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/5.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/14"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #14</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/6.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/75"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #75</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/7.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/169"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #169</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/8.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/114"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #114</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/9.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/31"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #31</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/10.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/378"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #378</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/11.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/284"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #284</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/12.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/36"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #36</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/1.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/248"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #248</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/2.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/177"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #177</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/3.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/222"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #222</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/4.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/15"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #15</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/5.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/14"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #14</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/6.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/75"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #75</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/7.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/169"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #169</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/8.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/114"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #114</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/9.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/31"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #31</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/10.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/378"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #378</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/11.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/284"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #284</span>
                </Link>
            ),
        },
        {
            alt: "DigiMonkz Gen 2",
            image: `./assets/img/collections/Gen2/12.png`,
            content: (
                <Link
                    to="https://opensea.io/assets/ethereum/0x3067599c11118d2d4c708d119820775425af029c/36"
                    target="_blank"
                >
                    <strong>DigiMonkz Gen 2</strong>
                    <span>DigiMonkzGen2 #36</span>
                </Link>
            ),
        },
    ];

    const [showItems, setShowItems] = useState<CarouselItem[]>(items1);
    const [selectNFT, setSelectNFT] = useState(0);
    const [loading, setLoading] = useState(false);

    const updateItems = (nft: number) => {
        setLoading(true);
        setSelectNFT(nft);
        if (nft === 0) {
            setShowItems(items1);
        } else {
            setShowItems(items2);
        }
        setLoading(false);
    };

    return (
        <div>
            <div className="overflow-hidden flex justify-center items-center mt-[10px]">
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
            <div className="relative mt-[20px]">
                {loading? "loading" : <Carousel
                    ref={carouselRef}
                    items={showItems}
                    slideOnClick
                    showControls={true}
                />}
            </div>
        </div>
    );
};

export default Collections;