import './CollectionsCarousel.css';
import CollectionsCard from '../../CollectionCard/CollectionCard';
import React, {useEffect, useState } from 'react';
import { FetchNfts } from '../../../Api/Api';

function CollectionsCarousel(props){
    const [nftArray, setnftArray] = useState();

    (function scroll() {
        
    })();
    useEffect(() => {
        (async function fetchNftData() {
            let data = await FetchNfts();
            var nftArray = [];
            data.forEach((nft, index) => {
                let activeClass = index == 0 ? "active" : "";
                nftArray.push(
                            React.createElement(
                                CollectionsCard,
                                {
                                    key : index,
                                    imgUrl : nft.imgUrl,
                                    title : nft.title 
                                }
                            )
                );
            });
            setnftArray(nftArray);
            console.log(nftArray);
        })();
        setTimeout(console.log("this ran"), 3000);
        let scrolledAmount = 0;
        let shiftBy300 = setInterval(() => {
            let carouselClientwidth = document.getElementById("home-collections-carousel").clientWidth;
            let carouselScrollWidth = document.getElementById("home-collections-carousel-inner").clientWidth;
            if (scrolledAmount >= carouselScrollWidth - carouselClientwidth) {
                console.log("scroll wdth is" + carouselScrollWidth);
                console.log("client wdth is" + carouselClientwidth);
                clearInterval(shiftBy300);
            } else {
                console.log("this ran now");
                let px = 0;
                let shiftByPixel = setInterval(() => {
                    document.getElementById("home-collections-carousel").scrollLeft += 1;
                    px += 1;
                    scrolledAmount += 1;
                    if (px > 150) {
                        console.log("------");
                        clearInterval(shiftByPixel);
                    }
                }, 1);
                console.log(scrolledAmount);
            }
        }, 4000); //change this to +150 px when removing strict mode
    }, []);

    return (
        <section id='home-collections-carousel' className="w-100 collections-carousel py-4 position-relative d-flex justify-content-center container">
            <div id='home-collections-carousel-inner' className='collections-carousel-inner position-absolute d-flex justify-content-center'>
                {nftArray}
            </div>
        </section>
    );
}

export default CollectionsCarousel;