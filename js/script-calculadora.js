// SELECCION TITLE
const titleweb = document.getElementById("titleWeb");

// SELECCION DE ESPACIOS
const boxNum1 = document.getElementById("boxNum1");
const boxFactor = document.getElementById("boxFactor");
const boxNum2 = document.getElementById("boxNum2");


// SELECCION DE BOTONES
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnFacotorSuma = document.querySelector(".btn-factor-suma");
const btnFacotorResta = document.querySelector(".btn-factor-resta");
const btnFacotorMulti = document.querySelector(".btn-factor-multi");
const btnFacotorDivi = document.querySelector(".btn-factor-divi");
const btnFacotorReset = document.querySelector(".btn-factor-reset");

let num1;
let num2;
let factorSelec;

let resultado;

let btnFuction1 = (dig1)=> {
    num1 = dig1;
    boxNum1.innerHTML=`${num1}`;
}


let btnFactor = (factor)=> {
    factorSelec = factor;
    boxFactor.innerHTML=`${factor}`;
    btn0.setAttribute("onclick","btnFuction2(0)")
    btn1.setAttribute("onclick","btnFuction2(1)")
    btn2.setAttribute("onclick","btnFuction2(2)")
    btn3.setAttribute("onclick","btnFuction2(3)")
    btn4.setAttribute("onclick","btnFuction2(4)")
    btn5.setAttribute("onclick","btnFuction2(5)")
    btn6.setAttribute("onclick","btnFuction2(6)")
    btn7.setAttribute("onclick","btnFuction2(7)")
    btn8.setAttribute("onclick","btnFuction2(8)")
    btn9.setAttribute("onclick","btnFuction2(9)")
}

let btnFuction2 = (dig2)=> {
    num2 = dig2;
    boxNum2.innerHTML=`${num2}`;
}


let cantidadResultados = 0;
let btnFactorIgualdad = ()=> {
    cantidadResultados++;
    titleweb.innerHTML=`Calculadora Web (${cantidadResultados})`;
    if (factorSelec == `+`) {
        resultado = num1 + num2;

        boxNum1.innerHTML=`${resultado}`;
        boxFactor.innerHTML=` `;
        boxNum2.innerHTML=` `;

        num1 = resultado;
        num2 = 0;
    }

    if (factorSelec == `-`) {
        resultado = num1 - num2;

        boxNum1.innerHTML=`${resultado}`;
        boxFactor.innerHTML=` `;
        boxNum2.innerHTML=` `;

        num1 = resultado;
        num2 = 0;
    }

    if (factorSelec == `x`) {
        resultado = num1 * num2;

        boxNum1.innerHTML=`${resultado}`;
        boxFactor.innerHTML=` `;
        boxNum2.innerHTML=` `;

        num1 = resultado;
        num2 = 0;
    }

    if (factorSelec == `/`) {
        resultado = num1 / num2;

        boxNum1.innerHTML=`${resultado}`;
        boxFactor.innerHTML=` `;
        boxNum2.innerHTML=` `;

        num1 = resultado;
        num2 = 0;
    }
}



let btnFactorReset = ()=> {
    cantidadResultados = 0;
    titleweb.innerHTML=`Calculadora Web`;

    boxNum1.innerHTML=` `;
    boxFactor.innerHTML=` `;
    boxNum2.innerHTML=` `;

    num1 = null;
    num22 = null;

    btn0.setAttribute("onclick","btnFuction1(0)")
    btn1.setAttribute("onclick","btnFuction1(1)")
    btn2.setAttribute("onclick","btnFuction1(2)")
    btn3.setAttribute("onclick","btnFuction1(3)")
    btn4.setAttribute("onclick","btnFuction1(4)")
    btn5.setAttribute("onclick","btnFuction1(5)")
    btn6.setAttribute("onclick","btnFuction1(6)")
    btn7.setAttribute("onclick","btnFuction1(7)")
    btn8.setAttribute("onclick","btnFuction1(8)")
    btn9.setAttribute("onclick","btnFuction1(9)")
}

