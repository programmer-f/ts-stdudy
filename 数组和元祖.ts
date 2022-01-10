// // 数组 array
// const numberArr: number[] = [1,2,3];
// const arr: (number | string)[] = [1,'2',3];
// const strArr: string[] = ['1','2','3'];
// const undefinedArr: undefined[] = [undefined];


// //type alias
// type User =  { name: string, age: number};

// class Teacher {
//   name: string;
//   age:number;
// }

// const objectArr: User[] = [{
//   name:'andy',
//   age:18
// }]
// const objectArr2: Teacher[] = [
//   new Teacher(),
//   {
//   name:'andy',
//   age:18
// }]

// // 元祖 tuple(当数组的长度确定且每一项的类型确定的时候使用)
// const teacherInfo: [string, string, number] = ['andy','male',23];
// //元祖的应用场景，处理csv

// //定义一个元祖类型的数组
// const TeacherList: [string, string, number][] = [
//   ['andy', 'male', 23],
//   ['ted', 'male', 13],
//   ['tara', 'female', 18],
// ]