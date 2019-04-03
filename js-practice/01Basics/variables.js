var fame = {
    firstName : 'Fame',
    lastName : 'Issrani',
    yearOfBirth : 1993,
    job : 'Engineer'
};

var Person = function(firstName, lastName, yearOfBirth, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function () {
    this.age = 2019 - this.yearOfBirth;
    console.log(this.age);
};
var john = new Person('John', 'Joey', 1993, 'Enginner');
john.calcAge();


var personProto = {
    calculateAge : function() {
        this.age = 2019 - this.yearOfBirth;
        console.log(this.age);
    }
};

var alex = Object.create(personProto);
