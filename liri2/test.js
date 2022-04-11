const axios = require("axios");
const { twitter } = require('./keys')
const inquirer = require('inquirer');


async function again() {
    let continueAnswer = await inquirer.prompt([
        {
            message: "Do you want to continue?",
            type: "confirm",
            name: "confirm",
        },
    ]);

    continueAnswer.confirm && bot();
}



async function listing() {
    const botList = await inquirer.prompt([{
        type: 'list',
        message: 'Choise vairant',
        choices: ["Spotify", "Book", "Twitter"],
        name: 'userChoise'
    }])

    if (botList.userChoise === 'Twitter') {
        const twitterSe = await inquirer.prompt([{
            type: 'input',
            message: 'What you want to search?',
            name: 'tw'
        }])

        const options = {
            method: 'GET',
            url: twitter.api_url,
            params: { q: twitterSe.tw, count: 2 },
            headers: {
                'X-RapidAPI-Host': twitter.api_header_host,
                'X-RapidAPI-Key': twitter.access_token_key
            }
        };


        const response = await axios.request(options);
        console.log(response.data);

        response.data && again();

    }

    else if (botList.userChoise === 'Book') {
        const response = await axios.get(`https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=10`);
        console.log(response.data.books)
        response.data.books && again();

    } else if (botList.userChoise === 'Spotify') {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/tracks/',
            params: { ids: '4WNcduiCmDNfmTEz7JvmLv' },
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                'X-RapidAPI-Key': '52af6deec1msh3571947c7f7f34fp1ca845jsn53cdb41a40f2'
            }
        };

        const response = await axios.request(options);
        console.log(response.data);

        response.data && again();

    }
}

async function bot(options) {
    const getBot = await inquirer.prompt([{
        type: 'input',
        message: "Hi, I'm a bot",
        name: 'bot'
    },
    {
        type: 'confirm',
        message: "Are you ready?",
        name: 'confirmMessage'
    }
    ])

    getBot.confirmMessage === true ? listing() : console.log("Ups..")

}

bot();