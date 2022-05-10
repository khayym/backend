const mysql = require('mysql2');
const inquirer = require('inquirer');

const connect = mysql.createConnection({
    host: 'localhost',
    port: 3312,
    user: 'root',
    password: 'xeyyam071105',
    database: 'bay_db'
})

connect.connect(function (err, con) {
    if (err) return console.log(err)

    connect.query("CREATE TABLE IF NOT EXISTS auctions(id INT NOT NULL auto_increment,item_name VARCHAR(100) NOT NULL,category VARCHAR(100) NOT NULL, start_bid INT default 0, high_bid INT default 0, primary key(id))", function (err, result, fields) {
        if (err) throw err;
        else asking();
    });
})


async function asking() {
    const askBitorAdd = await inquirer.prompt([{
        type: 'list',
        name: 'choise',
        message: 'Add or bit?',
        choices: ['add', 'bit'],
    }])

    const addPrompt = await inquirer.prompt([{
        type: 'message',
        name: 'itemName',
        message: 'Write item name'
    }])


    if (askBitorAdd.choices === 'add') return addPrompt
    else if (askBitorAdd.choices === 'bit') {
        const products = connect.query('SELECT * FROM auctions', function (err, res, fields) {
            return res
        })
        await inquirer.prompt([{
            type: 'list',
            message: 'choise items which you want to buy',
            name: 'items-choise',
            choices: ['sda', 'asdasd']
        }])

        console.log(products);
    }

}

// inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'choise',
//             message: 'Add or bit?',
//             choices: ['add', 'bit'],
//         },
//     ])
//     .then(answers => {
//         console.info('Answer:', answers.choices);
//     });




// var query = "CREATE TABLE IF NOT EXISTS projects (project_name VARCHAR(10)) SELECT '" + projectName + "' AS project_name";