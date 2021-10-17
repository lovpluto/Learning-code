const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// const playlist = $('.listSong')
const app = {
    songs: [
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Di Vang Nhat Nhoa',
            singer: 'Lan Nha',
            path: './assets/song/Di-Vang-Nhat-Nhoa-Lan-Nha.mp3',
            image: './assets/img/1.jpg'
        },
    ],
    render: function(){
        const htmls = this.songs.map(song => {
            return `
            <li class="listSong__item">
                <img src="${song.image}" alt="" class="listSong__item--img">
                <div class="listSong__item--bazer">
                    <div class="listSong__item--title">
                        <div class="listSong__item--title-name">${song.name}</div>
                        <div class="listSong__item--title-singer">${song.singer}</div>
                    </div>
                    <div class="listSong__item--option"><i class="fas fa-ellipsis-h"></i></div>
                </div>
            </li>`
        })
        $('.listSong').innerHTML = htmls.join('')
    },

    handleEvents: function(){

        const imgMusic = $('.imgMusic img')
        const imgMusicWidth = imgMusic.offsetWidth
        document.onscroll = function(){
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const newimgMusic =   imgMusicWidth - scroll 
            imgMusic.style.width = newimgMusic > 0 ? newimgMusic +'px' : 0
            imgMusic.style.opacity = newimgMusic / imgMusicWidth
        }
    },
    start: function(){
        console.log([this])
        this.handleEvents()
        this.render()
    }
}

app.start()