const HOST = 'https://localhost:44310';

function FetchNfts(){
    return fetch(`${HOST}/api/NftImages`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function FetchNftCount(){
    return fetch(`${HOST}/api/NftImages/count`)
        .then(response => response.json())
        .then(count => count);
}

function FetchCollectionCount(){
    return fetch(`${HOST}/api/collections/count`)
        .then(response => response.json())
        .then(count => count);
}

export {
    FetchNfts,
    FetchNftCount,
    FetchCollectionCount
}