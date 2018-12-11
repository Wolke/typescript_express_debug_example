interface Person {
    name: string;
    age: number;
}

class Man implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    do = () => {
        console.log(`${this.name} ${this.age} fuck`)
    }
}

class WoMan implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    do = () => {
        console.log(`${this.name} ${this.age} be fuck`)
        console.log(`${this.name} ${this.age} be fuck twice`)

    }
}




let message: string | number = "hello";
console.log(message)
message = 1;
new Man("peter", 30).do();
new WoMan("mary", 28).do();