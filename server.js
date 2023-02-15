'use strict';

const express = require('express');
const morgan = require('morgan');
const body = require('body-parser');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(body.json());
app.use(express.static('.'));

const port = process.env.PORT || 3000;

const PERSON = {
    name: 'Денис',
    surname: 'Степанов',
    position: 'Программист Frontend'
};


const SKILLS = [
    {"text": "Умею писать на языке JavaScript и использовать новые фишки стандартов ECMAScript", "id": 1},
    {"text": "Хорошо разбираюсь в работе браузера и API методов", "id": 2},
    {"text": "Умею работать с webpack", "id": 3},
    {"text": "Знаю БЭМ и применял в личных проектах", "id": 4},
    {"text": "Умею проектировать SPA и PWA архитектуру", "id": 5},
    {"text": "Знаю про AJAX, DOM и XHR", "id": 6},
    {"text": "Отлично владею GIT(есть все необходимые знания для работы над настоящим проектом)", "id": 7},
    {"text": "Имею небольшой опыт работы с React.js", "id": 8},
    {"text": "Разбираюсь в алгоритмах и структурах данных и умею оценивать сложность алгоритма", "id": 9},
    {"text": "Умею писать тонкий бэк на Express.js", "id": 10},
    {"text": "Умею работать с Docker, SQL, а также Postman", "id": 11},
    {"text": "Умею разбираться в чужом коде", "id": 12},

];

app.get('/api/person', (req, res) => {
    res.json(PERSON);
});

app.get('/api/skills', (req, res) => {
    res.json(SKILLS);
});

app.get('/api/skills/:id', (req, res) => {
    const {id} = req.params;

    const foundResult = SKILLS.find((skill) => skill.id === Number(id));
    if (!foundResult) {
        res.status(404).end();
    }

    res.json(foundResult);
});



app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
