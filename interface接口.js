var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: 'andy',
    age: 23,
    sex: 'male',
    say: function () {
        return 'hello';
    },
    teach: function () {
        return 'teach';
    }
};
getPersonName(person); //传引用不报错
//传字面量对象会进行强校验，多了一个sex属性，会报错,加上 [propName: string]: any就好了
// getPersonName({
//   name: 'andy',
//   age: 23,
//   sex: 'male'
// });
setPersonName(person, 'fang');
var User = /** @class */ (function () {
    function User() {
        this.name = 'andy';
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
var say = function (word) {
    return word;
};
