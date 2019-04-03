 var john = {
     firstName:'John',
     lastName:'Smith',
     mass:'78',
     height:1.6,
     calcBmi: function() {
        this.bmi = this.mass/(this.height * this.height);
     }
 }
john.calcBmi();
 console.log(john);