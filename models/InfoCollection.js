import {Info} from './Info.js';

// const FAKE_RESPONSE = JSON.stringify([{
//     title: 'Руководитель группы разработки',
//     explanation: 'Компания "VK", 1900 г. — н.в.',
//     type: 'job',
//     bullets: [
//         'Преподавать Frontend',
//         'Двигать кнопки',
//         'Делать красиво',
//         'Ходить с важным видом'
//     ]
// }, {
//     title: 'Frontend-разработчик',
//     explanation: 'Компания "Сам по себе", 1800 г. — 1900 г.',
//     type: 'job',
//     bullets: [
//         'Двигать кнопки',
//         'Ходить с важным видом',
//         'Преподавать Frontend',
//         'Делать красиво'
//     ]
// }, {
//     title: 'МГТУ им. Н.Э. Баумана',
//     explanation: 'Магистратура, 1900 г. Диплом по тематике аналитических систем для бизнес-интеллидженс.',
//     type: 'edu',
// }]);

export class InfoCollection {
    constructor(data = []) {
        this.data = data;
    }

    fetchData() {
        // console.log('InfoCollection :: Получили данные с сервера!');
        // const responseData = JSON.parse();
        // this.data = responseData.map(item => new Info(item.title, item.explanation, item.type, item.bullets))
    }

    getJobInfo() {
        return this.data.filter((info) => info.type === 'job');
    }

    getEduInfo() {
        return this.data.filter((info) => info.type === 'edu');
    }
}
