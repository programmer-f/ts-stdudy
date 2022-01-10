// private protected public 访问类型
//public 允许我在类的内外进行调用
//private 允许我在类内使用
//protected 允许在类内及继承的子类中使用

// class Person {
//   private name: string = '';
//   public sayHi(){
//     console.log(this.name);
//     console.log('hi');
//   }
// }

// class Teacher extends Person{
//   public sayBye(){
//     console.log(this.name);
    
//   }
// }

// const person = new Person();
// person.name = 'andy';
// console.log(person.name);


//constructor
// class Person {
  //传统写法
  // public name: string = '';
  // constructor(name: string){
  //   this.name = name;
  // }

  //简化写法
//   constructor(public name: string){

//   }
// }

// const person = new Person('andy');
// console.log(person.name);

// class Person {
//   constructor(public name: string){}
// }

// class Teacher extends Person {
//   constructor(public name: string,public age: number){
//     super(name);
//   }
//   sayHi(){
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// const teacher = new Teacher('andy',23);
// teacher.sayHi();
