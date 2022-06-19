import './Overview.css';

function Overview(){
    return (
        <section className="w-100 overview py-4 position-relative d-flex justify-content-center container">
            <div className='content px-1 px-sm-3 px-md-5 position-relative row'>
                <div className='overview-img-div col-12 col-lg-4 d-flex justify-content-center'>
                    <img className='overview-img' src={require('./Smart-phone.png')}></img>
                </div>
                <div className='overview-description overview-paragraph p-3 my-3 col-12 col-lg-8'>
                    <h1 className='overview-heading'>
                        Welcome to Colour Heaven
                    </h1>
                    <p className='overview-paragraph'>
                        Colour Heaven is an ongoing unique art-creating project. It produces unique graphics using particular patterns and suiting colours. Colour Heaven collection has different sub-collections and each Colour Heaven sub-collection has its own pattern and colour palette to make them unique. Unique artworks for sub-collections will be released frequently until it reaches 20 for that sub-collection. After that, producing artworks using that pattern will be stopped.
                    </p>
                    <div className='row d-flex justify-content-center'>
                        <div className='br-8 fc-white bg-blue col-10 overview-data mx-5 ms-sm-0 me-sm-3 mb-3 col-sm-4 text-center d-flex align-items-center justify-content-center fw-6'>
                            4 Collections
                        </div>
                        <div className='br-8 fc-white bg-purple col-10 overview-data mx-5 mx-sm-0 col-sm-4 text-center d-flex align-items-center justify-content-center fw-6'>
                            30 Nfts
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Overview;