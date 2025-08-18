import FocistakMegjelenites from "./FocistakMegjelenites.js";

export default class Gombok {
    #lista = [];
    szElem;
    constructor(lista, szElem) {
        this.#lista = lista;
        this.szElem = szElem;
        this.#KedvencGomb();
        this.#menuGomb();
    }

    #KedvencGomb() {
        const kedvencGombok = document.querySelectorAll(".kedvencgomb");
        kedvencGombok.forEach(gomb => {
            gomb.addEventListener("click", () => {
                const kedvenc = this.#lista.filter(foci => foci.kedvenc === true);
                new FocistakMegjelenites(kedvenc, this.szElem);
            });
        });
    }

    #menuGomb() {
        const menugomb = document.querySelector(".kezdolap");
        menugomb.addEventListener("click", () => {
            new FocistakMegjelenites(this.#lista, this.szElem);
        });
    }
}