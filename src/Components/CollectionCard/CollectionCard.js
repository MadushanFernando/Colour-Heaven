import './CollectionCard.css';

function CollectionsCard(props){
    let backgroundImage = {
        backgroundImage: `url("https://lh3.google.com/u/0/d/${props.imgUrl}")`
    };

    return (
        // <div className='position-relative'>
        //     <div className='row m-0'>
        //         <p>{props.title}</p>
        //     </div>
        //     <div className='row m-0 collection-bg'>
        //         <img src={require('../../Images/col-demo.png')} className='collection-img'></img>
        //     </div>
        //     <div className='row m-0 position-absolute collection-browse'>
        //         Browse
        //     </div> style={"backgroundImage: `url("https://drive.google.com/thumbnail?id=${props.imgUrl}")`}}
        // </div>
        <div className="card">
            <div  className="card-img-top collection-card-img-top" 
                style={{
                    backgroundImage: `url("https://lh3.google.com/u/0/d/${props.imgUrl}")`
                }}
            >
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    );
}

export default CollectionsCard;