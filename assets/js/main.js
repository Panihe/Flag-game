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


changeBtnMacedonia = () => {
    btnMacedonia.style.backgroundColor = "#c9302c";
    btnMacedonia.style.color = "#ffffff";
}

changeBtnKirguizistan = () => {
    btnKirguizistan.style.backgroundColor = "#c9302c";
    btnKirguizistan.style.color = "#ffffff";
}

changeBtnVietnam = () => {
    btnVietnam.style.backgroundColor = "#c9302c";
    btnVietnam.style.color = "#ffffff";
}

correctOption = () => {
    btnMacedoniaDisabled();
    btnKirguizistanaDisabled();
    btnVietnamDisabled();
    btnSpain.style.backgroundColor = "#4cae4c";
    btnSpain.style.color = "#ffffff";
    btnSpain.style.cursor = "none";
    showBtnNext();
    countPoints();
}

mistakeOption1 = () => {
    btnKirguizistanaDisabled();
    btnVietnamDisabled();
    btnSpainDisabled();
    correctOption(); 
    showBtnNext();
    changeBtnMacedonia();
}

mistakeOption2 = () => {
    btnMacedoniaDisabled();
    btnVietnamDisabled();
    btnSpainDisabled();
    correctOption();
    showBtnNext();
    changeBtnKirguizistan();
}

mistakeOption3 = () => {
    btnMacedoniaDisabled();
    btnKirguizistanaDisabled();
    btnSpainDisabled();
    correctOption();
    showBtnNext();
    changeBtnVietnam();
}

btnMacedoniaDisabled = () => {
    btnMacedonia.disabled = true;
    btnMacedonia.setAttribute('id', 'disabled-btn-M');
    const disabledBtnMSltyle = document.getElementById('disabled-btn-M');
    disabledBtnMSltyle.style.background = '#ffffff';
    disabledBtnMSltyle.style.cursor = "none";
}

btnKirguizistanaDisabled = () => {
    btnKirguizistan.disabled = true;
    btnKirguizistan.setAttribute('id', 'disabled-btn-K');
    const disabledBtnKSltyle = document.getElementById('disabled-btn-K');
    disabledBtnKSltyle.style.background = '#ffffff';
    disabledBtnKSltyle.style.cursor = "none";
}

btnSpainDisabled = () => {
    btnSpain.disabled = true;
    btnSpain.setAttribute('id', 'disabled-btn-S');
    const disabledBtnSSltyle = document.getElementById('disabled-btn-S');
    disabledBtnSSltyle.style.background = '#4cae4c';
    disabledBtnSSltyle.style.cursor = "none";
}

btnVietnamDisabled = () => {
    btnVietnam.disabled = true;
    btnVietnam.setAttribute('id', 'disabled-btn-V');
    const disabledBtnVSltyle = document.getElementById('disabled-btn-V');
    disabledBtnVSltyle.style.background = '#ffffff';
    disabledBtnVSltyle.style.cursor = "none";
}


countPoints = () => {
    let score = 1;
    let sumscore = score++;
    const scorePoints = document.getElementById('score-points');
    const markerPoints = document.getElementById('marker-points');
    scorePoints.innerHTML = "Puntos: " + sumscore;
    markerPoints.innerHTML = sumscore + "/197";

}

shakeEffect = () => {
    btnMacedonia.animate([
        // keyframes
        { transform: 'translateY(0px)' },
        { transform: 'translateY(-300px)' }
    ], {
        // timing options
        duration: 1000,
        iterations: Infinity
    });
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

