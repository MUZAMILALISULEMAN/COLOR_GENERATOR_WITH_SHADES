// targetting 
let mcolor = document.getElementById("cont-1");
let shade1 = document.getElementById("a");
let shade2 = document.getElementById("b");
let shade3 = document.getElementById("c");



mcolor.addEventListener("click",colorChange);

// 
// 
// 
function colorChange() {
    let colorCode1;
    let colorCode2;
    let colorCode3;
    // 1
    let randNum;
        randNum = Math.random() * 256;
        randNum = Math.floor(randNum);
    colorCode1 = randNum;
    // 2
    let randNum1;
    randNum1 = Math.random() * 256;
    randNum1 = Math.floor(randNum1);
colorCode2 = randNum1;
// 3
let randNum2;
    randNum2= Math.random() * 256;
    randNum2 = Math.floor(randNum2);
colorCode3 = randNum2;





    // function


    mcolor.style.backgroundColor = `rgb(${colorCode1},${colorCode2},${colorCode3})`
mcolor.innerText = `RGB ( ${colorCode1}, ${colorCode2}, ${colorCode3} ) `;


    // function for shade1
    let red;
    let randNum0;
        randNum0 = Math.random() * 50;
        randNum0 = Math.floor(randNum0);
    red = randNum0;
    shade1.style.backgroundColor = `rgb(${colorCode1},${colorCode2},${colorCode3 - red })`
shade1.innerText = `RGB ( ${colorCode1}, ${colorCode2}, ${colorCode3 - red } )`
    // function for shade2
    let green;
    let randNum4;
        randNum4 = Math.random() *50;
        randNum4 = Math.floor(randNum4);
    green = randNum4;
    shade2.style.backgroundColor = `rgb(${colorCode1},${colorCode2- green },${colorCode3 })`
    shade2.innerText = `RGB ( ${colorCode1}, ${colorCode2- green }, ${colorCode3 } )`
    // function for shade3
    let blue;
    let randNum5;
        randNum5 = Math.random() *50;
        randNum5 = Math.floor(randNum5);
    blue = randNum5;
    shade3.style.backgroundColor = `rgb(${colorCode1 - blue},${colorCode2},${colorCode3 })`
    shade3.innerText = `RGB ( ${colorCode1 - blue}, ${colorCode2}, ${colorCode3 } )`
    





}

mcolor.click();
