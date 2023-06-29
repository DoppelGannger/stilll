export default class CardsSetup {
    #elem = '';

    constructor(arrCard) {
        this.arrCard = arrCard;
        this.#elem = this.render();

    }

    #html() {
        return `${this.arrCard.map((item) =>
            `<div  class="col-md-6 col-lg-4 filtr-item" data-category="${item.category}">
             <div class="card cardsItem" style="border-color: rgb(175,175,255);">
                <div class="card-headers" style="text-align: center;">
                <h5 class="m-0" style="font-size: 18px;">${item.title}</h5>
                </div><img class="img-fluid card-img w-100 d-block" src="./assets/img/${item.img}.png" style="border-width: 0px;border-style: none;">
                <div class="card-body"><p class="card-text card-texts">${item.description}</p></div>
                <div class="d-xxl-flex d-flex justify-content-xxl-center card-footer">
                <button class="btn card-btns" type="button" onclick="window.location.href = '${item.url}';"><strong>Подробнее</strong></button>
                </div>
            </div>
        </div>`
        ).join('')}`
    }

    render() {        
         return this.#html();
    }
    get elem() {        
        return this.#elem;
    }
};