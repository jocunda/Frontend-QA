class Student {
    constructor(name, number) {
        this.name = name
        this.number = number
        // this.gender='male'
    }
    sayHi() {
        console.log(`name ${this.name}, number ${this.number}`)
    }
}

//make new object
const xiaoluo = new Student('xiaoruo', 100)
console.log(xiaoluo.name)
console.log(xiaoluo.number)