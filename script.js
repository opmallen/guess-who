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

let mysteryImg = document.querySelector('.mysteryImg')
let mysteryName = document.querySelector('.mysteryName')
let cardsDiv = document.querySelector('.cards')

function selectRandomCard() {
    let r = Math.floor(Math.random()*cards.length);
    mysteryImg.src = cards[r].image
    mysteryName.innerHTML = cards[r].name
    return
}

selectRandomCard()

function populateCards() {
    for (let i = 0; i < cards.length; i++) {
        cardsDiv.innerHTML += `<div class="card" onclick="toggleEliminated(this)">
            <img src="${cards[i].image}" />
            <span>${cards[i].name}</span>
        </div>`
    }
    return
}

populateCards()