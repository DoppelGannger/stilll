export default class FilterSetup {
    #elem = '';

    constructor(arrCard) {
        this.arrCard = arrCard;
        this.#elem = this.render();

    }

    #html() {
        return `${this.arrCard.map((item) =>
            `<li class="list-group-item">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="${item.category}">
                <label class="form-check-label" for="${item.category}">${item.title}                
                </label></div>
            </li>
            </ul>`
        ).join('')}`
    }

    render() {        
         return this.#html();
    }
    get elem() {        
        return this.#elem;
    }
};