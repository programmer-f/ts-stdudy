class Person{
  public readonly name: string = '';
  constructor(name: string){
    this.name = name;
  }
}

const person = new Person('andyfang');
console.log(person.name);
