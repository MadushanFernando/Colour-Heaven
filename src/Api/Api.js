function FetchNfts(){
    return fetch('https://localhost:44310/api/NftImages')
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

export {
    FetchNfts
}