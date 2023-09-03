function toggleEliminated (element) {
    element.classList.toggle('eliminated')
}

let cards = [
    {
        name: 'Sakura',
        image: 'images/characters_01.jpg'
    }, {
        name: 'Kaede',
        image: 'images/characters_02.jpg'
    }, {
        name: 'Aya',
        image: 'images/characters_03.jpg'
    }, {
        name: 'Yuuki',
        image: 'images/characters_04.jpg'
    }, {
        name: 'Mikoto',
        image: 'images/characters_05.jpg'
    }, {
        name: 'Ren',
        image: 'images/characters_06.jpg'
    }, {
        name: 'Ryo',
        image: 'images/characters_07.jpg'
    }, {
        name: 'Yori',
        image: 'images/characters_08.jpg'
    }, {
        name: 'Hana',
        image: 'images/characters_09.jpg'
    }, {
        name: 'Tatsuya',
        image: 'images/characters_10.jpg'
    }, {
        name: 'Taro',
        image: 'images/characters_11.jpg'
    }, {
        name: 'Mai',
        image: 'images/characters_12.jpg'
    }, {
        name: 'Emiko',
        image: 'images/characters_13.jpg'
    }, {
        name: 'Ayumi',
        image: 'images/characters_14.jpg'
    }, {
        name: 'Hotaru',
        image: 'images/characters_15.jpg'
    }, {
        name: 'Haru',
        image: 'images/characters_16.jpg'
    }, {
        name: 'Kazuya',
        image: 'images/characters_17.jpg'
    }, {
        name: 'Akira',
        image: 'images/characters_18.jpg'
    }, {
        name: 'Saki',
        image: 'images/characters_19.jpg'
    }, {
        name: 'Kazuo',
        image: 'images/characters_20.jpg'
    }
]

let images = (document.querySelectorAll('img'))
let spans = (document.querySelectorAll('span'))

function selectRandomCard () {
    let r = Math.floor(Math.random()*20);
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('mysteryImg')) {
        images[i].src = cards[r].image
        }
    }
    for (let s = 0; s < spans.length; s++) {
        if (spans[s].classList.contains('mysteryName')) {
        spans[s].innerHTML = cards[r].name
        }
    }
    return
}

selectRandomCard()