import './CollectionsCarousel.css';
import CollectionsCard from '../../CollectionCard/CollectionCard';
import React, {useEffect, useState } from 'react';
import { FetchNfts } from '../../../Api/Api';

function CollectionsCarousel(props){
    const [nftArray, setnftArray] = useState();
    useEffect(() => {
        (async function fetchNftData() {
            let data = await FetchNfts();
            var nftArray = [];
            data.forEach((nft, index) => {
                let activeClass = index == 0 ? "active" : "";
                nftArray.push(
                    <div key={`${index}`} className={`carousel-item ${activeClass}`}>
                        {
                            React.createElement(
                                CollectionsCard,
                                {
                                    imgUrl : nft.imgUrl,
                                    title : nft.title 
                                }
                            )
                        }
                    </div>
                );
            });
            setnftArray(nftArray);
            console.log(nftArray);
        })();
    }, []);

    return (
        <section className="w-100 Collections-carousel py-4 position-relative d-flex justify-content-center container">
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    {nftArray}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default CollectionsCarousel;