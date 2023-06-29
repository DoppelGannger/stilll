export default class PaginationSetup {    
    #elem = '';

    constructor(arr) {
        this.arr = arr;
        this.#elem = this.render();

    }

    #html() {
        return `
        <ul class="pagination">
               
        ${this.arr.map((item) =>
            `<li class="page-item"><a class="page-link" href="#" data-value="${item}">${item}</a></li> `
        ).join('')}
        
        </ul>`                       
               
    }

    render() {    
       
         return this.#html();
    }
    get elem() {        
        return this.#elem;
    }
};