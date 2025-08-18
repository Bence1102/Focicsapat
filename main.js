import FocistakMegjelenites from "./FocistakMegjelenites.js";
import { FociLista } from "./foci.js";
import Gombok from "./Gombok.js";

const focistak = document.querySelector('.jatekter');


new FocistakMegjelenites(FociLista,focistak);

new Gombok(FociLista, focistak);