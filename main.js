let numero = document.querySelectorAll('.numero')
let lcd = document.getElementById('lcd')
let operation = document.querySelectorAll('.operation')
let equall = document.getElementById('equall')
let c = document.getElementById('c')
let ce = document.getElementById('ce')
let firstNum = ''
let secondNum = ''
let oper ;
let result = 0

//-------------------------------- numbers event
numero.forEach(elm =>{
    elm.addEventListener('click', ()=>{
        if(lcd.value==='' && +elm.value=== 0) return;
        lcd.value += elm.value
        if(oper === undefined ){
        firstNum = lcd.value
        }else {
            secondNum = lcd.value
        }
        // console.log('first '+ firstNum);
        // console.log('secon '+ secondNum);
    })
})

//-------------------------------------- ooperations event
operation.forEach(op =>{
    op.addEventListener('click', ()=>{
        if(firstNum != 0){
            oper= op.value;
            lcd.value = ''
        console.log(oper);
        }
    })
})

//-------------------------------------------- equal event
equall.addEventListener('click', ()=>{
    result = `${firstNum} ${oper} ${secondNum}`
    lcd.value = eval(result)
    oper = undefined
    firstNum = lcd.value
    lcd.value = firstNum
})

//--------------------------------------------deleting event
c.addEventListener('click', ()=>{
    if (oper === undefined) {
        lcd.value = firstNum.slice(0, firstNum.length-1)
        firstNum = lcd.value
    }
    else {
        lcd.value = secondNum.slice(0, secondNum.length-1)
        secondNum = lcd.value
    }
    
})

//------------------------------------------------ clear event
ce.addEventListener('click', ()=>{
    firstNum = ''
    secondNum = ''
    oper = undefined
    lcd.value = ''
})