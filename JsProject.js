// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters,
// create an NFT object using the parameters passed to it for its metadata,
// and store it in the nftCollection array.
function mintNFT(name, artist, year) {
    let nft = {
        name: name,
        artist: artist,
        year: year
    };
    nftCollection.push(nft);
    console.log(`${name} NFT minted!`);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Artist: ${nft.artist}`);
        console.log(`Year: ${nft.year}`);
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFTs minted: ${nftCollection.length}`);
}

// Call the functions below this line
mintNFT("Gorillaz", "Maloi Ricalde", 2023);
mintNFT("Pixelize", "Aiah Arceta", 2024);
mintNFT("Shiba", "Mikha Lim", 2024);
mintNFT("Dogge", "Jhoanna Robles", 2024);
listNFTs();
getTotalSupply();
