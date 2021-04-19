/* General */
const mainBox = document.getElementById('mainbox');
const mainBox2 = document.getElementById('mainbox2');
const btnNext = document.getElementById('next');
const btn = document.getElementsByTagName('button');
btnNext.addEventListener('click', () => continued());

/* Block 1 */
const btnMacedonia = document.getElementById('macedonia');
const btnKirguizistan = document.getElementById('kirguizistan');
const btnSpain = document.getElementById('spain');
const btnVietnam = document.getElementById('vietnam');


btnMacedonia.addEventListener('click', () => changeColorBtnMacedonia());
btnKirguizistan.addEventListener('click', () => changeColorBtnKirguizistan());
btnSpain.addEventListener('click', () => changeColorBtnSpain());
btnSpain.addEventListener('click', () => showBtnNext());
btnVietnam.addEventListener('click', () => changeColorBtnVietnam());


changeColorBtnMacedonia = () => {
    btnMacedonia.style.backgroundColor = "#c9302c";
    btnMacedonia.style.color = "#ffffff";
}

changeColorBtnKirguizistan = () => {
    btnKirguizistan.style.backgroundColor = "#c9302c";
    btnKirguizistan.style.color = "#ffffff";
}

changeColorBtnSpain = () => {
    btnSpain.style.backgroundColor = "#4cae4c";
    btnSpain.style.color = "#ffffff";
}

changeColorBtnVietnam = () => {
    btnVietnam.style.backgroundColor = "#c9302c";
    btnVietnam.style.color = "#ffffff";
}

/* function continue with different id */
let i = 1;
continued = () => {
    switch(i + 1){
        case 2:
            mainBox2.style.display = "block";
            mainBox.style.display = "none";
            i++;
        break;
    }
}

showBtnNext = () => {
    btnNext.style.display = "block";
}




/* The function is missing so that when the user fails the correct option is displayed. */

/* Block 2 */
const btnBelgium = document.getElementById('belgium');
const btnZimbawe = document.getElementById('zimbawe');
const btnMaurice = document.getElementById('maurice');
const btnUganda = document.getElementById('uganda');

btnBelgium.addEventListener('click', () => changeColorBtnBelgium());
btnZimbawe.addEventListener('click', () => changeColorBtnZimbawe());
btnMaurice.addEventListener('click', () => changeColorBtnMaurice());
btnUganda.addEventListener('click', () => changeColorBtnUganda());

changeColorBtnBelgium = () => {
    btnBelgium.style.backgroundColor = "#c9302c";
    btnBelgium.style.color = "#ffffff";
}

changeColorBtnZimbawe = () => {
    btnZimbawe.style.backgroundColor = "#c9302c";
    btnZimbawe.style.color = "#ffffff";
}

changeColorBtnMaurice = () => {
    btnMaurice.style.backgroundColor = "#c9302c";
    btnMaurice.style.color = "#ffffff";
}

changeColorBtnUganda = () => {
    btnUganda.style.backgroundColor = "#4cae4c";
    btnUganda.style.color = "#ffffff";
}

/* The function is missing so that when the user fails the correct option is displayed. */



