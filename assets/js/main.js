/* General */
const mainBox = document.getElementById('mainbox');
const mainBox2 = document.getElementById('mainbox2');
const mainBox3 = document.getElementById('mainbox3');
/* const btn = document.getElementsByTagName('button'); */
const boxBtnNext = document.getElementById('box-next');
const btnNext = document.getElementById('next');

/* Block 1 */
const btnMacedonia = document.getElementById('macedonia');
const btnKirguizistan = document.getElementById('kirguizistan');
const btnSpain = document.getElementById('spain');
const btnVietnam = document.getElementById('vietnam');

btnMacedonia.addEventListener('click', () => changeColorBtnMacedonia());
btnKirguizistan.addEventListener('click', () => changeColorBtnKirguizistan());
btnSpain.addEventListener('click', () => changeColorBtnSpain());
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

/* function continue with different id */
let i = 1;
continued = () => {
    switch(i + 1){
        case 2:
            mainBox2.style.display = "block";
            mainBox.style.display = "none";
            i++;
        break;
        case 3:
            mainBox3.style.display = "block";
            mainBox2.style.display = "none";
            i++;
        break;
    }
}

showBtnNext = () => {
    boxBtnNext.style.display = "flex";
    boxBtnNext.style.justifyContent = "center";
}

btnNext.addEventListener('click', () => continued());
btnSpain.addEventListener('click', () => showBtnNext());
btnUganda.addEventListener('click', () => showBtnNext());
