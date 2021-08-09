//parent
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

//child
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`name ${this.name} number ${this.number}`)
    }
}
//child
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(`${this.name} teach ${this.major}`)
    }
}

const xiaoluo = new Student('xiaoruo', 100)
console.log(xiaoluo.name)
console.log(xiaoluo.number)
xiaoluo.sayHi()
xiaoluo.eat()

const wanglaoshi = new Teacher('dawang', 'language')
wanglaoshi.teach()
wanglaoshi.eat()

console.log(Student.prototype.__proto__)
console.log(People.prototype)
console.log(People.prototype === Student.prototype.__proto__)