const searchInput = document.getElementById('searchInput');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchIn) {
    const url = `http://localhost:3000/artists?name_like=${searchIn}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
        .catch((error) => console.error('Erro ao buscar dados da API:', error));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function() {
    const searchIn = searchInput.value.toLowerCase();
    if(searchIn === ''){
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }

    requestApi(searchIn);
});
