//collecting all node;
const num = document.querySelectorAll('div .num');
const operator = document.querySelectorAll('.operator');
const min = document.querySelector('.min');
const eval = document.querySelector('.eval');
const backSpace = document.querySelector('.extra');
const input = document.querySelector('.input');
const result = document.querySelector('.result');
const dot = document.querySelector('.point');
const clear = document.querySelector('.c');


let y = '';
let x = '';
let p;
let s;
let operate = '';
let r;



//coverting string inputes to number
function stringNUm(m, n)
{
    s = Number(m);
    p = Number(n);
}
//the addition function
function add(x, y)
{
    return x + y;
}

//the subtraction function
function subtract(x, y)
{
    return x - y;
}

//the divition function
function divide(x, y)
{
    if (y == 0)
    {
        alert('You cant divide by zero');
    }
    else{
    return x / y;
    }
}

//the multiplication function
function multiply(x, y)
{
    return x * y;
}

//power function
function power(x, y)
{
    return Math.pow(x, y);
}

//percent function
function percent(x)
{
    return x / 100;
}

//the negate function
function negate(x)
{
    return x = -x;
}

//evaluation function
function evaluate(a, b)
{
     if (operate == '-/+')
    {
       return negate(a);
    }
    else if (operate == '%')
    {
        return percent(a);
    }
    else if (x == '' || y =='' || operate == '')
    {
        return;
    }
    else if (operate == 'x')
    {
       return  multiply(a,b);
    }
    else if (operate == '+')
    {
        return add(a,b);
    }
    else if (operate == '/')
    {
        return divide(a, b);
    }
    else if (operate == '-')
    {
        return subtract(a,b);
    }
    else if (operate == '^')
    {
       return power(a, b);
    }
  
    else if (operate == '-/+')
    {
       return negate(a);
    }

}
//inputing numbers to the input section
num.forEach(n =>
    {
        n.addEventListener('click', (e) =>
        {
            const j = n.textContent;
            y += j;
            input.textContent += j;
            stringNUm(x, y);
            r = evaluate(s, p);
            result.textContent = r;
            
        })
    })

dot.addEventListener('click', (e) =>
{
    y += dot.textContent;
    input.textContent += dot.textContent
    dot.style.visibility = 'hidden';
})
//the operators
operator.forEach(o =>{
    o.addEventListener('click', (e) =>
    {
        operate = o.textContent;
        input.textContent += o.textContent;
        x = y;
        y = '';
        dot.style.visibility = 'visible';
        min.style.visibility = 'visible';
        //making sure user can type alot of equations without pressing the equals button
        if(r)
        {
           x = r 
        }
        stringNUm(x, y);
        r = evaluate(s, p);
        result.textContent = r;
        console.log(operate);
        
    })
})
// the clear button
clear.addEventListener('click', (e) =>
{
    y = '';
    x = '';
    r = '';
    result.textContent = '';
    input.textContent = '';
    dot.style.visibility = 'visible';
    min.style.visibility = 'visible';
})
// the negative button
min.addEventListener('click', (e) =>
{
    y = `-${y}`;
    if (x)
    {
    input.textContent += y;
    }
    else{
        input.textContent = y; 
    }

    min.style.visibility = 'hidden';
})
//the equals to button
eval.addEventListener('click', (e) =>
{
    y = r;
    r = '';
    x = '';
    result.textContent = '';
    input.textContent = y;
})
//the back space button
backSpace.addEventListener('click', (e) =>
{
    let q;
    let z = input.textContent;
    q = z.split('');
    q.splice(-1, 1);
    input.textContent = q.join('');
    
    if (y)
    {
       q = y.split('');
       q.splice(-1, 1);
       y = q.join('')
       console.log(y);
    }
    else if(operate)
    {
      operate = '';
         console.log(operate);
    }
    else if(x)
    {
        q = x.split('');
       q.splice(-1, 1);
       x = q.join('')
       console.log(x); 
    }
    else{
        result.textContent = '';
        r = '';
    }
     stringNUm(x, y);   
    r = evaluate(s,p);
    result.textContent = r;

})

  
