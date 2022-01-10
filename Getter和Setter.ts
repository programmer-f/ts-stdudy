// class Person {
//   constructor(private _name: string){}
//   get name(){
//     return this._name + 'fang';
//   }
//   set name(name: string){
//     this._name = name;
//   }
// }

// const person  = new Person('andy');
// console.log(person.name);
// person.name = 'fengfeng';
// console.log(person.name);


//单例模式 ts写法
// class Demo{
//   private static instance:Demo;
//   private constructor(public name: string){}

//   public static getInstance(){
//     if(!this.instance){
//       this.instance = new Demo('andy fang');
//     }
//     return this.instance;
//   }
// }

// const demo1 = Demo.getInstance();
// const demo2 = Demo.getInstance();
// console.log(demo1.name);
// console.log(demo2.name);

