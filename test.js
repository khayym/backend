var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Do you have account ?',
            name: "access",
        },
        {
            name: "user_password",
            type: "password",
            message: "Enter Password:",
        }, {
            name: "first_name",
            type: "input",
            message: "What is your first name?",
        }, {
            name: "fav_game",
            type: "list",
            message: "Choose your favorit game:",
            choices: ["Football", "Tennis", "HandBall"],
        }, {
            name: "sex",
            type: "checkbox",
            message: "Choose your sex",
            choices: ['he', 'she'],
        },

    ])
    .then((answers) => {
        console.log(answers)
    })
