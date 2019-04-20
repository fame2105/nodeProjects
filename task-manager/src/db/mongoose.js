const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true
});

//Modelling User Collection
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot be password");
      }
    }
  }
});

//Modelling tasks Collection
const Task = mongoose.model("tasks", {
  description: {
    type: String,
    required: true,
    default: "task description not specified",
    trim: true
  },
  completed: {
    type: Boolean,
    default:false,
  }
});

// const user1 = new User({
//     name: 'issrani',
//     age: 26,
//     email:'fame2105@gmail.com',
//     password: 'paradelki'
// })

// user1.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

const task1 = new Task({
  description: "     Perform 100 pushups     ",
});

task1
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });
