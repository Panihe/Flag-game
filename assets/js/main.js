const mainBox = document.getElementById('mainbox');
const mainBox2 = document.getElementById('mainbox2');
const mainBox3 = document.getElementById('mainbox3');
/* const btn = document.getElementsByTagName('button'); */
const boxBtnNext = document.getElementById('box-next');
const btnNext = document.getElementById('next');

const btnMacedonia = document.getElementById('macedonia');
const btnKirguizistan = document.getElementById('kirguizistan');
const btnSpain = document.getElementById('spain');
const btnVietnam = document.getElementById('vietnam');

btnMacedonia.addEventListener('click', () => mistakeOption1());
btnKirguizistan.addEventListener('click', () => mistakeOption2());
btnSpain.addEventListener('click', () => correctOption());
btnVietnam.addEventListener('click', () => mistakeOption3());


changeColorBtnMacedonia = () => {
    btnMacedonia.style.backgroundColor = "#c9302c";
    btnMacedonia.style.color = "#ffffff";
}

changeColorBtnKirguizistan = () => {
    btnKirguizistan.style.backgroundColor = "#c9302c";
    btnKirguizistan.style.color = "#ffffff";
}

changeColorBtnVietnam = () => {
    btnVietnam.style.backgroundColor = "#c9302c";
    btnVietnam.style.color = "#ffffff";
}

correctOption = () => {
    btnSpain.style.backgroundColor = "#4cae4c";
    btnSpain.style.color = "#ffffff";
    showBtnNext();
}

mistakeOption1 = () => {
    if (btnMacedonia.click) {
        changeColorBtnMacedonia();
        correctOption();
        showBtnNext();
    }
}

mistakeOption2 = () => {
    if(btnKirguizistan.click) {
        changeColorBtnKirguizistan();
        correctOption();
        showBtnNext();
    }
}

mistakeOption3 = () => {
    if(btnVietnam.click) {
        changeColorBtnVietnam();
        correctOption();
        showBtnNext();
    }
}

showBtnNext = () => {
    boxBtnNext.style.display = "flex";
    boxBtnNext.style.justifyContent = "center";
}

btnNext.addEventListener('click', () => continued());


/* function continue with different id */
let i = 1;
continued = () => {
    switch (i + 1) {
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

countPoints = () => {
    let point = 0;
    for(point = 0; point < correctOption() ; point++) {
        
    }
}

