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
    btnMacedonia.style.cursor = "none";
    btnMacedonia.style.WebkitAnimation = "shake .5s";
    btnMacedonia.style.animation = "shake .5s";
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
    btnSpain.style.backgroundColor = "#4cae4c";
    btnSpain.style.color = "#ffffff";
    btnSpain.style.cursor = "none";
    btnMacedonia.disabled = true;
    btnMacedonia.style.cursor = "none";
    btnKirguizistan.disabled = true;
    btnKirguizistan.style.cursor = "none";
    btnVietnam.disabled = true;
    btnVietnam.style.cursor = "none";
    showBtnNext();
}

mistakeOption1 = () => {
    changeBtnMacedonia();
    correctOption();
    showBtnNext();
    btnKirguizistanaDisabled();
    btnVietnamDisabled();
    mistakeOption1();
}
  
mistakeOption2 = () => {
    changeBtnKirguizistan();
    correctOption();
    showBtnNext();
    btnMacedoniaDisabled();
    btnVietnamDisabled();
    btnKirguizistan.style.cursor = "none";
}

mistakeOption3 = () => {
    changeBtnVietnam();
    correctOption();
    showBtnNext();
    btnMacedoniaDisabled();
    btnKirguizistanaDisabled();
    btnVietnam.style.cursor = "none";
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

btnVietnamDisabled = () => {
    btnVietnam.disabled = true;
    btnVietnam.setAttribute('id', 'disabled-btn-V');
    const disabledBtnVSltyle = document.getElementById('disabled-btn-V');
    disabledBtnVSltyle.style.background = '#ffffff';
    disabledBtnVSltyle.style.cursor = "none";
}


countPoints = () => {
    let point = 0;
    for (point = 0; point < correctOption(); point++) {

    }
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

