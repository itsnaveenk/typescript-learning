const x: number = 1;
console.log(x);


function greet(firstName: string, lastName: string, age: number) {
  console.log("hello" + firstName);

}

greet("ram", "raj", 22);

const sum = (a:number, b:number) : number =>{

    return a+b;
}

const value = sum(4,8);
console.log(value);


function isLegal(age:number): boolean{
  return age>=18;
}

const value1 = isLegal(19);
console.log(value1);

function runAfter1S(fn:Function){
  setTimeout(fn, 1000);
}

runAfter1S(()=>{
  console.log("hello world");
  
})