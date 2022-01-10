
interface Bird {
  fly: boolean;
  sing:() => {}
}

interface Dog {
  fly: boolean;
  bark:() => {}
}

// 用类型保护的方式去解决联合类型带来的问题

//通过类型断言的方式做类型保护
// function trainAnimal(animal: Bird | Dog){
//   if(animal.fly) {
//     (animal as Bird).sing();
//   }else {
//     (animal as Dog).bark();
//   }
// }


//通过 in 语法来做类型保护
// function trainAnimal(animal: Bird | Dog){
//   if ('sing' in animal){
//     animal.sing();
//   }else {
//     animal.bark();
//   }
// }

//使用typeof语法来做类型保护
// function add(first: string | number, second: string | number){
//   if(typeof first === 'string' || typeof second === 'string'){
//     return `${first}${second}`;
//   }
//   return first + second;
// }



//使用 instanceof语法来做类型保护
class NumberObject {
  count: number = 0;
}

function add(first: object | NumberObject, second: object | NumberObject){
  if(first instanceof NumberObject && second instanceof NumberObject){
    return first.count + second.count;
  }
  return 0;
}