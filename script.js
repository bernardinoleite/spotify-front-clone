document.addEventListener("DOMContentLoaded", (e) => {
    const artistsData = [

        { name: 'Henrique & Juliano', image: 'https://i.ibb.co/wCpHtfQ/artista-henrique-juliano.jpg' },

        { name: 'Jorge & Mateus', image: 'https://i.ibb.co/2WfJ8tD/artista-jorge-mateus.jpg' },

        { name: 'Zé Neto & Cristiano', image: 'https://i.ibb.co/7z7CZ69/artista-ze-neto.jpg' },

        { name: 'Gusttavo Lima', image: 'https://i.ibb.co/XJP8Djh/artista-gustavo-limma.jpg' },

        { name: 'Luan Santana', image: 'https://i.ibb.co/MSbmBzH/artista-luan-santana.jpg' },

        { name: 'Matheus & Kauan', image: 'https://i.ibb.co/3CmctgD/artista-mateus-kauan.jpg' }

    ];

    const albumsData = [

        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: 'https://i.ibb.co/WBgGp5q/album-white-noise.jpg' },

        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: 'https://i.ibb.co/BfbL8VL/album-ceu-explica.jpg' },

        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: 'https://i.ibb.co/T8QJJ1W/album-vida-loka.jpg' },

        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: 'https://i.ibb.co/G3kXhXc/album-hit-me.jpg' },

        { name: 'CAJU', artist: 'Liniker', image: 'https://i.ibb.co/B3b0N7H/album-caju.jpg' },

        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: 'https://i.ibb.co/VMnCmTX/album-escandalo.jpg' }

    ];

    const artistGrid = document.querySelector(".artists-grid")
    const albumsGrid = document.querySelector(".albums-grid")

    artistsData.forEach(artist => {
        const artistCard = document.createElement("div")
        artistCard.classList.add("artist-card")
        artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do ${artist.name}">
        <div class="">
            <h3>${artist.name}</h3>
            <p>artista</p>
        </div>
        `
        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(albums => {
        const albumsCard = document.createElement("div")
        albumsCard.classList.add("album-card")
        albumsCard.innerHTML = `
        <img src="${albums.image}" alt="imagem do ${albums.name}">
                <div class="">
                    <h3>${albums.name}</h3>
                    <p>${albums.artist}</p>
                </div>
        `
        albumsGrid.appendChild(albumsCard)
    })
})


