import {Summary} from '../summary/summary.js';
import {Info} from '../info/info.js';
import {Skills} from '../skills/skills.js';
import {Contacts} from '../contacts/contacts.js';

const infoJobData = 'Опыта работы в настоящей компании, как frontend разработчик у меня нет. Но в учебных проектах я с нуля создавал проекты на Express.js, Tomcat, где работал с бэкэндом и базами данных(PostgreSQL), а также уделял большое внимание frontend разработке. Я занимался созданием собственного сайта-резюме, версткой формы логина сайта mail.ru, а также создал проект аналог существующего сайта с минимальным функционалом с архитектурой SPA, с которым я успешно справился. Писал unit тесты и автотесты на JavaScript. Проводил ручное, нагрузочное тестирования для онлайн сайта по продаже косметике.';

const infoEduData = 'IT-College Sirius. Информационные технологии и программирование'

const skillsData = [
    'Преподавать Frontend',
    'Руководить группой разработки',
    'Есть печенье с молоком',
    'Рассказывать несмешные анекдоты',
    'Спрашивать у группы, успевает ли она',
];

const contactsData = [{
    href: 'https://t.me/Denchik_89',
    text: 'Telegram',
}]

export class ColumnRight {
    constructor(parent) {
        this.parent = parent;
        this.summary = null;
        this.skills = null;
    }

    render(container) {
        this.summary = new Summary(container);

        const contacts = new Contacts(container);
        contacts.render(contactsData);

        this.skills = new Skills(container);
        this.skills.render('Основные умения', skillsData);

        const infoJob = new Info(container);
        infoJob.render('Опыт работы', infoJobData);

        const infoEdu = new Info(container);
        infoEdu.render('Образование', infoEduData);
    }

    updateSkills(data = []) {
        if (!data?.length) {
            return;
        }

        this.skills.update(data);
    }
}
