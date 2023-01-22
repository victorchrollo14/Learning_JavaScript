// what are the conditional statements in javascript
/* 
    Volume Of Prism   V = B * H;
    Volume Of Cylinder
    Volume Of Sphere
    Volume Of Pyramid  
    Calculate CGPA Java Program
    Compound Interest Java Program
    Calculate Average Marks
    Sum Of N Numbers
    Armstrong Number In Javascript: 153 = 1^3+5^3+3^3 = 1+125+27 = 153
    Find Ncr & Npr
    Ncr = n!/r!(n - r)!,  Npr = n!/(n - r)!
    Reverse A String In Java
    Find if a number is palindrome or not:   121, 66766. same number when you reverse.
    Future Investment Value
    HCF Of Two Numbers Program

*/

let userInput = document.querySelector('#armstrong');
let submit = document.querySelector('#submit');
let answer = document.querySelector('.answer');
let digit, temp = 0;

submit.addEventListener("click", function armstrong(e){
    let sum = 0;
    let input = Number(userInput.value);
    temp = input;

    // get the sum of cubic of each digit;
    while(input != 0){
        digit = input%10;
        sum += digit**3;
        input = Math.floor(input/10);
    }
    
    // checking if the sum is equal to the userinput
    if (sum === temp){
        answer.innerHTML = `${temp} is an armstrong number`;
    }else{
        answer.innerHTML = `${temp} is not an armstrong number`;
    }
});


// consonant or vowel
let character = document.querySelector('#vowel');
let submit1 = document.querySelector('#submit1');
let vowelAnswer = document.querySelector('.answer1');

submit1.addEventListener("click", function vowelOrNot(e){
    let vowelArray = ['a', 'e', 'i', 'o', 'u'];
    let char = character.value
    let consonant = 0;
    for (let i in vowelArray){                                       // i is the index;
        console.log(vowelArray[i]);
        if (char == vowelArray[i]){
            vowelAnswer.innerHTML = `${char} is a vowel`;
            break;
        }else if(isDigit(char)){
            vowelAnswer.innerHTML = `${char} is a digit`;
            break;
        }else if(char == ''){
            vowelAnswer.innerHTML = '';
            break;
        }
        else{
            consonant = 1;
        }
    }
    vowelAnswer.innerHTML = (consonant == 1)?`${char} is a consonant`:vowelAnswer.innerHTML;
})

function isDigit(value){
    return value >='0' && value <='9';
}

