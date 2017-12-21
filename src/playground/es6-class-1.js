class Person {
    constructor(name = 'anonymous', age = 18){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi, my name is ${this.name} and I'm ${this.age} yars old`;
    }
}