import FilterSetup from './FilterSetup.js';
import CardsSetup from './CardsSetup.js';
import PaginationSetup from './PaginationSetup.js';

let dataBase = [

    {
        title: 'Каркасы для ангаров',
        description: '1',
        category: '1',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Каркасы для ангаров',
        description: '2',
        category: '1',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Каркасы для ангаров',
        description: '3',
        category: '1',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Каркасы для ангаров',
        description: '4',
        category: '1',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Кран-балки',
        description: '5',
        category: '2',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Вышки',
        description: '6',
        category: '3',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Металлические ворота',
        description: '7',
        category: '4',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Строительные конструкции',
        description: '8',
        category: '5',
        img: 'angar',
        url: '/'
    },
    {
        title: 'Металлические фермы',
        description: '9',
        category: '6',
        img: 'angar',
        url: '/'
    },
    
        
];

let filterscategory = [

    {
        title: 'Ангары',
        category: '1',
    },
    {
        title: 'Кран-балки',
        category: '2',
    },
    {
        title: 'Вышки',
        category: '3',
    },
    {
        title: 'Металлические ворота',
        category: '4',
    },
    {
        title: 'Строительные конструкции',
        category: '5',
    },
    {
        title: 'Металлические ворота',
        category: '6',
    },

];




// карточки

let cards = new CardsSetup(dataBase);
let containerElement = document.querySelector('#rowCards');
containerElement.innerHTML = cards.elem;


// класс render
let filters = new FilterSetup(filterscategory);
let inputsArr = document.querySelector('#listInput');
inputsArr.innerHTML = filters.elem;

//фильтрация
let cardsArr = document.querySelectorAll('.filtr-item');
let checkBoxArr = document.querySelectorAll('[type="checkbox"]')
let filterArr = [];



// пагинация
let brutto = Math.ceil(dataBase.length / 6);
let pagArr = [];
for (let i = 0; i < brutto; i++) {
    pagArr.push(i + 1)
}
let pagination = new PaginationSetup(pagArr);
let pgntn = document.querySelector('#pagination');
pgntn.innerHTML = pagination.elem;


// пагинация---------------------------------------------------------
pagContainerViev(1); //запуск для начала






// стрелки + активный блок
let paginationBtn = document.querySelectorAll('.page-item');
paginationBtn[0].classList.add('active');


// визуализация стрелок с цифрами + паг-ция по 6 контейнер
for (let i = 0; i < paginationBtn.length; i++) {
    paginationBtn[i].addEventListener('click', pagViewBtn)
}

function pagViewBtn(e) {

    let nextPos = e.target.dataset.value;
    pagContainerViev(nextPos);
    paginationBtn.forEach((e) => {
        e.classList.remove('active')
    });
    paginationBtn[nextPos - 1].classList.add('active');

}

// контейнер по 6------------------------------------------------------------------------------
function pagContainerViev(count) {


    count *= 1




    if (count == 1) {
        for (let i = 0; i < count + 5; i++) {
            cardsArr[i].style.display = "flex";
        }
        for (let i = count + 5; i < cardsArr.length; i++) {
            cardsArr[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < count * 6 - 6; i++) {
            cardsArr[i].style.display = "none";
        }
        for (let i = count * 6; i < cardsArr.length; i++) {
            cardsArr[i].style.display = "none";
        }

        if (count * 6 < cardsArr.length) {
            for (let i = count * 6 - 6; i < count * 6; i++) {
                cardsArr[i].style.display = "flex";
            }
        } else {
            for (let i = count * 6 - 6; i < cardsArr.length; i++) {
                cardsArr[i].style.display = "flex";
            }
        }
    }
}

// чек-боксы
checkBoxArr.forEach((e) => {

    // событие выбора фильтра
    e.addEventListener('change', (event) => {
        document.querySelectorAll('.page-item').forEach((e) => {
            e.remove()
        })

        if (event.currentTarget.checked) {
            filterArr.push(event.currentTarget.id)
        } else {
            filterArr = filterArr.filter(function (item) {
                return item !== event.currentTarget.id
            })
        }

        cardsArr.forEach((elem) => {
            if (filterArr.indexOf(elem.dataset.category) > -1) {
                elem.style.display = 'flex'
            } else {
                elem.style.display = 'none';
            }

        })
    })

})
