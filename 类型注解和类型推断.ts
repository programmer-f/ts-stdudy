//type annotation 类型注解， 我们告诉TS变量是什么类型
//type inference 类型推断，TS会自动的去尝试分析变量的类型
// 如果TS能够自动分析变量类型，我们就不需要写类型
// 如果TS不能自动推断出类型，我们就需要使用类型注解

// let count: number;
// count = 123;

// let countInference = 123;

// const firstNumber = 1;
// const secondNumber = 2;

// const total = firstNumber + secondNumber;

function getTotal(firstNumber: number, secondNumber:number):number {
  return firstNumber + secondNumber;
}

const totalNumber = getTotal(1,2);

const obj = {
  name: 'andy',
  age:18
}

//在写typescript的时候，就是希望每个对象的属性、每个变量它的类型都是固定的，
//ts会通过类型推断的方式帮我们判断一个变量或者属性的类型
//在某些情况下，比如定义一个函数，没法判断参数是什么类型，那么这个时候就需要使用类型注解的方式告诉ts类型是什么