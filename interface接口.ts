//如果能用接口去写，就不用类型别名，实在不行，再用type
//interface和type相类似，但并不完全一致
interface Person {
  // readonly name: string,
  name: string,
  age?: number,
  [propName: string]: any,//接收额外的属性
  say(): string
}

//接口的继承
interface Teacher extends Person {
  teach():string;
}

//定义一个函数的类型声明
interface sayHi {
  (word: string): string
}

type Person1 = string;

const getPersonName = (person: Person): void => {
  console.log(person.name);
} 


const setPersonName = (person: Teacher ,name:string): void => {
  person.name = name;
}

const person = {
  name: 'andy',
  age: 23,
  sex: 'male',
  say(){
    return 'hello';
  },
  teach(){
    return 'teach';
  }
}
getPersonName(person);//传引用不报错

//传字面量对象会进行强校验，多了一个sex属性，会报错,加上 [propName: string]: any就好了
// getPersonName({
//   name: 'andy',
//   age: 23,
//   sex: 'male'
// });

setPersonName(person, 'fang');


class User implements Person {
  name = 'andy';
  say(): string {
      return 'hello';
  }
}

const say: sayHi = (word:string) => {
  return word;
}

//接口只是一个ts帮助我们做语法校验的工具，它并不会真正的变成js代码

