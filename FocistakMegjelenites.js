import { FociLista } from "./foci.js";
export default class FocistakMegjelenites {
    #lista = [];
    szElem;
    constructor(lista = FociLista, szElem) {
        this.#lista = lista;
        this.szElem = szElem;
        this.megjelenites();
    }

    megjelenites() {
        this.szElem.innerHTML = ``;
        this.#lista.forEach(foci => {
            this.szElem.innerHTML += `
            <div class="foci">
                <h1>${foci.nev}</h1>
                <img src="${foci.kep}" alt="${foci.nev}">
                <p>${foci.leiras}</p>
                <ul>
                    <li>${foci.jellemzok}</li>
                </ul>
                <p>Ár: ${foci.ar}</p>
                <p>Kategória: ${foci.kategoria}</p>
                <button class="kedvenc">${foci.kedvenc ? 'Kedvenc' : 'Nem kedvenc'}</button>
            </div>
            `;
        });

        this.#lista.forEach((foci, index) => {
            const kedvencgomb = this.szElem.querySelectorAll('.kedvenc')[index];
            kedvencgomb.addEventListener('click', () => {
                foci.kedvenc = !foci.kedvenc;
                this.megjelenites();
            });
        });
    }
}