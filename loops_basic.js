// 1- Write a program that prints numbers from 1 to 10 using a for loop.

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.

for (var i = 0; i <= 10; i++) {
  if(i % 2 == 0){
    console.log(i)
  }
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.

var i =0;
while(i<=10){
  if(i % 2 != 0){
    console.log(i)
  }
  i++;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.

var x = prompt("Enter a number for x:");
for(var i=1; i<=10;i++){
    console.log(x*i);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.

var i =1;
sum=0;
while(i<=100){
    sum = sum + i;
    
    i++;
  }
  console.log(sum);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.

var x = prompt("Enter a number for x:");
var sum = 1;
for (var i = 1; i <= x; i++) {
  sum *= i;
}
console.log(sum);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.

var x = prompt("Enter a number for x:");
var num1=0;
var num2=1;
var num3;
while(x>=0){
    console.log(num3);
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    x-=1;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

var number=[5,10,15,20];
var x= number.length-1;
while(x>=0){
    console.log(number[x]);
    x--;
}


