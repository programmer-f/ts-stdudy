// class Man {
//   name = 'andy';
//   getName() {
//     return this.name;
//   }
// }

// class Fisher extends Man {
//   getFisherName() {
//     return 'fisher';
//   }
//   getName() {
//     return super.getName() + 'fang';
//   }
// }

// 平时都怎么使用super？
// 当子类重写了父类的方法后，还想调用父类的方法，就可以使用super去调用

// const fisher = new Fisher();
// console.log(fisher.getName());
// console.log(fisher.getFisherName());
